export interface PassageBase {
    /**
     * The tags of the passage.
     * @since 2.0.0
     */
    tags: string[];

    /**
     * The name of the passage.
     * @since 2.37.0
     */
    name: string;
    /**
     * The raw text of the passage.
     * @since 2.0.0
     */
    text: string;

    /**
     * The title of the passage.
     * @since 2.0.0
     * @deprecated in 2.37.0 of favor of the name property
     */
    title: string;
}

export interface Passage extends PassageBase {
    /**
     * The DOM ID of the passage (created from the slugified passage title).
     * @since 2.0.0
     * @deprecated in 2.37.0 in favor of Passage.id
     */
    domId: string;

    /**
     * The DOM-compatible ID of the passage, created from the slugified passage title.
     * @since 2.37.0
     */
    id: string;

    /**
     * Returns the description of the passage (created from either an excerpt of the passage or the
     * Config.passages.descriptions object).
     * @since 2.0.0
     * @deprecated 2.37.0
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
