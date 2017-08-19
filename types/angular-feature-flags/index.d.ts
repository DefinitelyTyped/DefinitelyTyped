// Type definitions for angular-feature-flags 1.4.0
// Project: https://github.com/mjt01/angular-feature-flags
// Definitions by: Borislav Zhivkov <https://github.com/borislavjivkov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from "angular";

declare module "angular" {
    namespace featureflags {
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
}
