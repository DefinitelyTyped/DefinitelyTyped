/// <reference path="karma.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require('gulp');
import karma = require('karma');


function runKarma(singleRun: boolean): void {
    // MEMO: `start` method is deprecated since 0.13. It will be removed in 0.14.
    karma.server.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: singleRun
    });
}

gulp.task('test:unit:karma', ['build:test:unit'], () => runKarma(true));



karma.server.start({port: 9876}, (exitCode: number) => {
  console.log('Karma has exited with ' + exitCode);
  process.exit(exitCode);
});


karma.runner.run({port: 9876}, (exitCode: number) => {
  console.log('Karma has exited with ' + exitCode);
  process.exit(exitCode);
});


var Server = require('karma').Server;
var server = new Server({port: 9876}, function(exitCode: number) {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

server.start();

server.refreshFiles();

server.on('browser_register', function (browser: any) {
    console.log('A new browser was registered');
});

var runner = require('karma').runner;
runner.run({port: 9876}, function(exitCode: number) {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

//

var captured: boolean = karma.launcher.areAllCaptured();
