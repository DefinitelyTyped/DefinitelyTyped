// Type definitions for react-recaptcha 2.2
// Project: https://github.com/appleboy/react-recaptcha
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Component } from "react";
export = Recaptcha;

interface RecaptchaProps {
    className?: string;
    elementID?: string;
    expiredCallback?: () => any;
    expiredCallbackName?: string;
    onloadCallback?: () => any;
    onloadCallbackName?: string;
    render?: string;
    size?: string;
    tabindex?: string;
    theme?: "dark" | "light";
    type?: string;
    verifyCallback?: () => any;
    verifyCallbackName?: string;
    sitekey?: string;
}

declare class Recaptcha extends Component<RecaptchaProps, any> {
    static propTypes: any;
    static defaultProps: RecaptchaProps;
}
