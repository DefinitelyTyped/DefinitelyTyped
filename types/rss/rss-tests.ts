// this test is adapted from https://github.com/dylang/node-rss
import RSS = require("rss");

const feedOptions = {
    title: "title",
    description: "description",
    feed_url: "http://example.com/rss.xml",
    site_url: "http://example.com",
    image_url: "http://example.com/icon.png",
    docs: "http://example.com/rss/docs.html",
    managingEditor: "Dylan Greene",
    webMaster: "Dylan Greene",
    copyright: "2013 Dylan Greene",
    language: "en",
    categories: ["Category 1", "Category 2", "Category 3"],
    pubDate: "May 20, 2012 04:00:00 GMT",
    ttl: 60,
    custom_namespaces: {
        itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
    },
    custom_elements: [
        { "itunes:subtitle": "A show about everything" },
        { "itunes:author": "John Doe" },
        {
            "itunes:summary":
                "All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store",
        },
        {
            "itunes:owner": [
                { "itunes:name": "John Doe" },
                { "itunes:email": "john.doe@example.com" },
            ],
        },
        {
            "itunes:image": {
                _attr: {
                    href: "http://example.com/podcasts/everything/AllAboutEverything.jpg",
                },
            },
        },
    ],
};

const feedItem = {
    title: "item title",
    description: "use this for the content. It can include html.",
    url: "http://example.com/article4?this&that",
    guid: "1123",
    categories: ["Category 1", "Category 2", "Category 3", "Category 4"],
    author: "Guest Author",
    date: "May 27, 2012",
    lat: 33.417974,
    long: -111.933231,
    enclosure: { url: "...", file: "path-to-file" },
    custom_elements: [
        { "itunes:author": "John Doe" },
        { "itunes:subtitle": "A short primer on table spices" },
        {
            "itunes:image": {
                _attr: {
                    href: "http://example.com/podcasts/everything/AllAboutEverything/Episode1.jpg",
                },
            },
        },
        { "itunes:duration": "7:04" },
    ],
};

// creates an RSS feed with some attributes,
const feed = new RSS(feedOptions); // $ExpectType RSS

// add an item to the feed
feed.item(feedItem); // $ExpectType RSS

// generate an XML string from the feed
const xml = feed.xml(); // $ExpectType string

// creates an RSS feed with some attributes and items
const feedWithItems = new RSS(feedOptions, [feedItem]); // $ExpectType RSS
feedWithItems.xml(); // $ExpectType string

// test type exports
type Types = typeof RSS | RSS | RSS.FeedOptions | RSS.EnclosureObject | RSS.ItemOptions | RSS.XmlOptions;
