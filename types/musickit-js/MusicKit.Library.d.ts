declare namespace MusicKit {
    /**
     * This class represents a user's Cloud Library.
     */
    interface Library {
        /**
         * Fetch a library album using its identifier.
         *
         * @param id A library album identifier
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001494-albums
         */
        album(id: string, parameters?: QueryParameters): Promise<Albums>;
        /**
         * Fetch one or more library albums using their identifiers.
         *
         * @param ids An array of library album identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001494-albums
         */
        albums(ids: string[] | null, parameters?: QueryParameters): Promise<Albums[]>;
        /**
         * Fetch a library artist using its identifier.
         *
         * @param id A library artist identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001495-artist
         */
        artist(id: string, parameters?: QueryParameters): Promise<Artists>;
        /**
         * Fetch one or more library artists using their identifiers.
         *
         * @param ids An array of library artist identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001496-artists
         */
        artists(ids: string[] | null, parameters?: QueryParameters): Promise<Artists[]>;
        /**
         * Fetch a library music video using its identifier.
         *
         * @param id A library music video identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001497-musicvideo
         */
        musicVideo(id: string, parameters?: QueryParameters): Promise<MusicVideos>;
        /**
         * Fetch one or more library music videos using their identifiers.
         *
         * @param ids An array of library music video identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001498-musicvideos
         */
        musicVideos(ids: string[] | null, parameters?: QueryParameters): Promise<MusicVideos[]>;
        /**
         * Fetch a library playlist using its identifier.
         *
         * @param id A library playlist identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001499-playlist
         */
        playlist(id: string, parameters?: QueryParameters): Promise<Playlists>;
        /**
         * Fetch one or more library playlists using their identifiers.
         *
         * @param ids An array of library playlist identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001500-playlists
         */
        playlists(ids: string[] | null, parameters?: QueryParameters): Promise<Playlists[]>;
        /**
         * Fetch the resources recently added to the library.
         *
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         * https://developer.apple.com/documentation/applemusicapi/get_recently_added_resources
         */
        recentlyAdded(parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Search the library using a query.
         *
         * @param term The term to search.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3002049-search
         */
        search(term: string, parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch a library song using its identifier.
         *
         * @param id A library song identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001501-song
         */
        song(id: string, parameters?: QueryParameters): Promise<Songs>;
        /**
         * Fetch one or more library songs using their identifiers.
         *
         * @param ids An array of library song identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Cloud Library API.
         * https://developer.apple.com/documentation/musickitjs/musickit/library/3001502-songs
         */
        songs(ids: string[] | null, parameters?: QueryParameters): Promise<Songs[]>;
    }
}
