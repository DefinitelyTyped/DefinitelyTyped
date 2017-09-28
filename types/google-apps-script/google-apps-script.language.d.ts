// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  export module Language {
    /**
     * The Language service provides scripts a way to compute automatic translations of text.
     *
     *      // The code below will write "Esta es una prueba" to the log.
     *      var spanish = LanguageApp.translate('This is a test', 'en', 'es');
     *      Logger.log(spanish);
     */
    export interface LanguageApp {
      translate(text: string, sourceLanguage: string, targetLanguage: string): string;
      translate(text: string, sourceLanguage: string, targetLanguage: string, advancedArgs: Object): string;
    }

  }
}

declare var LanguageApp: GoogleAppsScript.Language.LanguageApp;
