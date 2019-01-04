import linkifyUrls = require('linkify-urls');

// $ExpectType string
linkifyUrls('See https://sindresorhus.com', {
    attributes: {
        class: 'unicorn',
        one: 1,
        foo: true,
        multiple: ['a', 'b'],
    },
});
// $ExpectType string
linkifyUrls('See https://sindresorhus.com', {
    value: 'foo',
});
// $ExpectType string
linkifyUrls('See https://sindresorhus.com/foo', {
    value: url => new URL(url).pathname,
});
// $ExpectType string
linkifyUrls('See https://sindresorhus.com/foo', {
    type: 'string',
});

const fragment = linkifyUrls('See https://sindresorhus.com', {
    type: 'dom',
    attributes: {
        class: 'unicorn',
    },
});

// $ExpectType DocumentFragment
fragment;

document.body.appendChild(fragment);
