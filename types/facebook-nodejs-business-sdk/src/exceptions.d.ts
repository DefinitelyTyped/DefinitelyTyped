declare class FacebookError extends Error {
    constructor(error: any);
}

export class FacebookRequestError extends FacebookError {
    response: any;
    method: any;
    url: any;
    data: any;

    constructor(response: any, method: any, url: any, data: any);
}
export {};
