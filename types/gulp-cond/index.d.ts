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
