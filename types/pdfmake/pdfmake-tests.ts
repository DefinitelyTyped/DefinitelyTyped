import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import definitions from './doc-definitions';

const createPdf = () => {
  const pdf = pdfMake;
  pdf.vfs = pdfFonts.pdfMake.vfs;

  for (const key in definitions) {
    const definition: pdfMake.TDocumentDefinitions = definitions[key];
    pdfMake.createPdf(definition).download();
  }
};
