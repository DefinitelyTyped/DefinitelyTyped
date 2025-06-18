import { Component } from "react";

export namespace ReCaptcha {
    interface ReCaptchaProps {
        elementID?: string | undefined;
        sitekey: string;
        action: string;
        verifyCallback?(response: string): void;
        verifyCallbackName?: string | undefined;
    }
}

export class ReCaptcha extends Component<ReCaptcha.ReCaptchaProps> {
    static propTypes: any;
    static defaultProps: ReCaptcha.ReCaptchaProps;
    execute(): void;
}

export function loadReCaptcha(siteKey: string): void;
