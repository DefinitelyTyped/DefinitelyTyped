declare var umami: umami.umami;

/**
 * @see {@link https://umami.is/docs/tracker-functions|Umami Docs}
 */
declare namespace umami {
    interface TrackPayload {
        hostname?: string;
        language?: string;
        referrer?: string;
        screen?: string;
        title?: string;
        url?: string;
        website: string;
    }

    interface TrackCustomPayload extends TrackPayload {
        name?: string;
        data?: Record<string, unknown>;
    }

    interface umami {
        track(): Promise<string> | undefined;
        track(
            eventName: string,
            eventData?: { [key: string]: any },
        ): Promise<string> | undefined;
        track(
            payload: TrackCustomPayload,
        ): Promise<string> | undefined;
        track(
            callback: (
                props: Required<TrackPayload>,
            ) => TrackCustomPayload,
        ): Promise<string> | undefined;

        identify(data: Record<string, unknown>): Promise<string> | undefined;
    }
}
