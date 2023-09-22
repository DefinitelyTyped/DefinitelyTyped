// Type definitions for @hcaptcha/react-hcaptcha 0.1
// Project: https://github.com/hCaptcha/react-hcaptcha
// Definitions by: Matt Sutkowski <https://github.com/msutkowski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

interface HCaptchaState {
    isApiReady: boolean;
    isRemoved: boolean;
    elementId: string;
    captchaId: string;
}

interface HCaptchaProps {
    onExpire?: (() => any) | undefined;
    onError?: ((event: string) => any) | undefined;
    onVerify?: ((token: string) => any) | undefined;
    languageOverride?: string | undefined;
    sitekey: string;
    size?: "normal" | "compact" | "invisible" | undefined;
    theme?: "light" | "dark" | undefined;
    tabIndex?: number | undefined;
    id?: string | undefined;
    reCaptchaCompat?: boolean | undefined;
}

declare class HCaptcha extends React.Component<HCaptchaProps, HCaptchaState> {
    resetCaptcha(): void;
    renderCaptcha(): void;
    removeCaptcha(): void;
    execute(): void;
}

export = HCaptcha;
