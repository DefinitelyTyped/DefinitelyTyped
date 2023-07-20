// Type definitions for umami 0.1
// Project: https://github.com/umami-software/umami
// Definitions by: Noah Overcash <https://github.com/ncovercash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var umami: umami.umami;

// Based on https://umami.is/docs/tracker-functions
declare namespace umami {
    interface umami {
        track(view_properties?: { website: string, [ key: string ]: string }): void;
        track(event_name: string, event_data?: { [ key: string ]: string | number }): void;
    }
}
