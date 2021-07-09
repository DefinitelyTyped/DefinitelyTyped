declare namespace MusicKit {
    /**
     * The options to use when defining a media item.
     */
    interface MediaItemOptions {
        /**
         * The attributes for the media item.
         */
        attributes?: any;
        /**
         * The identifier for the media item.
         */
        id?: string | undefined;
        /**
         * The type for the media item.
         */
        type?: any;
    }

    /**
     * This property describes a media item.
     */
    type Descriptor = MediaItem | string;

    /**
     * This class represents a single media item.
     */
    class MediaItem {
        /**
         * A constructor that creates a new media item from specified options.
         */
        constructor(options?: MediaItemOptions);
        /**
         * Prepares a media item for playback.
         */
        prepareToPlay(): Promise<void>;
        /**
         * A string of information about the album.
         */
        readonly albumInfo: string;
        /**
         * The title of the album.
         */
        readonly albumName: string;
        /**
         * The artist for a media item.
         */
        readonly artistName: string;
        /**
         * The artwork object for the media item.
         */
        readonly artwork: Artwork;
        /**
         * The artwork image for the media item.
         */
        readonly artworkURL: string;
        /**
         * The attributes object for the media item.
         */
        readonly attributes: any;
        /**
         * A string containing the content rating for the media item.
         */
        readonly contentRating: string;
        /**
         * The disc number where the media item appears.
         */
        readonly discNumber: number;
        /**
         * The identifier for the media item.
         */
        readonly id: string;
        /**
         * A string of common information about the media item.
         */
        readonly info: string;
        /**
         * A Boolean value that indicates whether the item has explicit lyrics or language.
         */
        readonly isExplicitItem: boolean;
        /**
         * A Boolean value that indicated whether the item is playable.
         */
        readonly isPlayable: boolean;
        /**
         * A Boolean value indicating whether the media item is prepared to play.
         */
        readonly isPreparedToPlay: boolean;
        /**
         * The ISRC (International Standard Recording Code) for a media item.
         */
        readonly isrc: string;
        /**
         * The playback duration of the media item.
         */
        readonly playbackDuration: number;
        readonly playlistArtworkURL: string;
        readonly playlistName: string;
        /**
         * The URL to an unencrypted preview of the media item.
         */
        readonly previewURL: string;
        /**
         * The release date of the media item.
         */
        readonly releaseDate?: Date | undefined;
        /**
         * The name of the media item.
         */
        readonly title: string;
        /**
         * The number of the media item in the album's track list.
         */
        readonly trackNumber: number;
        /**
         * The type of the media item.
         */
        type: any;
    }
}
