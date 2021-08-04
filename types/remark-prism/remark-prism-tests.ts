import remark = require('remark');
import remarkPrism = require('remark-prism');

remark().use(remarkPrism);

const options: remarkPrism.Options = {};
options.transformInlineCode = true;
remark().use(remarkPrism, options);
