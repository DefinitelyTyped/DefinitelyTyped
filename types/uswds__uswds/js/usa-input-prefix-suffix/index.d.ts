interface InputPrefixSuffix {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const inputPrefixSuffix: InputPrefixSuffix;

export default inputPrefixSuffix;
