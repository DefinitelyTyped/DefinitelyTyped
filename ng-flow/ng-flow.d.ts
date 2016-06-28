// Type definitions for ng-flow
// Project: https://github.com/flowjs/ng-flow
// Definitions by: Ryan McNamara <https://github.com/ryan10132>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../flowjs/flowjs.d.ts" />

declare namespace ng.flow {
    interface IFlowFactory {
        create(options?: flowjs.IFlowOptions): flowjs.IFlow;
    }
}
