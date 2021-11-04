import remark = require('remark');
import remarkAbbr = require('remark-abbr');

remark().use(remarkAbbr);

const options: remarkAbbr.Options = {};
options.expandFirst = true;
remark().use(remarkAbbr, options);
