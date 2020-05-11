import * as sha from 'sha';
import * as fs from 'fs';

const algorithm = 'sha256';
interface CustType { n: number; }
const C: CustType = { n: 1 };

////////////////////////////////////////////////////////////////////////////////////////
// sha.check

sha.check('./file'); // $ExpectError
sha.check('./file', '1a2b3c4d'); // $ExpectError
sha.check('./file', { dir: 1 }, () => C); // $ExpectError
sha.check('./file', '1a2b3c4d', () => C); // $ExpectType void | CustType
sha.check('./file', '1a2b3c4d', {}); // $ExpectError
sha.check('./file', '1a2b3c4d', {}, () => C); // $ExpectType void | CustType
sha.check('./file', '1a2b3c4d', { algorithm }, () => C); // $ExpectType void | CustType
sha.check('./file', '1a2b3c4d', { sha: true }, () => C); // $ExpectError
// $ExpectType void | CustType
sha.check('./file', '1a2b3c4d', (er) => {
    if (er) {
        er; // $ExpectType Error
    } else {
        er; // $ExpectType null
    }
    return C;
});
// $ExpectType void | CustType
sha.check('./file', '1a2b3c4d', { algorithm }, (er) => {
    if (er) {
        er; // $ExpectType Error
    } else {
        er; // $ExpectType null
    }
    return C;
});

////////////////////////////////////////////////////////////////////////////////////////
// sha.checkSync

sha.checkSync('./file'); // $ExpectError
sha.checkSync('./file', { dir: 1 }); // $ExpectError
sha.checkSync('./file', '1a2b3c4d'); // $ExpectType void
sha.checkSync('./file', '1a2b3c4d', {}); // $ExpectType void
sha.checkSync('./file', '1a2b3c4d', { algorithm }); // $ExpectType void
sha.checkSync('./file', '1a2b3c4d', { sha: true }); // $ExpectError

////////////////////////////////////////////////////////////////////////////////////////
// sha.get

sha.get('./file'); // $ExpectError
sha.get('./file', () => C); // $ExpectType void
sha.get('./file', {}); // $ExpectError
sha.get('./file', {}, () => C); // $ExpectType void
sha.get('./file', { algorithm }, () => C); // $ExpectType void
sha.get('./file', { error: true }, () => C); // $ExpectError
// $ExpectType void
sha.get('./file', (err, actual) => {
    if (err) {
        err; // $ExpectType Error
    } else {
        err; // $ExpectType null
        actual; // $ExpectType string
    }
});
// $ExpectType void
sha.get('./file', { algorithm }, (err, actual) => {
    if (err) {
        err; // $ExpectType Error
    } else {
        err; // $ExpectType null
        actual; // $ExpectType string
    }
});

////////////////////////////////////////////////////////////////////////////////////////
// sha.getSync

sha.getSync('./file'); // $ExpectType string
sha.getSync('./file', {}); // $ExpectType string
sha.getSync('./file', { algorithm }); // $ExpectType string
sha.getSync('./file', { error: true }); // $ExpectError

////////////////////////////////////////////////////////////////////////////////////////
// sha.stream

// $ExpectType Transform
const s = sha.stream('1a2b3c4d');

fs.createReadStream('./file')
    .pipe(s)
    .pipe(fs.createWriteStream('dest'));

sha.stream({ name: 'hello' }); // $ExpectError
sha.stream('1a2b3c4d', {}); // $ExpectType Transform
sha.stream('1a2b3c4d', { algorithm }); // $ExpectType Transform
sha.stream('1a2b3c4d', { error: true }); // $ExpectError
