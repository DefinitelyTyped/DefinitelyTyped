import jsonexport = require('jsonexport');
import { Transform } from 'stream';

// No user options
const a: Transform = jsonexport();
const b: Promise<string> = jsonexport({ key: 'value' });
// $ExpectType void
jsonexport({ key: 'value' }, (err: Error, csv: string) => undefined);

// With user options
const userOptions: jsonexport.UserOptions = {
    textDelimiter: ';',
};

const c: Transform = jsonexport(userOptions);
const d: Promise<string> = jsonexport({ key: 'value' }, userOptions);
// $ExpectType void
jsonexport({ key: 'value' }, userOptions, (err: Error, csv: string) => undefined);
