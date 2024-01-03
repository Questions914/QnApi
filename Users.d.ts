import { Handlers } from "./Utils.js";
declare class UsersClass {
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
export declare const Users: UsersClass;
export {};
