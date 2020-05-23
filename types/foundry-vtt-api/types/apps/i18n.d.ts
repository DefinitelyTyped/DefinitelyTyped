/**
 * A helper class which assists with localization and string translation
 */
declare class Localization {
    /**
     * The target language for localization
     */
    lang: string;

    /**
     * The translation dictionary for the target language
     */
    translations: object;

    constructor();

    /**
     * Initialize the Localization module
     * Discover available language translations and apply the current language setting
     */
    initialize(): Promise<any>;

    /**
     * Discover the available supported languages from the set of packages which are provided
     */
    protected _discoverLanguages(): void;

    /**
     * Prepare the dictionary of translation strings for the requested language
     * @param lang	The language for which to load translations
     */
    protected _getTranslations(lang: string): Promise<any>;

    /**
     * Load a single translation file and return its contents as processed JSON
     * @param src	The translation file path to load
     */
    protected _loadTranslationFile(src: string): Promise<any>;

    /**
     * Set a language as the active translation source for the session
     * @param lang	A language string in CONFIG.supportedLanguages
     * @return 		A Promise which resolves once the translations for the requested language are ready
     */
    setLanguage(lang: string): Promise<any>;

    /**
     * Localize a string by drawing a translation from the available translations dictionary, if available
     * If a translation is not available, the original string is returned
     * @param stringId	The string ID to translate
     * @return			The translated string
     */
    localize(stringId: string): string;
}
