import { Utils, Handlers, encu } from "./Utils.js";

class ConnectionsClass {
    // Returns: An invite (string) for the user to give someone else to form a connection
    // toName can be anything, something easy for the user to remember as to
    // who they'll be giving the invite to
    async createInvite(toName: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `connection/invite/create/v1?toName=${encu(toName)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Process a connection invite from someone else
    //
    // Errors:
    // 400: Invalid invite or invite not found
    // 403: Invalid request, too many tries
    async processInvite(invite: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", `connection/invite/process/v1?code=${encu(invite)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Get all of the users connections to other users
    async getAll(handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `connection/getall/v1`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }            
    }

    // Gets the user's connection to another user
    //
    // Errors:
    // 404: Other user not found or no connections with the other user exists
    async get(username: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("GET", `connection/get/v1?username=${encu(username)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        }
    }

    // Disconnect the user from another user
    //
    // Errors:
    // 404: Other user not found
    async disconnect(username: string, handlers: Handlers) {
        try {
            return await Utils.fetchApi("POST", `connection/disconnect/v1?username=${encu(username)}`);
        } catch (e) {
            return await Utils.handleExp(e, handlers);
        } 
    }
}
export const Connections = new ConnectionsClass();
