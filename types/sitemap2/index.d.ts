declare var sitemap2: Sitemap;

export = sitemap2;

interface Sitemap {
    new(conf?: SitemapConfig): Sitemap;

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
    hostName?: string | undefined;
    fileName?: string | undefined;
    limit?: number | undefined;
    cacheTime?: number | undefined;
    xslUrl?: string | undefined;
    urls?: string[] | undefined;
    childrens?: Sitemap[] | undefined;
}

interface UrlData {
    url: string;
    chengefreq?: string | undefined;
    priority?: number | string | undefined;
    lastmod?: Date | undefined;
    lastmodWithTime?: boolean | undefined;
    lastmodInISO?: boolean | undefined;
    video?: {
        title: string;
        description: string;
        thumbnail_loc: string;
        content_loc: string;
    } | undefined;
}

interface SitemapXml {
    fileName: string;
    xml: string;
}
