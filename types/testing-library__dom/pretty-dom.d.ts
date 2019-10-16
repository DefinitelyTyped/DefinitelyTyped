import { OptionsReceived } from 'pretty-format';

export function prettyDOM(dom?: Element | HTMLDocument, maxLength?: number, options?: OptionsReceived): string | false;
export function logDOM(dom?: Element | HTMLDocument, maxLength?: number, options?: OptionsReceived): void;
