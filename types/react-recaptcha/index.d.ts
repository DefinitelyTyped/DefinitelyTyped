// Type definitions for react-recaptcha 2.3
// Project: https://github.com/appleboy/react-recaptcha
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
//                 Zach <https://github.com/zzanol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } from "react";

export = Recaptcha;

declare namespace Recaptcha {
    interface RecaptchaProps {
        className?: string;
        elementID?: string;
        expiredCallback?(): any;
        expiredCallbackName?: string;
        onloadCallback?(): any;
        onloadCallbackName?: string;
        render?: "onload" | "explicit";
        size?: "normal" | "compact" | "invisible";
        tabindex?: number | string;
        theme?: "dark" | "light";
        type?: "audio" | "image";
        verifyCallback?(response: string): any;
        verifyCallbackName?: string;
        sitekey?: string;
        badge?: "bottomright" | "bottomleft" | "inline";
        hl?: string; // https://developers.google.com/recaptcha/docs/language
    }
}

declare class Recaptcha extends Component<Recaptcha.RecaptchaProps> {
    static propTypes: any;
    static defaultProps: Recaptcha.RecaptchaProps;
    reset(): void;
}
