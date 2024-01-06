"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QnaUsers = exports.Users = exports.UsersClass = void 0;
const Utils_js_1 = require("./Utils.js");
class UsersClass {
    // Get the public profile of another user
    // Errors:
    // 404: User not found
    async getPublicProfile(username, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `user/publicprofile/v1?username=${(0, Utils_js_1.encu)(username)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Get stats about the user's own public profile
    async getMyProfileStats(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `user/profilestats/v1`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Is a username available (and valid)?
    //
    // Errors:
    // 400: Invalid username
    // 409: Username already taken
    async isUsernameAvailable(username, handlers) {
        try {
            await Utils_js_1.Utils.fetchApi("GET", `user/usernameAvailable/v1?username=${(0, Utils_js_1.encu)(username)}`);
            return true;
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Get my notification feed
    async getMyNotifications(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `user/notifications/v1`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Post a new profile picture
    async postProfilePic(picBlob, handlers) {
        try {
            const upload = new FormData();
            upload.append("file", picBlob);
            return await Utils_js_1.Utils.fetchApi("POST", `user/profilepicture/v1`, upload, "none");
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Get the bytes of my current profile picture
    // Error: 404 if no profile picture found
    async getProfilePic(username, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `user/profilepicture/v1?username=${(0, Utils_js_1.encu)(username)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async getMyPrivateSettings(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", `user/privatesettings/v1`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async putMyPrivateSettings(settings, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("PUT", `user/privatesettings/v1`, settings);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    async recordMyLocation(longitute, latitude, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", `user/location/v1?longitute=${(0, Utils_js_1.encu)(longitute)}&latitude=${(0, Utils_js_1.encu)(latitude)}`, handlers);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
}
exports.UsersClass = UsersClass;
exports.Users = new UsersClass();
exports.QnaUsers = exports.Users;
//# sourceMappingURL=Users.js.map