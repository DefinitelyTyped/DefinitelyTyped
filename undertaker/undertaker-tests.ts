/// <reference path="undertaker.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />

var fs = require('fs');
var Undertaker = require('undertaker');
import { Registry }  from 'undertaker';
require('es6-promise');

var taker = new Undertaker();

taker.task('task1', function(cb: () => void){
    // do things

    cb(); // when everything is done
});

taker.task('task2', function(){
    return fs.createReadStream('./myFile.js')
        .pipe(fs.createWriteStream('./myFile.copy.js'));
});

taker.task('task3', function(){
    return new Promise(function(resolve, reject){
        // do things

        resolve(); // when everything is done
    });
});

taker.task('combined', taker.series('task1', 'task2'));

taker.task('all', taker.parallel('combined', 'task3'));

var registry: Registry;
function CommonRegistry(options: { buildDir: string }): Registry {
    return registry;
}

var taker = new Undertaker(CommonRegistry({ buildDir: '/dist' }));

taker.task('build', taker.series('clean', function build(cb: () => void) {
    // do things
    cb();
}));

