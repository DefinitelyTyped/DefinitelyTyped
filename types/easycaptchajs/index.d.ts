export as namespace EasyCaptchaJs;

export interface EasyCaptchaSettings {
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
    theme?: "light" | "dark";
    failure?: (error: string) => void;
}

export type EasyCaptchaMethod = "getTarget" | "verify" | "response" | "reset" | "destroy";

export type EasyCaptchaElementData = Record<string, any>;

export interface EasyCaptchaResultBaseTarget {
    parentElement?: JQuery;
}

export interface EasyCaptchaResultTarget extends EasyCaptchaResultBaseTarget {
    data: EasyCaptchaElementData;
}

export interface EasyCaptchaResultVerify extends EasyCaptchaResultBaseTarget {
    verified: boolean;
}

export interface EasyCaptchaResultResponse extends EasyCaptchaResultBaseTarget {
    token: string;
}

export type EasyCaptchaResult = EasyCaptchaResultTarget | EasyCaptchaResultVerify | EasyCaptchaResultResponse;

export type EasyCaptchaResults = EasyCaptchaResult[] | EasyCaptchaResult | null;

export interface EasyCaptchaInstance {
    (options?: EasyCaptchaSettings, ...args: string[]): EasyCaptchaResults;
    (
        method: EasyCaptchaMethod,
        results: EasyCaptchaResult[],
        data: EasyCaptchaElementData,
        args: string[],
    ): EasyCaptchaResults;
}

// noinspection JSUnusedGlobalSymbols
export const EasyCaptcha: EasyCaptchaInstance;

export interface EasyCaptchaJQuery extends JQuery {
    EasyCaptcha: EasyCaptchaInstance;
}

export interface EasyCaptchaJQueryStatic extends JQuery {
    (selector: string): EasyCaptchaJQuery;
}

// noinspection JSUnusedGlobalSymbols
export const $: EasyCaptchaJQueryStatic;

declare global {
    interface JQuery {
        EasyCaptcha: EasyCaptchaInstance;
    }
}
