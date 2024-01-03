import { Handlers } from "./Utils.js";
declare class ConnectionsClass {
    createInvite(toName: string, handlers: Handlers): Promise<any>;
    processInvite(invite: string, handlers: Handlers): Promise<any>;
    getAll(handlers: Handlers): Promise<any>;
    get(username: string, handlers: Handlers): Promise<any>;
    disconnect(username: string, handlers: Handlers): Promise<any>;
}
export declare const Connections: ConnectionsClass;
export {};
