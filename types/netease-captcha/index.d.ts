// Type definitions for non-npm package netease-captcha 2.1
// Project: https://cstaticdun.126.net/load.min.js
// Definitions by: Minjie Shen <https://github.com/norubidium>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Window {
    initNECaptcha?: NeteaseCaptcha.InitFunction | undefined;
}

declare namespace NeteaseCaptcha {
    type InitFunction = (config: Config, onLoad?: onLoad, onError?: onError) => void;

    interface Config {
        /**
         * Verification code id
         */
        captchaId: string;

        /**
         * Selector string or HTMLElement to render widget into
         */
        element: string | HTMLElement;

        /**
         * Defaults to 'float' on desktop, and 'popup' on mobile
         */
        mode?: 'float' | 'embed' | 'popup' | undefined;

        /**
         * Defaults to page protocol
         */
        protocol?: 'http' | 'https' | undefined;

        /**
         * Defaults to 'auto'
         */
        width?: number | string | undefined;

        /**
         * Defaults to 'zh-CN'
         */
        lang?: 'zh-CN' | 'en' | undefined;

        onReady?(instance: Instance): void;

        onVerify?(error: any, data: Data): void;
    }

    interface Instance {
        /**
         * Refresh the instance to get new verification information
         */
        refresh(): void;

        /**
         * Destroy the current instance
         */
        destroy(): void;

        /**
         * Available when the mode is set to 'popup' - opens the popup to accept verification
         */
        popUp?(): void;
    }

    interface Data {
        validate: string;
    }

    type onLoad = (instance: Instance) => void;

    type onError = (error: any) => void;
}
