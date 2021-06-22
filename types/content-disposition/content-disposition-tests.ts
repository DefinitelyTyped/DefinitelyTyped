import contentDisposition = require('content-disposition');

const noParams = contentDisposition();
const withFilenameNoOptions = contentDisposition('EURO rates.txt');
const withFilenameAndOptions = contentDisposition('€ rates.txt', { type: 'attachment', fallback: 'EURO rates.txt' });
const noFilename = contentDisposition(undefined, { type: 'attachment', fallback: true });

const res = contentDisposition.parse('attachment; filename="EURO rates.txt"');
const type = res.type;
const parameters = res.parameters;
