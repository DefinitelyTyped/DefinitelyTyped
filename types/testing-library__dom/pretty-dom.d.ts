import { OptionsReceived } from 'pretty-format';

type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

export function prettyDOM(dom?: Element | HTMLDocument, maxLength?: number, options?: OptionsReceived): string | false;
export function logDOM(...args: Parameters<typeof prettyDOM>): void;
