import express = require("express");

/**
 * Create a sitemap.xml middleware.
 * @param getUrls Is called at most once per 24 hours. The resulting sitemap(s)
 *   are cached to make repeated HTTP requests faster.
 * @param base Specifies the base URL to be used in case any URLs are specified
 *   as relative URLs. The argument is also used if a sitemap index needs to be
 *   generated and sitemap locations need to be specified, e.g.
 *   `${base}/sitemap-0.xml` becomes `https://bitmidi.com/sitemap-0.xml`.
 */
declare function expressSitemapXml(
    getUrls: () => expressSitemapXml.SitemapLeaf[] | Promise<expressSitemapXml.SitemapLeaf[]>,
    base: string,
): express.RequestHandler;

declare namespace expressSitemapXml {
    interface LeafObject {
        changeFreq?: string | undefined;
        /** specify `true` for today's date */
        lastMod?: string | Date | true | undefined;
        url: string;
    }

    type SitemapLeaf = string | LeafObject;

    interface Sitemap {
        [leaf: string]: string;
    }

    /**
     * @async
     * Create an object where the keys are sitemap URLs to be served by the
     * server and the values are strings of sitemap XML content
     */
    function buildSitemaps(urls: SitemapLeaf[], base: string): Promise<Sitemap>;
}

export = expressSitemapXml;
