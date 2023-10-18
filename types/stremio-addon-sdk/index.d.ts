export {};

export type ShortManifestResource = "catalog" | "meta" | "stream" | "subtitles" | "addon_catalog";
export type Extra = "search" | "genre" | "skip";
export type ContentType = "movie" | "series" | "channel" | "tv";

export interface Args {
    type: ContentType;
    id: string;
    extra: { search: string; genre: string; skip: number };
}

/**
 * Creates an addon builder object with a given manifest.
 *
 * The manifest will determine the basic information of your addon (name, description, images), but most importantly, it will determine when and how your addon will be invoked by Stremio.
 *
 * Throws an error if the manifest is not valid.
 */
export class addonBuilder {
    /**
     * Creates an addon builder object with a given manifest.
     */
    constructor(manifest: Manifest);

    /**
     * Handles catalog requests, including search.
     *
     * Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineCatalogHandler.md
     */
    defineCatalogHandler(handler: (args: Args) => Promise<{ metas: MetaPreview[] } & Cache>): void;

    /**
     * Handles metadata requests (title, year, poster, background, etc.).
     *
     * Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineMetaHandler.md
     */
    defineMetaHandler(
        handler: (args: { type: ContentType; id: string }) => Promise<{ meta: MetaDetail } & Cache>,
    ): void;

    /**
     * Handles stream requests.
     *
     * The stream responses should be ordered from highest to lowest quality.
     *
     * Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineStreamHandler.md
     */
    defineStreamHandler(
        handler: (args: { type: ContentType; id: string }) => Promise<{ streams: Stream[] } & Cache>,
    ): void;

    /**
     * Handles subtitle requests.
     *
     * Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineSubtitlesHandler.md
     */
    defineSubtitlesHandler(
        handler: (args: {
            type: ContentType;
            id: string;
            extra: {
                /**
                 * OpenSubtitles file hash for the video.
                 */
                videoHash: string;
                /**
                 * Size of the video file in bytes.
                 */
                videoSize: string;
            };
        }) => Promise<{ subtitles: Subtitle[] } & Cache>,
    ): void;

    /**
     * Handles addon catalog requests
     *
     * As opposed to defineCatalogHandler() which handles meta catalogs, this method handles catalogs of addon manifests.
     * This means that an addon can be used to just pass a list of other addons that can be installed in Stremio.
     *
     * Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineResourceHandler.md
     */
    defineResourceHandler(args: { type: ContentType; id: string }): Promise<{ addons: AddonCatalog[] } & Cache>;

    /**
     * Turns the addon into an addonInterface, which is an immutable (frozen) object that has {manifest, get} where:
     *
     * * manifest is a regular manifest object
     * * get is a function that takes one argument of the form { resource, type, id, extra } and returns a Promise
     */
    getInterface(): AddonInterface;
}

/**
 * The addonInterface, as returned from builder.getInterface()
 */
export interface AddonInterface {
    manifest: Manifest;
    get: (args: { resource: ShortManifestResource } & Args) => Promise<any>;
}

/**
 * A resolving object can also include the following cache related properties
 */
export interface Cache {
    /**
     * (in seconds) sets the Cache-Control header to max-age=$cacheMaxAge
     * and overwrites the global cache time set in serveHTTP options.
     */
    cacheMaxAge?: number | undefined;
    /**
     * (in seconds) sets the Cache-Control header to stale-while-revalidate=$staleRevalidate.
     */
    staleRevalidate?: number | undefined;
    /**
     * (in seconds) sets the Cache-Control header to stale-if-error=$staleError.
     */
    staleError?: number | undefined;
}

/**
 * Summarized collection of meta items.
 *
 * Catalogs are displayed on the Stremio's Board, Discover and Search.
 */
export interface MetaPreview {
    /**
     * Universal identifier.
     * You may use a prefix unique to your addon.
     *
     * Example: 'yt_id:UCrDkAvwZum-UTjHmzDI2iIw'
     */
    id: string;
    /**
     * Type of the content.
     */
    type: ContentType;
    /**
     * Name of the content.
     */
    name: string;
    /**
     * URL to PNG of poster.
     *
     * Accepted aspect ratios: 1:0.675 (IMDb poster type) or 1:1 (square).
     *
     * You can use any resolution, as long as the file size is below 100kb.
     * Below 50kb is recommended
     */
    poster?: string | undefined;
    /**
     * Poster can be square (1:1 aspect) or regular (1:0.675) or landscape (1:1.77).
     *
     * Defaults to 'regular'.
     */
    posterShape?: "square" | "regular" | "landscape" | undefined;
    /**
     * The background shown on the stremio detail page.
     *
     * Heavily encouraged if you want your content to look good.
     *
     * URL to PNG, max file size 500kb.
     */
    background?: string | undefined;
    /**
     * The logo shown on the stremio detail page.
     *
     * Encouraged if you want your content to look good.
     *
     * URL to PNG.
     */
    logo?: string | undefined;
    /**
     * A few sentences describing your content.
     */
    description?: string | undefined;
}

/**
 * Detailed description of a meta item.
 *
 * This description is displayed when the user selects an item from the catalog.
 */
export interface MetaDetail extends MetaPreview {
    /**
     * genre/categories of the content.
     *
     * e.g. ["Thriller", "Horror"]
     *
     * **WARNING: this will soon be deprecated, use 'links' instead**
     */
    genres?: string[] | undefined;
    releaseInfo?: string | undefined;
    /**
     * Array of directors.
     *
     * Deprecated: use 'links' instead
     *
     * @deprecated
     */
    director?: string[] | undefined;
    /**
     * Array of members of the cast.
     *
     * use 'links' instead
     *
     * @deprecated
     */
    cast?: string[] | undefined;
    /**
     * IMDb rating, which should be a number from 0.0 to 10.0.
     */
    imdbRating?: string | undefined;
    /**
     * ISO 8601, initial release date.
     *
     * For movies, this is the cinema debut.
     *
     * e.g. "2010-12-06T05:00:00.000Z"
     */
    released?: string | undefined;
    /**
     * Can be used to link to internal pages of Stremio.
     *
     * example: array of actor / genre / director links.
     */
    links?: MetaLink[] | undefined;
    /**
     * Used for channel and series.
     *
     * If you do not provide this (e.g. for movie), Stremio assumes this meta item has one video, and it's ID is equal to the meta item id.
     */
    videos?: MetaVideo[] | undefined;
    /**
     * Human-readable expected runtime.
     *
     * e.g. "120m"
     */
    runtime?: string | undefined;
    /**
     * Spoken language.
     */
    language?: string | undefined;
    /**
     * Official country of origin.
     */
    country?: string | undefined;
    /**
     * Human-readable that describes all the significant awards.
     */
    awards?: string | undefined;
    /**
     * URL to official website.
     */
    website?: string | undefined;
    behaviourHints?: {
        /**
         * Set to a Video Object id in order to open the Detail page directly to that video's streams.
         */
        defaultVideo?: boolean | string | undefined;
    } | undefined;
}

export interface MetaLink {
    /**
     * Human readable name for the link.
     */
    name: string;
    /**
     * Any unique category name, links are grouped based on their category.
     *
     * Some recommended categories are: actor, director, writer,
     * while the following categories are reserved and should not be used: imdb, share, similar.
     */
    category: string;
    /**
     * An external URL or Meta Link.
     */
    url: string;
}

export interface MetaVideo {
    /**
     * ID of the video.
     */
    id: string;
    /**
     * Title of the video.
     */
    title: string;
    /**
     * ISO 8601, publish date of the video.
     *
     * for episodes, this should be the initial air date.
     *
     * e.g. "2010-12-06T05:00:00.000Z"
     */
    released: string;
    /**
     * URL to png of the video thumbnail, in the video's aspect ratio.
     *
     * max file size 5kb.
     */
    thumbnail?: string | undefined;
    /**
     * In case you can return links to streams while forming meta response,
     * you can pass and array of Stream Objects to point the video to a HTTP URL, BitTorrent,
     * YouTube or any other stremio-supported transport protocol.
     *
     * Note that this is exclusive: passing video.streams means that Stremio will not request any streams
     * from other addons for that video.
     * If you return streams that way, it is still recommended to implement the streams resource.
     */
    streams?: Stream[] | undefined;
    /**
     * Set to true to explicitly state that this video is available for streaming, from your addon.
     *
     * No need to use this if you've passed stream.
     */
    available?: boolean | undefined;
    /**
     * Episode number, if applicable.
     */
    episode?: number | undefined;
    /**
     * Season number, if applicable.
     */
    season?: number | undefined;
    /**
     * YouTube ID of the trailer video; use if this is an episode for a series.
     */
    trailer?: string | undefined;
    /**
     * Video overview/summary
     */
    overview?: string | undefined;
}

/**
 * Tells Stremio how to obtain the media content.
 *
 * It may be torrent info hash, HTTP URL, etc.
 */
export interface Stream {
    /**
     * Direct URL to a video stream - http, https, rtmp protocols are supported.
     */
    url?: string | undefined;
    /**
     * Youtube video ID, plays using the built-in YouTube player.
     */
    ytId?: string | undefined;
    /**
     * Info hash of a torrent file, and fileIdx is the index of the video file within the torrent.
     *
     * If fileIdx is not specified, the largest file in the torrent will be selected.
     */
    infoHash?: string | undefined;
    /**
     * The index of the video file within the torrent (from infoHash).
     *
     * If fileIdx is not specified, the largest file in the torrent will be selected.
     */
    fileIdx?: number | undefined;
    /**
     * Meta Link or an external URL to the video, which should be opened in a browser (webpage).
     *
     * e.g. a link to Netflix.
     */
    externalUrl?: string | undefined;
    /**
     * Title of the stream
     *
     * Usually used for stream quality.
     */
    title?: string | undefined;
    /**
     * Name of the stream
     *
     * Usually a short name to identify the addon that provided the stream
     */
    name?: string | undefined;
    /**
     * Array of Subtitle objects representing subtitles for this stream.
     */
    subtitles?: Subtitle[] | undefined;
    behaviorHints?: {
        /**
         * Hints it's restricted to particular countries.
         *
         * Array of ISO 3166-1 alpha-3 country codes in lowercase in which the stream is accessible.
         */
        countryWhitelist?: string[] | undefined;
        /**
         * Applies if the protocol of the url is http(s).
         *
         * Needs to be set to true if the URL does not support https or is not an MP4 file.
         */
        notWebReady?: boolean | undefined;
        /**
         * If defined, addons with the same behaviorHints.group will be chosen automatically for binge watching.
         *
         * This should be something that identifies the stream's nature within your addon.
         * For example, if your addon is called "gobsAddon", and the stream is 720p, the group should be "gobsAddon-720p".
         * If the next episode has a stream with the same group, stremio should select that stream implicitly.
         */
        group?: string | undefined;
        /**
         * **Not implemented yet!**
         *
         * HTTP headers to use when trying to playback url.
         * Only applies to urls.
         *
         * @ignore
         */
        headers?: any;
    } | undefined;
}

/**
 * Subtitles resource for the chosen media.
 */
export interface Subtitle {
    /**
     * Unique identifier for each subtitle, if you have more than one subtitle with the same language, the id will differentiate them.
     */
    id: string;
    /**
     * Url to the subtitle file.
     */
    url: string;
    /**
     * Language code for the subtitle, if a valid ISO 639-2 code is not sent, the text of this value will be used instead.
     */
    lang: string;
}

/**
 * The addon description and capabilities.
 *
 * The first thing to define for your addon is the manifest, which describes it's name, purpose and some technical details.
 */
export interface Manifest {
    /**
     * Identifier, dot-separated, e.g. "com.stremio.filmon"
     */
    id: string;
    /**
     * Human readable name
     */
    name: string;
    /**
     *  Human readable description
     */
    description: string;
    /**
     * Semantic version of the addon
     */
    version: string;
    /**
     * Supported resources, defined as an array of objects (long version) or strings (short version).
     *
     * Example #1: [{"name": "stream", "types": ["movie"], "idPrefixes": ["tt"]}]
     *
     * Example #2: ["catalog", "meta", "stream", "subtitles", "addon_catalog"]
     */
    resources: ShortManifestResource[] | FullManifestResource[];
    /**
     * Supported types.
     */
    types: ContentType[];
    /**
     * Use this if you want your addon to be called only for specific content IDs.
     *
     * For example, if you set this to ["yt_id:", "tt"], your addon will only be called for id values that start with 'yt_id:' or 'tt'.
     */
    idPrefixes?: string[] | undefined;
    /**
     * A list of the content catalogs your addon provides.
     *
     * Leave this an empty array ([]) if your addon does not provide the catalog resource.
     */
    catalogs: ManifestCatalog[];
    /**
     * Array of Catalog objects, a list of other addon manifests.
     *
     * This can be used for an addon to act just as a catalog of other addons.
     */
    addonCatalogs?: ManifestCatalog[] | undefined;
    /**
     * Background image for the addon.
     *
     * URL to png/jpg, at least 1024x786 resolution.
     */
    background?: string | undefined;
    /**
     * Logo icon, URL to png, monochrome, 256x256.
     */
    logo?: string | undefined;
    /**
     * Contact email for addon issues.
     * Used for the Report button in the app.
     * Also, the Stremio team may reach you on this email for anything relating your addon.
     */
    contactEmail?: string | undefined;
    behaviorHints?: {
        /**
         * If the addon includes adult content.
         *
         * Defaults to false.
         */
        adult?: boolean | undefined;
        /**
         * If the addon includes P2P content, such as BitTorrent, which may reveal the user's IP to other streaming parties.
         *
         * Used to provide an adequate warning to the user.
         */
        p2p?: boolean | undefined;
    } | undefined;
}

/**
 * Used as a response for defineResourceHandler.
 */
export interface AddonCatalog {
    /**
     * only http is currently officially supported.
     */
    transportName: string;
    /**
     * The URL of the addon's manifest.json file.
     */
    transportUrl: string;
    /**
     * Object representing the addon's Manifest Object.
     */
    manifest: Manifest;
}

export interface FullManifestResource {
    /**
     * Resource name.
     */
    name: ShortManifestResource;
    /**
     * Supported types.
     */
    types: ContentType[];
    /**
     * Use this if you want your addon to be called only for specific content IDs
     *
     * For example, if you set this to ["yt_id:", "tt"], your addon will only be called for id values that start with 'yt_id:' or 'tt'.
     */
    idPrefixes?: string[] | undefined;
}

export interface ManifestCatalog {
    /**
     *  This is the content type of the catalog.
     */
    type: ContentType;
    /**
     * The id of the catalog, can be any unique string describing the catalog (unique per addon, as an addon can have many catalogs).
     *
     * For example: if the catalog name is "Favourite Youtube Videos", the id can be "fav_youtube_videos".
     */
    id: string;
    /**
     * Human readable name of the catalog.
     */
    name: string;
    /**
     * Use the 'options' property of 'extra' instead.
     * @deprecated
     */
    genres?: string[] | undefined;
    /**
     * All extra properties related to this catalog.
     */
    extra?: ManifestExtra[] | undefined;
}

export interface ManifestExtra {
    /**
     * The name of the property
     *
     * This name will be used in the extraProps argument itself.
     */
    name: Extra;
    /**
     * Set to true if this property must always be passed.
     */
    isRequired?: boolean | undefined;
    /**
     * Possible values for this property.
     * This is useful for things like genres, where you need the user to select from a pre-set list of options.
     *
     * e.g. { name: "genre", options: ["Action", "Comedy", "Drama"] }
     *
     * It's also useful if we want to specify a limited number of pages (for the skip parameter).
     *
     * e.g. { name: "skip", options: ["0", "100", "200"] }
     */
    options?: string[] | undefined;
    /**
     * The limit of values a user may select from the pre-set options list
     *
     * By default this is set to 1.
     */
    optionsLimit?: number | undefined;
}

/**
 * Turns the addonInterface into an express router that serves the addon according to the protocol and a landing page on the root (/).
 */
export function getRouter(addonInterface: AddonInterface): any;

/**
 * Publish your addon to the central server.
 *
 * This method expects a string with the url to your manifest.json file.
 *
 * After using this method your addon will be available in the Community Addons list in Stremio for users to install and use.
 * Please note that your addon needs to be publicly available with a URL in order for this to happen, as local addons that are not publicly available cannot be used by other Stremio users.
 */
export function publishToCentral(url: string): void;

/**
 * Starts the addon server
 *
 * This method is also special in that it will react to certain process arguments, such as:
 * * --launch: launches Stremio in the web browser, and automatically installs/upgrades the addon
 * * --install: installs the addon in the desktop version of Stremio
 */
export function serveHTTP(
    addonInterface: AddonInterface,
    options: {
        port?: number | undefined;
        /**
         * (in seconds) cacheMaxAge means the Cache-Control header being set to max-age=$cacheMaxAge
         */
        cacheMaxAge?: number | undefined;
        /**
         * Static directory to serve.
         */
        static?: string | undefined;
    },
): void;
