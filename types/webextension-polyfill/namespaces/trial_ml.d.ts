//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.trial.ml
 */
export namespace TrialMl {
    interface CreateEngineRequest {
        [s: string]: unknown;
    }

    interface RunEngineRequest {
        [s: string]: unknown;
    }

    /**
     * Object containing the data, see https://firefox-source-docs.mozilla.org/toolkit/components/ml/notifications.html
     */
    interface OnProgressProgressDataType {
        [s: string]: unknown;
    }

    interface Static {
        /**
         * Prepare the inference engine
         */
        createEngine(CreateEngineRequest: CreateEngineRequest): void;

        /**
         * Call the inference engine
         */
        runEngine(RunEngineRequest: RunEngineRequest): void;

        /**
         * Delete the models the extension downloaded.
         */
        deleteCachedModels(): void;

        /**
         * Events from the inference engine.
         *
         * @param progressData Object containing the data, see https://firefox-source-docs.mozilla.
         * org/toolkit/components/ml/notifications.html
         */
        onProgress: Events.Event<(progressData: OnProgressProgressDataType) => void>;
    }
}
