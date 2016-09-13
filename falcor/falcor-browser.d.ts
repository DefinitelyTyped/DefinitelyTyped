// Type definitions for falcor 0.1.17
// Project: http://netflix.github.io/falcor/
// Definitions by: Quramy <https://github.com/Quramy/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="falcor.d.ts" />
/// <reference path="../falcor-http-datasource/falcor-http-datasource.d.ts" />

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

