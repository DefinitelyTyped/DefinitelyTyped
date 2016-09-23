

import * as htmlToText from 'html-to-text';

let htmlOptions: HtmlToTextOptions = {
    wordwrap: null,
    tables: true,
    hideLinkHrefIfSameAsText: true,
    ignoreImage: true
};


function callback(err: string, result: string) {
    console.log(`callback called with result ${result}`);
}

console.log("Processing file with default options");
htmlToText.fromFile("h2t-test.html", callback);

console.log("Processing file with custom options");
htmlToText.fromFile("h2t-test.html", htmlOptions, callback);

let htmlString = "<p><b>bold</b></p><p><i>italic</i></p>";
console.log("Processing string with default options");
console.log(htmlToText.fromString(htmlString));

console.log("Processing string with custom options");
console.log(htmlToText.fromString(htmlString, htmlOptions));

