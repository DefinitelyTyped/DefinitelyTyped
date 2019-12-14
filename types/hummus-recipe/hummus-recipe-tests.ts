import Recipe = require('hummus-recipe');

import fs = require('fs');

// $ExpectType Recipe
const newDoc = new Recipe('new', 'test.pdf', {
    version: 1.6,
    author: 'John Doe',
    title: 'Hummus Recipe',
    subject: 'A brand new PDF',
});

// $ExpectType Recipe
newDoc
    .createPage(595, 842)
    .text('Memento Mori', 100, 100)
    .endPage()
    .endPDF();

// $ExpectError
newDoc.createPage('A5')
    .text('Memento Mori', 100, 100)
    .endPage()
    .endPDF();

const inBuffer: Buffer = fs.readFileSync('test.pdf');

const bufferDoc = new Recipe(inBuffer);

bufferDoc
    .createPage(595, 842)
    .text('Memento Mori', 100, 100)
    .endPage()
    .endPDF(
        (outBuffer: Buffer) =>
            // $ExpectType Buffer
            outBuffer,
    );

// $ExpectType Metadata
bufferDoc.metadata;

// $ExpectType PageInfo
bufferDoc.metadata[1];
