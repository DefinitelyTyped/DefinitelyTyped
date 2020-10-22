import chownr = require('chownr');
import { URL } from 'url';

chownr('', 1, 1, err => {
    err; // $ExpectType ErrnoException
});
chownr(new Buffer(''), 1, 1, () => {});
chownr(new URL(''), 1, 1, () => {});
chownr(new URL(''), 1, 1, () => {});

chownr.sync('', 1, 1);
chownr.sync(new Buffer(''), 1, 1);
chownr.sync(new URL(''), 1, 1);
chownr.sync(new URL(''), 1, 1);
