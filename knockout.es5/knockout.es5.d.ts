// Type definitions for Knockout-ES5
// Project: https://github.com/SteveSanderson/knockout-es5
// Definitions by: Sebastián Galiano <https://github.com/sgaliano/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutStatic {
    track(obj: any, propertyNames?: Array<string>): any;
    defineProperty(obj: any, propertyName: string, evaluator: Function): any;
    defineProperty(obj: any, propertyName: string, options: { get: () => any; set?: (value: any) => void; }): any;
    getObservable(obj: any, propertyName: string): KnockoutObservable;
    valueHasMutated(obj: any, propertyName: string): void;
}