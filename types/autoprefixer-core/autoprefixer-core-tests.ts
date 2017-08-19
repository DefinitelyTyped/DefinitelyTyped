
import autoprefixer = require("autoprefixer-core");

var css: string;

var prefixed = autoprefixer.process(css).css;

var processor = autoprefixer({ browsers: ['> 1%', 'IE 7'], cascade: false });
console.log(processor.info());
