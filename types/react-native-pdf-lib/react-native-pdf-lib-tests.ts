import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

PDFLib.getDocumentsDirectory(); // $ExpectType string

// Document Tests
PDFDocument.create('/some/path'); // $ExpectType PDFDocument

const document = PDFDocument.create('/some/path');
document.addPages([PDFPage.create()]); // $ExpectType PDFDocument
document.write(); // $ExpectType Promise<string>

// Page Tests
PDFPage.create(); // $ExpectType PDFPage

const page = PDFPage.create();
page.setMediaBox(10, 10); // $ExpectType PDFPage
page.setMediaBox(10, 10, { x: 10, y: 10 }); // $ExpectType PDFPage

page.drawRectangle(); // $ExpectType PDFPage
page.drawRectangle({}); // $ExpectType PDFPage
page.drawRectangle({ x: 10, y: 10, width: 10, height: 10, color: '#fff' }); // $ExpectType PDFPage

page.drawImage('ph:/some/uri'); // $ExpectType PDFPage
page.drawImage('ph:/some/uri', {}); // $ExpectType PDFPage
page.drawImage('ph:/some/uri', { x: 10, y: 10, width: 10, height: 10 }); // $ExpectType PDFPage

page.drawText('Some string'); // $ExpectType PDFPage
page.drawText('Some string', {}); // $ExpectType PDFPage
page.drawText('Some string', { x: 10, y: 10, color: '#fff', fontName: 'TimesNewRoman', fontSize: 10 }); // $ExpectType PDFPage
