// Type definitions for sitemap2 1.0
// Project: https://github.com/vlkosinov/sitemap2
// Definitions by: Yuichi Shundo <https://github.com/shundy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var sitemap2: Sitemap;

export = sitemap2;

interface Sitemap {
    new (conf?: SitemapConfig): Sitemap;

    addUrl(urlData: UrlData | UrlData[] | string | string[]): this;
    addSitemap(sm: Sitemap): this;
    toXML(): SitemapXml[];

    hostName: string;
    fileName: string;
    limit: number;
    urls: string[];
    childrens: Sitemap[];
}

interface SitemapConfig {
    hostName?: string;
    fileName?: string;
    limit?: number;
    cacheTime?: number;
    xslUrl?: string;
    urls?: string[];
    childrens?: Sitemap[];
}

interface UrlData {
    url: string;
    chengefreq?: string;
    priority?: number | string;
    lastmod?: Date;
    lastmodWithTime?: boolean;
    lastmodInISO?: boolean;
    video?: {
        title: string;
        description: string;
        thumbnail_loc: string;
        content_loc: string;
    };
}

interface SitemapXml {
    fileName: string;
    xml: string;
}
