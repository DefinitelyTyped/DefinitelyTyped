// Type definitions for angular-promise-tracker v2.2.2
// Project: https://github.com/ajoslin/angular-promise-tracker
// Definitions by: Rufus Linke <https://github.com/rufusl/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare namespace angular.promisetracker {
    interface PromiseTrackerOptions {
        activationDelay: number;
        minDuration: number;
    }

    interface PromiseTracker {
        active(): boolean;
        tracking(): boolean;
        trackingCount(): number;
        addPromise<T>(promise: angular.IPromise<T>): angular.IDeferred<void>;
        createPromise(): angular.IDeferred<void>;
        cancel(): void;
    }

    interface PromiseTrackerService {
        (options?: PromiseTrackerOptions): PromiseTracker;
    }
}
