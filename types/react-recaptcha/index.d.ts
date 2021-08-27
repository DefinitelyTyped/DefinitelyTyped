// Type definitions for react-recaptcha 2.3
// Project: https://github.com/appleboy/react-recaptcha
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
//                 Zach <https://github.com/zzanol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from "react";

export = Recaptcha;

declare namespace Recaptcha {
    interface RecaptchaProps {
        className?: string | undefined;
        elementID?: string | undefined;
        expiredCallback?(): any;
        expiredCallbackName?: string | undefined;
        onloadCallback?(): any;
        onloadCallbackName?: string | undefined;
        render?: "onload" | "explicit" | undefined;
        size?: "normal" | "compact" | "invisible" | undefined;
        tabindex?: number | string | undefined;
        theme?: "dark" | "light" | undefined;
        type?: "audio" | "image" | undefined;
        verifyCallback?(response: string): any;
        verifyCallbackName?: string | undefined;
        sitekey?: string | undefined;
        badge?: "bottomright" | "bottomleft" | "inline" | undefined;
        hl?: string | undefined; // https://developers.google.com/recaptcha/docs/language
    }
}

declare class Recaptcha extends Component<Recaptcha.RecaptchaProps> {
    static propTypes: any;
    static defaultProps: Recaptcha.RecaptchaProps;
    reset(): void;
    execute(): void;
}
