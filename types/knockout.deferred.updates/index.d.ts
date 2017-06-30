// Type definitions for Knockout Deferred Updates
// Project: https://github.com/mbest/knockout-deferred-updates
// Definitions by: Sebastián Galiano <https://github.com/sgaliano/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="knockout" />

interface KnockoutDeferredTasks {
    processImmediate(evaluator: Function, object?: any, args?: any[]): any;
    processDelayed(evaluator: Function, distinct?: boolean, options?: any[]): boolean;
    makeProcessedCallback(evaluator: Function): void;
}

// Knockout global
interface KnockoutStatic {
    processAllDeferredBindingUpdates(): void;
    processAllDeferredUpdates(): void;
    evaluateAsynchronously(evaluator: Function, timeout?: any): number;
    ignoreDependencies(callback: Function, callbackTarget: any, callbackArgs?: any[]);
}

// Observables
interface KnockoutSubscribableFunctions<T> {
    deferUpdates: boolean;
}

// Computed
interface KnockoutComputedStatic {
    deferUpdates: boolean;
}

interface KnockoutSubscription {
    deferUpdates: boolean;
}

// Utils
interface KnockoutUtils {
    objectForEach(obj: any, action: Function): void;
    objectMap(source: any, mapping: Function): any;
}

// Deferred extender
interface KnockoutExtenders {
    deferred(target: any, value: boolean): any;
}