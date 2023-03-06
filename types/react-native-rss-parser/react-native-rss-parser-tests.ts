import { parse } from 'react-native-rss-parser';

// -- Globals --
declare const fetch: (url: string) => Promise<any>;
declare const console: any;

fetch('http://rss-url.com')
    .then(response => response.text())
    .then(parse)
    .then(feed => {
        // @ts-expect-error
        feed.authors[0].name;
        feed.image.title.toUpperCase(); // $ExpectType string
        // @ts-expect-error
        feed.image.height.toUpperCase();

        feed.items[0].id; // $ExpectType string
        // @ts-expect-error
        feed.items[0].authors.name;
    })
    .catch(console.error);
