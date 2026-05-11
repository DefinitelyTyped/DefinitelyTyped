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
