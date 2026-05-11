const fonts = {
    Roboto: {
        normal: "Roboto-Regular.ttf",
        bold: "Roboto-Medium.ttf",
        italics: "Roboto-Italic.ttf",
        bolditalics: "Roboto-MediumItalic.ttf",
    },
};

pdfMake.addFonts(fonts);

const dd = {
    content: "Hello world!",
};

// $ExpectType TCreatedPdf
pdfMake.createPdf(dd);

// $ExpectType TCreatedPdf
pdfMake.createPdf(dd, {});
