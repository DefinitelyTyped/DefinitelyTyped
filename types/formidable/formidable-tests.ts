
import formidable = require('formidable');
import http = require('http');
import util = require('util');

http.createServer((req, res) => {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');

      let array = fields['an-array'] as Array<string>;

      res.end(util.inspect({fields: fields, files: files}));
    });

    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
});


var form = new formidable.IncomingForm();

form.encoding = 'utf-8';
form.uploadDir = '/my/dir';
form.keepExtensions = false;
form.maxFieldsSize = 2 * 1024 * 1024;
form.maxFields = 1000;
form.hash = false;
form.hash = 'sha1';
form.multiples = false;

if (form.type === 'multipart') {
}
if (form.bytesReceived > 100) {
}
if (form.bytesExpected > 100) {
}

var req: http.IncomingMessage;

form.parse(req);
form.parse(req, (err: any, fields: formidable.Fields, files: formidable.Files) => {
    var key: string;
    for (key in fields) {
        console.log(key, '=', fields[key]);
    }

    for (key in files) {
        console.log('file', key, 'is', files[key].type);
    }
});

form.onPart = function (part: formidable.Part) {
    if (!part.filename) {
        form.handlePart(part);
    }
};

var file: formidable.File;

file.size = 0;
file.path = '/tmp/whatever';
file.name = 'a_file';
file.type = 'application/json';
file.lastModifiedDate = new Date();
file.hash = '12345';
JSON.stringify(file.toJSON());

form.on('progess', (bytesReceived: number, bytesExpected: number) => {});
