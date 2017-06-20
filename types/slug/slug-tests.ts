import slug = require('slug');
const print = console.log.bind(console, '>');

print(slug('i ♥ unicode'));
// > i-love-unicode

print(slug('unicode ♥ is ☢')); // yes!
// > unicode-love-is-radioactive

print(slug('i ♥ unicode', '_')); // If you prefer something else then `-` as seperator
// > i_love_unicode

slug.charmap['♥'] = 'freaking love'; // change default charmap or use option {charmap:{…}} as 2. argument
print(slug('I ♥ UNICODE'));
// > I-freaking-love-UNICODE

print(slug('☏-Number', {lower: true})); // If you prefer lower case
// > telephone-number

print(slug('i <3 unicode'));
// > i-love-unicode

// options is either object or replacement (sets options.replacement)
slug('string', { } || 'replacement');
slug.defaults.mode = 'pretty';
slug.defaults.modes['rfc3986'] = {
    replacement: '-',      // replace spaces with replacement
    symbols: true,         // replace unicode symbols or not
    remove: null,          // (optional) regex to remove characters
    lower: true,           // result in lower case
    charmap: slug.charmap, // replace special characters
    multicharmap: slug.multicharmap // replace multi-characters
};
slug.defaults.modes['pretty'] = {
    replacement: '-',
    symbols: true,
    remove: /[.]/g,
    lower: false,
    charmap: slug.charmap,
    multicharmap: slug.multicharmap
};
