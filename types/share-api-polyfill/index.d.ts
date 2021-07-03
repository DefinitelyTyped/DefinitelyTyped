// Type definitions for share-api-polyfill 1.0
// Project: https://github.com/on2-dev/share-api-polyfill#readme
// Definitions by: Jan Vlnas <https://github.com/jnv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

export interface ShareAPIPolyfillData extends ShareData {
    fbId?: string;
    hashtags?: string;
}

export interface ShareAPIPolyfillOptions {
    copy?: boolean;
    email?: boolean;
    print?: boolean;
    sms?: boolean;
    messenger?: boolean;
    facebook?: boolean;
    whatsapp?: boolean;
    twitter?: boolean;
    linkedin?: boolean;
    telegram?: boolean;
    skype?: boolean;
    language?: string;
}

declare global {
    interface Navigator {
        share(data?: ShareAPIPolyfillData, configuration?: ShareAPIPolyfillOptions): Promise<void>;
    }
}
