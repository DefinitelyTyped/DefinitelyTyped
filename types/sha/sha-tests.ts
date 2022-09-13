import * as sha from 'sha';
import * as fs from 'fs';

const algorithm = 'sha256';
interface CustType { n: number; }
const C: CustType = { n: 1 };

////////////////////////////////////////////////////////////////////////////////////////
// sha.check

// @ts-expect-error
sha.check('./file');
// @ts-expect-error
sha.check('./file', '1a2b3c4d');
// @ts-expect-error
sha.check('./file', { dir: 1 }, () => C);
sha.check('./file', '1a2b3c4d', () => C); // $ExpectType void | CustType
// @ts-expect-error
sha.check('./file', '1a2b3c4d', {});
sha.check('./file', '1a2b3c4d', {}, () => C); // $ExpectType void | CustType
sha.check('./file', '1a2b3c4d', { algorithm }, () => C); // $ExpectType void | CustType
// @ts-expect-error
sha.check('./file', '1a2b3c4d', { sha: true }, () => C);
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

// @ts-expect-error
sha.checkSync('./file');
// @ts-expect-error
sha.checkSync('./file', { dir: 1 });
sha.checkSync('./file', '1a2b3c4d'); // $ExpectType void
sha.checkSync('./file', '1a2b3c4d', {}); // $ExpectType void
sha.checkSync('./file', '1a2b3c4d', { algorithm }); // $ExpectType void
// @ts-expect-error
sha.checkSync('./file', '1a2b3c4d', { sha: true });

////////////////////////////////////////////////////////////////////////////////////////
// sha.get

// @ts-expect-error
sha.get('./file');
sha.get('./file', () => C); // $ExpectType void
// @ts-expect-error
sha.get('./file', {});
sha.get('./file', {}, () => C); // $ExpectType void
sha.get('./file', { algorithm }, () => C); // $ExpectType void
// @ts-expect-error
sha.get('./file', { error: true }, () => C);
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
// @ts-expect-error
sha.getSync('./file', { error: true });

////////////////////////////////////////////////////////////////////////////////////////
// sha.stream

// $ExpectType Transform
const s = sha.stream('1a2b3c4d');

fs.createReadStream('./file')
    .pipe(s)
    .pipe(fs.createWriteStream('dest'));

// @ts-expect-error
sha.stream({ name: 'hello' });
sha.stream('1a2b3c4d', {}); // $ExpectType Transform
sha.stream('1a2b3c4d', { algorithm }); // $ExpectType Transform
// @ts-expect-error
sha.stream('1a2b3c4d', { error: true });
