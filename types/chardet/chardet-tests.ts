import * as chardet from "chardet";

chardet.detect(new Buffer('hello there!'));
chardet.detectFile('/path/to/file', (err, encoding) => {});
chardet.detectFileSync('/path/to/file');

chardet.detectFile('/path/to/file', { sampleSize: 32 }, (err, encoding) => {});
