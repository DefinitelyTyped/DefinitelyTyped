// Import the plugin
import nunjucksDate = require('nunjucks-date');

// Define a custom default date format. Any valid format works.
// The date format defaults to "YYYY"
// http://momentjs.com/docs/#/displaying/format/
nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');


let env = { };

// Pass the environment to `install()`
nunjucksDate.install(env);
// Pass the environment & a custom filter name
nunjucksDate.install(env, 'yourFilterName');
