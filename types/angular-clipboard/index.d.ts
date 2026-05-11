/**
 * Definition of the Clipboard Service
 */
export interface ClipboardService {
    /**
     * tells us whether or not angular-clipboard is supported
     */
    supported: boolean;

    /**
     * copies text to a clipboard
     * @param text the text to be copied to the clipboard
     */
    copyText(text: string): void;
}
