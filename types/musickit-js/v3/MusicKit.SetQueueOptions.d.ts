declare namespace MusicKit {
    /**
     * The options to use when setting a music player's playback queue.
     */
    interface SetQueueOptions {
        /**
         * The catalog album used to set a music player's playback queue.
         */
        album?: string | undefined;
        albums?: string[] | undefined;

        /**
         * The catalog artist used to set a music video player's playback queue.
         */
        musicVideo?: string | undefined;
        musicVideos?: string[] | undefined;
        /**
         * The media items used to set a music player's playback queue.
         */
        items?: Descriptor[] | undefined;
        /**
         * The parameters used to set a music player's playback queue.
         */
        parameters?: QueryParameters | undefined;
        /**
         * The playlist used to set a music player's playback queue.
         */
        playlist?: string | undefined;
        playlists?: string[] | undefined;
        /**
         * The song used to set a music player's playback queue.
         */
        song?: string | undefined;
        songs?: string[] | undefined;

        /**
         * The catalog station used to set a music player's playback queue.
         */
        station?: string | undefined;
        /**
         * The start position for a set playback queue.
         */
        startPosition?: number | undefined;
        /**
         * A content URL used to set a music player's playback queue.
         */
        url?: string | undefined;

        /**
         * A Boolean value that indicates whether to start playback immediately.
         * The default value is false.
         */
        startPlaying?: boolean | undefined;
    }
}
