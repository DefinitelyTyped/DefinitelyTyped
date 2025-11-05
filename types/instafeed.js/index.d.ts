export as namespace Instafeed;

export = Instafeed;

declare class Instafeed<T = Instafeed.InstafeedDefaultItem> {
    constructor(options: Instafeed.InstafeedOptions<T>);

    run(): boolean;
    hasNext(): boolean;
    next(): void;
}

declare namespace Instafeed {
    interface InstafeedOptions<T = Instafeed.InstafeedDefaultItem> {
        accessToken: string | ((accessTokenReceiver: (err: unknown, value: string) => void) => void);
        accessTokenTimeout?: number;
        after?: () => void;
        apiTimeout?: number;
        apiLimit?: number;
        before?: () => void;
        debug?: boolean;
        error?: (err: Error) => any;
        filter?: (item: T) => boolean;
        limit?: number;
        mock?: boolean;
        render?: (item: T, options: Instafeed.InstafeedOptions) => string;
        sort?: (a: T, b: T) => number;
        success?: (data: InstagramResponseData) => void;
        target?: string | Element;
        template?: string;
        templateBoundaries?: string[];
        transform?: (item: InstafeedDefaultItem) => T;
    }

    interface InstafeedDefaultItem {
        caption: string;
        id: string;
        image: string;
        link: string;
        model: InstagramDataItem;
        tags: string[];
        timestamp: string;
        type: string;
        username: string;
    }

    type InstagramDataItem = {
        caption: string;
        id: string;
        media_type: "CAROUSEL_ALBUM" | "IMAGE";
        media_url: string;
        permalink: string;
        timestamp: string;
        username: string;
    } | {
        caption: string;
        id: string;
        media_type: "VIDEO";
        media_url: string;
        permalink: string;
        thumbnail_url: string
        timestamp: string;
        username: string;
    }

    interface InstagramPaging {
        cursors: {
            after?: string;
            before?: string;
        };
        next?: string;
        previous?: string;
    }

    interface InstagramResponseData {
        data: InstagramDataItem[];
        paging: InstagramPaging;
    }
}
