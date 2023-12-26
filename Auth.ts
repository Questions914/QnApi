import { Utils, Handlers, encu } from "./Utils.js";

export class AuthClass {
    // Begin user authentication by sending a code to the provided userId, 
    // which is either a phone number or an email address
    //
    // Errors: 
    // 400: Invalid userId, not a valid phone number or email address
    // 500: Sending user code failed
    async begin(userId: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", `auth/begin/v1?phoneNumber=${encu(userId)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
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
    async continue(code: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", `auth/continue/v1?code=${encu(code)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
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
    async register(username: string, birthdate: string, gender: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", `auth/register/v2?username=${encu(username)}&birthdate=${encu(birthdate)}&gender=${encu(gender)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Returns: The user's username; will start with $ if not yet registered
    // Error: 404 if user not logged in
    async ping(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", "auth/pingAuth/v1");
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Log the user out
    // NOTE: Clears the Bearer token, 
    //       forcing a fresh begin() / continue() authentication to proceed
    async logout(handlers: Handlers) {
        try {
            const ret = await Utils.fetchApi("POST", "auth/logout/v1");
            Utils.setBearerToken("");
            return ret;
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }
}
export const Auth = new AuthClass();
