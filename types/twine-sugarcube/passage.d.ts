export interface PassageBase {
    /**
     * The tags of the passage.
     * @since 2.0.0
     */
    tags: string[];

    /**
     * The raw text of the passage.
     * @since 2.0.0
     */
    text: string;

    /**
     * The title of the passage.
     * @since 2.0.0
     */
    title: string;
}

export interface Passage extends PassageBase {
    /**
     * The DOM ID of the passage (created from the slugified passage title).
     * @since 2.0.0
     */
    domId: string;

    /**
     * Returns the description of the passage (created from either an excerpt of the passage or the
     * Config.passages.descriptions object).
     * @since 2.0.0
     */
    description(): string;

    /**
     * Returns the text of the Passage object (similar to <Passage>.text) after applying nobr tag and image passage
     * processing to it.
     * @since 2.0.0
     */
    processText(): string;
}

export {};
