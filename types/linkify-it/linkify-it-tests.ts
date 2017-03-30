import LinkifyIt = require('linkify-it');

// fluent interface
const linkifier = new LinkifyIt();

linkifier
    .add('git:', 'http:')
    .set({ fuzzyIP: true })
    .tlds('onion', true)
    .test("https://github.com/DefinitelyTyped/DefinitelyTyped/");

// match
const matches = linkifier.match("https://github.com/DefinitelyTyped/DefinitelyTyped/");
matches.forEach(({index, lastIndex, raw, schema, text, url}) => {});

// complex rule
linkifier.add('@', {
    validate: (text, pos, self) => {
        return 42;
    },
    normalize: (match) => {
        return 'forty-two';
    }
});
