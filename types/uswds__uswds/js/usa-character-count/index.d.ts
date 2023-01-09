interface CharacterCount {
    init(root: HTMLElement | Document): void;
    MESSAGE_INVALID_CLASS: string;
    VALIDATION_MESSAGE: string;
    STATUS_MESSAGE_CLASS: string;
    STATUS_MESSAGE_SR_ONLY_CLASS: string;
    DEFAULT_STATUS_LABEL: string;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Create and append status messages for visual and screen readers
     */
    createStatusMessages(characterCountEl: HTMLDivElement): void;
    /**
     * Returns message with how many characters are left
     */
    getCountMessage(currentLength: number, maxLength: number): string;
    /**
     * Update the character count component
     */
    updateCountMessage(inputEl: HTMLInputElement | HTMLTextAreaElement): void;
}

declare const characterCount: CharacterCount;

export default characterCount;
