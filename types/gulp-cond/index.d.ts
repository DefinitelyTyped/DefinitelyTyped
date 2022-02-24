// Type definitions for gulp-cond 1.0
// Project: https://github.com/nfroidure/gulp-cond
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface GulpCond {
    (condition: GulpCond.Condition, expr1: GulpCond.Expresion, expr2?: GulpCond.Expresion): NodeJS.ReadWriteStream;
}

declare namespace GulpCond {
    type Expresion = NodeJS.ReadWriteStream | (() => NodeJS.ReadWriteStream);

    type Condition = boolean | (() => boolean);
}

declare const gulpCond: GulpCond;

export = gulpCond;
