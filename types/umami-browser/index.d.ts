// Type definitions for non-npm package umami-browser 2.3
// Project: https://github.com/umami-software/umami
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var umami: umami.umami;

declare namespace umami {
    interface TrackPayload {
        website: string;
        hostname?: string;
        language?: string;
        referrer?: string;
        screen?: string;
        title?: string;
        url?: string;
    }

    interface umami {
        track(payloadOrCallback?: TrackPayload | ((properties: TrackPayload) => TrackPayload)): void;
        track(eventName?: string, eventData?: Record<string, unknown>): void;
    }
}
