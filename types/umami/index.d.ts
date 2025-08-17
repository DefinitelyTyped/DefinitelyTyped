declare var umami: umami.umami;

/**
 * @see {@link https://umami.is/docs/tracker-functions|Umami Docs}
 */
declare namespace umami {
    interface UmamiSessionData {
        name: string;
        email: string;
    }

    interface umami {
        track(): Promise<string> | undefined;
        track(
            event_name: string,
            event_data?: { [key: string]: any },
        ): Promise<string> | undefined;
        track(custom_payload: {
            website: string;
            [key: string]: any;
        }): Promise<string> | undefined;
        track(
            callback: (props: {
                hostname: string;
                language: string;
                referrer: string;
                screen: string;
                title: string;
                url: string;
                website: string;
            }) => { website: string; [key: string]: any },
        ): Promise<string> | undefined;

        identify(unique_id: string): Promise<void>;
        identify(unique_id: string, data: UmamiSessionData): Promise<void>;
        identify(data: UmamiSessionData): Promise<void>;
    }
}
