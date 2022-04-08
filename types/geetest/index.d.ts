// Type definitions for geetest 4.1
// Project: https://github.com/GeeTeam/gt-node-sdk#readme
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    geetest_id: string;
    geetest_key: string;
    protocol?: string;
    api_server?: string;
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
