interface Options {
    geetest_id: string;
    geetest_key: string;
    protocol?: string | undefined;
    api_server?: string | undefined;
}

type Success = 0 | 1;

interface Data {
    geetest_id: string;
    gt: string;
    challenge: string;
    success: Success;
    new_captcha: string;
}

interface Result {
    challenge: string;
    validate: string;
    seccode: string;
}

declare class Geetest {
    constructor(options: Options);
    register(callback: (error: Error, data: Data) => void): void;
    register(): Promise<Data>;
    validate(result: Result, callback: (error: Error, success: Success) => void): void;
    validate(result: Result): Promise<Success>;
}

export = Geetest;
