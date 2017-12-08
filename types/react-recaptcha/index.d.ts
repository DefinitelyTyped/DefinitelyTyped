// Type definitions for react-recaptcha 2.3.5
// Project: https://github.com/appleboy/react-recaptcha
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } from "react";

interface RecaptchaProps {
    className?: string;
    elementID?: string;
    expiredCallback?(): any;
    expiredCallbackName?: string;
    onloadCallback?(): any;
    onloadCallbackName?: string;
    render?: string;
    size?: string;
    tabindex?: string;
    theme?: "dark" | "light";
    type?: string;
    verifyCallback?(response: string): any;
    verifyCallbackName?: string;
    sitekey?: string;
}

export default class Recaptcha extends Component<RecaptchaProps> {
    static propTypes: any;
    static defaultProps: RecaptchaProps;
    reset(): void;
}
