declare namespace asciify {
    function getFonts(callback: (err: Error, fonts: string[]) => void): void;

    interface AsciifyOptions {
        font?: string | undefined;
        maxWidth?: number | undefined;
        color?: string | undefined;
    }

    interface AsciifyCallback {
        // err is sometimes a string and sometimes an Error
        (err: any, asciifiedText: string): void;
    }
}

declare function asciify(text: string, callback: asciify.AsciifyCallback): void;
declare function asciify(text: string, options: string, callback: asciify.AsciifyCallback): void;
declare function asciify(text: string, options: asciify.AsciifyOptions, callback: asciify.AsciifyCallback): void;

export = asciify;
