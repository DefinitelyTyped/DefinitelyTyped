/// <reference path="Q.d.ts" />

module "q" {
    export function when(value: any, onFulfilled: Function, onRejected?: Function): Qpromise;
    export function try(method: Function, ...args: any[]): Qpromise;
    export function fbind(method: Function, ...args: any[]): Qpromise;
    export function fcall(method: Function, ...args: any[]): Qpromise;
    export function nfbind(nodeFunction: Function): (...args: any[]) => Qpromise;
    export function nfcall(nodeFunction: Function, ...args: any[]): Qpromise;
    export function ninvoke(nodeModule: any, functionName: string, ...args: any[]): Qpromise;
    export function all(promises: Qpromise[]): Qpromise;
    export function allResolved(promises: Qpromise[]): Qpromise;
    export function spread(onFulfilled: Function, onRejected: Function): Qpromise;
    export function timeout(ms: number): Qpromise;
    export function delay(ms: number): Qpromise;
    export function delay(value: any, ms: number): Qpromise;
    export function isFulfilled(): bool;
    export function isRejected(): bool;
    export function isPending(): bool;
    export function valueOf(): any;
    export function defer(): Qdeferred;
    export function (value: any): Qpromise;
    export function reject(): Qpromise;
    export function promise(factory: { resolve: Function; reject: Function; notify: Function; }): Qpromise;
    export function isPromise(value: any): bool;
    export function async(generatorFunction: any): Qdeferred;
    export function nextTick(callback: Function);
    export var oneerror: any;
    export var longStackJumpLimit: number;
	export function resolve(object?:Qpromise);
}