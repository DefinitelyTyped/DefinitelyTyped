interface browserFingerprint {
    (): string;
    default: browserFingerprint;
}

declare const browserFingerprint: browserFingerprint;
export = browserFingerprint;
