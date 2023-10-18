import SitemapGenerator = require("sitemap-generator");

// @ts-expect-error
SitemapGenerator();

SitemapGenerator("https://example.com/");

SitemapGenerator("https://example.com/", {});

const generator = SitemapGenerator("https://example.com/", {
    changeFreq: "always",
    filepath: "./sitemap.xml",
    ignore: url => /foo/g.test(url),
    ignoreAMP: true,
    lastMod: false,
    maxEntriesPerFile: 1000,
    priorityMap: [0.0, 0.4, 1.0],
    // simplecrawler props
    userAgent: "Node/SitemapGenerator",
    stripQuerystring: false,
    // @ts-expect-error
    wait: () => {},
});

generator.on("add", (url: string) => {
    url.trim();
});
generator.on("add", () => {});
generator.on("done", () => {});
generator.on("ignore", (url: string) => {
    url.trim();
});
generator.on("ignore", () => {});
generator.on("error", error => {
    error.message;
});
// @ts-expect-error
generator.on("bar", () => {});
generator.on("add", error => {
    // @ts-expect-error
    error.message;
});

generator.start();
generator.stop();

const crawler = generator.getCrawler();
const sitemap = generator.getSitemap();

crawler.on("crawlstart", () => {
    sitemap.addURL("/my/static/url");
});

generator.queueURL("https://example.com/");
