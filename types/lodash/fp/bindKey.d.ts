import _ = require("../index");

declare namespace Lodash {
    interface BindKey {
        (): BindKey;
        (...partials: any[]): BindKey1x1;
        <TValue>(...partials: any[], key: string): _.LoDashImplicitWrapper<(...args: any[]) => any>;
    }
    interface BindKey1x1 {
        (): BindKey1x1;
        <TValue>(key: string): _.LoDashImplicitWrapper<(...args: any[]) => any>;
    }
}

declare const bindKey: Lodash.BindKey;
export = bindKey;
