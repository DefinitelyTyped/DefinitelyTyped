// Type definitions for umami 0.1
// Project: https://github.com/mikecao/umami
// Definitions by: Noah Overcash <https://github.com/ncovercash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var umami: umami.umami;

// Based on https://umami.is/docs/tracker-functions
declare namespace umami {
    interface umami {
        (event_value: string): void;
        trackEvent(event_value: string, event_type: string, url?: string, website_id?: string): void;
        trackView(url: string, referrer?: string, website_id?: string): void;
    }
}
