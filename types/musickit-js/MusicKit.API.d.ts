declare namespace MusicKit {
    /**
     * @todo add types for Apple Music API Objects
     */
    interface Resource {
        attributes: {
            albumName: string;
            artistName: string;
            durationInMillis: number;
            name: string;
        };
    }
    type AddToLibraryParameters = any;
    type QueryParameters = Record<string, any>;

    /**
     * An object that represents artwork.
     */
    interface Artwork {
        bgColor: string;
        height: number;
        width: number;
        textColor1: string;
        textColor2: string;
        textColor3: string;
        textColor4: string;
        url: string;
    }

    /**
     * This class represents the Apple Music API.
     */
    interface API {
        /**
         * An instance of the Cloud library.
         */
        library: Library;
        /**
         * The storefront used for making calls to the API.
         */
        storefrontId: string;
        /**
         * Fetch one or more activities using their identifiers.
         *
         * @param ids An array of activity identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        activities(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch an activity using its identifier.
         *
         * @param id An activity identifier.
         * @param parameters A query params object that is serialized and passed
         * directly to the Apple Music API.
         */
        activity(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Add a catalog resource to a user's library.
         */
        addToLibrary(parameters?: AddToLibraryParameters): Promise<void>;
        /**
         * Fetch an album using its identifier.
         *
         * @param id An album identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        album(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more albums using their identifiers.
         *
         * @param ids An array of album identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        albums(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch an Apple curator using its identifier.
         *
         * @param id An Apple curator identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        appleCurator(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more Apple curators using their identifiers.
         *
         * @param ids An array of Apple curator identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        appleCurators(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch an artist using its identifier.
         *
         * @param id An artist identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        artist(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more artists using their identifiers.
         *
         * @param ids An array of artist identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        artists(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch one or more charts.
         *
         * @param types An array of chart types.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        charts(types: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch a curator using its identifier.
         *
         * @param id A curator identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        curator(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more curators using their identifiers.
         *
         * @param ids An array of curator identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        curators(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch a genre using its identifier.
         *
         * @param id An array of
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        genre(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more genres using their identifiers.
         *
         * @param ids An array of genre identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        genres(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch the resources in heavy rotation for the user.
         *
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        historyHeavyRotation(parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch a music video using its identifier.
         *
         * @param id An array of video identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        musicVideo(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more music videos using their identifiers.
         *
         * @param ids An array of music video identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        musicVideos(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch a playlist using its identifier.
         *
         * @param id A playlist identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        playlist(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more playlists using their identifiers.
         *
         * @param ids An array of playlist identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        playlists(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch the recently played resources for the user.
         *
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        recentPlayed(parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch a recommendation using its identifier.
         *
         * @param id A recommendation identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        recommendation(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more recommendations using their identifiers.
         *
         * @param ids An array of recommendation identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        recommendations(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Search the catalog using a query.
         *
         * @param term The term to search.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        search(term: string, parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch the search term results for a hint.
         *
         * @param term The term to search.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        searchHints(term: string, parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch a song using its identifier.
         *
         * @param ids An array of identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        song(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more songs using their identifiers.
         *
         * @param ids An array of song identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        songs(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch a station using its identifier.
         *
         * @param id A station identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        station(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more stations using their identifiers.
         *
         * @param ids An array of station identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        stations(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
        /**
         * Fetch a storefront using its identifier.
         *
         * @param id A storefront identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        storefront(id: string, parameters?: QueryParameters): Promise<Resource>;
        /**
         * Fetch one or more storefronts using their identifiers.
         *
         * @param ids An array of storefront identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        storefronts(ids: string[], parameters?: QueryParameters): Promise<Resource[]>;
    }
}
