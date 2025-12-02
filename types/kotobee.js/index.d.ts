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

interface KotobeeReader {
    clearCache: () => void;
    clearListeners: () => void;
    clearRemoteData: () => void;
    setLanguage: (language: LanguageCode) => void;
    setDirection: (direction: Directions) => void;
}

export default KotobeeReader;
