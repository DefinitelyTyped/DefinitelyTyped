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
