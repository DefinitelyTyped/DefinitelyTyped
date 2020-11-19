import * as uuencode from 'uuencode';
const encoded: string = uuencode.encode('$#%');
const decoded: string = uuencode.decode('$#%');
const encodedBuffer: string = uuencode.encode(new Buffer('$#%'));
const decodedBuffer: string = uuencode.decode(new Buffer('$#%'));
