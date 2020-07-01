import jsonfile = require('jsonfile');
import { stringify, stripBom } from 'jsonfile/utils';

const file = '/tmp/data.json';
const obj = { name: 'JP' };

// $ExpectType void
jsonfile.readFile(file, { encoding: 'utf8', throws: true }, (err, obj) => {
    // $ExpectType ErrnoException | null
    err;
    // $ExpectType any
    obj;
});

// $ExpectType void
jsonfile.readFile(file, (err, obj) => {
    // $ExpectType ErrnoException | null
    err;
    // $ExpectType any
    obj;
});

jsonfile.readFile(file).then(obj => {
    // $ExpectType any
    obj;
});
jsonfile.readFile(file, { encoding: 'utf8', throws: true }).then(obj => {
    // $ExpectType any
    obj;
});

// $ExpectType any
jsonfile.readFileSync(file);
jsonfile.readFileSync(file, { encoding: 'utf8', throws: true });

// $ExpectType void
jsonfile.writeFile(file, obj, err => {
    // $ExpectType ErrnoException
    err;
});

// $ExpectType void
jsonfile.writeFile(file, obj, { spaces: 2 }, err => {
    // $ExpectType ErrnoException
    err;
});

// $ExpectType void
jsonfile.writeFile(file, obj, { spaces: 2, EOL: '\r\n' }, err => {
    // $ExpectType ErrnoException
    err;
});

// $ExpectType void
jsonfile.writeFile(file, obj, { flag: 'a' }, err => {
    // $ExpectType ErrnoException
    err;
});

// $ExpectType Promise<void>
jsonfile.writeFile(file, obj);
// $ExpectType Promise<void>
jsonfile.writeFile(file, obj, { flag: 'a' });

jsonfile.writeFileSync(file, obj);
jsonfile.writeFileSync(file, obj, { spaces: 2 });
jsonfile.writeFileSync(file, obj, { spaces: 2, EOL: '\r\n' });
jsonfile.writeFileSync(file, obj, { flag: 'a' });

// $ExpectType string
stripBom('content');
// $ExpectType string
stringify(obj, { flag: 'a' });
