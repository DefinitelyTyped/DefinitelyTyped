import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import definitions from './doc-definitions';

const createPdf = () => {
  const pdf = pdfMake;
  pdf.vfs = pdfFonts.pdfMake.vfs;

  for (const definition of definitions) {
    const typedDefinition: pdfMake.TDocumentDefinitions = definition;
    pdfMake.createPdf(typedDefinition).download();
  }
};
