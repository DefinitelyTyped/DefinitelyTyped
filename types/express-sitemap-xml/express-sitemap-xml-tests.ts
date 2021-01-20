import express = require('express');
import expressSitemapXml = require('express-sitemap-xml');
import { buildSitemaps } from 'express-sitemap-xml';

const page2Leaf: expressSitemapXml.LeafObject = {
    changeFreq: 'weekly',
    lastMod: new Date(),
    url: '/page2',
};

const leaves = ['/page1', page2Leaf];
const base = 'http://example.com';
const getLeaves = () => leaves;
const getLeavesPromise = () => Promise.resolve(leaves);

expressSitemapXml.buildSitemaps(leaves, base).then(sitemap => typeof sitemap === 'object');
buildSitemaps(leaves, base).then(sitemap => typeof sitemap === 'object');

const sitemap1 = expressSitemapXml(getLeaves, base);
const sitemap2 = expressSitemapXml(getLeavesPromise, base);

express().use(sitemap1);
express().use(sitemap2);

async () => {
    const urls = [
        {
            url: '/1',
            lastMod: '2000-01-01',
            changeFreq: 'daily',
        },
        {
            url: '/2',
            lastMod: new Date('2000-02-02'),
            changeFreq: 'weekly',
        },
        {
            url: '/3',
        },
        '/4',
    ];
    // $ExpectType Sitemap
    const sitemap = await buildSitemaps(urls, 'https://example.com');
};
