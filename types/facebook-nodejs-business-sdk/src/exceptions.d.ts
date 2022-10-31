declare function FacebookError(error: any): void;
declare namespace FacebookError {
    var prototype: any;
}
export declare class FacebookRequestError extends FacebookError {
    constructor(response: any, method: any, url: any, data: any);
}
export {};
