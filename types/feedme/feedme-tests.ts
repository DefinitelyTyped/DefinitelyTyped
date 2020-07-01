import FeedMe = require("feedme");
import * as http from "http";

http.get('https://nodejs.org/en/feed/blog.xml', (res) => {
  const feedme = new FeedMe(true);
  const feedmeWithoutBuffer = new FeedMe();

  res.pipe(feedme);

  feedme.on('end', () => {
    const document: FeedMe.Document = feedme.done();

    const metatype: FeedMe.Type = document.type;
    // "#version": string;
    const metatitle: string = document.title;
    const metadescription: string = document.description;
    const metadate: string = document.date;
    const metapubdate: string = document.pubdate;
    const metalink: string = document.link;
    const metaxmlurl: string = document.xmlurl;
    const metaauthor: string = document.author;
    const metalanguage: string = document.language;
    const metaimage: FeedMe.Image = document.image;
    const metafavicon: string = document.favicon;
    const metacopyright: string = document.copyright;
    const metagenerator: string = document.generator;
    const metacategories: string[] = document.categories;

    switch (document.type) {
      case "atom":
      case "json":
      case "rss 0.90":
      case "rss 0.91":
      case "rss 0.92":
      case "rss 0.93":
      case "rss 0.94":
      case "rss 1.0":
      case "rss 2.0":
        break;
    }

    const misc: string = document["misc"];
  });

  feedme.on('item', (item) => {
    const title: string = item.title;
    const description: string = item.description;
    const summary: string = item.summary;
    const date: string = item.date;
    const pubdate: string = item.pubdate;
    const link: string = item.link;
    const origlink: string = item.origlink;
    const author: string = item.author;
    const guid: FeedMe.Guid | string = item.guid;
    const comments: string = item.comments;
    const image: FeedMe.Image = item.image;
    const categories: string[] = item.categories;
    const enclosures: string[] = item.enclosures;
    const meta: FeedMe.Meta = item.meta;

    const misc: string = item["misc"];
  });
});
