/**
 * Namespace: browser.experiments
 * Generated from Mozilla sources. Do not manually edit!
 */
export namespace Experiments {
    interface ExperimentAPI {
        schema: ExperimentURL;

        /**
         * Optional.
         */
        parent?: ExperimentAPIParentType;

        /**
         * Optional.
         */
        child?: ExperimentAPIChildType;
    }

    type ExperimentURL = string;

    type APIPaths = APIPath[];

    type APIPath = string[];

    type APIEvents = APIEvent[];

    type APIEvent = "startup";

    type APIParentScope = "addon_parent" | "content_parent" | "devtools_parent";

    type APIChildScope = "addon_child" | "content_child" | "devtools_child";

    interface ExperimentAPIParentType {
        /**
         * Optional.
         */
        events?: APIEvents;

        /**
         * Optional.
         */
        paths?: APIPaths;

        script: ExperimentURL;

        /**
         * Optional.
         */
        scopes?: APIParentScope[];
    }

    interface ExperimentAPIChildType {
        paths: APIPaths;

        script: ExperimentURL;

        scopes: APIChildScope[];
    }

    interface Static {
        [s: string]: unknown;
    }
}
