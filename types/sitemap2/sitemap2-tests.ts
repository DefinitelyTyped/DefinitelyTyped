import Sitemap = require('sitemap2');

const sitemap = new Sitemap({
    hostName: ('https://example.com/'),
    fileName: 'sitemap.xml',
    limit: 50000,
    cacheTime: 1000,
});

sitemap.addUrl('https://example.com/');
sitemap.addUrl(['https://example.com/']);
sitemap.addUrl({
    url: 'https://example.com/',
    chengefreq: 'chengefreq',
    priority: 0.6,
    lastmod: new Date(),
    lastmodWithTime: true,
    lastmodInISO: false,
    video: {
        title: 'title',
        description: 'description',
        content_loc: 'content_loc',
        thumbnail_loc: 'thumbnail_loc'
    },
});
sitemap.addUrl([
    {
        url: 'https://example.com/',
        chengefreq: 'chengefreq',
        priority: 0.6,
        lastmod: new Date(),
        lastmodWithTime: true,
        lastmodInISO: false,
        video: {
            title: 'title',
            description: 'description',
            content_loc: 'content_loc',
            thumbnail_loc: 'thumbnail_loc'
        },
    },
    {
        url: 'http://example.com/'
    }
]);

const sitemap2 = new Sitemap();
sitemap.addSitemap(sitemap2);

const xmlList = sitemap.toXML();
let str = xmlList[0].fileName;
str = xmlList[0].xml;
