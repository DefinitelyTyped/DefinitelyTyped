//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.i18n
 *
 * Use the <code>browser.i18n</code> infrastructure to implement internationalization across your whole app or extension.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
export namespace I18n {
    /**
     * An ISO language code such as <code>en</code> or <code>fr</code>. For a complete list of languages supported by this
     * method, see <a href='http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc'>
     * kLanguageInfoTable</a>. For an unknown language, <code>und</code> will be returned, which means that [percentage]
     * of the text is unknown to CLD
     */
    type LanguageCode = string;

    /**
     * LanguageDetectionResult object that holds detected langugae reliability and array of DetectedLanguage
     */
    interface DetectLanguageCallbackResultType {
        /**
         * CLD detected language reliability
         */
        isReliable: boolean;

        /**
         * array of detectedLanguage
         */
        languages: DetectLanguageCallbackResultTypeLanguagesItemType[];
    }

    /**
     * DetectedLanguage object that holds detected ISO language code and its percentage in the input string
     */
    interface DetectLanguageCallbackResultTypeLanguagesItemType {
        language: LanguageCode;

        /**
         * The percentage of the detected language
         */
        percentage: number;
    }

    interface Static {
        /**
         * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale,
         * use $(ref:i18n.getUILanguage).
         */
        getAcceptLanguages(): Promise<LanguageCode[]>;

        /**
         * Gets the localized string for the specified message. If the message is missing, this method returns an empty string ('').
         * If the format of the <code>getMessage()</code> call is wrong &mdash; for example, <em>messageName</em>
         * is not a string or the <em>substitutions</em> array has more than 9 elements &mdash; this method returns <code>
         * undefined</code>.
         *
         * @param messageName The name of the message, as specified in the <code>$(topic:i18n-messages)[messages.json]</code> file.
         * @param substitutions Optional. Substitution strings, if the message requires any.
         * @returns Message localized for current locale.
         */
        getMessage(messageName: string, substitutions?: string[] | string): string;

        /**
         * Gets the browser UI language of the browser. This is different from $(ref:i18n.getAcceptLanguages)
         * which returns the preferred user languages.
         *
         * @returns The browser UI language code such as en-US or fr-FR.
         */
        getUILanguage(): string;

        /**
         * Detects the language of the provided text using CLD.
         *
         * @param text User input string to be translated.
         */
        detectLanguage(text: string): Promise<DetectLanguageCallbackResultType>;
    }
}
