import { Utils, Handlers, encu } from "./Utils.js";

export class UsersClass {
    // Get the public profile of another user
    // Errors:
    // 404: User not found
    async getPublicProfile(username: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `user/publicprofile/v1?username=${encu(username)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Get stats about the user's own public profile
    async getMyProfileStats(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `user/profilestats/v1`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Is a username available (and valid)?
    //
    // Errors:
    // 400: Invalid username
    // 409: Username already taken
    async isUsernameAvailable(username: string, handlers: Handlers) {
        try {
            await Utils.fetchApi("GET", `user/usernameAvailable/v1?username=${encu(username)}`);
            return true;
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Get my notification feed
    async getMyNotifications(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `user/notifications/v1`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Post a new profile picture
    async postProfilePic(picBlob: Blob, handlers: Handlers) {
        try {
            const upload = new FormData();
            upload.append("file", picBlob);
            return await Utils.fetchApi("POST", `user/profilepicture/v1`, upload, "none");
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Get the bytes of my current profile picture
    // Error: 404 if no profile picture found
    async getProfilePic(username: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `user/profilepicture/v1?username=${encu(username)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async getMyPrivateSettings(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `user/privatesettings/v1`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async putMyPrivateSettings(settings: any, handlers: Handlers) {
        try {
            return await Utils.fetchApi("PUT", `user/privatesettings/v1`, settings);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    async recordMyLocation(longitute: number, latitude: number, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", `user/location/v1?longitute=${encu(longitute)}&latitude=${encu(latitude)}`, handlers);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }
}
export const Users = new UsersClass();
export const QnaUsers = Users;
