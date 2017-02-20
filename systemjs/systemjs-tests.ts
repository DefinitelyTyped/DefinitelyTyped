import SystemJS = require('systemjs');

SystemJS.config({
    baseURL: '/app'
});

SystemJS.import('main.js');

SystemJS.config({
    // or 'traceur' or 'typescript' 
    transpiler: 'babel',
    // or traceurOptions or typescriptOptions 
    babelOptions: {

    }
});


SystemJS.config({
    map: {
        traceur: 'path/to/traceur.js'
    }
});

SystemJS.config({
  map: {
    'local/package': {
      x: 'vendor/x.js'
    },
    'another/package': {
      x: 'vendor/y.js'
    }
  }
});

SystemJS.transpiler = 'traceur';


// loads './app.js' from the current directory 
SystemJS.import('./app.js').then(function (m) {
    console.log(m);
});

SystemJS.import('lodash').then(function (_) {
    console.log(_);
});

const clonedSystemJSJS = new SystemJS.constructor();
