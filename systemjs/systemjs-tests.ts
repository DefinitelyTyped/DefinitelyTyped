

import System = require('systemjs');

System.config({
    baseURL: '/app'
});

System.import('main.js');

System.config({
    // or 'traceur' or 'typescript' 
    transpiler: 'babel',
    // or traceurOptions or typescriptOptions 
    babelOptions: {

    }
});


System.config({
    map: {
        traceur: 'path/to/traceur.js'
    }
});

System.transpiler = 'traceur';


// loads './app.js' from the current directory 
System.import('./app.js').then(function (m) {
    console.log(m);
});

System.import('lodash').then(function (_) {
    console.log(_);
});

const clonedSystemJS = new System.constructor();
