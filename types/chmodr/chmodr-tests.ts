import chmodr = require('chmodr');
import { URL } from 'url';

chmodr('', '', err => {
    err; // $ExpectType ErrnoException
});
chmodr(new Buffer(''), '', () => {});
chmodr(new URL(''), '', () => {});
chmodr(new URL(''), 1, () => {});

chmodr.sync('', '');
chmodr.sync(new Buffer(''), '');
chmodr.sync(new URL(''), '');
chmodr.sync(new URL(''), 1);
