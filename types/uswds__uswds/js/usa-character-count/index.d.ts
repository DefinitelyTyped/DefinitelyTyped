interface CharacterCount {
    init(root: HTMLElement | Document): void;
    MESSAGE_INVALID_CLASS: string;
    VALIDATION_MESSAGE: string;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const characterCount: CharacterCount;

export default characterCount;
