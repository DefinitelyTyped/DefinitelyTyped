//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.normandyAddonStudy
 *
 * Normandy Study API
 * Permissions: "normandyAddonStudy"
 */
import { Events } from "./events";
import { ExtensionTypes } from "./extensionTypes";

export namespace NormandyAddonStudy {
    interface Study {
        /**
         * The ID of the recipe for the study.
         */
        recipeId: number;

        /**
         * A slug to identify the study.
         */
        slug: string;

        /**
         * The name presented on about:studies.
         */
        userFacingName: string;

        /**
         * The description presented on about:studies.
         */
        userFacingDescription: string;

        /**
         * The study branch in which the user is enrolled.
         */
        branch: string;

        /**
         * The state of the study.
         */
        active: boolean;

        /**
         * The ID of the extension installed by the study.
         */
        addonId: string;

        /**
         * The URL of the XPI that was downloaded and installed by the study.
         */
        addonUrl: string;

        /**
         * The version of the extension installed by the study.
         */
        addonVersion: string;

        /**
         * The start date for the study.
         */
        studyStartDate: ExtensionTypes.DateType;

        /**
         * The end date for the study.
         */
        studyEndDate: ExtensionTypes.DateType;

        /**
         * The record ID for the extension in Normandy server's database.
         */
        extensionApiId: number;

        /**
         * A hash of the extension XPI file.
         */
        extensionHash: string;

        /**
         * The algorithm used to hash the extension XPI file.
         */
        extensionHashAlgorithm: string;
    }

    interface Static {
        /**
         * Returns a study object for the current study.
         */
        getStudy(): void;

        /**
         * Marks the study as ended and then uninstalls the addon.
         *
         * @param reason The reason why the study is ending.
         */
        endStudy(reason: string): void;

        /**
         * Returns an object with metadata about the client which may be required for constructing survey URLs.
         */
        getClientMetadata(): void;

        /**
         * Fired when a user unenrolls from a study but before the addon is uninstalled.
         *
         * @param reason The reason why the study is ending.
         */
        onUnenroll: Events.Event<(reason: string) => void>;
    }
}
