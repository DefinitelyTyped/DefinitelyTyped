import postcss = require("postcss");
import postcssSass = require("postcss-sass");

postcss().process("foo", { syntax: postcssSass });
