// Type definitions for angular-promise-tracker 2.2.2
// Project: https://github.com/ajoslin/angular-promise-tracker
// Definitions by: Rufus Linke <https://github.com/rufusl/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace promisetracker {
        interface PromiseTrackerOptions {
            activationDelay?: number;
            minDuration?: number;
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
}
