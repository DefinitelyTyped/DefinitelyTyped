import postcss = require("postcss");
import postcssGray = require("postcss-color-gray");

postcss([postcssGray]);
postcss([postcssGray()]);
postcss([postcssGray({})]);
postcss([postcssGray({ preserve: true })]);
