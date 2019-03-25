// Type definitions for express-sitemap 1.8
// Project: https://github.com/hex7c0/express-sitemap
// Definitions by: Ralph Khattar <https://github.com/ralouphie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Express, Response, Router } from "express";

declare function expressSitemap(
    options?: expressSitemap.SitemapOptions
): expressSitemap.Sitemap;

declare namespace expressSitemap {
    type Generated = any;
    type Callback = (error: any) => void;

    interface MapObject {
        [key: string]: string[];
    }
    interface RouteObject {
        [key: string]: any;
    }
    interface AlternatePage {
        rel?: string;
        hreflang?: string;
        href?: string;
    }

    interface SitemapOptions {
        /**
         * Website HTTP protocol (`'http'` | `'https'`) (default `'http'`).
         */
        http?: "http" | "https";

        /**
         * Enable cache integration, refresh map after this millisecond value (default disabled).
         */
        cache?: number;

        /**
         * Website URL (default `'127.0.0.1'`).
         */
        url?: string;

        /**
         * Website Port (default `80`).
         */
        port?: number;

        /**
         * Head of XML file (default `''`).
         */
        head?: string;

        /**
         * String Name of sitemap file (default `'sitemap.xml'`).
         */
        sitemap?: string;

        /**
         * Name of robots file (default `'robots.txt'`).
         */
        robots?: string;

        /**
         * Set `Sitemap` absolute location into robots (default disabled).
         */
        sitemapSubmission?: string;

        /**
         * Add extra information to sitemap related to this documentation (default disabled).
         */
        route?: RouteObject;

        /**
         * Integrity not controlled.
         */
        lastmod?: Date;

        /**
         * Integrity not controlled.
         */
        changefreq?: string;

        /**
         * Integrity not controlled.
         */
        priority?: number;

        /**
         * Add alternate language pages related to this documentation.
         */
        alternatepages?: AlternatePage[];

        /**
         * Flag for "allow" this route from parsing, and save into robots.txt (default `false`).
         */
        allow?: boolean;

        /**
         * Flag for "disallow" this route from parsing, and save into robots.txt (default `false`).
         */
        disallow?: boolean;

        /**
         * Flag for hide this route from globally parsing (no .xml or .txt) (default `false`).
         */
        hide?: boolean;

        /**
         * Force route () detection and building (default disabled).
         */
        map?: MapObject;

        /**
         * Array of RegEx that remove routes from output (default disabled).
         */
        hideByRegex?: (string | RegExp)[];

        /**
         * Fastly generate sitemap from express app (default disabled).
         */
        generate?: any;
    }

    interface Sitemap {
        /**
         * Generate sitemap object. GET only.
         *
         * @param app Express app.
         * @param router Express nested router path.
         * @param store Store this path inside class.
         *
         * @return The generated sitemap data.
         */
        generate(app: Express, router?: Router, store?: boolean): Generated;

        /**
         * Generate sitemap object for Express v4. GET only.
         *
         * @param app Express app.
         * @param router Express nested router path.
         * @param store Store this path inside class.
         *
         * @return The generated sitemap data.
         */
        generate4(app: Express, router?: Router, store?: boolean): Generated;

        /**
         * Generate sitemap object for Express v3. GET only.
         *
         * @param app Express app.
         * @param router Express nested router path.
         * @param store Store this path inside class.
         *
         * @return The generated sitemap data.
         */
        generate3(app: Express, router?: Router, store?: boolean): Generated;

        /**
         * Generate sitemap object with tickle.
         *
         * @return The generated sitemap data.
         */
        tickle(): Generated;

        /**
         * Reset the sitemap.
         *
         * @return The generated sitemap data.
         */
        reset(): Generated;

        /**
         * Create XML from sitemap.
         *
         * @return The XML data.
         */
        xml(): string;

        /**
         * Create txt from sitemap.
         *
         * @return The txt data.
         */
        txt(): string;

        /**
         * Write XML to file.
         *
         * @param path Overrides the original `sitemap` option given to the class.
         * @param next Callback.
         */
        XMLtoFile(path: string, next?: Callback): void;

        /**
         * Write txt to file.
         *
         * @param path Overrides the original `robots` option given to the class.
         * @param next Callback.
         */
        TXTtoFile(path: string, next?: Callback): void;

        /**
         * Write both XML and txt files.
         *
         * @param next Callback.
         */
        toFile(next?: Callback): void;

        /**
         * Stream XML sitemap to given response.
         *
         * @param res Express response to stream to.
         */
        XMLtoWeb(res: Response): void;

        /**
         * Stream txt robots to given response.
         *
         * @param res Express response to stream to.
         */
        TXTtoWeb(res: Response): void;
    }
}

export = expressSitemap;
