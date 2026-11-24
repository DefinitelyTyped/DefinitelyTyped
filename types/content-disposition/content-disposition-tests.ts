import contentDisposition = require("content-disposition");

const noParams = contentDisposition();
const withFilenameNoOptions = contentDisposition("EURO rates.txt");
const withFilenameAndOptions = contentDisposition("€ rates.txt", { type: "attachment", fallback: "EURO rates.txt" });
const noFilename = contentDisposition(undefined, { type: "attachment", fallback: true });

const { parse } = contentDisposition;

const res = parse("attachment; filename=\"EURO rates.txt\"");
const type = res.type;
const parameters = res.parameters;

if ("filename" in parameters) {
    // $ExpectType string
    parameters["filename"];
}

// test inline and custom string disposition types
contentDisposition("preview.pdf", { type: "inline" });
contentDisposition("custom.dat", { type: "form-data" });

