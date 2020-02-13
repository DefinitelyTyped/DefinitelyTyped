import * as express from 'express';

import expressSitemapXml = require('express-sitemap-xml');

const page2Leaf: expressSitemapXml.LeafObject = {
    changeFreq: 'weekly',
    lastMod: new Date(),
    url: '/page2'
};

const leaves = ['/page1', page2Leaf];
const base = 'http://example.com';
const getLeaves = () => leaves;
const getLeavesPromise = () => Promise.resolve(leaves);

expressSitemapXml.buildSitemaps(leaves, base).then(sitemap => typeof sitemap === 'object');

const sitemap1 = expressSitemapXml(getLeaves, base);
const sitemap2 = expressSitemapXml(getLeavesPromise, base);

express().use(sitemap1);
express().use(sitemap2);
