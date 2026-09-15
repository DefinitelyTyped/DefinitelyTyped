/**
 * @see https://github.com/WICG/sub-apps/blob/main/README.md
 */

/**
 * @description Unique identifier representing the sub-app web manifest ID.
 */
export type ManifestId = string;

/**
 * @description Response returned by `SubApps.add()` detailing installed and failed sub-apps.
 */
export interface SubAppsAddResponse {
    /** @description Record mapping install paths to successfully installed sub-app manifest IDs. */
    installedApps?: Record<string, ManifestId> | undefined;
    /** @description Record mapping install paths to DOMExceptions explaining failure reasons. */
    failedApps?: Record<string, DOMException> | undefined;
}

/**
 * @description Response returned by `SubApps.remove()` detailing removed and failed sub-apps.
 */
export interface SubAppsRemoveResponse {
    /** @description List of manifest IDs for successfully uninstalled sub-apps. */
    removedApps?: readonly ManifestId[] | undefined;
    /** @description Record mapping manifest IDs to DOMExceptions explaining failure reasons. */
    failedApps?: Record<ManifestId, DOMException> | undefined;
}

/**
 * @description Metadata of an installed sub-app returned by `SubApps.list()`.
 */
export interface SubAppsListResult {
    /** @description Display name of the sub-app extracted from its web manifest. */
    appName: string;
}

declare global {
    interface Window {
        /**
         * @description SubApps API entry point for managing sub-apps.
         * @since Chrome 152
         * @requires Permissions-Policy: sub-apps
         * @requires SecureContext
         */
        readonly subApps: SubApps;
    }

    /**
     * @description Provides an API for an Isolated Web App (IWA) to programmatically
     * install, list, and remove sub-apps.
     * @since Chrome 152
     * @requires Permissions-Policy: sub-apps
     * @requires SecureContext
     */
    interface SubApps {
        /**
         * @description Installs one or more sub-apps for the parent application.
         * @param installPaths Relative paths to the sub-apps entry pages.
         * @returns Promise resolving to installed and failed sub-app mappings.
         * @example
         * const { installedApps } = await window.subApps.add(["/calc"]);
         * console.log(installedApps);
         */
        add(installPaths: readonly string[]): Promise<SubAppsAddResponse>;

        /**
         * @description Uninstalls one or more sub-apps by their manifest IDs.
         * @param manifestIds Manifest IDs of the sub-apps to remove.
         * @returns Promise resolving to removed IDs and failed removals.
         * @example
         * const { removedApps } = await window.subApps.remove(["/calc"]);
         * console.log(removedApps);
         */
        remove(manifestIds: readonly string[]): Promise<SubAppsRemoveResponse>;

        /**
         * @description Retrieves all currently installed sub-apps for the parent app.
         * @returns Promise resolving to a record mapping manifest IDs to app details.
         * @example
         * const apps = await window.subApps.list();
         * console.log(apps);
         */
        list(): Promise<Record<string, SubAppsListResult>>;
    }
}
