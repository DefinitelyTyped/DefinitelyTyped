import ASN1 = require('.');

declare namespace Hex {
    function decode(a: ASN1.Binary): Uint8Array;
}

// eslint-disable-next-line export-just-namespace
export = Hex;

export as namespace hex;
