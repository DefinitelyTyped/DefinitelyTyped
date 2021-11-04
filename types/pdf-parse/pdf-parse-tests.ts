/// <reference types="node"/>

import pdfParse = require('pdf-parse');

const dataBuffer: Buffer = null as never;

// https://www.npmjs.com/package/pdf-parse#basic-usage---local-files
pdfParse(dataBuffer).then(data => {
    // number of pages
    const numpages: number = data.numpages;
    // number of rendered pages
    const numrender: number = data.numrender;
    // PDF info
    const info: any = data.info;
    // PDF metadata
    const metadata: any = data.metadata;
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    const version: pdfParse.Version = data.version;
    // PDF text
    const text: string = data.text;
});

// https://www.npmjs.com/package/pdf-parse#extend
let options: pdfParse.Options;

options = {};

options = {
    pagerender: pageData => {
        const _pageData: any = pageData;
        return 'modified callback';
    },
    max: 0,
    version: 'v1.10.100',
};

pdfParse(dataBuffer, options);
