// Type definitions for Ember.js 1.0
// Project: http://emberjs.com/
// Definitions: https://github.com/borisyankov/DefinitelyTyped

module Em {

    // $;
    export function A(arr?: any[]): NativeArray;
    export function addListener(obj: any, eventName: string, targetOrMethod: any, method: any): void;
    export function alias(methodName: Descriptor): Alias;
    export function assert(desc: string, test: bool): void;
    export function beforeObserver(func: Function, propertyNames: string): Function;
    export function bind(obj: any, to: string, from: string): Binding;
    export function cacheFor(obj: any, key: string): void;


    export interface Alias {
    }

    class Application {
        static create(): Application;
        MyView: View;
    }

    export interface ArrayController {
    }

    export interface Binding {
    }

    export interface Descriptor {
    }

    export interface NativeArray {
        activate(): void;
    }

    export interface Object {
    }

    export class View {
    }
}
