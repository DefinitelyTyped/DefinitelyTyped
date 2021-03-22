import Podcast = require('podcast');

// Adapted from example provided in module readme

const feedOptions: Podcast.FeedOptions = {
    title: 'title',
    description: 'description',
    feed_url: 'http://example.com/rss.xml',
    siteUrl: 'http://example.com',
    image_url: 'http://example.com/icon.png',
    docs: 'http://example.com/rss/docs.html',
    author: 'Dylan Greene',
    managingEditor: 'Dylan Greene',
    webMaster: 'Dylan Greene',
    copyright: '2013 Dylan Greene',
    language: 'en',
    categories: ['Category 1', 'Category 2', 'Category 3'],
    pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: 60,
    itunesAuthor: 'Max Nowack',
    itunesSubtitle: 'I am a sub title',
    itunesSummary: 'I am a summary',
    itunesOwner: { name: 'Max Nowack', email: 'max@unsou.de' },
    itunesExplicit: false,
    itunesCategory: [{
        text: 'Entertainment',
        subcats: [{
            text: 'Television'
        }]
    }],
    itunesImage: 'http://link.to/image.png',
    itunesType: 'serial',
};

const feedItem: Podcast.Item = {
    title:  'item title',
    description: 'use this for the content. It can include html.',
    url: 'http://example.com/article4?this&that',
    guid: '1123',
    categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    author: 'Guest Author',
    date: new Date('May 27, 2012'),
    lat: 33.417974,
    long: -111.933231,
    enclosure: { url: '...', file: 'path-to-file' },
    itunesAuthor: 'Max Nowack',
    itunesExplicit: false,
    itunesSubtitle: 'I am a sub title',
    itunesSummary: 'I am a summary',
    itunesDuration: 12345,
    itunesImage: 'http://link.to/image.png',
    itunesSeason: 2,
    itunesEpisode: 1,
    itunesTitle: 'iTunes Title',
    itunesEpisodeType: 'bonus',
};

// Test with duration formatted as string
const feedItem2: Podcast.Item = { ...feedItem, itunesDuration: '01:30:58' };

const feed1 = new Podcast(feedOptions);
feed1.addItem(feedItem);
feed1.addItem(feedItem2);
const feed1Xml = feed1.buildXml();

const feed2 = new Podcast(feedOptions, [feedItem]);
const feed2Xml1 = feed2.buildXml();
const feed2Xml2 = feed2.buildXml(true);
const feed2Xml3 = feed2.buildXml('  ');

console.log(feed1Xml, feed2Xml1, feed2Xml2, feed2Xml3);
