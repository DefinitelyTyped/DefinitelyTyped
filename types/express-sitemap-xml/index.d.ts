// Type definitions for express-sitemap-xml 1.0
// Project: https://github.com/feross/express-sitemap-xml
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from 'express';

declare function expressSitemapXml(getUrls: (() => (expressSitemapXml.SitemapLeaf[] | Promise<expressSitemapXml.SitemapLeaf[]>)), base: string): express.RequestHandler;

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

   function buildSitemaps(urls: SitemapLeaf[], base: string): Promise<Sitemap>;
}

export = expressSitemapXml;
