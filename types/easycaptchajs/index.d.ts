// Type definitions for easycaptchajs 1.1
// Project: https://github.com/HichemTab-tech/EasyCaptchaJS#readme
// Definitions by: HichemTab <https://github.com/HichemTab-tech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace EasyCaptchaJs;

export type EasyCaptchaSettings = {
    ReCAPTCHA_API_KEY_CLIENT?: string;
    ReCaptchaSubmit?: {
        success?: () => void;
        expired?: () => void;
        failed?: () => void;
    };
    autoVerification?: {
        okBtn: string | null;
        requiredMsg: string;
    };
    apiScriptLoading?: {
        loadingMsg: string;
        error: () => void;
        errorMsg: string;
    };
    theme?: 'light' | 'dark';
    failure?: (error: string) => void;
};

export type EasyCaptchaMethod = 'getTarget' | 'verify' | 'response' | 'reset' | 'destroy';

export type EasyCaptchaResults = any[] | any | null;

export interface EasyCaptchaInstance {
    (options?: EasyCaptchaSettings, ...args: string[]): EasyCaptchaResults;
    (method: EasyCaptchaMethod, results: any[], data: any, args: string[]): EasyCaptchaResults;
}


// noinspection JSUnusedGlobalSymbols
export const EasyCaptcha: EasyCaptchaInstance;

interface EasyCaptchaJQuery extends JQuery {
    EasyCaptcha: EasyCaptchaInstance;
}

export interface EasyCaptchaJQueryStatic extends JQuery {
    (selector: string): EasyCaptchaJQuery;
}

// noinspection JSUnusedGlobalSymbols
export const $: EasyCaptchaJQueryStatic;

declare global{
    interface JQuery {
        EasyCaptcha: EasyCaptchaInstance;
    }
}
