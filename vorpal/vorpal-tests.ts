///<reference path="./vorpal.d.ts"/>

import {Vorpal} from './vorpal';

declare namespace app {
    function execSQL(...args: any[]): PromiseLike<any>;
}

// Constructor
let vorpal = new Vorpal();

// new-less Constructor
let newLessApp = Vorpal();

// Parse
vorpal
    .show()
    .parse(process.argv);

// Parse Options
var results = vorpal.parse('foo -baz', { use: 'minimist' });

new Vorpal().delimiter('unicorn-approved-app$');

// Show

vorpal
    .delimiter('pg-cli:')
    .show();

vorpal
    .command('sql <query>', 'Executes arbitrary sql.')
    .action(function (args) {
        return app.execSQL(args.query);
    });

// Show (multiple instances)

var instances = [];
for (var i = 0; i < 3; ++i) {
    instances[i] = new Vorpal()
        .delimiter('instance' + i + '~$')
        .command('switch <instance>', 'Switches prompt to another instance.')
        .action(function (args, cb) {
            instances[args.instance].show();
            cb();
        })
}

instances[0].show();