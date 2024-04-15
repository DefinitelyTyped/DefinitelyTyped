interface LanguageSelector {
    focusTrap: null;
    init(root?: HTMLElement | Document): void;
    teardown(): void;
    on(root?: HTMLElement | Document): void;
    off(root?: HTMLElement | Document): void;
}

declare const languageSelector: LanguageSelector;

export default languageSelector;
