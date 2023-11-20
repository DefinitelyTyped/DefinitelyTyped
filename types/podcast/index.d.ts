export = Podcast;

declare class Podcast {
    constructor(options?: Podcast.FeedOptions, items?: ReadonlyArray<Podcast.Item>);

    addItem(item: Podcast.Item): void;
    buildXml(indent?: boolean | string): string;
}

declare namespace Podcast {
    interface BaseFeedOptions {
        title?: string | undefined;
        description?: string | undefined;
        generator?: string | undefined;
        docs?: string | undefined;
        author: string;
        managingEditor?: string | undefined;
        webMaster?: string | undefined;
        copyright?: string | undefined;
        language?: string | undefined;
        categories?: string[] | undefined;
        pubDate?: Date | string | undefined;
        ttl?: number | undefined;
        itunesAuthor?: string | undefined;
        itunesSubtitle?: string | undefined;
        itunesSummary?: string | undefined;
        itunesOwner?: FeedItunesOwner | undefined;
        itunesExplicit?: boolean | undefined;
        itunesCategory?: FeedItunesCategory[] | undefined;
        itunesImage?: string | undefined;
        itunesType?: "episodic" | "serial" | undefined;
        customNamespaces?: object | undefined;
        customElements?: object[] | undefined;
    }

    interface FeedItunesOwner {
        name: string;
        email: string;
    }

    interface FeedItunesCategory {
        text: string;
        subcats?: FeedItunesCategory[] | undefined;
    }

    type FeedOptions =
        & BaseFeedOptions
        & ({ feedUrl: string } | { feed_url: string })
        & ({ siteUrl: string } | { site_url: string })
        & ({ imageUrl?: string | undefined } | { image_url?: string | undefined });

    interface Item {
        title?: string | undefined;
        description?: string | undefined;
        url: string;
        guid?: string | undefined;
        categories?: string[] | undefined;
        author?: string | undefined;
        date: Date | string;
        lat?: number | undefined;
        long?: number | undefined;
        enclosure?: ItemEnclosure | undefined;
        content?: string | undefined;
        itunesAuthor?: string | undefined;
        itunesExplicit?: boolean | undefined;
        itunesSubtitle?: string | undefined;
        itunesSummary?: string | undefined;
        itunesDuration?: number | string | undefined;
        itunesImage?: string | undefined;
        itunesSeason?: number | undefined;
        itunesEpisode?: number | undefined;
        itunesTitle?: string | undefined;
        itunesEpisodeType?: "full" | "trailer" | "bonus" | undefined;
        customElements?: object[] | undefined;
    }

    interface ItemEnclosure {
        url: string;
        file?: string | undefined;
        size?: number | undefined;
        type?: string | undefined;
    }
}
