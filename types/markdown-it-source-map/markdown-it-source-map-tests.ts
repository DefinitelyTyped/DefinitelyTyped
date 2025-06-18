// From original package README
// https://github.com/tylingsoft/markdown-it-source-map/blob/b5c374465ebd2a182b90720b99809f4c1b48b178/README.md

import * as markdownIt from "markdown-it";
import markdownItSourceMap from "markdown-it-source-map";

const mdi = markdownIt();
mdi.use(markdownItSourceMap);

mdi.render("# hello world"); // <h1 data-source-line="1">hello world</h1>
