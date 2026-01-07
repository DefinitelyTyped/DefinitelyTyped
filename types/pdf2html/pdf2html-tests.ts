import pdf2html = require("pdf2html");
import { Readable } from "stream";

// Test async conversion with callback
pdf2html("test.pdf", (error, html) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(html);
});

// Test async conversion with options
const options = {
    binary: "/usr/local/bin/pdftohtml",
    first_page: 1,
    last_page: 10,
    complex: true,
    single_page: false,
    no_background: true,
    no_frames: true,
    zoom: 1.5,
};

pdf2html("test.pdf", options, (error, html) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(html);
});

// Test sync conversion
const htmlSync = pdf2html.pdf2htmlSync("test.pdf");
console.log(htmlSync);

// Test with stream input
const stream = new Readable();
stream.push("PDF content");
stream.push(null);

pdf2html(stream, (error, html) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(html);
});

// Test sync conversion with stream and options
const htmlStreamSync = pdf2html.pdf2htmlSync(stream, {
    complex: true,
    zoom: 2.0,
});
console.log(htmlStreamSync);
