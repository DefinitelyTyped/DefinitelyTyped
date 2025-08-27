import postcss = require("postcss");
import plugin = require("postcss-flexbugs-fixes");

postcss([plugin]);

const options: plugin.Options = { bug4: false, bug6: false, bug81a: false };
postcss([plugin(options)]);

// @ts-expect-error
postcss([plugin({ bug42: false })]);
