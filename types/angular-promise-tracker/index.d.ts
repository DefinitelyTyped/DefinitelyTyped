/// <reference types="angular" />

import * as angular from "angular";

declare module "angular" {
    export namespace promisetracker {
        interface PromiseTrackerOptions {
            activationDelay?: number | undefined;
            minDuration?: number | undefined;
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

    interface IRequestShortcutConfig {
        tracker?: angular.promisetracker.PromiseTracker | angular.promisetracker.PromiseTracker[] | undefined;
    }
}
