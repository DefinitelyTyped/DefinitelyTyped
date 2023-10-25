/// <reference types="gapi" />

declare namespace gapi.client.language {
    export interface detections {
        /**
         * Detect the language of text.
         */
        list(object: {
            /**
             * The text to detect
             */
            q: string[];
            /**
             * Selector specifying which fields to include in a partial response.
             */
            fields?: string | undefined;
        }): HttpRequest<GoogleApiTranslateDetectionListResponse>;
    }

    export interface languages {
        /**
         * List the source/target languages supported by the API
         */
        list(object: {
            /**
             * the language and collation in which the localized results should be returned
             */
            target?: string | undefined;
            /**
             * Selector specifying which fields to include in a partial response.
             */
            fields?: string | undefined;
        }): HttpRequest<GoogleApiTranslateLanguageListResponse>;
    }

    export interface translations {
        /**
         * Returns text translations from one language to another.
         */
        list(object: {
            /**
             *  The text to translate
             */
            q: string[];
            /**
             * The target language into which the text should be translated
             */
            target: string;
            /**
             * The customization id for translate
             */
            cid?: string[] | undefined;
            /**
             * This optional parameter allows you to indicate that the text to be translated is either plain-text or HTML. A value of html indicates HTML and a value of text indicates plain-text
             */
            format?: string | undefined;
            /**
             * The source language of the text
             */
            source?: string | undefined;
            /**
             * Selector specifying which fields to include in a partial response.
             */
            fields?: string | undefined;
            /**
             * If prettyprint=true, the results returned by the server will be human readable (pretty printed).
             */
            prettyprint?: string | undefined;
        }): HttpRequest<GoogleApiTranslateTranslationListResponse>;
    }
}

interface GoogleApiTranslateTranslationListResponse {
    data: {
        translations: {
            translatedText: string;
            detectedSourceLanguage: string;
        }[];
    };
}

interface GoogleApiTranslateLanguageListResponse {
    data: {
        languages: {
            language: string;
            name: string;
        }[];
    };
}

interface GoogleApiTranslateDetectionListResponse {
    data: {
        detections: {
            language: string;
            confidence: number;
        }[][];
    };
}
