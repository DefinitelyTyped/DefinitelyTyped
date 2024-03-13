import { VueConstructor } from "vue";
export const h: HCaptcha;
export default h;

export interface HCaptchaProps {
    sitekey: string;
    theme?: string | undefined;
    size?: string | undefined;
    tabindex?: string | undefined;
}

export interface HCaptchaMethods {
    onloadScript(): void;
    onError(e: Error): void;
    onVerify(response: string): void;
    onExpired(): void;
    execute(): void;
    reset(): void;
}

export interface HCaptcha extends VueConstructor {
    props: HCaptchaProps;
    data: any;
    methods: HCaptchaMethods;
}
