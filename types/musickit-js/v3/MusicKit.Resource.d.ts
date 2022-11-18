declare namespace MusicKit {
    /**
     * An object that represents a unique identifier for a music item.
     * https://developer.apple.com/documentation/musickit/musicitemid
     */
    type MusicItemID = string;

    interface RESOURCE {
        Activity: Activities;
        Album: Albums;
        AppleCurator: AppleCurators;
        Artist: Artists;
        Curator: Curators;
        Genre: Genres;
        LibrarySong: LibrarySongs;
        LibraryAlbum: LibraryAlbums;
        LibraryArtist: LibraryArtists;
        LibraryMusicVideo: LibraryMusicVideos;
        LibraryPlaylist: LibraryPlaylists;
        MusicVideo: MusicVideos;
        Playlist: Playlists;
        Rating: Ratings;
        RecordLabel: RecordLabels;
        Song: Songs;
        Station: Stations;
        Storefront: Storefronts;
    }
    type RESOURCE_TYPES = RESOURCE[keyof RESOURCE]['type'];
    type RESOURCE_BY_TYPE_PROPERTY = {
        [key in RESOURCE_TYPES]: filterUnionByProperty<RESOURCE[keyof RESOURCE], 'type', key>;
    };

    /**
     * The rating of the content that potentially plays while playing a resource.
     * A nil value means no rating is available for this resource.
     * https://developer.apple.com/documentation/musickit/contentrating
     */
    type ContentRating = 'clean' | 'explicit' | null;

    /**
     * A resource—such as an album, song, or playlist.
     * https://developer.apple.com/documentation/applemusicapi/resource
     */
    interface Resource {
        id: string;
        type: string;
        href?: string;
        attributes?: Record<string, any>;
        relationships?: Record<string, Relationship<any> | Array<Relationship<any>>>;
        meta?: Record<string, any>;
        views?: Record<string, View<Resource>>;
    }
    /**
     * A resource object that represents a storefront, an Apple Music and iTunes Store territory that the content is available in.
     * https://developer.apple.com/documentation/applemusicapi/storefronts
     */
    interface Storefronts extends Resource {
        type: 'storefronts';
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
        type: 'genres';
        attributes?: {
            name: string;
            parentId?: string;
            parentName?: string;
            chartLabel?: string;
        };
    }

    /**
     * A resource object that represents a song.
     * https://developer.apple.com/documentation/applemusicapi/songs-um8
     */
    interface Songs extends Resource {
        id: MusicItemID;
        type: 'songs';
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
        relationships?: Partial<
            {
                [P in RESOURCE['Album' | 'Artist' | 'Genre' | 'MusicVideo' | 'Station']['type']]: Relationship<
                    RESOURCE_BY_TYPE_PROPERTY[P]
                >;
            } & {
                composers: Relationship<Artists>;
                library: Relationship<LibrarySongs>;
            }
        >;
    }

    /**
     * A resource object that represents a music video.
     * https://developer.apple.com/documentation/applemusicapi/musicvideos/
     */
    interface MusicVideos extends Resource {
        type: 'music-videos';
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
        relationships?: Partial<
            {
                [P in RESOURCE['Album' | 'Genre' | 'Song']['type']]: Relationship<RESOURCE_BY_TYPE_PROPERTY[P]>;
            } & {
                library: Relationship<LibraryMusicVideos>;
            }
        >;
        views: Partial<{
            'more-by-artist': View<MusicVideos>;
            'more-in-genre': View<MusicVideos>;
        }>;
    }

    /**
     * A resource object that represents an Apple curator.
     * https://developer.apple.com/documentation/applemusicapi/applecurators/
     */
    interface AppleCurators extends Resource {
        type: 'apple-curators';
        attributes?: {
            artwork: Artwork;
            editorialNotes?: EditorialNotes;
            kind: 'Curator' | 'Genre' | 'Show';
            name: string;
            shortName?: string;
            showHostName?: string;
            url: string;
        };
        relationships?: Partial<{
            [P in RESOURCE['Playlist']['type']]: Relationship<RESOURCE_BY_TYPE_PROPERTY[P]>;
        }>;
    }

    /**
     * A resource object that represents a curator.
     * https://developer.apple.com/documentation/applemusicapi/curators-uja
     */
    interface Curators extends Resource {
        type: 'curators';
        attributes?: {
            artwork: Artwork;
            editorialNotes?: EditorialNotes;
            name: string;
            url: string;
        };
        relationships?: Partial<{
            [P in RESOURCE['Playlist']['type']]: Relationship<RESOURCE_BY_TYPE_PROPERTY[P]>;
        }>;
    }

    /**
     * A resource object that represents a station.
     * https://developer.apple.com/documentation/applemusicapi/stations/
     */
    interface Stations extends Resource {
        type: 'stations';
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
        relationships?: Partial<{
            'radio-show': Relationship<AppleCurators>;
        }>;
    }

    /**
     * A resource object that represents an album.
     * https://developer.apple.com/documentation/applemusicapi/albums-uib
     */
    interface Albums extends Resource {
        type: 'albums';
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
        relationships?: Partial<
            {
                [P in RESOURCE['Artist' | 'Genre' | 'RecordLabel']['type']]: Relationship<RESOURCE_BY_TYPE_PROPERTY[P]>;
            } & {
                tracks: Relationship<MusicVideos | Songs>;
                library: Relationship<LibraryAlbums>;
            }
        >;
        views: Partial<{
            'appears-on': View<Playlists>;
            'other-versions': View<Albums>;
            'related-albums': View<Albums>;
            'related-videos': View<MusicVideos>;
        }>;
    }

    /**
     * A resource object that represents a library album.
     * https://developer.apple.com/documentation/applemusicapi/libraryalbums/
     */
    interface LibraryAlbums extends Resource {
        type: 'library-albums';
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
        relationships?: Partial<
            {
                [P in RESOURCE['Artist']['type']]: Relationship<RESOURCE_BY_TYPE_PROPERTY[P]>;
            } & {
                catalog: Relationship<Playlists>;
                tracks: Relationship<MusicVideos | Songs>;
            }
        >;
    }

    /**
     * A resource object that represents an artist present in a user’s library.
     * https://developer.apple.com/documentation/applemusicapi/libraryartists
     */
    interface LibraryArtists extends Resource {
        type: 'library-artists';
        attributes?: {
            name: string;
        };
        relationships?: Partial<{
            albums: Relationship<LibraryAlbums>;
            catalog: Relationship<Artists>;
        }>;
    }

    /**
     * A resource object that represents a library music video.
     * https://developer.apple.com/documentation/applemusicapi/librarymusicvideos
     */
    interface LibraryMusicVideos extends Resource {
        type: 'library-music-videos';
        attributes?: {
            albumName?: string;
            artistName: string;
            artwork: Artwork;
            contentRating?: ContentRating;
            durationInMillis: number;
            genreNames: string[];
            name: string;
            playParams?: PlayParameters;
            releaseDate?: string;
            trackNumber?: number;
        };
        relationships?: Partial<
            {
                [P in RESOURCE['Album' | 'Artist']['type']]: Relationship<RESOURCE_BY_TYPE_PROPERTY[P]>;
            } & {
                catalog: Relationship<MusicVideos>;
            }
        >;
    }

    /**
     * A resource object that represents a library playlist.
     * https://developer.apple.com/documentation/applemusicapi/libraryplaylists/
     */
    interface LibraryPlaylists extends Resource {
        type: 'library-playlists';
        attributes?: {
            artwork?: Artwork;
            canEdit: boolean;
            dateAdded?: string;
            description?: DescriptionAttribute;
            hasCatalog: boolean;
            name: string;
            playParams?: PlayParameters;
        };
        relationships?: Partial<{
            catalog: Relationship<Playlists>;
            tracks: Relationship<MusicVideos | Songs>;
        }>;
    }

    /**
     * A resource object that represents a library song.
     * https://developer.apple.com/documentation/applemusicapi/librarysongs
     */
    interface LibrarySongs extends Resource {
        type: 'library-songs';
        attributes?: {
            albumName: string;
            artistName: string;
            artwork: Artwork;
            contentRating?: ContentRating;
            discNumber?: number;
            durationInMillis: number;
            genreNames: string[];
            hasLyrics: boolean;
            name: string;
            playParams?: PlayParameters;
            releaseDate?: string;
            trackNumber?: number;
        };
        relationships?: Partial<
            {
                [P in RESOURCE['Album' | 'Artist']['type']]: Relationship<RESOURCE_BY_TYPE_PROPERTY[P]>;
            } & {
                catalog: Relationship<Songs>;
            }
        >;
    }

    /**
     * A resource object that represents an artist of an album where an artist can be one or more persons.
     * https://developer.apple.com/documentation/applemusicapi/artists-uip
     */
    interface Artists extends Resource {
        type: 'artists';
        attributes?: {
            editorialNotes?: EditorialNotes;
            genreNames: string[];
            name: string;
            url: string;
        };
        relationships?: Partial<{
            [P in RESOURCE['Album' | 'Genre' | 'MusicVideo' | 'Playlist' | 'Station']['type']]: Relationship<
                RESOURCE_BY_TYPE_PROPERTY[P]
            >;
        }>;
        views: Partial<{
            'appears-on-albums': View<Albums>;
            'compilation-albums': {
                href?: string;
                next?: string;
                attributes: {
                    title: string;
                };
                data: Albums[];
            };
            'featured-albums': View<Albums>;
            'featured-playlists': View<Playlists>;
            'full-albums': View<Albums>;
            'latest-release': View<Albums>;
            'live-albums': View<Albums>;
            'similar-artists': View<Artists>;
            singles: View<Albums>;
            'top-music-videos': View<MusicVideos>;
            'top-songs': View<Songs>;
        }>;
    }

    /**
     * A resource object that represents a playlist.
     * https://developer.apple.com/documentation/applemusicapi/playlists-ulf
     */
    interface Playlists extends Resource {
        id: MusicItemID;
        type: 'playlists';
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
        relationships?: Partial<{
            curator: Relationship<Activities | AppleCurators | Curators>;
            library: Relationship<LibraryPlaylists>;
            tracks: Relationship<MusicVideos | Songs>;
        }>;
        views: Partial<{
            'featured-artists': View<Artists>;
            'more-by-curator': View<Playlists>;
        }>;
    }

    /**
     * An object that represents a rating for a resource.
     * https://developer.apple.com/documentation/applemusicapi/ratings-ulo
     */
    interface Ratings extends Resource {
        type: 'ratings';
        attributes?: {
            value?: -1 | 1;
        };
        relationships?: Partial<{
            content: Relationship<
                | Albums
                | LibraryMusicVideos
                | LibraryPlaylists
                | LibrarySongs
                | MusicVideos
                | Playlists
                | Songs
                | Stations
            >;
        }>;
    }

    /**
     * A resource object that represents a record label.
     * https://developer.apple.com/documentation/applemusicapi/recordlabels/
     */
    interface RecordLabels extends Resource {
        type: 'record-labels';
        href: string;
        attributes?: {
            artwork: Artwork;
            description?: DescriptionAttribute;
            name: string;
            url: string;
        };
        views: Partial<{
            'latest-releases': View<Albums>;
            'top-releases': View<Albums>;
        }>;
    }

    /**
     * A resource object that represents an activity curator.
     * https://developer.apple.com/documentation/applemusicapi/activities-ui5
     */
    interface Activities extends Resource {
        type: 'activities';
        attributes?: {
            artwork: Artwork;
            editorialNotes?: EditorialNotes;
            name: string;
            url: string;
        };
        relationships?: Partial<{
            [P in RESOURCE['Playlist']['type']]: Relationship<RESOURCE_BY_TYPE_PROPERTY[P]>;
        }>;
    }

    /**
     * A resource object that represents recommended resources for a user calculated using their selected preferences.
     * https://developer.apple.com/documentation/applemusicapi/personalrecommendation
     */
    interface PersonalRecommendation extends Resource {
        type: 'personal-recommendation';
        attributes?: {
            kind: 'music-recommendations' | 'recently-played' | 'unknown';
            nextUpdateDate: string;
            reason?: {
                stringForDisplay: string;
            };
            resourceTypes: RESOURCE_TYPES[];
            title?: {
                stringForDisplay: string;
            };
        };
        relationships?: {
            contents: Array<Relationship<Resource>>;
        };
    }
}
