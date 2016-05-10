// Type definitions for falcor 0.1.17
// Project: http://netflix.github.io/falcor/
// Definitions by: Quramy <https://github.com/Quramy/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference types="falcor-http-datasource" />

declare interface FalcorStatic {
    Model: typeof FalcorModel.Model;
    DataSource: typeof FalcorModel.DataSource;
    HttpDataSource: typeof FalcorHttpDataSource.XMlHttpSource;
    ref: typeof FalcorJsonGraph.ref;
    atom: typeof FalcorJsonGraph.atom;
    error: typeof FalcorJsonGraph.error;
    pathValue: typeof FalcorJsonGraph.pathValue;
}

declare var falcor: FalcorStatic;

