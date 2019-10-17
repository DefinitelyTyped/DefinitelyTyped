// Type definitions for Knockout Deferred Updates
// Project: https://github.com/mbest/knockout-deferred-updates
// Definitions by: Sebastián Galiano <https://github.com/sgaliano>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="knockout" />

// Knockout global
declare namespace ko {
    function processAllDeferredBindingUpdates(): void;
    function processAllDeferredUpdates(): void;
    function evaluateAsynchronously(evaluator: Function, timeout?: any): number;
    function ignoreDependencies(callback: Function, callbackTarget: any, callbackArgs?: any[]): any;

    namespace tasks {
        function processImmediate(evaluator: Function, object?: any, args?: any[]): any;
        function processDelayed(evaluator: Function, distinct?: boolean, options?: any[]): boolean;
        function makeProcessedCallback(evaluator: Function): void;
    }
    // Observables
    interface SubscribableFunctions<T> {
        deferUpdates: boolean;
    }

    // Computed
    namespace computed {
        let deferUpdates: boolean;
    }

    interface Subscription {
        deferUpdates: boolean;
    }

    // Utils
    namespace utils {
        function objectForEach(obj: any, action: Function): void;
        function objectMap(source: any, mapping: Function): any;
    }
}
