import pdfFonts = require('pdfmake/build/vfs_fonts');
import pdfMake = require('pdfmake/build/pdfmake');
import { BufferOptions, CustomTableLayout, TFontDictionary } from 'pdfmake/interfaces';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const dd = {
    content: 'Hello world!'
};

const options: BufferOptions = {
    fontLayoutCache: true,
    bufferPages: true
};

pdfMake.createPdf(dd).download();
pdfMake.createPdf(dd).download('defaultFileName');
pdfMake.createPdf(dd).download('defaultFileName', () => {
    console.log('Download finished');
});
pdfMake.createPdf(dd).download('defaultFileName', undefined, options);
pdfMake.createPdf(dd).download(() => {
    console.log('Download finished');
});
pdfMake.createPdf(dd).download(() => {
    console.log('Download finished');
}, options);

pdfMake.createPdf(dd).open();
pdfMake.createPdf(dd).open(options);
const win = window.open('', '_blank');
pdfMake.createPdf(dd).open({}, win);
pdfMake.createPdf(dd).open({}, window);

pdfMake.createPdf(dd).print();
pdfMake.createPdf(dd).print(options);
pdfMake.createPdf(dd).print({}, win);
pdfMake.createPdf(dd).print({}, window);

const pdfDocGenerator = pdfMake.createPdf(dd);
pdfDocGenerator.getDataUrl((dataUrl) => {
    const targetElement = document.querySelector('#iframeContainer');
    const iframe = document.createElement('iframe');
    iframe.src = dataUrl;
    targetElement!.appendChild(iframe);
});

const layouts: { [name: string]: CustomTableLayout } = {
    pretty: {
        hLineWidth: () => 50,
        paddingLeft: () => 50,
        hLineStyle: () => ({ dash: { length: 10, space: 5 } }),
    },
    ugly: {
        fillColor: '#ff0000',
        fillOpacity: () => 50,
        defaultBorder: true,
    },
};
const fonts: TFontDictionary = {
    roboto: {
        normal: 'roboto-regular.ttf',
    },
};
const vfs2: { [file: string]: string } = {
    'roboto-regular.ttf': 'AAEAAAASAQAABAAgR0RFRrRCsIIAAjGsAAA....base64 of font binary',
};
pdfMake.createPdf(dd, layouts, fonts, vfs2).open();
