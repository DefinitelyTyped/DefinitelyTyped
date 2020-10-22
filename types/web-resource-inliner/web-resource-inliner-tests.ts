import { html, css } from 'web-resource-inliner';

const fileContent = '<p>some content</p>';
const cb = (error: any, result: any) => null;

html({ fileContent }, cb);
html({ fileContent, inlineAttribute: 'foo' }, cb);
html({ fileContent, images: true }, cb);
html({ fileContent, images: 8 }, cb);
html({ fileContent, svgs: true }, cb);
html({ fileContent, svgs: 8 }, cb);
html({ fileContent, scripts: true }, cb);
html({ fileContent, scripts: 8 }, cb);
html({ fileContent, links: true }, cb);
html({ fileContent, links: 8 }, cb);
html({ fileContent, relativeTo: 'http://foo.bar' }, cb);
html({ fileContent, rebaseRelativeTo: 'css' }, cb);
html({ fileContent, strict: true }, cb);
html(
    {
        fileContent,
        requestTransform(options) {
            // $ExpectType (UriOptions & CoreOptions) | (UrlOptions & CoreOptions)
            options;
            return options;
        },
    },
    cb
);
html(
    {
        fileContent,
        scriptTransform(content, done) {
            done(null, content);
        },
    },
    cb
);
html(
    {
        fileContent,
        linkTransform(content, done) {
            done(null, content);
        },
    },
    cb
);

css({ fileContent }, cb);
