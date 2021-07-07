// Type definitions for node-isbn 1.6
// Project: https://github.com/palmerabollo/node-isbn#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
import { AxiosRequestConfig } from "axios";

declare namespace isbn {
    interface Isbn {
        PROVIDER_NAMES: typeof PROVIDER_NAMES;

        /**
         * Provider API that gets chained before `resolve`. If this is specified, the
         * `resolve` fn will honor this order.
         *
         * @param providers - Array of providers. Must be one of more from `isbn.PROVIDER_NAMES`
         *
         * @example
         *
         * ```
         * isbn
         *  .provider([isbn.PROVIDER_NAMES.OPENLIBRARY, isbn.PROVIDER_NAMES.GOOGLE])
         *  .resolve(...)
         * ```
         */
        provider(providers: Providers): this;

        /**
         * Resolves book info, given an isbn
         * @param isbn
         */
        resolve(isbn: string, options: AxiosRequestConfig, callback?: ResolveCallback): void;
        resolve(isbn: string, options?: AxiosRequestConfig): Promise<Book>;
        resolve(isbn: string, callback: ResolveCallback): void;
    }

    const PROVIDER_NAMES: {
        GOOGLE: "google";
        OPENLIBRARY: "openlibrary";
        WORLDCAT: "worldcat";
        ISBNDB: "isbndb";
    };

    type Provider = typeof PROVIDER_NAMES[keyof typeof PROVIDER_NAMES];
    type Providers = Provider[];

    type BookLanguage = "en" | "es" | "fr" | "unknown";

    interface ResolveCallback {
        (error: Error | null, book: Book): void;
    }

    interface Book {
        authors: string[];
        categories: string[];
        description?: string;
        imageLinks?: {
            smallThumbnail: string;
            thumbnail: string;
        };
        industryIdentifiers: string[];
        infoLink: string;
        language: BookLanguage;
        pageCount?: number;
        previewLink: string;
        printType: "BOOK";
        publishedDate: string;
        publisher: string;
        title: string;
    }
}

/**
 * A simple node.js module that resolves books by ISBN using multiple services:
 * - Google Books API
 * - Open Library Books API
 * - WorldCat xISBN API
 * - ISBNdb API using API key in the environment variable ISBNDB_API_KEY
 *
 * @see {@link https://github.com/palmerabollo/node-isbn#examples}
 */
declare const Isbn: isbn.Isbn;

export = Isbn;
