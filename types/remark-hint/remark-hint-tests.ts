import remark = require('remark');
import remarkHint = require('remark-hint');

remark.remark().use(remarkHint);
remark.remark().use(remarkHint, {}); // $ExpectError
