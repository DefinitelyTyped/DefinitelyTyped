import Vorpal = require('vorpal');

// example from README

const vorpal = new Vorpal();

vorpal
    .command('foo', 'Outputs "bar".')
    .action((action) => {
        vorpal.log('bar');
        return Promise.resolve();
    });

vorpal
    .delimiter('myapp$')
    .show();
