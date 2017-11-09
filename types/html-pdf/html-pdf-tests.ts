import * as fs from 'fs';
import * as pdf from 'html-pdf';

var html = fs.readFileSync('./test/businesscard.html', 'utf8');
var options: pdf.CreateOptions = { format: 'Letter' };

pdf.create(html, options).toFile('./businesscard.pdf', (err: Error, res: pdf.FileInfo) => {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
