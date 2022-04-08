import WordExtractor = require("word-extractor");

const extractor = new WordExtractor();

let temp: string;

const doc = extractor.extract('/path/to/file.doc').then(document => {
    temp = document.getBody();
    temp = document.getAnnotations();
    temp = document.getEndNotes();
    temp = document.getFootnotes();
    temp = document.getHeaders();
});
