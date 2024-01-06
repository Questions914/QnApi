"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QnA = exports.QnAClass = void 0;
const Utils_js_1 = require("./Utils.js");
class QnAClass {
    async getQuestions(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/questions/v1`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getMyQuestions(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/questions/my/v1`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getQuestionCats(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/qcats/v1`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getQuestionTypes(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/qtypes/v1`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getMyAnswers(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/answers/v1`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getMyAnswer(aid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/answer/v1?aid=${(0, Utils_js_1.encu)(aid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async recordAnswers(answers, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", "qna/answers/v1", answers);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getTheirAnswers(theirUsername, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/answers/their/v1?theirUsername=${(0, Utils_js_1.encu)(theirUsername)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getTheirAnswer(theirUsername, qid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/answer/their/v1?theirUsername=${(0, Utils_js_1.encu)(theirUsername)}&qid=${(0, Utils_js_1.encu)(qid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getMyUserQuestionCats(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", "qna/userqcats/v1");
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async putMyUserQuestionCats(qQatIds, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("PUT", "qna/userqcats/v1", qQatIds);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async deleteMyUserQuestionCats(qQatIds, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("DELETE", "qna/userqcats/v1", qQatIds);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async postQuestionViews(qids, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", "qna/qviews/v1", qids);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getQuestionStats(qid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/qstats/v1?qid=${(0, Utils_js_1.encu)(qid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async postAnswerViews(aids, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", "qna/answers/view/v1", aids);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async postAnswerLikes(answerLikes, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", "qna/answers/like/v1", answerLikes);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async postQuestionLikes(questionLikes, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", "qna/questions/like/v1", questionLikes);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async postFileAnswer(file, answer, handlers) {
        try {
            const upload = new FormData();
            upload.append("answerJson", JSON.stringify(answer));
            upload.append("file", file);
            return await Utils_js_1.Utils.fetchApi("POST", "qna/answer/media/v1", upload, "none");
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getAnswerJobStatus(aid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/answer/jobstatus/v1?aid=${(0, Utils_js_1.encu)(aid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getAnswerJobState(aid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/answer/jobstate/v1?aid=${(0, Utils_js_1.encu)(aid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getAnswerMediaInfo(aid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/answer/media/info/v1?aid=${(0, Utils_js_1.encu)(aid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async deleteAnswerMedia(aid, name, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("DELETE", `qna/answer/media/v1?aid=${(0, Utils_js_1.encu)(aid)}&name=${(0, Utils_js_1.encu)(name)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getAnswerMediaData(aid, mediaFileId, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/answer/media/data/v1?aid=${(0, Utils_js_1.encu)(aid)}&mediaFileId=${mediaFileId}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getMediaJobState(mid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/media/jobstate/v1?mid=${(0, Utils_js_1.encu)(mid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getWittyReplyAudioData(aid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/answer/wittyreply/audio/v2?aid=${(0, Utils_js_1.encu)(aid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getQuestionTextAudioData(qid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/question/text/audio/v2?qid=${(0, Utils_js_1.encu)(qid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async qid2aid(qid, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `qna/qid2aid/v1?qid=${(0, Utils_js_1.encu)(qid)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
}
exports.QnAClass = QnAClass;
exports.QnA = new QnAClass();
//# sourceMappingURL=QnA.js.map