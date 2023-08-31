// Type definitions for easycaptchajs 1.2.0
// Definitions by: HichemTab-tech <https://github.com/HichemTab-tech>

declare namespace EasyCaptchaJs{

    type EasyCaptchaSettings = {
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

    type EasyCaptchaMethod = 'getTarget' | 'verify' | 'response' | 'reset' | 'destroy';

    type EasyCaptchaResults = any[] | any | null;

    interface EasyCaptchaInstance {
        (options?: EasyCaptchaSettings, ...args: string[]): EasyCaptchaResults;
        (method: EasyCaptchaMethod, results: any[], data: any, args: string[]): EasyCaptchaResults;
    }


    // noinspection JSUnusedGlobalSymbols
    const EasyCaptcha: EasyCaptchaInstance;

    interface EasyCaptchaJQuery extends JQuery {
        EasyCaptcha: EasyCaptchaInstance;
    }

    interface EasyCaptchaJQueryStatic extends JQueryStatic {
        (selector: string): EasyCaptchaJQuery;
    }

    // noinspection JSUnusedGlobalSymbols
    const $: EasyCaptchaJQueryStatic;

    export {EasyCaptcha, $, EasyCaptchaSettings, EasyCaptchaJQuery, EasyCaptchaJQueryStatic, EasyCaptchaInstance, EasyCaptchaResults};
}

declare global{
    interface JQuery {
        EasyCaptcha: EasyCaptchaJs.EasyCaptchaInstance;
    }
}

export {EasyCaptchaJs};
