import { Handlers } from "./Utils.js";
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
export declare const QnA: QnAClass;
//# sourceMappingURL=QnA.d.ts.map