// Type definitions for browser-fingerprint 0.1
// Project: https://www.npmjs.com/package/browser-fingerprint
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface browserFingerprint {
    (): string;
    default: browserFingerprint;
}

declare const browserFingerprint: browserFingerprint;
export = browserFingerprint;
