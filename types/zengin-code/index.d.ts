// Type definitions for zengin-code 1.0
// Project: https://github.com/zengin-code/zengin-js#readme
// Definitions by: Ken Takahashi <https://github.com/takahash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const zenginCode: zenginCode.ZenginCode;

declare namespace zenginCode {
    interface ZenginCode {
        [key: string]: Bank;
    }

    interface Branch {
        code: string;
        name: string;
        kana: string;
        hira: string;
        roma: string;
    }

    interface Bank {
        code: string;
        name: string;
        kana: string;
        hira: string;
        roma: string;
        branches: {
            [key: string]: Branch;
        };
    }
}

export = zenginCode;
