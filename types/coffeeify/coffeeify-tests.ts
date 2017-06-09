
import coffeeify = require('coffeeify');

coffeeify.sourceMap = false;

var isCoffee = coffeeify.isCoffee('foo.coffee');
var isLiterate = coffeeify.isLiterate('bar.coffee');
coffeeify.compile('out.js', 'console.log 42', (err, compiled) => {
    console.log(err);
    console.log(compiled);
});

coffeeify('test.coffee').end();

