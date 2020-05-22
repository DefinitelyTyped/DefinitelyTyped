import createHyphenator = require('hyphen');
import hyphenationPatternsDe1996 = require('hyphen/patterns/de-1996');
import hyphenationPatternsHu = require('hyphen/patterns/hu');
import hyphenationPatternsEnGb = require('hyphen/patterns/en-gb');
import { FactoryOptions } from "hyphen/common";
import { hyphenate as hyphenateEnGbAsync } from 'hyphen/en-gb';

// Test with HTML
const hyphenateDe1996FactoryOptions: FactoryOptions = { hyphenChar: '-', html: true };
const hyphenateDe1996 = createHyphenator(hyphenationPatternsDe1996, hyphenateDe1996FactoryOptions);
if (hyphenateDe1996('<section>Silbentrennung</section>') !== '<section>Sil-ben-tren-nung</section>') {
    throw new Error('Test failed');
}

// Test with debug output
const hyphenateHu = createHyphenator(hyphenationPatternsHu, { debug: true });
if (hyphenateHu('szóelválasztás', { hyphenChar: '|' }) !== 'szó|el|vá|lasz|tás') {
    throw new Error('Test failed');
}

// Test with async function returning a Promise
hyphenateEnGbAsync('hyphenation', { hyphenChar: '#' }).then(result => {
    if (result !== 'hy#phen#a#tion') {
        throw new Error('Test failed');
    }
});

// Test with minWordLength (new option in version 1.6)
const hyphenateEnGbSyncWithMinWordLength = createHyphenator(hyphenationPatternsEnGb, {
    hyphenChar: '-',
    minWordLength: 11,
});
if (hyphenateEnGbSyncWithMinWordLength('hyphenation') !== 'hy-phen-a-tion') { // hyphenation has 11 chars => hyphenate
    throw new Error('Test failed');
}
if (hyphenateEnGbSyncWithMinWordLength('sabotaging') !== 'sabotaging') { // sabotaging has 10 chars => don't hyphenate
    throw new Error('Test failed');
}
