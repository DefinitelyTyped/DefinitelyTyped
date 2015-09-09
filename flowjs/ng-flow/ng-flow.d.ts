// Type definitions for ng-flow
// Project: https://github.com/flowjs/ng-flow
// Definitions by: Ryan McNamara <https://github.com/ryan10132>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../flow/flowjs.d.ts" />

declare module ng.flow {
    interface IFlowFactory {
        create(options?: flowjs.IFlowOptions): flowjs.IFlow;
    }
}
