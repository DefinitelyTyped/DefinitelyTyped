// Type definitions for angular-feature-flags 1.4.0
// Project: https://github.com/mjt01/angular-feature-flags
// Definitions by: Borislav Zhivkov <https://github.com/borislavjivkov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare namespace angular.featureflags {
    export interface FlagData {
        /**
         * Unique key that is used from the markup to resolve whether a flag is active or not.
         */
        key: string;

        /**
         * Boolean value for enabling/disabling the feature
         */
        active: boolean;

        /**
         * A short name of the flag (only visible in the list of flags)
         */
        name: string;

        /**
         * A long description of the flag to further explain the feature being toggled (only visible in the list of flags)
         */
        description: string;
    }

    export interface FeatureFlagsProvider {
        setInitialFlags(flags: Array<FlagData>): void;
    }

    export interface FeatureFlagsService {
        set(flagsPromise: angular.IPromise<FlagData> | angular.IHttpPromise<FlagData>): void;
    }
}