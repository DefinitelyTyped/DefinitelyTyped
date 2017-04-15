/// Type definitions for Knockout.Mapping 2.0 (as an AMD module)
// Project: https://github.com/SteveSanderson/knockout.mapping
// Definitions by: Boris Yankov <https://github.com/borisyankov/> (knocking.mapping.d.ts) and Andy Hunt <https://github.com/AndyBursh/> (knockout.mapping.amd.d.ts)
// Definitions https://github.com/borisyankov/DefinitelyTyped

/// <reference path="knockout.mapping.d.ts" />
declare module "knockout.mapping" {
    export function isMapped(viewModel: any): boolean;
    export function fromJS(jsObject: any): any;
    export function fromJS(jsObject: any, targetOrOptions: any): any;
    export function fromJS(jsObject: any, inputOptions: any, target: any): any;
    export function fromJSON(jsonString: string): any;
    export function fromJSON(jsonString: string, targetOrOptions: any): any;
    export function fromJSON(jsonString: string, inputOptions: any, target: any): any;
    export function toJS(rootObject: any, options?: KnockoutMappingOptions): any;
    export function toJSON(rootObject: any, options?: KnockoutMappingOptions): any;
    export function defaultOptions(): KnockoutMappingOptions;
    export function resetDefaultOptions(): void;
    export function getType(x: any): any;
    export function visitModel(rootObject: any, callback: Function, options?: { visitedObjects?; parentName?; ignore?; copy?; include?; }): any;
}