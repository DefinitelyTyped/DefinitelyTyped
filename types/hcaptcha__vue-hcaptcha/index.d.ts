// Type definitions for @hcaptcha/vue-hcaptcha 0.2
// Project: https://github.com/hCaptcha/vue-hcaptcha
// Definitions by: George Pickering <https://github.com/geopic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import { VueConstructor } from 'vue';
export const h: HCaptcha;
export default h;

export interface HCaptchaProps {
  sitekey: string;
  theme?: string;
  size?: string;
  tabindex?: string;
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
