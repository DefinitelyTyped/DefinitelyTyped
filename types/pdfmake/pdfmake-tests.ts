import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

const docDefinition = { content: 'This is an sample PDF printed with pdfMake' };

const createPdf = () => {
  const pdf = pdfMake;
  pdf.vfs = pdfFonts.pdfMake.vfs;
  pdfMake.createPdf(docDefinition).download();
};
