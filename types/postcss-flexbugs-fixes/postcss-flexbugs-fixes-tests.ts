import postcss = require('postcss');
import plugin = require('postcss-flexbugs-fixes');

// $ExpectType Processor
postcss([plugin]);

const options: plugin.Options = { bug4: false, bug6: false, bug81a: false };
// $ExpectType Processor
postcss([plugin(options)]);
