import * as FeedMe from "feedme";
import * as http from "http";

http.get('https://nodejs.org/en/feed/blog.xml', function(res) {
  var feedme = new FeedMe(true);
  var feedmeWithoutBuffer = new FeedMe();

  res.pipe(feedme);

  feedme.on('end', function() {
    let document: FeedMe.Document = feedme.done();
    
    let metatype: FeedMe.Type = document.type;
    // "#version": string;
    let metatitle: string = document.title;
    let metadescription: string = document.description;
    let metadate: string = document.date;
    let metapubdate: string = document.pubdate;
    let metalink: string = document.link;
    let metaxmlurl: string = document.xmlurl;
    let metaauthor: string = document.author;
    let metalanguage: string = document.language;
    let metaimage: FeedMe.Image = document.image;
    let metafavicon: string = document.favicon;
    let metacopyright: string = document.copyright;
    let metagenerator: string = document.generator;
    let metacategories: string[] = document.categories;

    if (document.type == "atom" || 
        document.type == "json" || 
        document.type == "rss 0.90" || 
        document.type == "rss 0.91" || 
        document.type == "rss 0.92" || 
        document.type == "rss 0.93" || 
        document.type == "rss 0.94" || 
        document.type == "rss 1.0" || 
        document.type == "rss 2.0") {

    }

    let misc: string = document["misc"];
  });

  feedme.on('item', function(item) {
    let title:string = item.title;
    let description: string = item.description;
    let summary: string = item.summary;
    let date: string = item.date;
    let pubdate: string = item.pubdate;
    let link: string = item.link;
    let origlink: string = item.origlink;
    let author: string = item.author;
    let guid: FeedMe.Guid | string = item.guid;
    let comments: string = item.comments;
    let image: FeedMe.Image = item.image;
    let categories: string[] = item.categories;
    let enclosures: string[] = item.enclosures;
    let meta: FeedMe.Meta = item.meta;

    let misc: string = item["misc"];
  });
});