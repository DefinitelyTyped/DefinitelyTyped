/* tslint:disable:no-consecutive-blank-lines comment-format */

import { Options } from '@babel/preset-env';


//=========//
// TARGETS //
//=========//

let options: Options = {
    targets: '> 0.25%, not dead',
};

options = {
    targets: [
        '> 0.25%',
        'not dead',
    ],
};

options = {
    targets: {
        OperaMini: '80',
        Edge: '22',
        ie: '11',
    },
};

options = {
    targets: {
        esmodules: true,
    },
};

options = {
    targets: {
        node: '12',
    },
};

options = {
    targets: {
        node: 'current',
    },
};

options = {
    targets: {
        node: true,
    },
};

options = {
    targets: {
        safari: '20',
    },
};

options = {
    targets: {
        safari: 'tp',
    },
};

options = {
    targets: {
        browsers: '> 0.25%, not dead',
    },
};

options = {
    targets: {
        browsers: [
            '> 0.25%',
            'not dead',
        ],
    },
};


//==========//
// BUGFIXES //
//==========//

options = {
    bugfixes: true,
};

options = {
    bugfixes: false,
};


//======//
// SPEC //
//======//

options = {
    spec: true,
};

options = {
    spec: false,
};


//=======//
// LOOSE //
//=======//

options = {
    loose: true,
};

options = {
    loose: false,
};


//=========//
// MODULES //
//=========//

options = {
    modules: 'amd',
};

options = {
    modules: 'cjs',
};

options = {
    modules: 'commonjs',
};

options = {
    modules: false,
};


//=======//
// DEBUG //
//=======//

options = {
    debug: true,
};

options = {
    debug: false,
};


//=========//
// INCLUDE //
//=========//

options = {
    include: [],
};

options = {
    include: ['foo', 'bar'],
};

options = {
    include: [/foo/, /bar/],
};


//=========//
// EXCLUDE //
//=========//

options = {
    exclude: [],
};

options = {
    exclude: ['foo', 'bar'],
};

options = {
    exclude: [/foo/, /bar/],
};


//===============//
// USE BUILT INS //
//===============//

options = {
    useBuiltIns: 'usage',
};

options = {
    useBuiltIns: 'entry',
};

options = {
    useBuiltIns: false,
};


//========//
// COREJS //
//========//

options = {
    corejs: 2,
};

options = {
    corejs: 3,
};

options = {
    corejs: {
        version: 2,
        proposals: true,
    },
};

options = {
    corejs: {
        version: 3,
        proposals: false,
    },
};


//======================//
// FORCE ALL TRANSFORMS //
//======================//

options = {
    forceAllTransforms: true,
};

options = {
    forceAllTransforms: false,
};


//======================//
// FORCE ALL TRANSFORMS //
//======================//

options = {
    configPath: '/etc/babel-config.json',
};


//============================//
// IGNORE BROWSERSLIST CONFIG //
//============================//

options = {
    ignoreBrowserslistConfig: true,
};

options = {
    ignoreBrowserslistConfig: false,
};


//===================//
// SHIPPED PROPOSALS //
//===================//

options = {
    shippedProposals: true,
};

options = {
    shippedProposals: false,
};
