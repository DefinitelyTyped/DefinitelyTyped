
// From https://hapijs.com/api/16.1.1#servermethodname-method-options

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80 });

// Simple arguments

const add = function (a: number, b: number, next: Hapi.ServerMethodNext) {

    return next(null, a + b);
};

server.method('sum', add, { cache: { expiresIn: 2000, generateTimeout: 100 } });

var next: Hapi.ServerMethodNext = (err, result) => {

    console.log(result);
};
server.methods.sum(4, 5, next);

// Object argument

const addArray = function (array: number[], next: Hapi.ServerMethodNext) {

    let sum = 0;
    array.forEach((item) => {

        sum += item;
    });

    return next(null, sum);
};

server.method('sumObj', addArray, {
    cache: { expiresIn: 2000, generateTimeout: 100 },
    generateKey: function (array) {

        return array.join(',');
    }
});

var next: Hapi.ServerMethodNext = (err, result) => {

    console.log(result);
};
server.methods.sumObj([5, 6], next);

// Synchronous method with cache

const addSync = function (a: number, b: number) {

    return a + b;
};

server.method('sumSync', addSync, { cache: { expiresIn: 2000, generateTimeout: 100 }, callback: false });

var next: Hapi.ServerMethodNext = (err, result) => {

    console.log(result);
};
server.methods.sumSync(4, 5, next);

// server.method(methods)

var config = {
    name: 'sum',
    method: add,
    options: {
        cache: {
            expiresIn: 2000,
            generateTimeout: 100
        }
    }
};
server.method(config);
server.method([config]);

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18283

const syncX1 = function (arg1: string) {
    return Promise.resolve("some value" + arg1);
}
type SyncX1 = typeof syncX1;

const asyncX1 = function (callback: Hapi.ServerMethodNext) {
    callback(null, "result");
}
type AsyncX1 = typeof asyncX1;

server.method("MethodSyncX1", syncX1);
server.method("MethodAsyncX1", asyncX1);
(server.methods.MethodSyncX1 as SyncX1)("argument1") as Promise<string>;
const cb: Hapi.ServerMethodNext = (err, result, ttl) => {}
(server.methods.MethodAsyncX1 as AsyncX1)(cb) as void;
