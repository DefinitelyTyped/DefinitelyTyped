// Type definitions for express-sitemap-xml 1.0
// Project: https://github.com/feross/express-sitemap-xml
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as express from 'express';

export interface Sitemap {
    [url: string]: string;
}

declare function expressSitemapXml(getUrls: (() => (string[] | Promise<string[]>)), base: string): express.RequestHandler;

declare namespace expressSitemapXml {
    function buildSitemaps(urls: string[], base: string): Promise<Sitemap>;
}

export default expressSitemapXml;
