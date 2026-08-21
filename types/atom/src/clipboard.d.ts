/** Represents the clipboard used for copying and pasting in Atom. */
export interface Clipboard {
    /** Write the given text to the clipboard. */
    write(text: string, metadata?: object): void;

    /** Read the text from the clipboard. */
    read(): string;

    /**
     *  Read the text from the clipboard and return both the text and the associated
     *  metadata.
     */
    readWithMetadata(): { text: string; metadata: object };
}
