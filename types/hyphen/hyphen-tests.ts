import createHyphenator = require('hyphen');
import hyphenationPatternsDe1996 = require('hyphen/patterns/de-1996');
import hyphenationPatternsHu = require('hyphen/patterns/hu');
import { hyphenate as hyphenateEnGbAsync } from 'hyphen/en-gb';

// Test with HTML
const hyphenateDe1996 = createHyphenator(hyphenationPatternsDe1996, { hyphenChar: '-', html: true });
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
