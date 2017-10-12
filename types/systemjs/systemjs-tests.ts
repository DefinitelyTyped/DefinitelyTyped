import SystemJS = require('systemjs');

SystemJS.config({
    baseURL: '/app'
});

SystemJS.import('main.js');

SystemJS.config({
    // 'plugin-traceur' or 'plugin-typescript' or 'babel' or 'traceur' or 'typescript' or false.
    transpiler: 'plugin-babel',
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
    meta: {
        '*': {
            authorization: true
        }
    }
});

SystemJS.config({
    meta: {
        '*': {
            authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
        }
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

const mockModule = {
    default: function () {
        return 42;
    }
};

SystemJS.set('./app.js', SystemJS.newModule(mockModule));

SystemJS.import('./app.js').then(function (m: typeof mockModule) {
    m.default();
});

SystemJS.import('lodash').then(function (_: (...args: any[]) => any) {
    _(1, '2', {}, []);
});

const clonedSystemJSJS = new SystemJS.constructor();
