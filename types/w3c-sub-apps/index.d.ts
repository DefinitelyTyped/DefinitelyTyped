/**
 * @see https://wicg.github.io/sub-apps/
 */

/** Represents the https://w3c.github.io/manifest/#id-member */
export type ManifestId = string;

export interface SubAppsAddResponse {
    /** Map of install paths as user provided to their corresponding ManifestId. */
    installedApps: Record<string, ManifestId>;
    /** Map of install paths as user provided to the error that occurred. */
    failedApps: Record<string, DOMException>;
}

export interface SubAppsRemoveResponse {
    /** List of successfully removed Sub Apps' ManifestIds. */
    removedApps: ManifestId[];
    /** Map of ManifestIds to the error that occurred. */
    failedApps: Record<ManifestId, DOMException>;
}

export interface SubAppsListResult {
    /** The name of the Sub App. */
    appName: string;
}

declare global {
    interface SubApps {
        /** Installs one or more Sub Apps. */
        add(install_paths: string[]): Promise<SubAppsAddResponse>;
        /** Removes one or more Sub Apps. */
        remove(manifest_ids: ManifestId[]): Promise<SubAppsRemoveResponse>;
        /** Lists installed Sub Apps. */
        list(): Promise<Record<ManifestId, SubAppsListResult>>;
    }

    interface Window {
        readonly subApps: SubApps;
    }
}
