import WordExtractor = require("word-extractor");

const extractor = new WordExtractor();

extractor.extract("/path/to/file.doc").then(document => {
    document.getBody(); // $ExpectType string
    document.getAnnotations(); // $ExpectType string
    document.getEndnotes(); // $ExpectType string
    document.getFootnotes(); // $ExpectType string
    document.getHeaders(); // $ExpectType string
    document.getHeaders(); // $ExpectType string
    // $ExpectType string
    document.getHeaders({
        includeFooters: false,
    });
    document.getFooters(); // $ExpectType string
    // $ExpectType string
    document.getTextboxes({
        includeBody: false,
        includeHeadersAndFooters: false,
    });
});
