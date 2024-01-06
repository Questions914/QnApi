"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QnaAuth = exports.Auth = exports.AuthClass = void 0;
const Utils_js_1 = require("./Utils.js");
class AuthClass {
    // Begin user authentication by sending a code to the provided userId, 
    // which is either a phone number or an email address
    //
    // Errors: 
    // 400: Invalid userId, not a valid phone number or email address
    // 500: Sending user code failed
    async begin(userId, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", `auth/begin/v1?phoneNumber=${(0, Utils_js_1.encu)(userId)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Continue user authentication by taking a code provided to you by the user
    // and submitting it to the API
    //
    // Returns: 
    // username of user with matching phone number or email address
    //
    // Errors:
    // 400: Invalid code
    // 403: Auth failure due to code not matching or too many tries
    // 404: Existing user not found for userId provided to begin(), so ready to register()
    async continue(code, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", `auth/continue/v1?code=${(0, Utils_js_1.encu)(code)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Register a new user with the system
    // This is only possible after successful validation that the user 
    // possesses the phone number or email address
    //
    // Errors:
    // 400: Invalid username or birthdate (18+)
    // 403: User did not authenticate with begin() / continue()
    // 409: The username is valid by taken by another user
    async register(username, birthdate, gender, handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("POST", `auth/register/v2?username=${(0, Utils_js_1.encu)(username)}&birthdate=${(0, Utils_js_1.encu)(birthdate)}&gender=${(0, Utils_js_1.encu)(gender)}`);
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Returns: The user's username; will start with $ if not yet registered
    // Error: 404 if user not logged in
    async ping(handlers) {
        try {
            return await Utils_js_1.Utils.fetchApi("GET", "auth/pingAuth/v1");
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
    // Log the user out
    // NOTE: Clears the Bearer token, 
    //       forcing a fresh begin() / continue() authentication to proceed
    async logout(handlers) {
        try {
            const ret = await Utils_js_1.Utils.fetchApi("POST", "auth/logout/v1");
            Utils_js_1.Utils.setBearerToken("");
            return ret;
        }
        catch (e) {
            return await Utils_js_1.Utils.handleExp(e, handlers);
        }
    }
}
exports.AuthClass = AuthClass;
exports.Auth = new AuthClass();
exports.QnaAuth = exports.Auth;
//# sourceMappingURL=Auth.js.map