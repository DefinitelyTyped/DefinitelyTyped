// Type definitions for share-api-polyfill 1.0
// Project: https://github.com/on2-dev/share-api-polyfill#readme
// Definitions by: Jan Vlnas <https://github.com/jnv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

export interface ShareAPIPolyfillData extends ShareData {
    fbId?: string | undefined;
    hashtags?: string | undefined;
}

export interface ShareAPIPolyfillOptions {
    copy?: boolean | undefined;
    email?: boolean | undefined;
    print?: boolean | undefined;
    sms?: boolean | undefined;
    messenger?: boolean | undefined;
    facebook?: boolean | undefined;
    whatsapp?: boolean | undefined;
    twitter?: boolean | undefined;
    linkedin?: boolean | undefined;
    telegram?: boolean | undefined;
    skype?: boolean | undefined;
    pinterest?: boolean | undefined;
    language?: string | undefined;
}

declare global {
    interface Navigator {
        share(data?: ShareAPIPolyfillData, configuration?: ShareAPIPolyfillOptions): Promise<void>;
    }
}
