import fs from 'fs';
import wav from 'wav';
import Speaker from 'speaker';

var file = fs.createReadStream('track01.wav');
var reader = new wav.Reader();

// the "format" event gets emitted at the end of the WAVE header
reader.on('format', (format) => {

  // the WAVE header is stripped from the output of the reader
  reader.pipe(new Speaker(format));
});

// pipe the WAVE file to the Reader instance
file.pipe(reader);
