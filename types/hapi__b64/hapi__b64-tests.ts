import * as B64 from '@hapi/b64';
import * as fs from 'fs';

const stream = fs.createReadStream('package.json');
const encoder = new B64.Encoder();
const decoder = new B64.Decoder();

stream.pipe(encoder).pipe(process.stdout);
stream.pipe(decoder).pipe(process.stdout);

B64.decode(Buffer.from('aHR0cHM6Ly9naXRodWIuY29t')); // $ExpectType Buffer
B64.encode(Buffer.from('https://github.com')); // $ExpectType Buffer

B64.base64urlDecode('aHR0cHM6Ly9naXRodWIuY29t'); // $ExpectType string
B64.base64urlDecode('aHR0cHM6Ly9naXRodWIuY29t', 'ascii'); // $ExpectType string
B64.base64urlDecode('aHR0cHM6Ly9naXRodWIuY29t', 'buffer'); // $ExpectType Buffer
B64.base64urlEncode('https://github.com'); // $ExpectType string
