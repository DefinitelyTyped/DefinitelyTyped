declare namespace MusicKit {
    /**
     * The options to use when setting a music player's playback queue.
     */
    interface SetQueueOptions {
        /**
         * The catalog album used to set a music player's playback queue.
         */
        album?: string | undefined;
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
        /**
         * The song used to set a music player's playback queue.
         */
        song?: string | undefined;
        /**
         * The songs used to set a music player's playback queue.
         */
        songs?: string[] | undefined;
        /**
         * The start position for a set playback queue.
         */
        startPosition?: number | undefined;
        /**
         * A content URL used to set a music player's playback queue.
         */
        url?: string | undefined;
    }
}
