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
     *
     * @param {HTMLDivElement} characterCountEl - Div with `.usa-character-count` class
     * @description  Create two status messages for number of characters left;
     * one visual status and another for screen readers
     */
    createStatusMessages(characterCountEl: HTMLDivElement): void;
    /**
     * Returns message with how many characters are left
     *
     * @param {number} currentLength - The number of characters used
     * @param {number} maxLength - The total number of characters allowed
     * @returns {string} A string description of how many characters are left
     */
    getCountMessage(currentLength: number, maxLength: number): string;
    /**
     * Update the character count component
     *
     * @description On input, it will update visual status, screenreader
     * status and update input validation (if over character length)
     * @param {HTMLInputElement|HTMLTextAreaElement} inputEl The character count input element
     */
    updateCountMessage(inputEl: HTMLInputElement | HTMLTextAreaElement): void;
}

declare const characterCount: CharacterCount;

export default characterCount;
