// Type definitions for react-recaptcha-v3 1.1
// Project: https://github.com/codeep/react-recaptcha-v3
// Definitions by: Alessandro Rabitti <https://github.com/silversonicaxel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from "react";

export = ReCaptcha;

declare namespace ReCaptcha {
    interface ReCaptchaProps {
        elementID?: string;
        sitekey: string;
        action: string;
        verifyCallback?(response: string): any;
        verifyCallbackName?: string;
    }
}

declare class ReCaptcha extends Component<ReCaptcha.ReCaptchaProps> {
    static propTypes: any;
    static defaultProps: ReCaptcha.ReCaptchaProps;
    execute(): void;
}
