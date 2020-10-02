// Type definitions for express-sitemap-xml 1.1
// Project: https://github.com/feross/express-sitemap-xml
// Definitions by: Florian Keller <https://github.com/ffflorian>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

/**
 * Express middleware to serve {@link https://en.wikipedia.org/wiki/Sitemaps|`sitemap.xml`} from a list of URLs
 * Create a sitemap.xml middleware.
 */
declare function expressSitemapXml(
    getUrls: () => expressSitemapXml.SitemapLeaf[] | Promise<expressSitemapXml.SitemapLeaf[]>,
    base: string,
): express.RequestHandler;

declare namespace expressSitemapXml {
    interface LeafObject {
        changeFreq?: string;
        lastMod?: string | Date;
        url: string;
    }

    type SitemapLeaf = string | LeafObject;

    interface Sitemap {
        [leaf: string]: string;
    }

    /**
     *
     * Create an object where the keys are sitemap URLs to be served by the server
     * and the values are strings of sitemap XML content
     */
    function buildSitemaps(urls: SitemapLeaf[], base: string): Promise<Sitemap>;
}

export = expressSitemapXml;
