declare namespace MusicKit {
    /**
     * A resource—such as an album, song, or playlist.
     * https://developer.apple.com/documentation/applemusicapi/resource
     */
    interface Resource {
        id: string;
        type: string;
        href?: string;
        attributes?: {
            [key: string]: any;
        };
        relationships?: {
            [key: string]:
                | {
                      href?: string;
                      next?: string;
                      data: Resource[];
                      meta?: {
                          [key: string]: any;
                      };
                  }
                | Array<{
                      href?: string;
                      next?: string;
                      data: Resource[];
                      meta?: {
                          [key: string]: any;
                      };
                  }>;
        };
        meta?: {
            [key: string]: any;
        };
        views?: {
            [key: string]: {
                href?: string;
                next?: string;
                attributes?: {
                    [key: string]: any;
                };
                data: Resource[];
                meta?: {
                    [key: string]: any;
                };
            };
        };
    }

    /**
     * A resource object that represents a storefront, an Apple Music and iTunes Store territory that the content is available in.
     * https://developer.apple.com/documentation/applemusicapi/storefronts
     */
    interface Storefronts extends Resource {
        id: string;
        type: 'storefronts';
        href: string;
        attributes?: {
            defaultLanguageTag: string;
            explicitContentPolicy: 'allowed' | 'opt-in' | 'prohibited';
            name: string;
            supportedLanguageTags: string[];
        };
    }

    /**
     * A resource object that represents a music genre.
     * https://developer.apple.com/documentation/applemusicapi/genres
     */
    interface Genres extends Resource {
        id: string;
        type: 'genres';
        href: string;
        attributes?: {
            name: string;
            parentId?: string;
            parentName?: string;
        };
    }

    /**
     * A resource object that represents a song.
     * https://developer.apple.com/documentation/applemusicapi/songs-um8
     */
    interface Songs extends Resource {
        id: string;
        type: 'songs';
        href: string;
        attributes?: {
            albumName: string;
            artistName: string;
            artwork: Artwork;
            attribution?: string;
            composerName?: string;
            contentRating?: ContentRating;
            discNumber?: number;
            durationInMillis: number;
            editorialNotes?: EditorialNotes;
            genreNames: string[];
            hasLyrics: boolean;
            isrc?: string;
            movementCount?: number;
            movementName?: string;
            movementNumber?: number;
            name: string;
            playParams?: PlayParameters;
            previews: Preview[];
            releaseDate?: string;
            trackNumber?: number;
            url: string;
            workName?: string;
            artistUrl?: string;
        };
        relationships: {
            albums: AlbumsRelationship;
            artists: ArtistsRelationship;
            genres: GenresRelationship;
            station: StationRelationship;
            composers: ComposersRelationship;
            library: LibraryRelationship;
            'music-videos': MusicVideosRelationship;
        };
    }

    /**
     * A resource object that represents a music video.
     * https://developer.apple.com/documentation/applemusicapi/musicvideos/
     */
    interface MusicVideos extends Resource {
        id: string;
        type: 'music-videos';
        href: string;
        attributes?: {
            albumName?: string;
            artistName: string;
            artwork: Artwork;
            contentRating?: ContentRating;
            durationInMillis: number;
            editorialNotes?: EditorialNotes;
            genreNames: string[];
            has4K: boolean;
            hasHDR: boolean;
            isrc?: string;
            name: string;
            playParams?: PlayParameters;
            previews: Preview[];
            releaseDate?: string;
            trackNumber?: number;
            url: string;
            videoSubType?: 'preview';
            workId?: string;
            workName?: string;
            artistUrl?: string;
        };
        relationships: {
            albums: AlbumsRelationship;
            genres: GenresRelationship;

            library: LibraryRelationship;

            songs: SongsRelationships;
        };
        views: {
            'more-by-artist': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: MusicVideos[];
            };

            'more-in-genre': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: MusicVideos[];
            };
        };
    }

    /**
     * A resource object that represents an Apple curator.
     * https://developer.apple.com/documentation/applemusicapi/applecurators/
     */
    interface AppleCurators extends Resource {
        id: string;
        type: 'apple-curators';
        href: string;
        attributes?: {
            artwork: Artwork;
            editorialNotes?: EditorialNotes;
            kind: 'Curator' | 'Genre' | 'Show';
            name: string;
            shortName?: string;
            showHostName?: string;
            url: string;
        };
        relationships: {
            playlists: PlaylistsRelationship;
        };
    }

    /**
     * A resource object that represents a curator.
     * https://developer.apple.com/documentation/applemusicapi/curators-uja
     */
    interface Curators extends Resource {
        id: string;
        type: 'curators';
        href: string;
        attributes?: {
            artwork: Artwork;
            editorialNotes?: EditorialNotes;
            name: string;
            url: string;
        };
        relationships: {
            playlists: PlaylistsRelationship;
        };
    }

    /**
     * A resource object that represents a station.
     * https://developer.apple.com/documentation/applemusicapi/stations/
     */
    interface Stations extends Resource {
        id: string;
        type: 'stations';
        href: string;
        attributes?: {
            artwork: Artwork;
            durationInMillis: number;
            editorialNotes: EditorialNotes;
            episodeNumber: number;
            contentRating?: ContentRating;
            isLive: boolean;
            name: string;
            playParams: PlayParameters;
            stationProviderName: string;
            url: string;
        };
    }

    /**
     * A resource object that represents a record label.
     * https://developer.apple.com/documentation/applemusicapi/recordlabels/
     */
    interface RecordLabels extends Resource {
        id: string;
        type: 'record-labels';
        href: string;
        attributes?: {
            artwork: Artwork;
            description: DescriptionAttribute;
            name: string;
            url: string;
        };
        views: {
            'latest-releases': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'top-releases': {
                href?: string;
                next?: string;
                attributes?: {
                    title: string;
                };
                data: Albums[];
            };
        };
    }

    /**
     * A resource object that represents an album.
     * https://developer.apple.com/documentation/applemusicapi/albums-uib
     */
    interface Albums extends Resource {
        id: string;
        type: 'albums';
        href: string;
        attributes?: {
            artistName: string;
            artistUrl?: string;
            artwork: Artwork;
            contentRating?: ContentRating;
            Possible?: ContentRating;
            copyright?: string;
            editorialNotes?: EditorialNotes;
            genreNames: string[];
            isCompilation: boolean;
            isComplete: boolean;
            isMasteredForItunes: boolean;
            isSingle: boolean;
            name: string;
            playParams?: PlayParameters;
            recordLabel?: string;
            releaseDate?: string;
            trackCount: number;
            upc?: string;
            url: string;
        };
        relationships: {
            artists: ArtistsRelationship;

            genres: GenresRelationship;

            tracks: TracksRelationship;

            library: LibraryRelationship;

            'record-labels': RecordLabelsRelationship;
        };
        views: {
            'appears-on': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Playlists[];
            };
            'other-versions': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'related-albums': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'related-videos': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: MusicVideos[];
            };
        };
    }

    /**
     * A resource object that represents a library album.
     * https://developer.apple.com/documentation/applemusicapi/libraryalbums/
     */
    interface LibraryAlbums extends Resource {
        id: string;
        type: 'library-albums';
        href: string;
        attributes?: {
            artistName: string;
            artwork: Artwork;
            contentRating?: ContentRating;
            dateAdded?: string;
            name: string;
            playParams?: PlayParameters;
            releaseDate?: string;
            trackCount: number;
            genreNames: string[];
        };
        relationships: {
            artists: ArtistsRelationship;
            catalog: CatalogRelationship;
            tracks: TracksRelationship;
        };
    }

    /**
     * A resource object that represents a library playlist.
     * https://developer.apple.com/documentation/applemusicapi/libraryplaylists/
     */
    interface LibraryPlaylists extends Resource {
        id: string;
        type: 'library-playlists';
        href: string;
        attributes?: {
            artwork?: Artwork;
            canEdit: boolean;
            dateAdded?: string;
            description?: DescriptionAttribute;
            hasCatalog: boolean;
            name: string;
            playParams?: PlayParameters;
        };
        relationships: {
            catalog: CatalogRelationship;

            tracks: TracksRelationship;
        };
    }

    /**
     * A resource object that represents an artist of an album where an artist can be one or more persons.
     * https://developer.apple.com/documentation/applemusicapi/artists-uip
     */
    interface Artists extends Resource {
        id: string;
        type: 'artists';
        href: string;
        attributes?: {
            editorialNotes?: EditorialNotes;
            genreNames: string[];
            name: string;
            url: string;
        };
        relationships: {
            albums: AlbumsRelationship;

            genres: GenresRelationship;

            'music-videos': MusicVideosRelationship;

            playlists: PlaylistsRelationship;

            station: StationRelationship;
        };
        views: {
            'appears-on-albums': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'compilation-albums': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'featured-albums': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'featured-playlists': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Playlists[];
            };
            'full-albums': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'latest-release': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'live-albums': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'similar-artists': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Artists[];
            };
            singles: {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'top-music-videos': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: MusicVideos[];
            };
            'top-songs': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Songs[];
            };
        };
    }

    /**
     * A resource object that represents a playlist.
     * https://developer.apple.com/documentation/applemusicapi/playlists-ulf
     */
    interface Playlists extends Resource {
        id: string;
        type: 'playlists';
        href: string;
        attributes?: {
            artwork?: Artwork;
            curatorName: string;
            description?: DescriptionAttribute;
            isChart: boolean;
            lastModifiedDate?: string;
            name: string;
            playlistType: 'editorial' | 'external' | 'personal-mix' | 'replay' | 'user-shared';
            url: string;
            trackTypes: Array<'music-videos' | 'songs'>;
        };
        relationships: {
            curator: CuratorRelationship;
            library: {
                href?: string;
                next?: string;
                data: LibraryPlaylists[];
            };
            tracks: TracksRelationship;
        };
        views: {
            'featured-artists': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Artists[];
            };
            'more-by-curator': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Playlists[];
            };
        };
    }

    /**
     * A resource object that represents an activity curator.
     * https://developer.apple.com/documentation/applemusicapi/activities-ui5
     */
    interface Activities extends Resource {
        id: string;
        type: 'activities';
        href: string;
        attributes?: {
            artwork: Artwork;
            editorialNotes?: EditorialNotes;
            name: string;
            url: string;
        };
        relationships: {
            playlists: PlaylistsRelationship;
        };
    }

    /**
     * A resource object that represents recommended resources for a user calculated using their selected preferences.
     * https://developer.apple.com/documentation/applemusicapi/personalrecommendation
     */
    interface PersonalRecommendation extends Resource {
        id: string;
        type: 'personal-recommendation';
        href: string;
        attributes?: {
            kind: 'music-recommendations' | 'recently-played' | 'unknown';
            nextUpdateDate: string;
            reason: {
                stringForDisplay: string;
            };
            resourceTypes: string[];
            title: {
                stringForDisplay: string;
            };
        };
        relationships?: {
            contents: ContentsRelationship[];
        };
    }

    /**
     * A to-one or to-many relationship view from one resource object to others representing interesting associations.
     * https://developer.apple.com/documentation/applemusicapi/view
     */
    interface View {
        href?: string;
        next?: string;
        attributes?: any;
        data: Resource[];
        meta?: {
            [key: string]: any;
        };
    }

    /**
     * A to-one or to-many relationship from one resource object to others.
     * https://developer.apple.com/documentation/applemusicapi/relationship
     */
    interface Relationship {
        href?: string;
        next?: string;
        data: Resource[];
        meta?: {
            [key: string]: any;
        };
    }

    type AddToLibraryParameters = any;
    type QueryParameters = Record<string, any>;

    interface PlayParameters {
        id: string;
        kind: string;
    }

    /**
     * An object that represents a unique identifier for a music item.
     * https://developer.apple.com/documentation/musickit/musicitemid
     */
    type MusicItemID = string;

    /**
     * A number of seconds.
     * https://developer.apple.com/documentation/foundation/timeinterval
     */
    type TimeInterval = number;

    /**
     * The rating of the content that potentially plays while playing a resource.
     * A nil value means no rating is available for this resource.
     * https://developer.apple.com/documentation/musickit/contentrating
     */
    type ContentRating = 'clean' | 'explicit' | null;

    /**
     * An object that represents editorial notes.
     * https://developer.apple.com/documentation/musickit/editorialnotes
     */
    interface EditorialNotes {
        hashValue: number;
        name?: string;
        short?: string;
        standard?: string;
        tagline?: string;
    }

    /**
     * An object that represents editorial notes.
     * https://developer.apple.com/documentation/musickit/editorialnotes
     */
    interface EditorialNotes {
        hashValue: number;
        name?: string;
        short?: string;
        standard?: string;
        tagline?: string;
    }

    /**
     * An object that represents artwork for a music item.
     * https://developer.apple.com/documentation/musickit/artwork
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
     * An object that represents a preview for resources.
     * https://developer.apple.com/documentation/applemusicapi/preview
     */
    interface Preview {
        artwork: Artwork;
        url: string;
        hlsUrl: string;
    }

    interface AlbumsRelationship {
        href?: string;
        next?: string;
        data: Albums[];
    }

    interface ArtistsRelationship {
        href?: string;
        next?: string;
        data: Artists[];
    }

    interface CatalogRelationship {
        href?: string;
        next?: string;
        data: Playlists[];
    }

    interface CuratorRelationship {
        href?: string;
        next?: string;
        data: Array<Activities | AppleCurators | Curators>;
    }

    interface ComposersRelationship {
        href?: string;
        next?: string;
        data: Artists[];
    }

    interface GenresRelationship {
        href?: string;
        next?: string;
        data: Genres[];
    }

    interface TracksRelationship {
        data: Array<MusicVideos | Songs>;
        href?: string;
        next?: string;
    }

    interface LibraryRelationship {
        href?: string;
        next?: string;
        data: LibraryAlbums[];
    }

    interface MusicVideosRelationship {
        href?: string;
        next?: string;
        data: MusicVideos[];
    }

    interface PlaylistsRelationship {
        href?: string;
        next?: string;
        data: Playlists[];
    }

    interface SongsRelationships {
        href?: string;
        next?: string;
        data: Songs[];
    }

    interface StationRelationship {
        href?: string;
        next?: string;
        data: Stations[];
    }

    interface RecordLabelsRelationship {
        href?: string;
        next?: string;
        data: RecordLabels[];
    }

    interface ContentsRelationship {
        href?: string;
        next?: string;
        data: Resource[];
    }

    /**
     * An object that represents a description attribute.
     * https://developer.apple.com/documentation/applemusicapi/descriptionattribute/
     */
    interface DescriptionAttribute {
        short: string;
        standard: string;
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
        activities(ids: string[], parameters?: QueryParameters): Promise<Activities[]>;
        /**
         * Fetch an activity using its identifier.
         *
         * @param id An activity identifier.
         * @param parameters A query params object that is serialized and passed
         * directly to the Apple Music API.
         */
        activity(id: string, parameters?: QueryParameters): Promise<Activities>;
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
        album(id: string, parameters?: QueryParameters): Promise<Albums>;
        /**
         * Fetch one or more albums using their identifiers.
         *
         * @param ids An array of album identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        albums(ids: string[], parameters?: QueryParameters): Promise<Albums[]>;
        /**
         * Fetch an Apple curator using its identifier.
         *
         * @param id An Apple curator identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        appleCurator(id: string, parameters?: QueryParameters): Promise<Curators>;
        /**
         * Fetch one or more Apple curators using their identifiers.
         *
         * @param ids An array of Apple curator identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        appleCurators(ids: string[], parameters?: QueryParameters): Promise<AppleCurators[]>;
        /**
         * Fetch an artist using its identifier.
         *
         * @param id An artist identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        artist(id: string, parameters?: QueryParameters): Promise<Artists>;
        /**
         * Fetch one or more artists using their identifiers.
         *
         * @param ids An array of artist identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        artists(ids: string[], parameters?: QueryParameters): Promise<Artists[]>;
        /**
         * Fetch one or more charts.
         *
         * @param types An array of chart types.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         * https://developer.apple.com/documentation/applemusicapi/chartresponse
         */
        charts(
            types: string[],
            parameters?: QueryParameters,
        ): Promise<{
            results: {
                albums: Array<{
                    chart: string;
                    data: Albums[];
                    href?: string;
                    name: string;
                    next?: string;
                }>;
                'music-videos': Array<{
                    chart: string;
                    data: MusicVideos[];
                    href?: string;
                    name: string;
                    next?: string;
                }>;
                playlists: Array<{
                    chart: string;
                    data: Playlists[];
                    href?: string;
                    name: string;
                    next?: string;
                }>;
                songs: Array<{
                    chart: string;
                    data: Songs[];
                    href?: string;
                    name: string;
                    next?: string;
                }>;
            };
        }>;
        /**
         * Fetch a curator using its identifier.
         *
         * @param id A curator identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        curator(id: string, parameters?: QueryParameters): Promise<Curators>;
        /**
         * Fetch one or more curators using their identifiers.
         *
         * @param ids An array of curator identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        curators(ids: string[], parameters?: QueryParameters): Promise<Curators[]>;
        /**
         * Fetch a genre using its identifier.
         *
         * @param id An array of
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        genre(id: string, parameters?: QueryParameters): Promise<Genres>;
        /**
         * Fetch one or more genres using their identifiers.
         *
         * @param ids An array of genre identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        genres(ids: string[], parameters?: QueryParameters): Promise<Genres[]>;
        /**
         * Fetch the resources in heavy rotation for the user.
         *
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         * https://developer.apple.com/documentation/applemusicapi/paginatedresourcecollectionresponse
         */
        historyHeavyRotation(parameters?: QueryParameters): Promise<{
            next?: string;
            data: Resource[];
        }>;
        /**
         * Fetch a music video using its identifier.
         *
         * @param id An array of video identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        musicVideo(id: string, parameters?: QueryParameters): Promise<MusicVideos>;
        /**
         * Fetch one or more music videos using their identifiers.
         *
         * @param ids An array of music video identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        musicVideos(ids: string[], parameters?: QueryParameters): Promise<MusicVideos[]>;
        /**
         * Fetch a playlist using its identifier.
         *
         * @param id A playlist identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        playlist(id: string, parameters?: QueryParameters): Promise<Playlists>;
        /**
         * Fetch one or more playlists using their identifiers.
         *
         * @param ids An array of playlist identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        playlists(ids: string[], parameters?: QueryParameters): Promise<Playlists[]>;
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
        recommendation(id: string, parameters?: QueryParameters): Promise<PersonalRecommendation>;
        /**
         * Fetch one or more recommendations using their identifiers.
         *
         * @param ids An array of recommendation identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        recommendations(ids: string[], parameters?: QueryParameters): Promise<PersonalRecommendation[]>;
        /**
         * Search the catalog using a query.
         *
         * @param term The term to search.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         * https://developer.apple.com/documentation/applemusicapi/searchresponse
         */
        search(
            term: string,
            parameters?: QueryParameters,
        ): Promise<{
            results: {
                activities?: {
                    data: Activities[];
                    href?: string;
                    next?: string;
                };
                albums?: {
                    data: Albums[];
                    href?: string;
                    next?: string;
                };
                'apple-curators'?: {
                    data: AppleCurators[];
                    href?: string;
                    next?: string;
                };
                artists?: {
                    data: Artists[];
                    href?: string;
                    next?: string;
                };
                curators?: {
                    data: Curators[];
                    href?: string;
                    next?: string;
                };
                'music-videos'?: {
                    data: MusicVideos[];
                    href?: string;
                    next?: string;
                };
                playlists?: {
                    data: Playlists[];
                    href?: string;
                    next?: string;
                };
                'record-labels'?: {
                    data: RecordLabels[];
                    href?: string;
                    next?: string;
                };
                songs?: {
                    data: Songs[];
                    href?: string;
                    next?: string;
                };
                stations?: {
                    data: Stations[];
                    href?: string;
                    next?: string;
                };
                top?: {
                    data: Array<
                        | Activities
                        | Albums
                        | AppleCurators
                        | Artists
                        | Curators
                        | MusicVideos
                        | Playlists
                        | RecordLabels
                        | Songs
                        | Stations
                    >;
                };
            };
        }>;
        /**
         * Fetch the search term results for a hint.
         *
         * @param term The term to search.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         * https://developer.apple.com/documentation/applemusicapi/searchhintsresponse
         */
        searchHints(
            term: string,
            parameters?: QueryParameters,
        ): Promise<{
            results: {
                terms: string[];
            };
        }>;
        /**
         * Fetch a song using its identifier.
         *
         * @param ids An array of identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        song(id: string, parameters?: QueryParameters): Promise<Songs>;
        /**
         * Fetch one or more songs using their identifiers.
         *
         * @param ids An array of song identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        songs(ids: string[], parameters?: QueryParameters): Promise<Songs[]>;
        /**
         * Fetch a station using its identifier.
         *
         * @param id A station identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        station(id: string, parameters?: QueryParameters): Promise<Stations>;
        /**
         * Fetch one or more stations using their identifiers.
         *
         * @param ids An array of station identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        stations(ids: string[], parameters?: QueryParameters): Promise<Stations[]>;
        /**
         * Fetch a storefront using its identifier.
         *
         * @param id A storefront identifier.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        storefront(id: string, parameters?: QueryParameters): Promise<Storefronts>;
        /**
         * Fetch one or more storefronts using their identifiers.
         *
         * @param ids An array of storefront identifiers.
         * @param parameters A query parameters object that is serialized and passed
         * directly to the Apple Music API.
         */
        storefronts(ids: string[], parameters?: QueryParameters): Promise<Storefronts[]>;
    }
}
