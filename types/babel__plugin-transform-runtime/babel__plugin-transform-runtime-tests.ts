/* tslint:disable:no-consecutive-blank-lines comment-format */

import { Options } from '@babel/plugin-transform-runtime';


//========//
// COREJS //
//========//

let options: Options = {
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


//=========//
// HELPERS //
//=========//

options = {
    helpers: true,
};

options = {
    helpers: false,
};


//=============//
// REGENERATOR //
//=============//

options = {
    regenerator: true,
};

options = {
    regenerator: false,
};


//================//
// USE ES MODULES //
//================//

options = {
    useESModules: true,
};

options = {
    useESModules: false,
};


//==================//
// ABSOLUTE RUNTIME //
//==================//

options = {
    absoluteRuntime: true,
};

options = {
    absoluteRuntime: false,
};

options = {
    absoluteRuntime: '/some/path/here',
};


//=========//
// VERSION //
//=========//

options = {
    version: '^1.2.3',
};
