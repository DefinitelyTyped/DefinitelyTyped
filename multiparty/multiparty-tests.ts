/// <reference path='multiparty.d.ts' />
/// <reference path='../node/node.d.ts' />
import multiparty = require('multiparty');
import http = require('http');
import util = require('util');

http.createServer(function (req: http.ServerRequest, res: http.ServerResponse) {
  if (req.url === '/upload' && req.method === 'POST') {
    var count = 0;
    var form = new multiparty.Form();

    // Errors may be emitted
    // Note that if you are listening to 'part' events, the same error may be
    // emitted from the `form` and the `part`.
    form.on('error', function (err: Error) {
      console.log('Error parsing form: ' + err);
    });

    // Parts are emitted when parsing the form
    form.on('part', function (part: multiparty.Part) {
      // You *must* act on the part by reading it
      // NOTE: if you want to ignore it, just call "part.resume()"

      if (!!part.filename) {
        // filename is exists when this is a file
        count++;
        console.log('got field named ' + part.name + ' and got file named ' + part.filename);
        // ignore file's content here
        part.resume();
      } else {
        // filename doesn't exist when this is a field and not a file
        console.log('got field named ' + part.name);
        // ignore field's content
        part.resume();
      }

      part.on('error', function (err: Error) {
        // decide what to do
        console.log('Error on part event: ' + err);
      });
    });

    form.on('progress', function (bytesReceived: number, bytesExpected: number) {
      // decide what to do
      console.log('BytesReceived: ' + bytesReceived, 'BytesExpected: ', bytesExpected);
    });

    form.on('field', function (name: string, value: string) {
      // decide what to do
      console.log('Field Name: ' + name + ', Field Value: ' + value);
    });

    // Close emitted after form parsed
    form.on('close', function () {
      console.log('Upload completed!');
      res.end('Received ' + count + ' files');
    });

    // Parse req
    form.parse(req);
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="text" name="title"><br>' +
    '<input type="file" name="upload" multiple="multiple"><br>' +
    '<input type="submit" value="Upload">' +
    '</form>'
  );
}).listen(8080);