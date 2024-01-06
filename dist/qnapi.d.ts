export declare const Auth: AuthClass;

export declare class AuthClass {
    begin(userId: string, handlers: Handlers): Promise<any>;
    continue(code: string, handlers: Handlers): Promise<any>;
    register(username: string, birthdate: string, gender: string, handlers: Handlers): Promise<any>;
    ping(handlers: Handlers): Promise<any>;
    logout(handlers: Handlers): Promise<any>;
}

export declare const Connections: ConnectionsClass;

export declare class ConnectionsClass {
    createInvite(toName: string, handlers: Handlers): Promise<any>;
    processInvite(invite: string, handlers: Handlers): Promise<any>;
    getAll(handlers: Handlers): Promise<any>;
    get(username: string, handlers: Handlers): Promise<any>;
    disconnect(username: string, handlers: Handlers): Promise<any>;
}

export declare function ench(param: string): string;

export declare function encu(param: any): string;

export declare type Handlers = {
    [key: number]: (exception: QnaException) => any;
};

export declare const QnA: QnAClass;

export declare const QnaAuth: AuthClass;

export declare class QnAClass {
    getQuestions(handlers: Handlers): Promise<any>;
    getMyQuestions(handlers: Handlers): Promise<any>;
    getQuestionCats(handlers: Handlers): Promise<any>;
    getQuestionTypes(handlers: Handlers): Promise<any>;
    getMyAnswers(handlers: Handlers): Promise<any>;
    getMyAnswer(aid: string, handlers: Handlers): Promise<any>;
    recordAnswers(answers: any, handlers: Handlers): Promise<any>;
    getTheirAnswers(theirUsername: string, handlers: Handlers): Promise<any>;
    getTheirAnswer(theirUsername: string, qid: number, handlers: Handlers): Promise<any>;
    getMyUserQuestionCats(handlers: Handlers): Promise<any>;
    putMyUserQuestionCats(qQatIds: number[], handlers: Handlers): Promise<any>;
    deleteMyUserQuestionCats(qQatIds: number[], handlers: Handlers): Promise<any>;
    postQuestionViews(qids: number, handlers: Handlers): Promise<any>;
    getQuestionStats(qid: number, handlers: Handlers): Promise<any>;
    postAnswerViews(aids: string[], handlers: Handlers): Promise<any>;
    postAnswerLikes(answerLikes: any, handlers: Handlers): Promise<any>;
    postQuestionLikes(questionLikes: any, handlers: Handlers): Promise<any>;
    postFileAnswer(file: Blob, answer: any, handlers: Handlers): Promise<any>;
    getAnswerJobStatus(aid: string, handlers: Handlers): Promise<any>;
    getAnswerJobState(aid: string, handlers: Handlers): Promise<any>;
    getAnswerMediaInfo(aid: string, handlers: Handlers): Promise<any>;
    deleteAnswerMedia(aid: string, name: string, handlers: Handlers): Promise<any>;
    getAnswerMediaData(aid: string, mediaFileId: string, handlers: Handlers): Promise<any>;
    getMediaJobState(mid: string, handlers: Handlers): Promise<any>;
    getWittyReplyAudioData(aid: string, handlers: Handlers): Promise<any>;
    getQuestionTextAudioData(qid: number, handlers: Handlers): Promise<any>;
    qid2aid(qid: number, handlers: Handlers): Promise<any>;
}

export declare const QnaConnections: ConnectionsClass;

export declare type QnaException = {
    fetchApiExp: boolean;
    status: number;
    msg: string;
};

export declare const QnaUsers: UsersClass;

export declare const QnaUtils: UtilsClass;

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

export declare const Users: UsersClass;

export declare class UsersClass {
    getPublicProfile(username: string, handlers: Handlers): Promise<any>;
    getMyProfileStats(handlers: Handlers): Promise<any>;
    isUsernameAvailable(username: string, handlers: Handlers): Promise<any>;
    getMyNotifications(handlers: Handlers): Promise<any>;
    postProfilePic(picBlob: Blob, handlers: Handlers): Promise<any>;
    getProfilePic(username: string, handlers: Handlers): Promise<any>;
    getMyPrivateSettings(handlers: Handlers): Promise<any>;
    putMyPrivateSettings(settings: any, handlers: Handlers): Promise<any>;
    recordMyLocation(longitute: number, latitude: number, handlers: Handlers): Promise<any>;
}

export declare const Utils: UtilsClass;

export declare class UtilsClass {
    outputToConsole: boolean;
    fetchApi(verb: string, path: string, requestBody?: any, requestContentType?: string): Promise<any>;
    setBearerToken(token: string): void;
    getBearerToken(): string | null;
    setApiUrlRoot(root: string): void;
    getApiUrlRoot(): string;
    handleExp(exp: any, handlers: Handlers): Promise<any>;
}

export { }
