export {};

type Maybe<T> = T | undefined;

export interface FeedItem {
    id: string;
    title: string;
    links: Array<{
        url: string;
        rel: string;
    }>;
    description: string;
    content: string;
    authors: Array<Maybe<{ name: string }>>;
    categories: Array<Maybe<{ name: string }>>;
    published: string;
    enclosures: Array<{
        url: string;
        length: string;
        mimeType: string;
    }>;
    itunes: {
        authors: Maybe<Array<{ name: string }>>;
        block: Maybe<string>;
        duration: string;
        explicit: string;
        image: Maybe<string>;
        isClosedCaptioned: Maybe<string>;
        order: Maybe<string>;
        subtitle: string;
        summary: Maybe<string>;
    };
}

export interface Feed {
    type: string;
    title: string;
    links: Array<{
        url: string;
        rel: string;
    }>;
    description: string;
    language: string;
    copyright: Maybe<string>;
    authors: Array<Maybe<{ name: string }>>;
    lastUpdated: string;
    lastPublished: string;
    categories: Array<Maybe<{ name: string }>>;
    image: {
        title: string;
        description: Maybe<string>;
        url: string;
        height: Maybe<string>;
        width: Maybe<string>;
    };
    itunes: {
        authors: Array<{ name: string }>;
        block: Maybe<string>;
        categories: Array<{
            name: string;
            subCategories: Array<Maybe<{ name: string }>>;
        }>;
        complete: Maybe<string>;
        explicit: string;
        image: string;
        newFeedUrl: Maybe<string>;
        owner: {
            name: string;
            email: string;
        };
        subtitle: Maybe<string>;
        summary: string;
    };
    items: FeedItem[];
}

export function parse(feedUrl: string): Promise<Feed>;
