import pdfMake = require("pdfmake");
import { BufferOptions, CustomTableLayout, TDocumentDefinitions, TFontDictionary } from "pdfmake/interfaces";

const fonts: TFontDictionary = {
    Roboto: {
        normal: "fonts/Roboto-Regular.ttf",
        bold: "fonts/Roboto-Medium.ttf",
        italics: "fonts/Roboto-Italic.ttf",
        bolditalics: "fonts/Roboto-MediumItalic.ttf",
    },
};

pdfMake.addFonts(fonts);

const dd: TDocumentDefinitions = {
    content: "Hello world!",
};

const customTableLayouts: { [key: string]: CustomTableLayout } = {
    customLayout: {
        hLineColor: "red",
        vLineColor: () => "red",
    },
};

pdfMake.addTableLayouts(customTableLayouts);

const options: BufferOptions = {
    fontLayoutCache: true,
    bufferPages: true,
    autoPrint: true,
};

pdfMake.setProgressCallback(progress => console.log("Creating pdf: ", progress * 100, "%..."));

pdfMake.createPdf(dd, options).write("fileName.pdf").then(() => {
    console.log("PDF file written");
});
