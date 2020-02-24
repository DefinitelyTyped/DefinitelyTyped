import karma = require('karma');

// karma.server is deprecated and will eventually be removed
karma.server.start({port: 9876}, (exitCode: number) => {
  console.log('Karma has exited with ' + exitCode);
  process.exit(exitCode);
});

karma.runner.run({port: 9876}, (exitCode: number) => {
  console.log('Karma has exited with ' + exitCode);
  process.exit(exitCode);
});

karma.stopper.stop({port: 9876}, (exitCode) => {
  if (exitCode === 0) {
    console.log('Server stop as initiated');
  }
  process.exit(exitCode);
});

const server = new karma.Server({logLevel: 'debug', port: 9876}, (exitCode: number) => {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

server.start();

server.refreshFiles();

server.on('browser_register', (browser: any) => {
    console.log('A new browser was registered');
});

server.on('run_complete', (browsers, results) => {
   results.disconnected = false;
   results.error = false;
   results.exitCode = 0;
   results.failed = 9;
   results.success = 10;
});

karma.runner.run({port: 9876}, (exitCode: number) => {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

const launcher: karma.launcher.Launcher = null;
const captured: boolean = launcher.areAllCaptured();

// Example of configuration file karma.conf.ts, see http://karma-runner.github.io/latest/config/configuration-file.html
module.exports = (config: karma.Config) => {
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

    loggers: {
      custom: { type: 'file', filename: 'log.txt' }
    },

    reporters: [
      'progress',
      'coverage'
    ],

    middleware: ['foo', 'bar'],

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
    customLaunchers: {
      ChromiumHeadless_without_security: {
        base: 'ChromiumHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    },

    singleRun: true,
    restartOnFileChange: true,
    browserConsoleLogOptions: {
        level: 'warn',
        format: '%b %T: %m',
        path: 'some/path/to.log',
        terminal: false,
    },
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

console.log(karma.constants.DEFAULT_HOSTNAME);
console.log(karma.VERSION);

karma.config.parseConfig('karma.conf.js', {
    singleRun: true,
    restartOnFileChange: true
});
