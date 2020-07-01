// Type definitions for windows-1251 v0.1.2
// Project: https://github.com/mathiasbynens/windows-1251
// Definitions by: RomanGolovanov <https://github.com/RomanGolovanov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var windows1251: {
    encode(input:string, options?:{ mode?: windows1251.EncoderMode }):string;
    decode(text: string, options?:{ mode?: windows1251.DecoderMode }): string;
    version: string;
    labels: string[];
}

export = windows1251;
export as namespace windows1251;

declare namespace windows1251 {

    type EncoderMode = 'fatal' | 'html';
    type DecoderMode = 'replacement' | 'fatal';

    interface windows1251 {
        encode(input:string, options?:{ mode?: EncoderMode }):string;
        decode(text: string, options?:{ mode?: DecoderMode }): string;
    }

}
