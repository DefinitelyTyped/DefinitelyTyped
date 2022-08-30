import streamifyString = require('streamify-string');
import { Readable } from 'stream';

const stream: Readable = streamifyString('data');
stream.on('data', (d) => console.log('Data: ' + d));
stream.on('end', () => console.log('Done!'));

const streamOptions: Readable = streamifyString('data', { option: true });
streamOptions.on('data', (d) => console.log('Data: ' + d));
streamOptions.on('end', () => console.log('Done!'));

// @ts-expect-error
streamifyString();
