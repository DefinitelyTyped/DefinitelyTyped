// From original package README
// https://github.com/tylingsoft/markdown-it-source-map/blob/b5c374465ebd2a182b90720b99809f4c1b48b178/README.md

import markdownIt = require('markdown-it');
import markdownItSourceMap = require('markdown-it-source-map');

const mdi = markdownIt();
mdi.use(markdownItSourceMap);

mdi.render('# hello world');
