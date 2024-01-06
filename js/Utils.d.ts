export type QnaException = {
    fetchApiExp: boolean;
    status: number;
    msg: string;
};
export type Handlers = {
    [key: number]: (exception: QnaException) => any;
};
declare class UtilsClass {
    fetchApi(verb: string, path: string, requestBody?: any, requestContentType?: string): Promise<any>;
    setBearerToken(token: string): void;
    getBearerToken(): string | null;
    setApiUrlRoot(root: string): void;
    getApiUrlRoot(): string;
    handleExp(exp: any, handlers: Handlers): Promise<any>;
}
export declare const Utils: UtilsClass;
export declare const QnaUtils: UtilsClass;
export declare function encu(param: any): string;
export declare function ench(param: string): string;
export {};
