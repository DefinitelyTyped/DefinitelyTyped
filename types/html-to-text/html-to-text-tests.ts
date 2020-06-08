import { fromString, HtmlToTextOptions } from 'html-to-text';
import * as formatters from 'html-to-text/lib/formatter';

const htmlOptions: HtmlToTextOptions = {
    wordwrap: null,
    tables: true,
    hideLinkHrefIfSameAsText: true,
    ignoreImage: true,
    format: {
        text: (el, options) => {
            return formatters.text(el, options);
        },
        table: (el, walk, options) => {
            return formatters.table(el, walk, options);
        },
    },
};

const htmlString = '<p><b>bold</b></p><p><i>italic</i></p>';
console.log('Processing string with default options');
console.log(fromString(htmlString));

console.log('Processing string with custom options');
console.log(fromString(htmlString, htmlOptions));
