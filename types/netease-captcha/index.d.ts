interface Window {
    initNECaptcha?: NeteaseCaptcha.InitFunction | undefined;
}

type Lang =
    | "en"
    | "zh-CN"
    | "en-US"
    | "en-GB"
    | "zh-TW"
    | "zh-HK"
    | "ja"
    | "ko"
    | "th"
    | "vi"
    | "fr"
    | "ru"
    | "ar"
    | "de"
    | "it"
    | "he"
    | "hi"
    | "id"
    | "my"
    | "lo"
    | "ms"
    | "pl"
    | "pt"
    | "es"
    | "tr"
    | "ml"
    | "or"
    | "pa"
    | "as"
    | "mai"
    | "mn"
    | "ug"
    | "pt-br"
    | "es-la"
    | "sv"
    | "no"
    | "da"
    | "cs"
    | "hu"
    | "sk"
    | "ro"
    | "el"
    | "sr"
    | "bs"
    | "mk"
    | "bg"
    | "fi"
    | "et"
    | "lv"
    | "lt"
    | "sl"
    | "hr"
    | "uk"
    | "fa"
    | "nl"
    | "ca"
    | "gl"
    | "eu"
    | "ka"
    | "az"
    | "uz"
    | "km"
    | "si"
    | "ur"
    | "bo"
    | "be"
    | "kk"
    | "bn"
    | "fil"
    | "jv"
    | "ne"
    | "sw"
    | "mi"
    | "am"
    | "te"
    | "mr"
    | "ta"
    | "gu"
    | "kn";

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
         * Defaults to 'float' on desktop, and 'popup' on mobile. 'bind' is for invisible captcha
         */
        mode?: "float" | "embed" | "popup" | "bind" | undefined;

        /**
         * Defaults to page protocol
         */
        protocol?: "http" | "https" | undefined;

        /**
         * Defaults to 'auto'
         */
        width?: number | string | undefined;

        /**
         * Defaults to 'zh-CN'
         */
        lang?: Lang | undefined;

        onReady?(instance: Instance): void;

        onVerify?(error: any, data: Data): void;

        /**
         * Only available on 'popup' mode. Selector string or HTMLElement for the captcha popup
         */
        appendTo?: string | HTMLElement | undefined;

        /**
         * Callback invoked when the captcha popup is closed
         */
        onClose?(): void;

        /**
         * Defaults to false. Used to enable the Instance.close method
         */
        enableClose?: boolean | undefined;
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
        /**
         * Available when the mode is set to 'bind' - verify token manually
         */
        verify?(): void;

        /**
         * Available when enableClose is true - closes the captcha bulletin
         */
        close?(): void;
    }

    interface Data {
        validate: string;
    }

    type onLoad = (instance: Instance) => void;

    type onError = (error: any) => void;
}
