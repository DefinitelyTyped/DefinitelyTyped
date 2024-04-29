/**
 * Represents a fragment of an email, with content and metadata about whether it's hidden, a signature, or quoted.
 */
declare class Fragment {
    /**
     * Creates a new email fragment.
     * @param content The content of the fragment.
     * @param isHidden Whether the fragment is hidden.
     * @param isSignature Whether the fragment is a signature.
     * @param isQuoted Whether the fragment is quoted text.
     */
    constructor(content: string, isHidden: boolean, isSignature: boolean, isQuoted: boolean);

    /**
     * The content of the fragment.
     */
    content: string;

    /**
     * Returns whether the fragment is hidden, meaning it is either quotes, signatures, or empty.
     * @returns Whether the fragment is hidden.
     */
    isHidden(): boolean;

    /**
     * Returns whether the fragment is a signature, typically containing identifying information or legal disclaimers.
     * @returns Whether the fragment is a signature.
     */
    isSignature(): boolean;

    /**
     * Returns whether the fragment is quoted text, meaning it is text that has been copied from a previous email or message and included in the current message.
     * Quoted text is typically marked with a special character, such as a ">" or "|".
     * @returns Whether the fragment is quoted text.
     */
    isQuoted(): boolean;

    /**
     * Returns the content of the fragment.
     * @returns The content of the fragment.
     */
    getContent(): string;

    /**
     * Returns whether the fragment contains no content.
     * @returns Whether the fragment is empty.
     */
    isEmpty(): boolean;

    /**
     * Returns a string representation of the fragment, which is just its content.
     * @returns The content of the fragment.
     */
    toString(): string;
}

/**
 * Represents an email message, with one or more fragments.
 */
declare class Email {
    /**
     * Creates a new email message.
     * @param fragments The fragments that make up the email message.
     */
    constructor(fragments?: Fragment[]);

    /**
     * The fragments that make up the email message.
     */
    fragments: Fragment[];

    /**
     * Returns an array of the fragments that make up the email message.
     * @returns An array of the fragments that make up the email message.
     */
    getFragments(): Fragment[];

    /**
     * Returns the visible text of the email message, which includes all non-quoted text in the email without signatures and other hidden text.
     * @returns The visible text of the email message.
     */
    getVisibleText(): string;

    /**
     * Returns the quoted text of the email message, which includes all text in the email that is marked as a quote.
     * @returns The quoted text of the email message.
     */
    getQuotedText(): string;
}

/**
 * Parses an email message and extracts its fragments.
 */
declare class EmailReplyParser {
    /**
     * Reads an email message and returns an Email object with its fragments.
     * @param text The text of the email message.
     * @returns An Email object with the fragments of the email message.
     */
    read(text: string): Email;

    /**
     * Parses an email message and returns the text of the reply.
     * @param text The text of the email message.
     * @returns The text of the reply.
     */
    parseReply(text: string): string;

    /**
     * Parses an email message and returns the text of the replied message.
     * @param text The text of the email message.
     * @returns The text of the replied message.
     */
    parseReplied(text: string): string;
}

export = EmailReplyParser;
