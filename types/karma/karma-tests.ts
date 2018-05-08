import gulp = require('gulp');
import karma = require('karma');


function runKarma(singleRun: boolean): void {
    // MEMO: `start` method is deprecated since 0.13. It will be removed in 0.14.
    karma.server.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: singleRun
    });
}

gulp.task('test:unit:karma', gulp.parallel('build:test:unit', () => runKarma(true)));



karma.server.start({port: 9876}, (exitCode: number) => {
  console.log('Karma has exited with ' + exitCode);
  process.exit(exitCode);
});


karma.runner.run({port: 9876}, (exitCode: number) => {
  console.log('Karma has exited with ' + exitCode);
  process.exit(exitCode);
});

karma.stopper.stop({port: 9876}, function(exitCode) {
  if (exitCode === 0) {
    console.log('Server stop as initiated')
  }
  process.exit(exitCode)
});

//var Server = require('karma').Server; => cannot use this syntax otherwise Server is of type any
var server = new karma.Server({logLevel: 'debug', port: 9876}, function(exitCode: number) {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

server.start();

server.refreshFiles();

server.on('browser_register', function (browser: any) {
    console.log('A new browser was registered');
});

server.on('run_complete', (browsers, results) => {
   results.disconnected = false;
   results.error = false;
   results.exitCode = 0;
   results.failed = 9;
   results.success = 10;
});

//var runner = require('karma').runner; => cannot use this syntax otherwise runner is of type any
karma.runner.run({port: 9876}, function(exitCode: number) {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

//

var captured: boolean = karma.launcher.areAllCaptured();


// Example of configuration file karma.conf.ts, see http://karma-runner.github.io/0.13/config/configuration-file.html
module.exports = function(config: karma.Config) {
  config.set({
    logLevel: config.LOG_DEBUG,
    basePath: '..',
    urlRoot: '/base/',
    frameworks: ['jasmine'],

    files: [
      'file1.js',
      'file2.js',
      'file3.js',
      {
        pattern: '**/*.html',
        included: false
      }
    ],

    reporters: [
      'progress',
      'coverage'
    ],

    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },

    preprocessors: {
      'app.js': ['coverage']
    },

    port: 9876,

    autoWatch: true,

    browsers: [
      'Chrome',
      'Firefox'
    ],

    singleRun: true
  });
};

const foo = (config: karma.Config) => {
  config.set({
    client: {
      args: ['a', 'b'],
      useIframe: true,
      runInParent: true,
      captureConsole: true,
      clearContext: true
    }
  });
};
