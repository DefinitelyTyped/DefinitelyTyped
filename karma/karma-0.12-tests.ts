/// <reference path="karma-0.12.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require('gulp');
import karma = require('karma');

function runKarma(singleRun: boolean): void {
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
