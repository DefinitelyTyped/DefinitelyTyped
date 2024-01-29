//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.permissions
 */
import { Events } from "./events";
import { Manifest } from "./manifest";

export namespace Permissions {
    interface Permissions {
        /**
         * Optional.
         */
        permissions?: Manifest.OptionalPermission[];

        /**
         * Optional.
         */
        origins?: Manifest.MatchPattern[];
    }

    interface AnyPermissions {
        /**
         * Optional.
         */
        permissions?: Manifest.Permission[];

        /**
         * Optional.
         */
        origins?: Manifest.MatchPattern[];
    }

    interface Static {
        /**
         * Get a list of all the extension's permissions.
         */
        getAll(): Promise<AnyPermissions>;

        /**
         * Check if the extension has the given permissions.
         *
         * @param permissions
         */
        contains(permissions: AnyPermissions): Promise<boolean>;

        /**
         * Request the given permissions.
         *
         * @param permissions
         */
        request(permissions: Permissions): Promise<boolean>;

        /**
         * Relinquish the given permissions.
         *
         * @param permissions
         */
        remove(permissions: Permissions): Promise<boolean>;

        /**
         * Fired when the extension acquires new permissions.
         *
         * @param permissions
         */
        onAdded: Events.Event<(permissions: Permissions) => void>;

        /**
         * Fired when permissions are removed from the extension.
         *
         * @param permissions
         */
        onRemoved: Events.Event<(permissions: Permissions) => void>;
    }
}
