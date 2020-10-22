// Type definitions for open-graph 0.2
// Project: https://github.com/samholmes/node-open-graph
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="cheerio" />

declare namespace og {
    interface Metadata {
        [key: string]: string | string[] | undefined;
        /** An alternate url to use if the webpage requires HTTPS. */
        secure_url?: string | string[];
        /** A MIME type for this image. */
        type?: string | string[];
    }

    interface ImageVideoMetadata extends Metadata {
        /** A description of what is in the image (not a caption). If the page specifies an `og:image` it should specify `og:image:alt`. */
        alt?: string | string[];
        /** The number of pixels high. */
        height?: string | string[];
        /** The  */
        url?: string | string[];
        /** The number of pixels wide. */
        width?: string | string[];
    }

    interface Data {
        [key: string]: string | string[] | ImageVideoMetadata | Metadata | undefined;
        /** A URL to an audio file to accompany this object. */
        audio?: string | string[] | Metadata;
        /** A one to two sentence description of your object. */
        description?: string | string[];
        /**
         * The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto).
         * If auto is chosen, the consumer of your data should chose between "a" or "an". Default is "" (blank).
         */
        determiner?: string | string[];
        /** An image URL which should represent your object within the graph. */
        image?: string | string[] | ImageVideoMetadata;
        /** The locale these tags are marked up in. Of the format `language_TERRITORY`. Default is `en_US`. */
        locale?:
            | string | string[]
            | {
                  /** An array of other locales this page is available in. */
                  alternate?: string | string[];
              };
        /** If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb". */
        site_name?: string | string[];
        /** The title of your object as it should appear within the graph, e.g., "The Rock". */
        title: string | string[];
        /** The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required. */
        type?: string | string[];
        /** The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "http://www.imdb.com/title/tt0117500/". */
        url?: string | string[];
        /** A URL to a video file that complements this object. */
        video?: string | string[] | ImageVideoMetadata;
    }

    type DataCallback = (err: Error | null, data: Data | undefined) => void;
    type RequestCallback = (err: Error | null, data: string | undefined) => void;

    interface Options {
        strict?: boolean;
    }

    function parse(websiteContent: string, options?: Options): Data;
    function getHTML(url: string | cheerio.Cheerio, callback: RequestCallback): void;
}

declare function og(url: string, callback: og.DataCallback, options?: og.Options): void;

export = og;
