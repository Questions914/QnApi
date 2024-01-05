export declare class QnaVideoRecorder {
    width: number;
    height: number;
    onRecordingComplete: (blob: Blob) => any;
    mimeType: string;
    canvas: HTMLCanvasElement;
    canvasCtxt: CanvasRenderingContext2D | null;
    video: HTMLVideoElement;
    videoStream: MediaStream | null;
    mediaRecorder: MediaRecorder | null;
    recordedChunks: Blob[] | null;
    constructor(elementToInsertInto: HTMLElement, width: number, height: number, onRecordingComplete: (blob: Blob) => any);
    onFrame(): void;
    isRecording(): boolean | null;
    startRecording(): void;
    stopRecording(): void;
}
