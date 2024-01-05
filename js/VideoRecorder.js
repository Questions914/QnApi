export class QnaVideoRecorder {
    constructor(elementToInsertInto, width, height, onRecordingComplete) {
        this.width = 0;
        this.height = 0;
        this.mimeType = "";
        const self = this;
        this.width = width;
        this.height = height;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
            throw "Browser does not support video recording";
        if (MediaRecorder.isTypeSupported("video/webm"))
            this.mimeType = "video/webm";
        else if (MediaRecorder.isTypeSupported("video/mp4"))
            this.mimeType = "video/mp4";
        else
            throw "Browser does not support video formats";
        this.onRecordingComplete = onRecordingComplete;
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        elementToInsertInto.appendChild(this.canvas);
        this.canvasCtxt = this.canvas.getContext("2d");
        this.video = document.createElement("video");
        this.video.width = this.width;
        this.video.height = this.height;
        this.video.setAttribute('autoplay', '');
        this.video.setAttribute('muted', '');
        this.video.setAttribute('playsinline', '');
        this.video.onloadedmetadata = function (e) { self.video.play(); };
        this.videoStream = null;
        this.mediaRecorder = null;
        this.recordedChunks = null;
        navigator.mediaDevices.getUserMedia({ audio: true, video: { width: this.width, height: this.height } })
            .then(function (stream) {
            self.videoStream = stream;
            self.video.srcObject = new MediaStream(stream.getVideoTracks());
            self.onFrame();
        })
            .catch((error) => { throw `Error capturing video: ${error}`; });
    }
    onFrame() {
        window.requestAnimationFrame(this.onFrame.bind(this));
        if (this.canvasCtxt != null)
            this.canvasCtxt.drawImage(this.video, 0, 0, this.video.width, this.video.height);
    }
    isRecording() {
        return this.mediaRecorder && this.mediaRecorder.state === "recording";
    }
    startRecording() {
        const self = this;
        if (self.isRecording() || this.videoStream == null)
            return;
        this.recordedChunks = [];
        this.mediaRecorder = new MediaRecorder(this.videoStream, { mimeType: self.mimeType });
        this.mediaRecorder.ondataavailable =
            async function (e) {
                if (e.data.size > 0 && self.recordedChunks != null)
                    self.recordedChunks.push(e.data);
            };
        this.mediaRecorder.onstop =
            function () {
                self.onRecordingComplete(new Blob(self.recordedChunks, { type: self.mimeType }));
            };
        this.mediaRecorder.start();
    }
    stopRecording() {
        if (this.mediaRecorder != null && this.isRecording())
            this.mediaRecorder.stop();
        this.mediaRecorder = null;
    }
}
