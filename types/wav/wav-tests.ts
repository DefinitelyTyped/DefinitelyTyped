import { createReadStream } from 'fs';
import { Reader, Writer, FileWriter } from 'wav';

const file = createReadStream('track01.wav');
const reader = new Reader();
const reader2 = new Reader();

const writer = new Writer({
  sampleRate: 16000,
  channels: 1
});

const fileWriter = new FileWriter('./test.wav', {
  sampleRate: 16000,
  channels: 1
});

reader.on('format', (format) => {
  console.log(format);
  reader.pipe(writer);
});

reader2.on('format', (format) => {
  console.log(format);
  reader2.pipe(fileWriter);
});

file.pipe(reader);
