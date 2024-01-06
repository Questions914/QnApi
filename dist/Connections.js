"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QnaConnections = exports.Connections = exports.ConnectionsClass = void 0;
const Utils_js_1 = require("./Utils.js");
class ConnectionsClass {
    // Returns: An invite (string) for the user to give someone else to form a connection
    // toName can be anything, something easy for the user to remember as to
    // who they'll be giving the invite to
    async createInvite(toName, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `connection/invite/create/v1?toName=${(0, Utils_js_1.encu)(toName)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Process a connection invite from someone else
    //
    // Errors:
    // 400: Invalid invite or invite not found
    // 403: Invalid request, too many tries
    async processInvite(invite, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", `connection/invite/process/v1?code=${(0, Utils_js_1.encu)(invite)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Get all of the users connections to other users
    async getAll(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `connection/getall/v1`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Gets the user's connection to another user
    //
    // Errors:
    // 404: Other user not found or no connections with the other user exists
    async get(username, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `connection/get/v1?username=${(0, Utils_js_1.encu)(username)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Disconnect the user from another user
    //
    // Errors:
    // 404: Other user not found
    async disconnect(username, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", `connection/disconnect/v1?username=${(0, Utils_js_1.encu)(username)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
}
exports.ConnectionsClass = ConnectionsClass;
exports.Connections = new ConnectionsClass();
exports.QnaConnections = exports.Connections;
//# sourceMappingURL=Connections.js.map