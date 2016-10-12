// Automatically generate script for locutus
// Written by: Hookclaw <https://github.com/hookclaw>

/* Usage
   tsc  locutus_print.ts
   node locutus_print.js define
 */


var locutus = require('locutus');

type f = (...args:any[]) => any;
type e = {[key:string]:f};
type d = {[key:string]:e};
type c = {[key:string]:d};

let loc:c = locutus;

let run = ():void => {
    if(process.argv.length > 1) {
        switch(process.argv[2]) {
            case 'define':
                define();
                return;
            case 'test':
                test();
                return;
            case 'settings':
                settings();
                return;
        }
    }
    console.log('settings,list,define');
};

let define = ():void => {
    console.log('// Type definitions for locutus');
    console.log('// Project: http://locutusjs.io');
    console.log('// Definitions by: Hookclaw <https://github.com/hookclaw>');
    console.log('// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped');
    console.log('');

    for(let key1 in loc) {
        for(let key2 in loc[key1]) {
            for(let key3 in loc[key1][key2]) {
                printSingle(loc,key1,key2,key3);
            }
        }
    }
    for(let key1 in loc) {
        for(let key2 in loc[key1]) {
            let modulename = 'locutus/' + key1 + '/' + key2;
            printGroup(modulename, loc[key1][key2]);
        }
    }
    for(let key1 in loc) {
        let modulename = 'locutus/' + key1;
        printGroup(modulename, loc[key1]);
    }
    let modulename = 'locutus';
    printGroup(modulename, loc);
}

let printSingle = (loc:c,key1:string,key2:string,key3:string):void => {
    console.log('declare module "locutus/' + key1 + '/' + key2 + '/' + key3 + '" {');
    console.log('\tfunction ' + key3 + arg(loc,key1,key2,key3) + ':any;');
    console.log('\texport = ' + key3 + ';');
    console.log('}');
}

let printGroup = (modulename:string,loc:{}):void => {
    let s:string[] = [];
    let c = '';
    console.log('declare module "' + modulename + '" {');
    for(let key in loc) {
        let com = '';
        let tmp = replace(key);
        if(tmp == key) {
            s.push(key);
        } else {
            com = '// ';
            // s.push('"' + key + '":' + tmp);
            c += ' /* ,"' + key + '":' + tmp + ' */';
        }
        console.log('\t' + com + 'import ' + tmp + ' = require("' + modulename + '/' + key + '");');
    }
    console.log('\texport {' + s.join(',') + c + '};');
    console.log('}');
}

let replace = (name:string):string => {
    if(name == 'var') {
        return 'Var';
    }
    // if(name == 'string') {
    //     return 'String';
    // }
    return name.replace('-','_');
}

let func = (loc:c,key1:string,key2:string,key3:string):string => {
    return '"' + key3 + '":' + arg(loc,key1,key2,key3) + ' => any';
}

const ARG1 = "(...args:any[])";

let arg = (loc:c,key1:string,key2:string,key3:string):string => {
    let src = loc[key1][key2][key3].toString();
    let mArguments = /[^a-zA-Z0-9_]arguments[^a-zA-Z0-9_]/;
    if(mArguments.test(src)) {
        return ARG1;
    }
    let mFunction = /^function [a-zA-Z0-9_]+\(/g;
    let result1 = mFunction.exec(src);
    if(result1 == null) {
        return ARG1;
    }
    let mFunction2 = /(\s*[,]?\s*[a-zA-Z0-9_]+)*\)/g;
    mFunction2.lastIndex = mFunction.lastIndex;
    let result12 = mFunction2.exec(src);
    let mParameter = /\s*[,]?\s*[a-zA-Z0-9_]+/g;
    let args:string[] = [];
    let i = 0;
    let result2:any;
    while((result2 = mParameter.exec(result12[0])) != null) {
        args.push(result2[0]+'?:any');
        i++;
    }
    return '('+args.join('')+')';
}

let test = ():void => {
    console.log('/// <reference path="locutus.d.ts" />');
    for(let key1 in loc) {
        for(let key2 in loc[key1]) {
            for(let key3 in loc[key1][key2]) {
                let modulename = 'locutus/' + key1 + '/' + key2 + '/' + key3;
                testsub(modulename);
            }
        }
    }
    for(let key1 in loc) {
        for(let key2 in loc[key1]) {
            let modulename = 'locutus/' + key1 + '/' + key2;
            testsub(modulename);
        }
    }
    for(let key1 in loc) {
        let modulename = 'locutus/' + key1;
        testsub(modulename);
    }
    let modulename = 'locutus';
    testsub(modulename);
}

let testsub = (modulename:string):void => {
    let varname = modulename.replace(/[-/]/g,'_');
    console.log("import " + varname + " = require('" + modulename + "');");
}

let settings = ():void => {
    let s = '';
    for(let key1 in loc) {
        if(key1 != 'php') {
            continue;
        }
        for(let key2 in loc[key1]) {
            for(let key3 in loc[key1][key2]) {
                if(s != '') {
                    s += ',\n';
                }
                let len = 21 - key3.length;
                let tab = '';
                while(len > 0) {
                    tab += '\t';
                    len -= 4;
                }
                //"var_dump": {"cod":"var_dump", "mod":["var_dump","locutus/php/var/var_dump"]}
                s += '\t\t\t\t"' + key3 + '":' + tab + '{"cod":"' + key3 + '","mod":["' + key3 + '","locutus/' + key1 + '/' + key2 + '/' + key3 + '"]}';
            }
        }
    }
    console.log(s);
}

run();
