import { Readable } from "stream";
import bz2 = require('unbzip2-stream');

Readable.from('test').pipe(bz2()).pipe(process.stdout);
