// Type definitions for angular-gettext v2.1.0
// Project: https://angular-gettext.rocketeer.be/
// Definitions by: Ákos Lukács <https://github.com/AkosLukacs>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.gettext {
  interface gettextCatalog {

    //////////////
    /// Fields ///
    //////////////

    /** (default: false): Whether or not to prefix untranslated strings with [MISSING]: or a custom prefix. */
    debug: boolean;
    /** (default: [MISSING]:): Custom prefix for untranslated strings. */
    debugPrefix: string;
    /** (default: false): Whether or not to wrap all processed text with markers.Example output: [Welcome] */
    showTranslatedMarkers: boolean;
    /** (default: [): Custom prefix to mark strings that have been run through angular-gettext. */
    translatedMarkerPrefix: string;
    /** (default: ]): Custom suffix to mark strings that have been run through angular-gettext. */
    translatedMarkerSuffix: string;
    /** An object of loaded translation strings.Shouldn't be used directly. */
    strings: {};
    /** The default language, in which you're application is written. This defaults to English and it's generally a bad idea to use anything else: if your language has different pluralization rules you'll end up with incorrect translations. Deprecated 
     * @deprecreated
     */
    baseLanguage: string;


    ///////////////
    /// Methods ///
    ///////////////

    /** Sets the current language and makes sure that all translations get updated correctly. */
    setCurrentLanguage(lang: string): void;

    /** Returns the current language. */
    getCurrentLanguage(): string;

    /** Processes an object of string definitions. More details https://angular-gettext.rocketeer.be/dev-guide/manual-setstrings/
     * @param language A language code.
     * @param strings A dictionary of strings. The format of this dictionary is:
     *                   - Keys: Singular English strings (as defined in the source files)
     *                   - Values: Either a single string for signular-only strings or an array of plural forms.
     */
    setStrings(language: string, strings: { [key: string]: string|string[] }): void;

    /** Get the correct pluralized (but untranslated) string for the value of n. */
    getStringForm(string: string, n: number): string;

    /** Translate a string with the given context. Uses Angular.JS interpolation, so something like this will do what you expect: 
     * var hello = gettextCatalog.getString("Hello {{name}}!", { name: "Ruben" });
     * // var hello will be "Hallo Ruben!" in Dutch.
     * The context parameter is optional: pass null (or don't pass anything) if you're not using it: this skips interpolation and is a lot faster.
     */
    getString(string: string, context?: any): string;

    /** Translate a plural string with the given context. */
    getPlural(n: number, string: string, stringPlural: string, context?: any): string;

    /** Load a set of translation strings from a given URL.This should be a JSON catalog generated with grunt-angular-gettext. More details https://angular-gettext.rocketeer.be/dev-guide/lazy-loading/ */
    loadRemote(url: string): ng.IHttpPromise<any>;
  }

  /** If you have text that should be translated in your JavaScript code, wrap it with a call to a function named gettext. This module provides an injectable function to do so */
  interface gettextFunction {
    (dummyString: string): string;
  }
}

