/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
    namespace Language {
        interface LanguageAdvancedParameters {
            /** the content type of the text; supported values are 'text' (default) and 'html' */
            contentType?: "html" | "text" | undefined;
        }
        /**
         * The Language service provides scripts a way to compute automatic translations of text.
         *
         *     // The code below will write "Esta es una prueba" to the log.
         *     var spanish = LanguageApp.translate('This is a test', 'en', 'es');
         *     Logger.log(spanish);
         */
        interface LanguageApp {
            translate(text: string, sourceLanguage: string, targetLanguage: string): string;
            translate(
                text: string,
                sourceLanguage: string,
                targetLanguage: string,
                advancedArgs: LanguageAdvancedParameters,
            ): string;
        }
    }
}

declare var LanguageApp: GoogleAppsScript.Language.LanguageApp;
