// Type definitions for podcast 1.3
// Project: https://github.com/maxnowack/node-podcast
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
//                 Malo Bourgon <https://github.com/malob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export = Podcast;

declare class Podcast {
    constructor(options?: Podcast.FeedOptions, items?: ReadonlyArray<Podcast.Item>);

    addItem(item: Podcast.Item): void;
    buildXml(indent?: boolean | string): string;
}

declare namespace Podcast {
    interface BaseFeedOptions {
        title?: string;
        description?: string;
        generator?: string;
        docs?: string;
        author: string;
        managingEditor?: string;
        webMaster?: string;
        copyright?: string;
        language?: string;
        categories?: string[];
        pubDate?: Date | string;
        ttl?: number;
        itunesAuthor?: string;
        itunesSubtitle?: string;
        itunesSummary?: string;
        itunesOwner?: FeedItunesOwner;
        itunesExplicit?: boolean;
        itunesCategory?: FeedItunesCategory[];
        itunesImage?: string;
        itunesType?: "episodic" | "serial";
        customNamespaces?: object;
        customElements?: object[];
    }

    interface FeedItunesOwner {
        name: string;
        email: string;
    }

    interface FeedItunesCategory {
        text: string;
        subcats?: FeedItunesCategory[];
    }

    type FeedOptions = BaseFeedOptions &
        ({ feedUrl: string } | { feed_url: string }) &
        ({ siteUrl: string } | { site_url: string }) &
        ({ imageUrl?: string } | { image_url?: string });

    interface Item {
        title?: string;
        description?: string;
        url: string;
        guid?: string;
        categories?: string[];
        author?: string;
        date: Date | string;
        lat?: number;
        long?: number;
        enclosure?: ItemEnclosure;
        content?: string;
        itunesAuthor?: string;
        itunesExplicit?: boolean;
        itunesSubtitle?: string;
        itunesSummary?: string;
        itunesDuration?: number | string;
        itunesImage?: string;
        itunesSeason?: number;
        itunesEpisode?: number;
        itunesTitle?: string;
        itunesEpisodeType?: 'full' | 'trailer' | 'bonus';
        customElements?: object[];
    }

    interface ItemEnclosure {
        url: string;
        file?: string;
        size?: number;
        type?: string;
    }
}
