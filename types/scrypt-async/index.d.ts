declare namespace scrypt {
    interface CallbackFunc {
        (key: string): any;
        (key: number[]): any;
    }

    interface Options {
        N?: number | undefined;
        logN?: number | undefined;
        r: number;
        p: number;
        dkLen: number;
        encoding?: string | undefined;
        interruptStep?: number | undefined;
    }

    interface ScryptStatic {
        (password: string, salt: string, options: Options, callback: CallbackFunc): void;
        (password: number[], salt: string, options: Options, callback: CallbackFunc): void;
        (password: string, salt: number[], options: Options, callback: CallbackFunc): void;
        (password: number[], salt: number[], options: Options, callback: CallbackFunc): void;

        (
            password: string,
            salt: string,
            logN: number,
            r: number,
            dkLen: number,
            interruptStep: number,
            callback: CallbackFunc,
            encoding: string,
        ): void;
        (
            password: string,
            salt: number[],
            logN: number,
            r: number,
            dkLen: number,
            interruptStep: number,
            callback: CallbackFunc,
            encoding: string,
        ): void;
        (
            password: number[],
            salt: string,
            logN: number,
            r: number,
            dkLen: number,
            interruptStep: number,
            callback: CallbackFunc,
            encoding: string,
        ): void;
        (
            password: number[],
            salt: number[],
            logN: number,
            r: number,
            dkLen: number,
            interruptStep: number,
            callback: CallbackFunc,
            encoding: string,
        ): void;

        (
            password: string,
            salt: string,
            logN: number,
            r: number,
            dkLen: number,
            interruptStep: number,
            callback: CallbackFunc,
        ): void;
        (
            password: string,
            salt: number[],
            logN: number,
            r: number,
            dkLen: number,
            interruptStep: number,
            callback: CallbackFunc,
        ): void;
        (
            password: number[],
            salt: string,
            logN: number,
            r: number,
            dkLen: number,
            interruptStep: number,
            callback: CallbackFunc,
        ): void;
        (
            password: number[],
            salt: number[],
            logN: number,
            r: number,
            dkLen: number,
            interruptStep: number,
            callback: CallbackFunc,
        ): void;

        (
            password: string,
            salt: string,
            logN: number,
            r: number,
            dkLen: number,
            callback: CallbackFunc,
            encoding: string,
        ): void;
        (
            password: string,
            salt: number[],
            logN: number,
            r: number,
            dkLen: number,
            callback: CallbackFunc,
            encoding: string,
        ): void;
        (
            password: number[],
            salt: string,
            logN: number,
            r: number,
            dkLen: number,
            callback: CallbackFunc,
            encoding: string,
        ): void;
        (
            password: number[],
            salt: number[],
            logN: number,
            r: number,
            dkLen: number,
            callback: CallbackFunc,
            encoding: string,
        ): void;

        (password: string, salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc): void;
        (password: string, salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc): void;
        (password: number[], salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc): void;
        (password: number[], salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc): void;
    }
}

declare var scrypt: scrypt.ScryptStatic;

export = scrypt;
