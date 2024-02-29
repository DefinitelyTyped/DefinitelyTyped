declare namespace RSS {
    interface FeedOptions {
        /**
         * Title of your site or feed.
         */
        title: string;
        /**
         * A short description of the feed.
         */
        description?: string | undefined;
        /**
         * Feed generator.
         */
        generator?: string | undefined;
        /**
         * URL to the rss feed.
         */
        feed_url: string;
        /**
         * URL to the site that the feed is for.
         */
        site_url: string;
        /**
         * Small image for feed readers to use.
         */
        image_url?: string | undefined;
        /**
         * URL to documentation on this feed.
         */
        docs?: string | undefined;
        /**
         * Who manages content in this feed.
         */
        managingEditor?: string | undefined;
        /**
         * Who manages feed availability and technical support.
         */
        webMaster?: string | undefined;
        /**
         * Copyright information for this feed.
         */
        copyright?: string | undefined;
        /**
         * The language of the content of this feed.
         */
        language?: string | undefined;
        /**
         * One or more categories this feed belongs to.
         */
        categories?: string[] | undefined;
        /**
         * The publication date for content in the feed.
         * Accepts Date object or string with any format
         * JS Date can parse.
         */
        pubDate?: Date | string | undefined;
        /**
         * Number of minutes feed can be cached before refreshing
         * from source.
         */
        ttl?: number | undefined;
        /**
         * Where is the PubSubHub hub located.
         */
        hub?: string | undefined;
        /**
         * Put additional namespaces in element
         * (without 'xmlns:' prefix).
         */
        custom_namespaces?: Object | undefined;
        /**
         * Put additional elements in the feed (node-xml syntax).
         */
        custom_elements?: any[] | undefined;
    }

    interface EnclosureObject {
        /**
         * URL to file object (or file).
         */
        url: string;
        /**
         * Path to binary file (or URL).
         */
        file?: string | undefined;
        /**
         * Size of the file.
         */
        size?: number | undefined;
        /**
         * If not provided, the MIME Type will be guessed based
         * on the extension of the file or URL, passing type to
         * the enclosure will override the guessed type.
         */
        type?: string | undefined;
    }

    interface ItemOptions {
        /**
         * Title of this particular item.
         */
        title: string;
        /**
         * Content for the item. Can contain HTML but link and image
         * URLs must be absolute path including hostname.
         */
        description: string;
        /**
         * URL to the item. This could be a blog entry.
         */
        url: string;
        /**
         * A unique string feed readers use to know if an item is
         * new or has already been seen. If you use a guid never
         * change it. If you don't provide a guid then your item
         * urls must be unique.
         * Defaults to url.
         */
        guid?: string | undefined;
        /**
         * If provided, each array item will be added as a category
         * element.
         */
        categories?: string[] | undefined;
        /**
         * If included it is the name of the item's creator. If not
         * provided the item author will be the same as the feed author.
         * This is typical except on multi-author blogs.
         */
        author?: string | undefined;
        /**
         * The date and time of when the item was created. Feed
         * readers use this to determine the sort order. Some readers
         * will also use it to determine if the content should be
         * presented as unread.
         * Accepts Date object or string with any format
         * JS Date can parse.
         */
        date: Date | string;
        /**
         * The latitude coordinate of the item for GeoRSS.
         */
        lat?: number | undefined;
        /**
         * The longitude coordinate of the item for GeoRSS.
         */
        long?: number | undefined;
        /**
         * Put additional elements in the item (node-xml syntax).
         */
        custom_elements?: any[] | undefined;
        /**
         * An enclosure object.
         */
        enclosure?: EnclosureObject | undefined;
    }

    interface XmlOptions {
        /**
         * What to use as a tab. Defaults to no tabs (compressed).
         * For example you can use '\t' for tab character, or ' '
         * for two-space tabs. If you set it to true it will use
         * four spaces.
         */
        indent?: boolean | string | undefined;
    }
}

// export declare class RSS {
declare class RSS {
    /**
     * Create an RSS feed with options.
     * @param {FeedOptions} feedOptions - Options for the RSS feed.
     * @param {ItemOptions[]} feedItems - Array of items for the RSS feed.
     * @returns {RSS}
     */
    constructor(feedOptions: RSS.FeedOptions, feedItems?: RSS.ItemOptions[]);

    /**
     * Add an item to a feed. An item can be used for a blog
     * entry, project update, log entry, etc.
     * @param {ItemOptions} itemOptions
     * @returns {RSS}
     */
    item(itemOptions: RSS.ItemOptions): RSS;
    /**
     * Generate XML and return as a string for this feed.
     * @returns {string}
     */
    xml(): string;
    /**
     * Generate XML and return as a string for this feed.
     *
     * @param {XmlOptions} xmlOptions - You can use indent
     * option to specify the tab character to use.
     * @returns {string}
     */
    xml(xmlOptions: RSS.XmlOptions): string;
}

export = RSS;
