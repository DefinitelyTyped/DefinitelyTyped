import { parse } from 'react-native-rss-parser';

// -- Globals --
declare const fetch: (url: string) => Promise<any>;
declare const console: any;

fetch('http://rss-url.com')
    .then(response => response.text())
    .then(parse)
    .then(feed => {
        feed.authors[0].name; // $ExpectError
        feed.image.title.toUpperCase(); // $ExpectType string
        feed.image.height.toUpperCase(); // $ExpectError

        feed.items[0].id; // $ExpectType string
        feed.items[0].authors.name; // $ExpectError
    })
    .catch(console.error);
