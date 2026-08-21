import postcss = require("postcss");
import pageBreak = require("postcss-page-break");

postcss([pageBreak]);
postcss([pageBreak()]);
