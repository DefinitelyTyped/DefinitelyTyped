import ASN1 = require('.');

declare namespace Base64 {
    function decode(a: ASN1.Binary): Uint8Array;
    function pretty(str: string): string;
    let re: RegExp;
    function unarmor(a: string): ReturnType<typeof decode>;
}

// eslint-disable-next-line export-just-namespace
export = Base64;

export as namespace base64;
