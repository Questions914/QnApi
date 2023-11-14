export class VideoRecorder {
    constructor(elementToInsertInto, width, height, onRecordingComplete) {
        const self = this;

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
            throw "Browser does not support video recording";

        let mimeType;
        if (MediaRecorder.isTypeSupported("video/webm"))
            mimeType = "video/webm";
        else if (MediaRecorder.isTypeSupported("video/mp4"))
            mimeType = "video/mp4";
        else
            throw "Browser does not support video formats";

        this.options = {
            audio: true, 
            video: true, 

            width: width, 
            height: height,

            mimeType: mimeType
        };

        this.onRecordingComplete = onRecordingComplete;

        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        elementToInsertInto.appendChild(this.canvas);

        this.canvasCtxt = this.canvas.getContext("2d");

        this.video = document.createElement("video");
        this.video.width = width;
        this.video.height = height;
        this.video.setAttribute('autoplay', '');
        this.video.setAttribute('muted', '');
        this.video.setAttribute('playsinline', '');
        this.video.onloadedmetadata = function(e) { self.video.play(); }

        this.videoStream = null;
        this.mediaRecorder = null;
        this.recordedChunks = null;
        
        navigator.mediaDevices.getUserMedia(this.options)
            .then(function (stream) {
                self.videoStream = stream;
                self.video.srcObject = new MediaStream(stream.getVideoTracks());
                self.onFrame();
            })
            .catch(function (error) {
                throw `Error capturing video: ${error}`;
            });
    }

    onFrame() {
        window.requestAnimationFrame(this.onFrame.bind(this));
        this.canvasCtxt.drawImage(this.video, 0, 0, this.video.width, this.video.height);
    }

    isRecording() {
        return this.mediaRecorder && this.mediaRecorder.state === "recording";
    }
    
    startRecording() {
        if (this.isRecording())
            return;

        this.recordedChunks = [];

        const self = this;

        this.mediaRecorder = new MediaRecorder(this.videoStream, this.options);
        this.mediaRecorder.ondataavailable =
            function (e) {
                if (e.data.size > 0)
                    self.recordedChunks.push(e.data);
            };
        this.mediaRecorder.onstop = 
            function () {
                self.onRecordingComplete(new Blob(self.recordedChunks, { type: self.options.mimeType }));
            };

        this.mediaRecorder.start();
    }

    stopRecording() {
        if (this.isRecording())
            this.mediaRecorder.stop();
        this.mediaRecorder = null;
    }
}
