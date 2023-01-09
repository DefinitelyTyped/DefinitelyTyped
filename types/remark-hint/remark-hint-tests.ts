import remark = require('remark');
import remarkHint = require('remark-hint');

remark.remark().use(remarkHint);
// @ts-expect-error
remark.remark().use(remarkHint, {});
