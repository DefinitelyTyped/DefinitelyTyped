// Type definitions for create-html-element 2.0
// Project: https://github.com/sindresorhus/create-html-element#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = createHtmlElement;

declare function createHtmlElement(
    options?: createHtmlElement.OptionsWithoutTagName
): HTMLDivElement;
declare function createHtmlElement<K extends keyof HTMLElementTagNameMap>(
    options: createHtmlElement.Options<K>
): HTMLElementTagNameMap[K];
declare function createHtmlElement(options: createHtmlElement.Options<string>): HTMLElement;

declare namespace createHtmlElement {
    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
    type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

    interface AttributesOptions {
        attributes?: { [key: string]: string | boolean | number | string[] };
    }

    interface HtmlOptions {
        html?: string;
    }

    interface TextOptions {
        text?: string;
    }

    type OptionsWithoutTagName = AttributesOptions & XOR<HtmlOptions, TextOptions>;

    interface OptionsWithTagName<K> extends AttributesOptions {
        name: K;
    }

    type Options<K> = OptionsWithTagName<K> & XOR<HtmlOptions, TextOptions>;
}
