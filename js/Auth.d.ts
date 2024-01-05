import { Handlers } from "./Utils.js";
export declare class AuthClass {
    begin(userId: string, handlers: Handlers): Promise<any>;
    continue(code: string, handlers: Handlers): Promise<any>;
    register(username: string, birthdate: string, gender: string, handlers: Handlers): Promise<any>;
    ping(handlers: Handlers): Promise<any>;
    logout(handlers: Handlers): Promise<any>;
}
export declare const Auth: AuthClass;
export declare const QnaAuth: AuthClass;
