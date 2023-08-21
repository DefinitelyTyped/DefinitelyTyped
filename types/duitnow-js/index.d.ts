// Type definitions for duitnow-js
// Project: https://gist.github.com/natsu90/f45dc88b38a037325ad9095163b82b42
// Definitions by: Irfan Zahir <https://github.com/irfan-zahir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'duitnow-js' {
    export function generateDuitNowStr(opts: GeneratorOptions): string;

    export interface GeneratorOptions {
        account: string;
        app: string;
        expiry?: string;
        amount?: number;
        name: string;
        city?: string;
        postcode?: string;
        category?: string;
        ref?: string;
        ref1?: string;
        ref3?: string;
        ref5?: string;
        ref6?: string;
        ref7?: string;
        ref8?: string;
        ref82?: string;
    }
}
