// Type definitions for @keystonejs/list-plugins 5.0
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/list-plugins' {
    import { BaseKeystoneAdapter, Plugin } from '@keystonejs/keystone';

    interface TrackingOptions {
        createdAtField?: string; // TODO: insert fields here
        updatedAtField?: string;
        access: any; // TODO: reuse the access controls type
    }
    interface AtTrackingOptions extends TrackingOptions {
        format?: string;
    }
    interface ByTrackingOptions extends TrackingOptions {
        ref?: string; // TODO: investigate list names
    }

    type AtTrackingPluginProvider = (options?: AtTrackingOptions) => Plugin;
    type ByTrackingPluginProvider = (options?: ByTrackingOptions) => Plugin;

    const atTracking: AtTrackingPluginProvider;
    const byTracking: ByTrackingPluginProvider;
}
