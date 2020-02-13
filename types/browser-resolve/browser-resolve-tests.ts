import browserResolve = require('browser-resolve');

function basic_test_async(callback: (err?: Error, resolved?: string) => void) {
  browserResolve('typescript', function(error, resolved) {
    if (error) {
      return callback(error);
    }
    callback(null, resolved);
  });
}

function basic_test_sync() {
  var resolved = browserResolve.sync('typescript');
}

function options_test_async() {
  browserResolve('typescript', {
    browser: 'jsnext:main',
    filename: './browser-resolve/browser-resolve.js',
    modules: {
      fs: './fs-shim.js'
    }
  }, function(error, resolved) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(resolved);
  });
}

function options_test_sync() {
  var resolved = browserResolve.sync('typescript', {
    filename: './browser-resolve/browser-resolve.js',
    modules: {}
  });
}
