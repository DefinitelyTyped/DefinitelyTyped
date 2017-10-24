import request = require('request');
import * as FeedParser from "feedparser";

const req = request('https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&output=rss');
const feedparser = new FeedParser({});

req.on("error", error => {
  // handle any request errors
});

req.on("response", res => {
  if (res.statusCode !== 200) {
    req.emit('error', new Error('Bad status code'));
  } else {
    req.pipe(feedparser);
  }
});

feedparser.on('error', (error: Error) => {
  // always handle errors
});

feedparser.on('readable', () => {
  // This is where the action is!
  const stream = feedparser;
  const meta = feedparser.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  let item: FeedParser.Item;

  while (item = stream.read()) {
    console.log(item);
  }
});
