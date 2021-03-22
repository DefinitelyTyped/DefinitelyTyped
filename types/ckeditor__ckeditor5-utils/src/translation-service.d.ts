export interface GetPluralForm {
    (n: number): boolean | number;
}

/**
 * Adds translations to existing ones or overrides the existing translations. These translations will later
 * be available for the {@link module:utils/locale~Locale#t `t()`} function.
 *
 * The `translations` is an object which consists of `messageId: translation` pairs. Note that the message ID can be
 * either constructed from the message string or from the message ID if it was passed
 * (this happens rarely and mostly for short messages or messages with placeholders).
 * Since the editor displays only the message string, the message ID can be found either in the source code or in the
 * built translations for another language.
 *
 *  add( 'pl', {
 *   'Cancel': 'Anuluj',
 *   'IMAGE': 'obraz', // Note that the `IMAGE` comes from the message ID, while the string can be `image`.
 *  } );
 *
 * If the message is supposed to support various plural forms, make sure to provide an array with the singular form and all plural forms:
 *
 *  add( 'pl', {
 *    'Add space': [ 'Dodaj spację', 'Dodaj %0 spacje', 'Dodaj %0 spacji' ]
 *   } );
 *
 * You should also specify the third argument (the `getPluralForm()` function) that will be used to determine the plural form if no
 * language file was loaded for that language. All language files coming from CKEditor 5 sources will have this option set, so
 * these plural form rules will be reused by other translations added to the registered languages. The `getPluralForm()` function
 * can return either a Boolean or a number.
 *
 *   add( 'en', {
 *    // ... Translations.
 *   }, n => n !== 1 );
 *   add( 'pl', {
 *    // ... Translations.
 *   }, n => n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && ( n % 100 < 10 || n % 100 >= 20 ) ? 1 : 2 );
 *
 * All translations extend the global `window.CKEDITOR_TRANSLATIONS` object. An example of this object can be found below:
 *
 *   {
 *    pl: {
 *    dictionary: {
 *    	'Cancel': 'Anuluj',
 *    	'Add space': [ 'Dodaj spację', 'Dodaj %0 spacje', 'Dodaj %0 spacji' ]
 *    },
 *    // A function that returns the plural form index.
 *    getPluralForm: n => n !==1
 *   }
 *   // Other languages.
 *  }
 *
 * If you cannot import this function from this module (e.g. because you use a CKEditor 5 build), you can
 * still add translations by extending the global `window.CKEDITOR_TRANSLATIONS` object by using a function like
 * the one below:
 *
 *  function addTranslations( language, translations, getPluralForm ) {
 *   if ( !window.CKEDITOR_TRANSLATIONS ) {
 *    window.CKEDITOR_TRANSLATIONS = {};
 *   }
 *   if ( !window.CKEDITOR_TRANSLATIONS[ language ] ) {
 *    window.CKEDITOR_TRANSLATIONS[ language ] = {};
 *   }
 *
 *   const languageTranslations = window.CKEDITOR_TRANSLATIONS[ language ];
 *
 *    languageTranslations.dictionary = languageTranslations.dictionary || {};
 *    languageTranslations.getPluralForm = getPluralForm || languageTranslations.getPluralForm;
 *
 *   // Extend the dictionary for the given language.
 *   Object.assign( languageTranslations.dictionary, translations );
 *  }
 *
 * For each message ID the value should be either a translation or an array of translations if the message should support plural forms.
 */
export function add(language: string, translations: Record<string, string>, getPluralForm?: GetPluralForm): void;
