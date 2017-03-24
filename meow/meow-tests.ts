import meow = require('meow');
import Options = meow.Options;

const options: Options = {};
options.description = true;
options.description = 'string';
options.help = true;
options.help = 'string';
options.version = true;
options.version = 'string';
options.argv = ['string', 'string'];
options.inferType = true;

meow(options);
meow('Usage text', {
  alias: {
    opt: 'opt'
  }
});
