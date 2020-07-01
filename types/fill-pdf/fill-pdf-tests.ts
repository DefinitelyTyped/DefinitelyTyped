import * as fillPdf from 'fill-pdf';

var formData: fillPdf.FormData = { FieldName: 'Text to put into form field' };
var pdfTemplatePath = 'templates.pdf';
var extendArgs: string[] = [];

fillPdf.generatePdf(formData, pdfTemplatePath, extendArgs, (err: Error, output: Buffer) => {
  if ( !err ) {
    console.log('Success!');
    // output is a buffer
  }
});

var result = fillPdf.generateFdf(formData);
// result is a buffer
