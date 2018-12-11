// Type definitions for express-sitemap-xml 1.0
// Project: https://github.com/feross/express-sitemap-xml
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as express from 'express';

export interface LeafObject {
    changeFreq?: string;
    lastMod?: string | Date;
    url: string;
}

export type SitemapLeaf = string | LeafObject;

export interface Sitemap {
    [leaf: string]: string;
}

declare function expressSitemapXml(getUrls: (() => (SitemapLeaf[] | Promise<SitemapLeaf[]>)), base: string): express.RequestHandler;

declare namespace expressSitemapXml {
    function buildSitemaps(urls: SitemapLeaf[], base: string): Promise<Sitemap>;
}

export default expressSitemapXml;
