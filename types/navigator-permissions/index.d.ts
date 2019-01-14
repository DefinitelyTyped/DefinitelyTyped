// Type definitions for Navigator.Permissions 0.1
// Project: https://developer.mozilla.org/en-US/docs/Web/API/Permissions
// Definitions by: Vince Varga <https://github.com/vargavince91>, MindDoc <https://github.com/minddocdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 *  Namespace for `navigator.permissions` type definitions.
 *
 * As the Permissions API is only supported by Firefox and Chrome
 * https://caniuse.com/#feat=permissions-api
 * the TypeScript team has not yet added it to lib.dom.d.ts
 * https://github.com/Microsoft/TypeScript/issues/24923
 * In the meantime, these type definitions can be used.
 *
 * The documentation is based on the MDN web docs
 * https://developer.mozilla.org/en-US/docs/Web/API/Permissions
 */
declare namespace NavigatorPermissions {
    /**
     * Permission state values.
     */
    type PermissionState =
      'granted' |
      'denied' |
      'prompt';

    /**
     * The `PermissionStatus` interface of the Permissions API provides the state
     * of an object and an event handler for monitoring changes to said state.
     *
     * This is an experimental technology
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus}
     */
    interface PermissionStatus extends EventTarget {
        /**
         * Returns the state of a requested permission.
         */
        readonly state: PermissionState;
        /**
         * Returns the state of a requested permission.
         * Later versions of the specification replace this with
         * `PermissionStatus.state`.
         * @deprecated
         */
        readonly status: PermissionState;
        /**
         * An event called whenever `PermissionStatus.status` changes.
         */
        onchange: ((this: this, event: Event) => any) | null;
    }

    /**
     * Permission name options.
     */
    type PermissionName =
      'accelerometer' |
      'accessibility-events' |
      'ambient-light-sensor' |
      'background-sync' |
      'camera' |
      'clipboard-read' |
      'clipboard-write' |
      'geolocation' |
      'gyroscope' |
      'magnetometer' |
      'microphone' |
      'midi' |
      'notifications' |
      'payment-handler' |
      'persistent-storage' |
      'push';

    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query}
     */
    interface PermissionDescriptor<N extends PermissionName> {
        /**
         * The name of the API whose permissions you want to query.
         *
         * Please, be aware, that not all of these are supported in every browser
         * that supports the Permissions API. For example, in Firefox you can't query
         * the `'microphone'` or `'camera'` and it'll throw `TypeError`
         */
        name: N;
    }

    interface PushPermissionDescriptor extends PermissionDescriptor<'push'> {
        /**
         * Indicates whether you want to show a notification for every message
         * or be able to send silent push
         * notifications. The default is `false`. Not supported in Firefox.
         */
        userVisibleOnly?: boolean;
    }

    interface MidiPermissionDescriptor extends PermissionDescriptor<'midi'> {
        /**
         * Indicates whether you need and/or receive system exclusive
         * messages. The default is false.
         */
        sysex?: boolean;
    }

    // Map permission names to correctly typed descriptors.
    interface NameDescriptorMap {
      // ??? Question ???:
      // Is there a better way to handle this case and remove repeated code,
      // something like
      // <N extends PermissionName, D extends PermissionDescriptor<N>> {
      //   [n in N]: D; // this line to cover all basic cases
      //   // and the custom permission descriptors for midi and push
      // }
      'accelerometer': PermissionDescriptor<'accelerometer'>;
      'accessibility-events': PermissionDescriptor<'accessibility-events'>;
      'ambient-light-sensor': PermissionDescriptor<'ambient-light-sensor'>;
      'background-sync': PermissionDescriptor<'background-sync'>;
      'camera': PermissionDescriptor<'camera'>;
      'clipboard-read': PermissionDescriptor<'clipboard-read'>;
      'clipboard-write': PermissionDescriptor<'clipboard-write'>;
      'geolocation': PermissionDescriptor<'geolocation'>;
      'gyroscope': PermissionDescriptor<'gyroscope'>;
      'magnetometer': PermissionDescriptor<'magnetometer'>;
      'microphone': PermissionDescriptor<'microphone'>;
      'notifications': PermissionDescriptor<'notifications'>;
      'payment-handler': PermissionDescriptor<'payment-handler'>;
      'persistent-storage': PermissionDescriptor<'persistent-storage'>;
      // These permission descriptors support extra properties
      'midi': MidiPermissionDescriptor;
      'push': PushPermissionDescriptor;
    }

    /**
     * The `Permissions` interface of the Permissions API provides the core
     * Permission API functionality, such as methods for querying and
     * revoking permissions.
     *
     * This is an experimental technology.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Permissions}
     */
    interface Permissions {
        /**
         * The `Permissions.query()` method of the `Permissions` interface returns
         * the state of a user permission on the global scope.
         * @param permissionDescriptor object that sets
         * options for the query operation consisting of a comma-separated list
         * of name-value pairs.
         * (Is comma-separated list really supported? It is mentioned in the docs, but does not work).
         * @returns the user permission status for a given API.
         * @throws `TypeError` Retrieving the `PermissionDescriptor` information
         * failed in some way, or the permission doesn't exist or is currently
         * unsupported (e.g. `midi`, or `push` with `userVisibleOnly`).
         * @see  {@link https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query}
         */
        query(permissionDescriptor: NameDescriptorMap[keyof NameDescriptorMap]): Promise<PermissionStatus>;
        /**
         * The `Permissions.revoke()` method of the `Permissions` interface reverts a
         * currently set permission back to its default state, which is usually `prompt`.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke}
         */
        revoke(permissionDescriptor: NameDescriptorMap[keyof NameDescriptorMap]): Promise<PermissionStatus>;
    }

    /**
     * Navigator type definition with possible `permissions` API support.
     *
     * This interface adds the `permissions` property to the navigator.
     */
    interface NavigatorPermissions extends Navigator {
        /**
         * Provides the core Permission API functionality, such as querying and revoking permissions.
         *
         * The typing takes into account that the feature is not widely supported,
         * making code using this API more secure by forcing considering the `undefined` case.
         */
        permissions?: Permissions;
    }
}
