import Busboy = require('busboy');
import * as http from 'http';
import * as util from 'util';

function serverFn(req: http.IncomingMessage, res: http.ServerResponse) {
  if (req.method === 'POST') {
    const busboy = new Busboy({ headers: req.headers });
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      console.log(`File [${fieldname}]: filename: ${filename}, encoding: ${encoding}, mimetype: ${mimetype}`);
      file.on('data', (data: Buffer) => {
        console.log(`File [${fieldname}] got ${data.length} bytes`);
      });
      file.on('end', () => {
        console.log(`File [${fieldname}] Finished`);
      });
    });
    busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
      console.log(`Field [${fieldname}]: value: ${util.inspect(val)}`);
    });
    busboy.on('finish', () => {
      console.log('Done parsing form!');
      res.writeHead(303, { Connection: 'close', Location: '/' });
      res.end();
    });
    req.pipe(busboy);
  } else if (req.method === 'GET') {
    res.writeHead(200, { Connection: 'close' });
    res.end(`<html><head></head><body>
               <form method="POST" enctype="multipart/form-data">
                <input type="text" name="textfield"><br />
                <input type="file" name="filefield"><br />
                <input type="submit">
              </form>
            </body></html>`);
  }
}
