import pdfFonts = require('pdfmake/build/vfs_fonts');
import pdfMake = require('pdfmake/build/pdfmake');
import { BufferOptions } from 'pdfmake/interfaces';

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
