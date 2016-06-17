/// <reference path="./glob-expand.d.ts" />

import * as expand from "glob-expand";

expand({ filter: 'isFile', cwd: '../' }, ['**/*.*', '!exclude/these/**/*.*']);
// returns all files in cwd ['file1', 'file2',...] but excluding
// those under directory 'exclude/these'

// These are the same
expand({ cwd: '../..' }, ['**/*.*', '!node_modules/**/*.*']);
expand({ cwd: '../..' }, '**/*.*', '!node_modules/**/*.*');

// These are the same too:
expand({}, ['**/*.*', '!**/*.js']);
expand({}, '**/*.*', '!**/*.js');
expand(['**/*.*', '!**/*.js']);
expand('**/*.*', '!**/*.js');

// Using Regular Expressions:
expand('**/*.js', /.*\.(coffee\.md|litcoffee|coffee)$/i, '!DRAFT*.*');
// -> returns all `.js`, `.coffee`, `.coffee.md` & `.litcoffee` files,
//    excluding those starting with 'DRAFT'
