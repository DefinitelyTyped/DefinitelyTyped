// Type definitions for react-recaptcha-v3 1.1
// Project: https://github.com/codeep/react-recaptcha-v3
// Definitions by: Alessandro Rabitti <https://github.com/silversonicaxel>
//                 Ivan Siacho <https://github.com/ivansiach0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from "react";

export namespace ReCaptcha {
    interface ReCaptchaProps {
        elementID?: string;
        sitekey: string;
        action: string;
        verifyCallback?(response: string): void;
        verifyCallbackName?: string;
    }
}

export class ReCaptcha extends Component<ReCaptcha.ReCaptchaProps> {
    static propTypes: any;
    static defaultProps: ReCaptcha.ReCaptchaProps;
    execute(): void;
}

export function loadReCaptcha(siteKey: string): void;
