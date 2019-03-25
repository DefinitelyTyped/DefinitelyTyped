import * as express from "express";

import expressSitemap = require("express-sitemap");

const sitemap = expressSitemap({
    http: "https",
    cache: 100,
    url: "127.0.0.1",
    port: 1337,
    head: "",
    sitemap: "sitemap.xml",
    robots: "robots.txt",
    sitemapSubmission: "sitemap.xml",
    route: {
        "/foo": {
            lastmod: "2014-06-20",
            changefreq: "always",
            priority: 1.0
        },
        "/admin": {
            disallow: true
        },
        "/backdoor": {
            hide: true
        }
    },
    lastmod: new Date(),
    changefreq: "",
    priority: 1,
    alternatepages: [{ href: "", hreflang: "", rel: "" }],
    allow: true,
    disallow: false,
    hide: false,
    map: {
        "/foo": ["get"],
        "/foo2": ["get", "post"],
        "/admin": ["get"],
        "/backdoor": []
    },
    hideByRegex: ["string", /regex/g],
    generate: {}
});

const res: express.Response = undefined as any;
const app = express();
const router: express.Router = undefined as any;
const callback: expressSitemap.Callback = error => {
    console.log(error);
};

sitemap.TXTtoFile("path.txt", callback);
sitemap.XMLtoFile("path.txt", callback);
sitemap.TXTtoWeb(res);
sitemap.XMLtoWeb(res);
sitemap.generate(app);
sitemap.generate(app, router);
sitemap.generate(app, router, false);
sitemap.generate3(app);
sitemap.generate3(app, router);
sitemap.generate3(app, router, false);
sitemap.generate4(app);
sitemap.generate4(app, router);
sitemap.generate4(app, router, false);
sitemap.reset();
sitemap.tickle();
sitemap.toFile(callback);
const txt: string = sitemap.txt();
const xml: string = sitemap.xml();
