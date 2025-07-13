import { convert, Parser } from "pdf2docx";

// Test the Parser class
const parser = new Parser("test.pdf");
parser.parse("output.docx", {
    start: 1,
    end: 5,
    tables: {
        extract_tables: true,
        cell_border_width: 1,
    },
}).then(status => {
    console.log(`Processed ${status.pages_processed} pages`);
});

// Test the convert function
convert("input.pdf", "output.docx", {
    pages: [1, 2, 3],
    images: {
        extract_images: true,
        max_width: 800,
    },
}).then(status => {
    console.log(status.status);
});
