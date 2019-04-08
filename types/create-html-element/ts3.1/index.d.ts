export = createHtmlElement;

declare function createHtmlElement(
    options?: createHtmlElement.OptionsWithoutTagName
): HTMLDivElement;
declare function createHtmlElement<K extends keyof HTMLElementTagNameMap>(
    options: createHtmlElement.Options<K>
): HTMLElementTagNameMap[K];
/** @deprecated */
declare function createHtmlElement<K extends keyof HTMLElementDeprecatedTagNameMap>(
    options: createHtmlElement.Options<K>
): HTMLElementDeprecatedTagNameMap[K];
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
