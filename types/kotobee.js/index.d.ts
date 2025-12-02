export type LanguageCode =
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

export type Directions = "ltr" | "rtl";

export interface KotobeeReader {
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
}

export default KotobeeReader;
