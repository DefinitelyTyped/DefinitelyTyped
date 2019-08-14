import express = require('express');
import XRay = require('x-ray');

const x: XRay.Instance = XRay();

// README Examples
x('https://blog.ycombinator.com/', '.post', [{
        title: 'h1 a',
        link: '.article-title@href'
    }])
    .paginate('.nav-previous a@href')
    .limit(3)
    .write('results.json');

x('http://google.com', 'title')((err: Error, title: string) => {
    console.log(title); // Google
});

const fn: XRay.Callback = (err: Error, data: any) => {
    console.log(data);
};
x('http://reddit.com', '.content')(fn);
x('http://techcrunch.com', 'img.logo@src')(fn);
x('http://news.ycombinator.com', 'body@html')(fn);

const html = '<body><h2>Pear</h2></body>';
x(html, 'body', 'h2')((err: Error, header: string) => {
    console.log(header); // => Pear
});

const app = express();
app.get('/', (req: express.Request, res: express.Response) => {
    const stream = x('http://google.com', 'title').stream();
    stream.pipe(res);
});

x('https://dribbble.com', 'li.group', [{
        title: '.dribbble-img strong',
        image: '.dribbble-img [data-src]@data-src',
    }])
    .paginate('.next_page@href')
    .limit(3)
    .then((res: Array<{title: string, image: string}>) => {
        console.log(res[0]); // prints first result
    })
    .catch((err: Error) => {
        console.log(err); // handle error in promise
    });

x('http://google.com', {
    main: 'title',
    image: x('#gbar a@href', 'title'), // follow link to google images
})(fn);

x('http://mat.io', {
    title: 'title',
    items: x('.item', [{
        title: '.item-content h2',
        description: '.item-content section'
    }])
})(fn);

const x2 = XRay({
    filters: {
        trim: (value: string): string => {
            return typeof value === 'string' ? value.trim() : value;
        },
        reverse: (value: string): string => {
            return typeof value === 'string' ? value.split('').reverse().join('') : value;
        },
        slice: (value: string, start: string, end: string): string => {
            return typeof value === 'string' ? value.slice(+start, +end) : value;
        }
    }
});
x2('http://mat.io', {
  title: 'title | trim | reverse | slice:2,3'
})(fn);

// Examples
x(html, 'h2')(console.log);

x(html, {
    title: '.title',
    image: 'img@src',
    tags: ['li']
})(console.log);

x(html, ['a'])(console.log);

x(html, '.item', [{
    title: 'h2',
    tags: x('.tags', ['li'])
}])(console.log);

x(html, '.tags', [['li']])(console.log);

// Tests
x({
    title: 'title@text',
    image: x('#gbar a@href', 'title'),
    scoped_title: x('head', 'title'),
    inner: x('title', {
        title: '@text'
    })
})('http://www.google.com/ncr', fn);

x({
    list: x('body', {
      first: x('a@href', 'title')
    })
})(fn);

const pagedUrl = 'https://github.com/matthewmueller/x-ray/issues?q=is%3Aissue%20sort%3Acreated-asc%20';

x(pagedUrl, '.js-issue-row', [{ id: '@id', title: 'a.h4' }])
    .paginate('.next_page@href')
    .abort((_, url) => url.includes('page=3'));

const hasStringId = (obj: any): obj is {id: string} => {
    if (!!obj) return false;
    if (typeof obj !== 'object') return false;
    if (!('id' in obj)) return false;
    if (typeof obj.id !== 'string') return false;
    return true;
};

x(pagedUrl, '.js-issue-row', [{ id: '@id', title: 'a.h4' }])
    .paginate('.next_page@href')
    .abort((results) => results.some(result => {
        if (hasStringId(result) && result.id === 'issue_40') return true;
        return false;
    }));
