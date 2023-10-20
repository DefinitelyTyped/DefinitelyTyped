/// <reference types="angular" />

import * as ng from "angular";

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
             * A long description of the flag to further explain the feature being toggled
             * (only visible in the list of flags)
             */
            description: string;
        }

        export interface FeatureFlagsProvider {
            setInitialFlags(flags: ReadonlyArray<FlagData>): void;
        }

        export interface FeatureFlagsService {
            set(
                flagsPromise:
                    | ng.IPromise<ReadonlyArray<FlagData>>
                    | ng.IHttpPromise<ReadonlyArray<FlagData>>,
            ): void;
        }
    }
}
