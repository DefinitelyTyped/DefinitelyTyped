import * as express from 'express';

import expressSitemapXml from 'express-sitemap-xml';

const urls = ['/page1', '/page2'];
const base = 'http://example.com';
const getUrls = () => urls;
const getUrlsPromise = () => Promise.resolve(urls);

expressSitemapXml.buildSitemaps(urls, base).then(sitemap => typeof sitemap === 'object');

const sitemap1 = expressSitemapXml(getUrls, base);
const sitemap2 = expressSitemapXml(getUrlsPromise, base);

express().use(sitemap1);
express().use(sitemap2);
