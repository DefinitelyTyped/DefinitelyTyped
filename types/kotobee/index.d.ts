type LanguageCode =
    | "ar"
    | "de"
    | "es"
    | "hu"
    | "jp"
    | "ms"
    | "no"
    | "pt"
    | "ru"
    | "tr"
    | "zh-tw"
    | "cy"
    | "en"
    | "fr"
    | "it"
    | "ko"
    | "nl"
    | "pl"
    | "ro"
    | "sw"
    | "zh-cn"
    | "zh";

type Directions = "ltr" | "rtl";

/**
 * Represents the current state and metadata of the loaded eBook in the Kotobee Reader.
 */
interface Book {
    /**
     * Information about the current chapter.
     */
    chapter: {
        /**
         * Whether this is not the last chapter.
         */
        notLastChapter: boolean;
        /**
         * Whether this is not the first chapter.
         */
        notFirstChapter: boolean;
        /**
         * Relative URL path of the current chapter.
         */
        url: string;
        /**
         * Fully qualified URL for the current chapter.
         */
        absoluteURL: string;
        /**
         * Title of the current chapter.
         */
        title: string;
        /**
         * Viewport settings or null if not specified.
         */
        viewport: null;
        /**
         * Layout type of the current chapter (e.g., 'reflowable' or 'fixed').
         */
        layout: string;
        /**
         * Current view mode (e.g., 'single', 'double', 'scroll', etc.).
         */
        view: string;
        /**
         * Indicates if the chapter is displayed in paged mode.
         */
        paged: boolean;
    };
    /**
     * Metadata describing the book, compatible with various standards.
     */
    meta: {
        /**
         * Dublin Core metadata fields.
         */
        dc: {
            /**
             * The book's title.
             */
            title: string;
            /**
             * Unique identifier for the book.
             */
            identifier: string;
            /**
             * Publication identifier.
             */
            "pub-id": string;
            /**
             * Book author/creator.
             */
            creator: string;
            /**
             * Publisher's name.
             */
            publisher: string;
            /**
             * Copyright or rights information.
             */
            rights: string;
            language: LanguageCode;
            /**
             * Book description or summary.
             */
            description: string;
        };
        /**
         * Cover image URL or path.
         */
        cover: string;
        /**
         * DCMI Terms metadata.
         */
        dcterms: {
            /**
             * Date and time of the last modification (ISO 8601).
             */
            modified: string;
        };
        /**
         * Epub3 'rendition' metadata.
         */
        rendition: {
            /**
             * Rendering/layout mode ("reflowable", "pre-paginated", etc.).
             */
            layout: string;
            /**
             * Device orientation ("portrait", "landscape", etc.).
             */
            orientation: string;
        };
        /**
         * Apple Books (iBooks) specific metadata.
         */
        ibooks: {
            /**
             * Whether the book is interactive ("true" or "false").
             */
            interactive: "true" | "false";
            /**
             * Whether specified fonts are used ("true" or "false").
             */
            "specified-fonts": "true" | "false";
        };
        /**
         * Kotobee-specific metadata.
         */
        kotobee: {
            /**
             * Kotobee reader version.
             */
            version: string;
            /**
             * Kotobee reader build number.
             */
            build: string;
        };
        /**
         * Schema.org accessibility metadata.
         */
        schema: {
            /**
             * The access mode (e.g., "textual", "visual").
             */
            accessmode: string;
            /**
             * Sufficient access modes ("textual", "visual", etc.).
             */
            accessmodesufficient: string;
            /**
             * Accessibility feature (e.g., "structuralNavigation").
             */
            accessibilityfeature: string;
            /**
             * Accessibility hazards ("none", "flashing", etc.).
             */
            accessibilityhazard: string;
            /**
             * Summary of the book's accessibility features.
             */
            accessibilitysummary: string;
        };
    };
    /**
     * Kotobee Book structure version.
     */
    version: number;
    /**
     * Book chapters serialized as a string (usually JSON or XML).
     */
    chapters: string;
}

interface KotobeeReader {
    /**
     * Clears cached local data used by the reader.
     */
    clearCache: () => void;

    /**
     * Clears all event listeners attached by the reader.
     */
    clearListeners: () => void;

    /**
     * Clears remotely fetched data (e.g., cloud sync, remote storage).
     */
    clearRemoteData: () => void;

    /**
     * Sets the active UI language of the reader.
     */
    setLanguage: (language: LanguageCode) => void;

    /**
     * Sets reading direction (left-to-right or right-to-left).
     */
    setDirection: (direction: Directions) => void;
    book: Book;
}

// Declare the global variable
declare const Kotobee: KotobeeReader;
