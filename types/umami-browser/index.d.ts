declare var umami: umami.umami;

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/**
 * @see {@link https://umami.is/docs/tracker-functions|Umami Docs}
 */
declare namespace umami {
    interface PageViewProperties {
        website: string;
        hostname: string;
        language: string;
        referrer: string;
        screen: string;
        title: string;
        url: string;
    }

    interface EventData {
        [key: string]:
            | number
            | string
            | EventData
            | number[]
            | string[]
            | EventData[];
    }

    interface CustomPayload extends WithRequired<Partial<PageViewProperties>, "website"> {
        name?: string;
        data?: EventData;
    }

    interface umami {
        track: {
            (): Promise<void>;
            (eventName: string): Promise<void>;
            (eventName: string, eventData: EventData): Promise<void>;
            (props: CustomPayload): Promise<void>;
            (
                callback: (props: PageViewProperties) => CustomPayload,
            ): Promise<void>;
        };

        identify(uniqueId: string): Promise<void>;
        identify(uniqueId: string, data: EventData): Promise<void>;
        identify(data: EventData): Promise<void>;
    }
}
