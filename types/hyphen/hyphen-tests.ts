import createHyphenator, { HyphenationFunctionSync } from 'hyphen';
import hyphenationPatternsDe1996 from 'hyphen/patterns/de-1996';
import hyphenationPatternsHu from 'hyphen/patterns/hu';
import hyphenationPatternsEnGb from 'hyphen/patterns/en-gb';
import { hyphenate as hyphenateEnGbAsync } from 'hyphen/en-gb';

// Test with HTML
const hyphenateDe1996 = createHyphenator(hyphenationPatternsDe1996, {
    hyphenChar: '-',
    html: true,
}) as HyphenationFunctionSync;
if (hyphenateDe1996('<section>Silbentrennung</section>') !== '<section>Sil-ben-tren-nung</section>') {
    throw new Error('Test failed');
}

// Test with debug output
const hyphenateHu = createHyphenator(hyphenationPatternsHu, { debug: true }) as HyphenationFunctionSync;
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
const hyphenateEnUsSyncWithMinWordLength = createHyphenator(hyphenationPatternsEnGb, {
    hyphenChar: '-',
    minWordLength: 11,
}) as HyphenationFunctionSync;
if (hyphenateEnUsSyncWithMinWordLength('hyphenation') !== 'hy-phen-a-tion') {
    // hyphenation has 11 chars => hyphenate
    throw new Error('Test failed');
}
if (hyphenateEnUsSyncWithMinWordLength('sabotaging') !== 'sabotaging') {
    // sabotaging has 10 chars => don't hyphenate
    throw new Error('Test failed');
}
