import PdfPrinter = require('pdfmake');
import {
    BufferOptions,
    TDocumentDefinitions,
    TFontDictionary,
    CustomTableLayout,
} from 'pdfmake/interfaces';

const fonts: TFontDictionary = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf',
    },
};

const printer = new PdfPrinter(fonts);

const dd: TDocumentDefinitions = {
    content: 'Hello world!',
};

const customTableLayouts: {[key: string]: CustomTableLayout} = {
    customLayout: {
        hLineColor: 'red',
        vLineColor: () => 'red',
    }
};

const options: BufferOptions = {
    fontLayoutCache: true,
    bufferPages: true,
    tableLayouts: customTableLayouts,
    autoPrint: true,
    progressCallback: progress =>
        console.log('Creating pdf: ', progress * 100, '%...'),
};

// $ExpectType PDFDocument
printer.createPdfKitDocument(dd, options);
