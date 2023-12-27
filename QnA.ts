import { Utils, Handlers, encu } from "./Utils.js";

class QnAClass {
    async getQuestions(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/questions/v1`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getMyQuestions(handlers: Handlers) { /// returns robot-sorted [] of qids
        try {
            return await Utils.fetchApi("GET", `qna/questions/my/v1`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getQuestionCats(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/qcats/v1`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getQuestionTypes(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/qtypes/v1`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getMyAnswers(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/answers/v1`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getMyAnswer(aid: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/answer/v1?aid=${encu(aid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async recordAnswers(answers: any, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", "qna/answers/v1", answers);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getTheirAnswers(theirUsername: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/answers/their/v1?theirUsername=${encu(theirUsername)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getTheirAnswer(theirUsername: string, qid: number, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/answer/their/v1?theirUsername=${encu(theirUsername)}&qid=${encu(qid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getMyUserQuestionCats(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", "qna/userqcats/v1");
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async putMyUserQuestionCats(qQatIds: number[], handlers: Handlers) {
        try {
            return await Utils.fetchApi("PUT", "qna/userqcats/v1", qQatIds);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async deleteMyUserQuestionCats(qQatIds: number[], handlers: Handlers) {
        try {
            return await Utils.fetchApi("DELETE", "qna/userqcats/v1", qQatIds);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async postQuestionViews(qids: number, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", "qna/qviews/v1", qids);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getQuestionStats(qid: number, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/qstats/v1?qid=${encu(qid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async postAnswerViews(aids: string[], handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", "qna/answers/view/v1", aids);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async postAnswerLikes(answerLikes: any, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", "qna/answers/like/v1", answerLikes);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async postQuestionLikes(questionLikes: any, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", "qna/questions/like/v1", questionLikes);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async postFileAnswer(file: Blob, answer: any, handlers: Handlers) {
        try {
            const upload = new FormData();
            upload.append("answerJson", JSON.stringify(answer));
            upload.append("file", file);
            return await Utils.fetchApi("POST", "qna/answer/media/v1", upload, "none");
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getAnswerJobStatus(aid: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/answer/jobstatus/v1?aid=${encu(aid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getAnswerJobState(aid: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/answer/jobstate/v1?aid=${encu(aid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getAnswerMediaInfo(aid: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/answer/media/info/v1?aid=${encu(aid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async deleteAnswerMedia(aid: string, name: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("DELETE", `qna/answer/media/v1?aid=${encu(aid)}&name=${encu(name)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getAnswerMediaData(aid: string, mediaFileId: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/answer/media/data/v1?aid=${encu(aid)}&mediaFileId=${mediaFileId}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getMediaJobState(mid: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/media/jobstate/v1?mid=${encu(mid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getWittyReplyAudioData(aid: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/answer/wittyreply/audio/v2?aid=${encu(aid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getQuestionTextAudioData(qid: number, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/question/text/audio/v2?qid=${encu(qid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async qid2aid(qid: number, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `qna/qid2aid/v1?qid=${encu(qid)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }
}
export const QnA = new QnAClass();
