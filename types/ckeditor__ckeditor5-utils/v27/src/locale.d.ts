/**
 * Represents the localization services.
 */
export default class Locale {
    constructor(options?: { uiLanguage: string; contentLanguage: string });
    /**
     * The editor UI language code in the [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format.
     *
     * If the {@link #contentLanguage content language} was not specified in the `Locale` constructor,
     * it also defines the language of the content.
     *
     */
    readonly uiLanguage: string;
    /**
     * The editor content language code in the [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format.
     *
     * Usually the same as the {@link #uiLanguage editor language}, it can be customized by passing an optional
     * argument to the `Locale` constructor.
     *
     */
    readonly contentLanguage: string;
    /**
     * Text direction of the {@link #uiLanguage editor UI language}. Either `'ltr'` or `'rtl'`.
     *
     */
    readonly uiLanguageDirection: string;
    /**
     * Text direction of the {@link #contentLanguage editor content language}.
     *
     * If the content language was passed directly to the `Locale` constructor, this property represents the
     * direction of that language.
     *
     * If the {@link #contentLanguage editor content language} was derived from the {@link #uiLanguage editor language},
     * the content language direction is the same as the {@link #uiLanguageDirection UI language direction}.
     *
     * The value is either `'ltr'` or `'rtl'`.
     *
     */
    readonly contentLanguageDirection: string;
    /**
     * Translates the given message to the {@link #uiLanguage}. This method is also available in
     * {@link module:core/editor/editor~Editor#t `Editor`} and {@link module:ui/view~View#t `View`}.
     *
     * This method's context is statically bound to the `Locale` instance and **should always be called as a function**:
     *
     *  const t = locale.t;
     *  t( 'Label' );
     *
     * The message can be either a string or an object implementing the {@link module:utils/translation-service~Message} interface.
     *
     * The message may contain placeholders (`%<index>`) for value(s) that are passed as a `values` parameter.
     * For an array of values, the `%<index>` will be changed to an element of that array at the given index.
     * For a single value passed as the second argument, only the `%0` placeholders will be changed to the provided value.
     *
     *  t( 'Created file "%0" in %1ms.', [ fileName, timeTaken ] );
     *   t( 'Created file "%0", fileName );
     *
     * The message supports plural forms. To specify the plural form, use the `plural` property. Singular or plural form
     * will be chosen depending on the first value from the passed `values`. The value of the `plural` property is used
     * as a default plural translation when the translation for the target language is missing.
     *
     *  t( { string: 'Add a space', plural: 'Add %0 spaces' }, 1 ); // 'Add a space' for the English language.
     *  t( { string: 'Add a space', plural: 'Add %0 spaces' }, 5 ); // 'Add 5 spaces' for the English language.
     *  t( { string: '%1 a space', plural: '%1 %0 spaces' }, [ 2, 'Add' ] ); // 'Add 2 spaces' for the English language.
     *
     *   t( { string: 'Add a space', plural: 'Add %0 spaces' }, 1 ); // 'Dodaj spację' for the Polish language.
     *  t( { string: 'Add a space', plural: 'Add %0 spaces' }, 5 ); // 'Dodaj 5 spacji' for the Polish language.
     *  t( { string: '%1 a space', plural: '%1 %0 spaces' }, [ 2, 'Add' ] ); // 'Dodaj 2 spacje' for the Polish language.
     *
     *  * The message should provide an ID using the `id` property when the message strings are not unique and their
     * translations should be different.
     *
     *  translate( 'en', { string: 'image', id: 'ADD_IMAGE' } );
     *  translate( 'en', { string: 'image', id: 'AN_IMAGE' } );
     *
     * For messages supporting plural forms the first value will determine the plural form.
     */
    t: (message: string, values?: string[]) => string;
}
