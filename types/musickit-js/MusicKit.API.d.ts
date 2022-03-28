declare namespace MusicKit {
    /**
     * A resource—such as an album, song, or playlist.
     * https://developer.apple.com/documentation/applemusicapi/resource
     */
    interface Resource {
        id: string;
        // (Required) Persistent identifier of the resource.
        type: string;
        // (Required) The type of resource.
        href?: string;
        // A URL subpath that fetches the resource as the primary object. This member is only present in responses.
        attributes?: {
            [key: string]: any;
        };
        // Attributes belonging to the resource (can be a subset of the attributes). The members are the names of the attributes defined in the object model.
        relationships?: {
            [key: string]:
                | {
                    href?: string;
                    // A URL subpath that fetches the relationship resources as the primary object. This member is only present in responses.
                    next?: string;
                    // Link to the next page of resources in the relationship. Contains the offset query parameter that specifies the next page. See Fetch Resources by Page.
                    data: Resource[];
                    // (Required) One or more destination objects.
                    meta?: {
                        [key: string]: any;
                    };
                    // Contextual information about the relationship for the request or response.
                  }
                | Array<{
                    href?: string;
                    // A URL subpath that fetches the relationship resources as the primary object. This member is only present in responses.
                    next?: string;
                    // Link to the next page of resources in the relationship. Contains the offset query parameter that specifies the next page. See Fetch Resources by Page.
                    data: Resource[];
                    // (Required) One or more destination objects.
                    meta?: {
                        [key: string]: any;
                    };
                    // Contextual information about the relationship for the request or response.
                  }>;
        };
        // Relationships belonging to the resource (can be a subset of the relationships).
        // The members are the names of the relationships defined in the object model.See Relationship object for the values of the members.
        meta?: {
            [key: string]: any;
        };
        // Information about the request or response. The members may be any of the endpoint parameters.
        views?: {
            [key: string]: {
                href?: string;
                // A URL subpath that fetches the view resources and attributes as the primary objects. This member is only present in responses.
                next?: string;
                // Link to the next page of resources in the view. Contains the offset query parameter that specifies the next page. See Fetch Resources by Page.
                attributes?: {
                    [key: string]: any;
                };
                // Attributes specific to the view.
                data: Resource[];
                // (Required) One or more destination objects.
                meta?: {
                    [key: string]: any;
                };
                // Contextual information about the view for the request or response.
            };
        };
        // The relationship views for the resource.
    }

    /**
     * A resource object that represents a storefront, an Apple Music and iTunes Store territory that the content is available in.
     * https://developer.apple.com/documentation/applemusicapi/storefronts
     */
    interface Storefronts extends Resource {
        id: string;
        // The identifier for the storefront.
        type: 'storefronts';
        // This value must always be storefronts.
        href: string;
        // (Required) The relative location for the storefront resource.
        attributes?: {
            defaultLanguageTag: string;
            // (Required) The default supported RFC4646 language tag for the storefront.
            explicitContentPolicy: 'allowed' | 'opt-in' | 'prohibited';
            // (Required) Attribute indicating the level that this storefront can display explicit content.
            name: string;
            // (Required) The localized name of the storefront.
            supportedLanguageTags: string[];
            // (Required) The supported RFC4646 language tags for the storefront.
        };
        // The attributes for the storefront.
    }

    /**
     * A resource object that represents a music genre.
     * https://developer.apple.com/documentation/applemusicapi/genres
     */
    interface Genres extends Resource {
        id: string;
        // The identifier for the genre.
        type: 'genres';
        // This value must always be genres.
        href: string;
        // (Required) The relative location for the genre resource.
        attributes?: {
            name: string;
            // (Required) The localized name of the genre.
            parentId?: string;
            // The identifier of the parent for the genre.
            parentName?: string;
            // The localized name of the parent genre.
        };
        // The attributes for the genre.
    }

    /**
     * A resource object that represents a song.
     * https://developer.apple.com/documentation/applemusicapi/songs-um8
     */
    interface Songs extends Resource {
        id: string;
        // The identifier for the song.
        type: 'songs';
        // This value is always songs.
        href: string;
        // (Required) The relative location for the song resource.
        attributes?: {
            albumName: string;
            // (Required) The name of the album the song appears on.
            artistName: string;
            // (Required) The artist’s name.
            artwork: Artwork;
            // (Required) The album artwork.
            attribution?: string;
            // (Classical music only) The name of the artist or composer to attribute the song with.
            composerName?: string;
            // The song’s composer.
            contentRating?: ContentRating;
            // The Recording Industry Association of America (RIAA) rating of the content. The possible values for this rating are clean and explicit. No value means no rating.
            discNumber?: number;
            // The disc number of the album the song appears on.
            durationInMillis: number;
            // (Required) The duration of the song in milliseconds.
            editorialNotes?: EditorialNotes;
            // The notes about the song that appear in the Apple Music catalog.
            genreNames: string[];
            // (Required) The genre names the song is associated with.
            hasLyrics: boolean;
            // (Required) Indicates if the song has lyrics available in the Apple Music catalog. If true, the song has lyrics available; otherwise, it does not.
            isrc?: string;
            // The International Standard Recording Code (ISRC) for the song.
            movementCount?: number;
            // (Classical music only) The movement count of this song.
            movementName?: string;
            // (Classical music only) The movement name of this song.
            movementNumber?: number;
            // (Classical music only) The movement number of this song.
            name: string;
            // (Required) The localized name of the song.
            playParams?: PlayParameters;
            // The parameters to use to playback the song.
            previews: Preview[];
            // (Required) The preview assets for the song.
            releaseDate?: string;
            // The release date of the song, when known, in YYYY-MM-DD or YYYY format. Pre-release songs may have an expected release date in the future.
            trackNumber?: number;
            // The number of the song in the album’s track list.
            url: string;
            // (Required) The URL for sharing the song in Apple Music.
            workName?: string;
            // (Classical music only) The name of the associated work.
            artistUrl?: string;
            // The url of the artist for this content.
        };
        // The attributes for the song.
        relationships: {
            albums: AlbumsRelationship;
            artists: ArtistsRelationship;
            genres: GenresRelationship;
            station: StationRelationship;
            composers: ComposersRelationship;
            library: LibraryRelationship;
            'music-videos': MusicVideosRelationship;
        };

        // The relationships for the song.
    }

    /**
     * A resource object that represents a music video.
     * https://developer.apple.com/documentation/applemusicapi/musicvideos/
     */
    interface MusicVideos extends Resource {
        id: string;
        // The identifier for the music video.
        type: 'music-videos';
        // This value is always music-videos.
        href: string;
        // (Required) The relative location for the music video resource.
        attributes?: {
            albumName?: string;
            // The name of the album the music video appears on.
            artistName: string;
            // (Required) The artist’s name.
            artwork: Artwork;
            // (Required) The artwork for the music video’s associated album.
            contentRating?: ContentRating;
            // The Recording Industry Association of America (RIAA) rating of the content. The possible values for this rating are clean and explicit. No value means no rating.
            durationInMillis: number;
            // (Required) The duration of the music video in milliseconds.
            editorialNotes?: EditorialNotes;
            // The editorial notes for the music video.
            genreNames: string[];
            // (Required) The music video’s associated genres.
            has4K: boolean;
            // (Required) Whether the music video has 4K content.
            hasHDR: boolean;
            // (Required) Whether the music video has HDR10-encoded content.
            isrc?: string;
            // The International Standard Recording Code (ISRC) for the music video.
            name: string;
            // (Required) The localized name of the music video.
            playParams?: PlayParameters;
            // The parameters to use to play back the music video.
            previews: Preview[];
            // (Required) The preview assets for the music video.
            releaseDate?: string;
            // The release date of the music video, when known, in YYYY-MM-DD or YYYY format. Pre-release music videos may have an expected release date in the future.
            trackNumber?: number;
            // The number of the music video in the album’s track list, when associated with an album.
            url: string;
            // (Required) The URL for sharing the music video in Apple Music.
            videoSubType?: 'preview';
            // The video subtype associated with the content.
            workId?: string;
            // (Classical music only) A unique identifier for the associated work.
            workName?: string;
            // (Classical music only) The name of the associated work.
            artistUrl?: string;
            // The url of the artist for this content.
        };
        // The attributes for the music video.
        relationships: {
            albums: AlbumsRelationship;
            genres: GenresRelationship;

            library: LibraryRelationship;

            songs: SongsRelationships;
            // The songs associated with the music video.
            // Fetch limits: 10 default, 10 maximum.
        };
        // The relationships for the music video.
        views: {
            'more-by-artist': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: MusicVideos[];
                // (Required) Music videos of some type by the artist.
            };
            // More music videos of some type by the artist.
            // Fetch limits: 15 default, 100 maximum.

            'more-in-genre': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: MusicVideos[];
                // (Required) Music videos in the given music video genre.
            };
            // More music videos in the given music video genre.
            // Fetch limits: 15 default, 100 maximum.
        };
        // The relationship views for the music video.
    }

    /**
     * A resource object that represents an Apple curator.
     * https://developer.apple.com/documentation/applemusicapi/applecurators/
     */
    interface AppleCurators extends Resource {
        id: string;
        // The identifier for the Apple curator.
        type: 'apple-curators';
        // This value must always be apple-curators.
        href: string;
        // (Required) The relative location for the Apple curator resource.
        attributes?: {
            artwork: Artwork;
            // (Required) The curator artwork.
            editorialNotes?: EditorialNotes;
            // The notes about the curator that appear in the Apple Music catalog.
            kind: 'Curator' | 'Genre' | 'Show';
            // (Required) The type of curator. Possible values are:
            // Curator: An individual curator entity.
            // Genre: A curator that represents a cohesive music genre.
            // Show: A curator associated with a particular Apple Music show.
            name: string;
            // (Required) The localized name of the curator.
            shortName?: string;
            // The localized shortened name of the curator.
            showHostName?: string;
            // The name of the host if kind is Show.
            url: string;
            // (Required) The URL for sharing the curator in Apple Music.
        };
        // The attributes for the Apple curator.
        relationships: {
            playlists: PlaylistsRelationship;
        };
        // The relationships for the Apple curator.
    }

    /**
     * A resource object that represents a curator.
     * https://developer.apple.com/documentation/applemusicapi/curators-uja
     */
    interface Curators extends Resource {
        id: string;
        // The identifier for the curator.
        type: 'curators';
        // This value must always be curators.
        href: string;
        // (Required) The relative location for the curator resource.
        attributes?: {
            artwork: Artwork;
            // (Required) The curator artwork.
            editorialNotes?: EditorialNotes;
            // The notes about the curator.
            name: string;
            // (Required) The localized name of the curator.
            url: string;
            // (Required) The URL for sharing the curator in Apple Music.
        };
        // The attributes for the curator.
        relationships: {
            playlists: PlaylistsRelationship;
        };
        // The relationships for the curator.
    }

    /**
     * A resource object that represents a station.
     * https://developer.apple.com/documentation/applemusicapi/stations/
     */
    interface Stations extends Resource {
        id: string;
        // The identifier for the station.
        type: 'stations';
        // This value must always be stations.
        href: string;
        // (Required) The relative location for the station resource.
        attributes?: {
            artwork: Artwork;
            // (Required) The radio station artwork.
            durationInMillis: number;
            // The duration of the stream. This value isn’t emitted for ‘live’ or programmed stations.
            editorialNotes: EditorialNotes;
            // The notes about the station that appear in Apple Music.
            episodeNumber: number;
            // The episode number of the station. This value appears when the station represents an episode of a show or other content.
            contentRating?: ContentRating;
            // The rating of the content possibly heard while playing the station. The possible values for this rating are clean and explicit. No value means no rating.
            isLive: boolean;
            // (Required) Whether the station is a live stream.
            name: string;
            // (Required) The localized name of the station.
            playParams: PlayParameters;
            // The parameters to use to play back the station.
            stationProviderName: string;
            // The name of the entity that provided the station, when specified.
            url: string;
            // (Required) The URL for sharing the station in Apple Music.
        };
        // The attributes for the station.
    }

    /**
     * A resource object that represents a record label.
     * https://developer.apple.com/documentation/applemusicapi/recordlabels/
     */
    interface RecordLabels extends Resource {
        id: string;
        // The identifier for the record label.
        type: 'record-labels';
        // This value must always be record-labels.
        href: string;
        // (Required) A relative location for the record label resource.
        attributes?: {
            artwork: Artwork;
            // (Required) Artwork associated with this content.
            description: DescriptionAttribute;
            // A map of description information.
            name: string;
            // (Required) The (potentially) censored name of the content.
            url: string;
            // (Required) The URL to load the record label from.
        };
        // The attributes of the record label.
        views: {
            'latest-releases': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title to display for the view.
                };
                // (Required) The attributes for the view.
                data: Albums[];
                // (Required) A selection of latest releases from this record label.
            };
            // The latest releases for the record label.
            'top-releases': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes?: {
                    title: string;
                    // (Required) A localized title to display for the view.
                };
                // RecordLabels.Views.RecordLabelsTopReleasesView.Attributes
                // (Required) The attributes for the view.
                data: Albums[];
                // (Required) A selection of top releases from this record label.
            };
            // The top releases for the record label.
        };
        // The relationship views for the record label.
    }

    /**
     * A resource object that represents an album.
     * https://developer.apple.com/documentation/applemusicapi/albums-uib
     */
    interface Albums extends Resource {
        id: string;
        // The identifier for the album.
        type: 'albums';
        // This value is always albums.
        href: string;
        // (Required) The relative location for the album resource.
        attributes?: {
            artistName: string;
            // (Required) The name of the primary artist associated with the album.
            artistUrl?: string;
            // (Extended) The url of the artist for this content.
            artwork: Artwork;
            // (Required) The artwork for the album.
            contentRating?: ContentRating;
            // The Recording Industry Association of America (RIAA) rating of the content. The possible values for this rating are clean and explicit. No value means no rating.
            Possible?: ContentRating;
            copyright?: string;
            // The copyright text.
            editorialNotes?: EditorialNotes;
            // The notes about the album that appear in the iTunes Store.
            genreNames: string[];
            // (Required) The names of the genres associated with this album.
            isCompilation: boolean;
            // (Required) Indicates if the album is marked as a compilation. If true, the album is a compilation; otherwise, it is not.
            isComplete: boolean;
            // (Required) Indicates whether the album is complete. If true, the album is complete; otherwise, it is not. An album is complete if it contains all its tracks and songs.
            isMasteredForItunes: boolean;
            // (Required) Indicates whether the response delivered the album as an Apple Digital Master.
            isSingle: boolean;
            // (Required) Indicates whether the album contains a single song.
            name: string;
            // (Required) The localized name of the album.
            playParams?: PlayParameters;
            // The parameters to use to play back the tracks of the album.
            recordLabel?: string;
            // The name of the record label for the album.
            releaseDate?: string;
            // The release date of the album, when known, in YYYY-MM-DD or YYYY format. Pre-release content may have an expected release date in the future.
            trackCount: number;
            // (Required) The number of tracks.
            upc?: string;
            // The Universal Product Code for the album.
            url: string;
            // (Required) The URL for sharing the album in Apple Music.
        };
        // The attributes for the album.
        relationships: {
            artists: ArtistsRelationship;
            // The artists associated with the album. By default, artists includes identifiers only.
            // Fetch limits: 10 default, 10 maximum

            genres: GenresRelationship;
            // The genres for the album. By default, genres not included.
            // Fetch limits: None

            tracks: TracksRelationship;
            // The songs and music videos on the album. By default, tracks includes objects.
            // Fetch limits: 300 default, 300 maximum

            library: LibraryRelationship;
            // The album in the user’s library for the catalog album, if any.
            // Fetch limits: None

            'record-labels': RecordLabelsRelationship;
            // The record labels for the album
            // Fetch limits: 10 default, 10 maximum.
        };
        // The relationships for the album.
        views: {
            'appears-on': {
                href?: string;
                // The relative location to fetch the view directly.
                next?: string;
                // The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
                attributes: {
                    title: string;
                    // (Required) A localized title to display for the view.
                };
                data: Playlists[];
                // (Required) A selection of playlists that tracks from this album appear on.
            };
            // A selection of playlists that tracks from this album appear on.
            'other-versions': {
                href?: string;
                // The relative location to fetch the view directly.
                next?: string;
                // The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
                attributes: {
                    title: string;
                    // (Required) A localized title to display for the view.
                };
                data: Albums[];
                // (Required) Other versions of the album.
            };
            // Other versions of this album.
            'related-albums': {
                href?: string;
                // The relative location to fetch the view directly.
                next?: string;
                // The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
                attributes: {
                    title: string;
                    // (Required) A localized title to display for the view.
                };
                data: Albums[];
                // (Required) A collection of other albums related or similar to the album.
            };
            // Other albums related or similar to this album.
            'related-videos': {
                href?: string;
                // The relative location to fetch the view directly.
                next?: string;
                // The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
                attributes: {
                    title: string;
                    // (Required) A localized title to display for the view.
                };
                data: MusicVideos[];
                // (Required) The music videos available for songs on the album.
            };
            // Music videos associated with tracks on this album.
        };
        // The relationship views for the album.
    }

    /**
     * A resource object that represents a library album.
     * https://developer.apple.com/documentation/applemusicapi/libraryalbums/
     */
    interface LibraryAlbums extends Resource {
        id: string;
        // The identifier for the library album.
        type: 'library-albums';
        // This value is always library-albums.
        href: string;
        // (Required) The relative location for the library album resource.
        attributes?: {
            artistName: string;
            // (Required) The artist’s name.
            artwork: Artwork;
            // (Required) The album artwork.
            contentRating?: ContentRating;
            // The Recording Industry Association of America (RIAA) rating of the content. The possible values for this rating are clean and explicit. No value means no rating.
            dateAdded?: string;
            // The date the album was added to the library, in YYYY-MM-DD or YYYY format.
            name: string;
            // (Required) The localized name of the album.
            playParams?: PlayParameters;
            // The parameters to use to playback the tracks of the album.
            releaseDate?: string;
            // The release date of the album, when known, in YYYY-MM-DD or YYYY format. Pre-release albums may have an expected release date in the future.
            trackCount: number;
            // (Required) The number of tracks.
            genreNames: string[];
            // (Required) The names of the genres associated with this album.
        };
        // The attributes for the library album.
        relationships: {
            artists: ArtistsRelationship;
            catalog: CatalogRelationship;
            tracks: TracksRelationship;
        };
        // The relationships for the library album.
    }

    /**
     * A resource object that represents a library playlist.
     * https://developer.apple.com/documentation/applemusicapi/libraryplaylists/
     */
    interface LibraryPlaylists extends Resource {
        id: string;
        // The identifier for the library playlist.
        type: 'library-playlists';
        // This value is always library-playlists.
        href: string;
        // (Required) The relative location for the library playlist resource.
        attributes?: {
            artwork?: Artwork;
            // The playlist artwork.
            canEdit: boolean;
            // (Required) Indicates whether the playlist can be edited.
            dateAdded?: string;
            // The date and time the playlist was added to the user’s library.
            // In YYYY-MM-DDThh:mm:ssZ ISO 8601 format.
            description?: DescriptionAttribute;
            // A description of the playlist.
            hasCatalog: boolean;
            // (Required) Indicates whether the playlist has a representation in the Apple Music catalog.
            name: string;
            // (Required) The localized name of the playlist.
            playParams?: PlayParameters;
            // The parameters to use to play back the tracks in the playlist.
        };
        // The attributes for the library playlist.
        relationships: {
            catalog: CatalogRelationship;
            // The corresponding playlist in the Apple Music catalog the playlist is associated with.
            // Fetch limits: None (associated with at most one catalog playlist).

            tracks: TracksRelationship;
            // The library songs and library music videos included in the playlist. By default, tracks not included. Only available when fetching a single library playlist resource by ID.
            // Fetch limits: 100 default, 100 maximum.
        };
        // The relationships for the library playlist.
    }

    /**
     * A resource object that represents an artist of an album where an artist can be one or more persons.
     * https://developer.apple.com/documentation/applemusicapi/artists-uip
     */
    interface Artists extends Resource {
        id: string;
        // The identifier for the artist.
        type: 'artists';
        // This value is always artists.
        href: string;
        // (Required) The relative location for the artist resource.
        attributes?: {
            editorialNotes?: EditorialNotes;
            // The notes about the artist that appear in the Apple Music catalog.
            genreNames: string[];
            // (Required) The names of the genres associated with this artist.
            name: string;
            // (Required) The localized name of the artist.
            url: string;
            // (Required) The URL for sharing the artist in Apple Music.
        };
        // The attributes for the artist.
        relationships: {
            albums: AlbumsRelationship;
            // The albums associated with the artist. By default, albums includes identifiers only.
            // Fetch limits: 25 default, 100 maximum

            genres: GenresRelationship;

            'music-videos': MusicVideosRelationship;
            // The music videos associated with the artist. By default, musicVideos not included.
            // Fetch limits: 25 default, 100 maximum

            playlists: PlaylistsRelationship;
            // The playlists associated with the artist. By default, playlists not included.
            // Fetch limits: 10 default, 10 maximum

            station: StationRelationship;
        };
        // The relationships for the artist.
        views: {
            'appears-on-albums': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Albums[];
                // (Required) A selection of albums from other artists this artist appears on.
            };
            // A selection of albums from other artists this artist appears on.
            'compilation-albums': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Albums[];
                // (Required) Albums associated with the artist categorized as compilations.
            };
            // Albums associated with the artist categorized as “compilations”.
            'featured-albums': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Albums[];
                // (Required) A collection of albums selected as featured for the artist.
            };
            // A collection of albums selected as featured for the artist.
            'featured-playlists': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Playlists[];
                // (Required) Relevant playlists associated with the artist.
            };
            // Relevant playlists associated with the artist.
            'full-albums': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Albums[];
                // (Required) Full-release albums associated with the artist.
            };
            // Full-release albums associated with the artist.
            'latest-release': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Albums[];
                // (Required) The latest release for the artist determined to still be recent by the Apple Music Catalog.
            };
            // The latest release for the artist deemed to still be recent.
            'live-albums': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Albums[];
                // (Required) Albums associated with the artist categorized as live performances.
            };
            // Albums associated with the artist categorized as live performances.
            'similar-artists': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Artists[];
                // (Required) Other artists similar to this artist.
            };
            // Other artists similar to this artist.
            singles: {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Albums[];
                // (Required) Albums associated with the artist categorized as singles.
            };
            // Albums associated with the artist categorized as “singles”.
            'top-music-videos': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: MusicVideos[];
                // (Required) Relevant music videos associated with the artist.
            };
            // Relevant music videos associated with the artist.
            'top-songs': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attributes for the view.
                data: Songs[];
                // (Required) Songs associated with the artist based on popularity in the current storefront.
            };
            // Songs associated with the artist based on popularity in the current storefront.
        };
        // The views for associations between artists and other resources.
    }

    /**
     * A resource object that represents a playlist.
     * https://developer.apple.com/documentation/applemusicapi/playlists-ulf
     */
    interface Playlists extends Resource {
        id: string;
        // The identifier for the playlist.
        type: 'playlists';
        // This value is always playlists.
        href: string;
        // (Required) The relative location for the playlist resource.
        attributes?: {
            artwork?: Artwork;
            // The playlist artwork.
            curatorName: string;
            // (Required) The display name of the curator.
            description?: DescriptionAttribute;
            // A description of the playlist.
            isChart: boolean;
            // (Required) Indicates whether the playlist represents a popularity chart.
            lastModifiedDate?: string;
            // The date the playlist was last modified.
            name: string;
            // (Required) The localized name of the playlist.
            playlistType: 'editorial' | 'external' | 'personal-mix' | 'replay' | 'user-shared';
            // Editorial: A playlist created by an Apple Music curator.
            // External: A playlist created by a non-Apple curator or brand.
            // Personal-mix: A personalized playlist for an Apple Music user.
            // Replay: A personalized Apple Music Replay playlist for an Apple Music user.
            // User-shared: A playlist created and shared by an Apple Music user.
            url: string;
            // (Required) The URL for sharing the playlist in Apple Music.
            trackTypes: Array<'music-videos' | 'songs'>;
            // The resource types that are present in the tracks of the playlists.
        };
        // The attributes for the playlist.
        relationships: {
            curator: CuratorRelationship;
            library: {
                href?: string;
                // A relative location for the relationship.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
                data: LibraryPlaylists[];
                // (Required) The library for the playlist.
            };
            tracks: TracksRelationship;
        };
        // The relationships for the playlist.
        views: {
            'featured-artists': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view
                };
                // (Required) The attribute metadata for the view.
                data: Artists[];
                // (Required) A paginated collection of resources in the view.
            };
            // Artists that are featured on this playlist.
            'more-by-curator': {
                href?: string;
                // A relative location for the view.
                next?: string;
                // A relative cursor to fetch the next paginated collection of resources in the view if more exist.
                attributes: {
                    title: string;
                    // (Required) A localized title for this view.
                };
                // (Required) The attribute metadata for the view.
                data: Playlists[];
                // (Required) A paginated collection of resources in the view.
            };
            // Additional content by the same curator for this playlist.
        };
        // The views for associations between playlists and other resources.
    }

    /**
     * A resource object that represents an activity curator.
     * https://developer.apple.com/documentation/applemusicapi/activities-ui5
     */
    interface Activities extends Resource {
        id: string;
        // The identifier for the activity.
        type: 'activities';
        // This value must always be activities.
        href: string;
        // (Required) The relative location for the activity resource.
        attributes?: {
            artwork: Artwork;
            // (Required) The activity artwork.
            editorialNotes?: EditorialNotes;
            // The notes about the activity that appear in the Apple Music catalog.
            name: string;
            // (Required) The localized name of the activity.
            url: string;
            // (Required) The URL for sharing the activity in Apple Music.
        };
        // The attributes for the activity.
        relationships: {
            playlists: PlaylistsRelationship;
        };
        // The relationships for the activity.
    }

    /**
     * A resource object that represents recommended resources for a user calculated using their selected preferences.
     * https://developer.apple.com/documentation/applemusicapi/personalrecommendation
     */
    interface PersonalRecommendation extends Resource {
        id: string;
        // The identifier for the recommendation.
        type: 'personal-recommendation';
        // This value must always be personal-recommendation.
        href: string;
        // (Required) The relative location for the recommendation resource.
        attributes?: {
            kind: 'music-recommendations' | 'recently-played' | 'unknown';
            // (Required) The type of recommendation. Possible values are:
            // music-recommendations: A recommendation for music content.
            // recently-played: A recommendation based on recently played content.
            // unknown: A generic recommendation type.
            nextUpdateDate: string;
            // (Required) The next date in UTC format for updating the recommendation.
            reason: {
                stringForDisplay: string;
                // (Required) The localized reason for the recommendation.
            };
            // The localized reason for the recommendation.
            resourceTypes: string[];
            // (Required) The resource types supported by the recommendation.
            title: {
                stringForDisplay: string;
                // (Required) The localized title for the recommendation.
            };
            // The localized title for the recommendation.
        };
        // The attributes for the recommendation.
        relationships?: {
            contents: ContentsRelationship[];
        };
        // The relationships for the playlist.
    }

    /**
     * A to-one or to-many relationship view from one resource object to others representing interesting associations.
     * https://developer.apple.com/documentation/applemusicapi/view
     */
    interface View {
        href?: string;
        // A URL subpath that fetches the view resources and attributes as the primary objects. This member is only present in responses.
        next?: string;
        // Link to the next page of resources in the view. Contains the offset query parameter that specifies the next page. See Fetch Resources by Page.
        attributes?: any;
        // Attributes specific to the view.
        data: Resource[];
        // (Required) One or more destination objects.
        meta?: {
            [key: string]: any;
        };
        // Contextual information about the view for the request or response.
    }

    /**
     * A to-one or to-many relationship from one resource object to others.
     * https://developer.apple.com/documentation/applemusicapi/relationship
     */
    interface Relationship {
        href?: string;
        // A URL subpath that fetches the relationship resources as the primary object. This member is only present in responses.
        next?: string;
        // Link to the next page of resources in the relationship. Contains the offset query parameter that specifies the next page. See Fetch Resources by Page.
        data: Resource[];
        // (Required) One or more destination objects.
        meta?: {
            [key: string]: any;
        };
        // Contextual information about the relationship for the request or response.
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
     * A music item that represents a genre.
     * https://developer.apple.com/documentation/musickit/genre
     */
    interface Genre {
        hashValue: number;
        id: string;
        name: string;
        parent: Genre;
    }

    /**
     * A music item that represents a music video.
     * https://developer.apple.com/documentation/musickit/musicvideo
     */
    interface MusicVideo {
        albumTitle?: string;
        // The title of the album the music video appears on.
        albums?: Album[];
        // The music video’s associated albums.
        artistName: string;
        // The artist’s name.
        artistURL?: string;
        // The artist’s URL.
        artists?: Artist[];
        // The music video’s associated artists.
        artwork?: Artwork;
        // The artwork for the music video.
        contentRating?: ContentRating;
        // The rating of the content.
        duration?: TimeInterval;
        // The duration of the music video.
        editorialNotes?: EditorialNotes;
        // The editorial notes for the music video.
        genreNames: string[];
        // The names of the music video’s associated genres.
        genres?: Genre[];
        // The music video’s associated genres.
        has4K?: boolean;
        // A Boolean value that indicates whether the music video has 4K content.
        hasHDR?: boolean;
        // A Boolean value that indicates whether the music video has HDR10-encoded content.
        hashValue: number;
        // The hash value.
        id: MusicItemID;
        // The unique identifier for the music video.
        isPreview: boolean;
        // A Boolean value that indicates whether this content corresponds to a subscription video preview.
        isrc?: string;
        // The International Standard Recording Code (ISRC) for the music video.
        moreByArtist?: MusicVideo[];
        // A collection of additional music videos by the artist.
        moreInGenre?: MusicVideo[];
        // A collection of music videos in the same genre as this music video.
        playParameters?: PlayParameters;
        // The parameters to use to play the music video.
        previewAssets?: PreviewAsset[];
        // The preview assets for the music video.
        releaseDate?: string;
        // The release date (or expected prerelease date) for the music video.
        songs?: Song[];
        // The music video’s associated songs.
        title: string;
        // The title of the music video.
        trackNumber?: number;
        // The music video’s number in the album’s track list.
        url?: string;
        // The URL for the music video.
        workName?: string;
        // For classical music only, the name of the associated work.
    }

    /**
     * An object that represents editorial notes.
     * https://developer.apple.com/documentation/musickit/editorialnotes
     */
    interface EditorialNotes {
        hashValue: number;
        // The hash value.
        name?: string;
        // The name for the editorial notes.
        short?: string;
        // Abbreviated notes that display inline or when the content appears alongside other content.
        standard?: string;
        // Notes that appear when the content displays prominently.
        tagline?: string;
        // The tag line for the editorial notes.
    }

    /**
     * An object that represents a preview for resources.
     * https://developer.apple.com/documentation/musickit/previewasset
     */
    interface PreviewAsset {
        artwork?: Artwork;
        // The preview artwork for the associated preview music video.
        hashValue: number;
        // The hash value.
        hlsURL?: string;
        // The HLS preview URL for the content.
        url?: string;
        // The preview URL for the content.
    }

    /**
     * A music item that represents a station.
     * https://developer.apple.com/documentation/musickit/station
     */
    interface Station {
        artwork?: Artwork;
        // The station artwork.
        contentRating?: ContentRating;
        // The rating of the content that potentially plays while playing the station.
        duration?: TimeInterval;
        // The duration of the stream.
        editorialNotes?: EditorialNotes;
        // The notes about the station that appear in the Music app.
        episodeNumber?: number;
        // The episode number of the station.
        hashValue: number;
        // The hash value.
        id: MusicItemID;
        // The unique identifier for the station.
        isLive: boolean;
        // A Boolean value that indicates whether the station is live.
        name: string;
        // The name of the station.
        playParameters?: PlayParameters;
        // The parameters to use to play the station.
        stationProviderName?: string;
        // The name of the entity that provides the station.
        url?: string;
        // The URL for the station.
    }

    /**
     * A music item that represents a song.
     * https://developer.apple.com/documentation/musickit/song
     */
    interface Song {
        albumTitle?: string;
        // The title of the album the song appears on.
        albums?: Album[];
        // The song’s associated albums.
        artistName: string;
        // The artist’s name.
        artistURL?: string;
        // The artist’s URL.
        artists?: Artist[];
        // The song’s associated artists.
        artwork?: Artwork;
        // The artwork for the song.
        attribution?: string;
        // For classical music only, the name of the artist or composer to attribute to the song.
        composerName?: string;
        // The name of the song’s composer.
        composers?: Artist[];
        // The song’s composers.
        contentRating?: ContentRating;
        // The rating of the content.
        discNumber?: number;
        // The number of the disc the song appears on.
        duration?: TimeInterval;
        // The duration of the song.
        editorialNotes?: EditorialNotes;
        // The editorial notes for the song.
        genreNames: string[];
        // The names of the song’s associated genres.
        genres?: Genre[];
        // The song’s associated genres.
        hasLyrics: boolean;
        // A Boolean value that indicates whether the song has lyrics available in the catalog. If true, the song has lyrics available; otherwise, it doesn’t.
        hashValue: number;
        // The hash value.
        id: MusicItemID;
        // The unique identifier for the song.
        isrc?: string;
        // The International Standard Recording Code (ISRC) for the song.
        movementCount?: number;
        // For classical music only, the movement count of this song.
        movementName?: string;
        // For classical music only, the movement name of this song.
        movementNumber?: number;
        // For classical music only, the movement number of this song.
        musicVideos?: MusicVideo[];
        // The song’s associated music videos.
        playParameters?: PlayParameters;
        // The parameters to use to play the song.
        previewAssets?: PreviewAsset[];
        // The preview assets for the song.
        releaseDate?: string;
        // The release date (or expected prerelease date) for the song.
        station?: Station;
        // The song’s associated station.
        title: string;
        // The title of the song.
        trackNumber?: number;
        // The song’s number in the album’s track list.
        url?: string;
        // The URL for the song.
        workName?: string;
        // For classical music only, the name of the associated work.
    }

    /**
     * A music item that represents an artist.
     * https://developer.apple.com/documentation/musickit/artist
     */
    interface Artist {
        albums?: Album[];
        // The artist’s associated albums.
        appearsOnAlbums?: Album[];
        // A collection of albums from other artists that this artist appears on.
        compilationAlbums?: Album[];
        // A collection of compilation albums that include tracks by the artist.
        editorialNotes?: EditorialNotes;
        // The notes about the artist that appear in the Music catalog.
        featuredAlbums?: Album[];
        // A collection of featured albums of the artist.
        featuredPlaylists?: Playlist[];
        // A collection of the artist’s associated playlists.
        fullAlbums?: Album[];
        // A collection of the artist’s full-release albums.
        genreNames?: string[];
        // The names of this artist’s associated genres.
        genres?: Genre[];
        // The artist’s associated genres.
        hashValue: number;
        // The hash value.
        id: MusicItemID;
        // The unique identifier for the artist.
        latestRelease?: Album;
        // The artist’s most recent album.
        liveAlbums?: Album[];
        // A collection of the artist’s live albums.
        musicVideos?: MusicVideo[];
        // The artist’s associated music videos.
        name: string;
        // The name of the artist.
        playlists?: Playlist[];
        // The artist’s associated playlists.
        similarArtists?: Artist[];
        // A collection of artists similar to this artist.
        singles?: Album[];
        // A collection of the artist’s associated albums in the singles category.
        station?: Station;
        // The artist’s associated station.
        topMusicVideos?: MusicVideo[];
        // A collection of the artist’s top music videos.
        topSongs?: Song[];
        // A collection of the artist’s top songs.
        url?: string;
        // The URL for the artist.
    }

    /**
     * A music item that represents a track.
     * https://developer.apple.com/documentation/musickit/track
     */
    interface Track {
        albumTitle?: string;
        // The title of the album the track appears on.
        albums?: Album[];
        // The track’s associated albums.
        artistName: string;
        // The artist’s name.
        artistURL?: string;
        // The artist’s URL.
        artists?: Artist[];
        // The track’s associated artists.
        artwork?: Artwork;
        // The artwork for the track.
        contentRating?: ContentRating;
        // The rating of the content.
        duration?: TimeInterval;
        // The duration of the track.
        editorialNotes?: EditorialNotes;
        // The editorial notes for the track.
        genreNames: string[];
        // The names of the track’s associated genres.
        genres?: Genre[];
        // The track’s associated genres.
        hashValue: number;
        // The hash value.
        id: MusicItemID;
        // The unique identifier for the track.
        isrc?: string;
        // The International Standard Recording Code (ISRC) for the track.
        playParameters?: PlayParameters;
        // The parameters to use to play the track.
        previewAssets?: PreviewAsset[];
        // The preview assets for the track.
        releaseDate?: string;
        // The release date (or expected for pre-release) of the track.
        title: string;
        // The title of the track.
        trackNumber?: number;
        // The track’s number in the album’s track list.
        url?: string;
        // The URL for the track.
        workName?: string;
        // For classical music only, the name of the associated work.
    }

    /**
     * The available kinds of playlists.
     * https://developer.apple.com/documentation/musickit/playlist/kind-swift.enum
     */
    enum PlaylistKind {
        EDITORIAL,
        // Indicates that the playlist was created by an Apple Music curator.
        EXTERNAL,
        // Indicates that the playlist was created by an external curator.
        PERSONAL_MIX,
        // Indicates that the playlist is a personalized playlist for an Apple Music user.
        REPLAY,
        // Indicates that the playlist is a personalized Replay playlist for an Apple Music user.
        USER_SHARED,
        // Indicates that the playlist was created and shared by an Apple Music user.
    }

    /**
     * A music item that represents a playlist.
     * https://developer.apple.com/documentation/musickit/playlist
     */
    interface Playlist {
        artwork?: Artwork;
        // The artwork for the playlist.
        curatorName?: string;
        // The display name for the playlist’s curator.
        featuredArtists?: Artist[];
        // A collection of featured artists for this playlist.
        hashValue: number;
        // The hash value.
        id: MusicItemID;
        // The unique identifier for the playlist.
        isChart?: boolean;
        // A Boolean value that indicates whether the playlist represents a popularity chart.
        kind?: PlaylistKind[keyof PlaylistKind];
        // The kind of playlist.
        lastModifiedDate?: string;
        // The playlist’s most recent modification date.
        moreByCurator?: Playlist[];
        // A collection of additional playlists by the same curator.
        name: string;
        // The name of the playlist.
        playParameters?: PlayParameters;
        // The parameters to use to play the tracks in the playlist.
        shortDescription?: string;
        // An abbreviated description to show inline or when the playlist appears alongside other content.
        standardDescription?: string;
        // A description to show when the playlist is prominently displayed.
        tracks?: Track[];
        // The tracks in the playlist.
        url?: string;
        // The URL for the playlist.
    }

    /**
     * A music item that represents a record label.
     * https://developer.apple.com/documentation/musickit/recordlabel
     */
    interface RecordLabel {
        artwork?: Artwork;
        // The record label’s artwork.
        hashValue: number;
        // The hash value.
        id: MusicItemID;
        // The unique identifier for the record label.
        latestReleases?: Album[];
        // A collection of the most recent releases for the record label.
        name: string;
        // The name of the record label.
        shortDescription?: string;
        // An abbreviated description to show inline or when the record label appears alongside other content.
        standardDescription?: string;
        // A description to show when the record label is prominently displayed.
        topReleases?: Album[];
        // A collection of top releases for the record label.
        url?: string;
        // The URL for the record label.
    }

    /**
     * A music item that represents an album.
     * https://developer.apple.com/documentation/musickit/album
     */
    interface Album {
        appearsOn?: Playlist[];
        // A collection of playlists that include tracks from the album.
        artistName: string;
        // The artist’s name.
        artistURL?: string;
        // The artist’s URL.
        artists?: Artist[];
        // The album’s associated artists.
        artwork?: Artwork;
        // The album artwork.
        contentRating?: ContentRating;
        // The rating of the content.
        copyright?: string;
        // The copyright text for the album.
        editorialNotes?: EditorialNotes;
        // The notes about the album that appear in the Music app.
        genreNames: string[];
        // The names of the album’s associated genres.
        genres?: Genre[];
        // The genres for the album.
        hashValue: number;
        // The hash value.
        id: MusicItemID;
        // The unique identifier for the album.
        isCompilation?: boolean;
        // A Boolean value that indicates whether the album is a compilation.
        isComplete?: boolean;
        // A Boolean value that indicates whether the album is complete.
        isSingle?: boolean;
        // A Boolean value that indicates whether the album consists of a single song.
        otherVersions?: Album[];
        // A collection of other versions of the album.
        playParameters?: PlayParameters;
        // The parameters to use to play the tracks of the album.
        recordLabelName?: string;
        // The name of the album’s record label.
        recordLabels?: RecordLabel[];
        // The record labels for the album.
        relatedAlbums?: Album[];
        // A collection of related albums.
        relatedVideos?: MusicVideo[];
        // A collection of the album’s music videos.
        releaseDate?: string;
        // The release date (or expected prerelease date) for the album.
        title: string;
        // The title of the album.
        trackCount: number;
        // The number of tracks for the album.
        tracks?: Track[];
        // The tracks on the album.
        upc?: string;
        // The universal product code (UPC) for the album.
        url?: string;
        // The URL for the album.
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
        // The preview artwork for the associated preview music video.
        url: string;
        // (Required) The preview URL for the content.
        hlsUrl: string;
        // The HLS preview URL for the content.
    }

    interface AlbumsRelationship {
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
        data: Albums[];
        // (Required) The albums for the artist.
    }

    interface ArtistsRelationship {
        href?: string;
        // The relative location to fetch the relationship directly.
        next?: string;
        // The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
        data: Artists[];
        // (Required) The artists for the album.
    }

    interface CatalogRelationship {
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
        data: Playlists[];
        // (Required) The playlist from the Apple Music catalog associated with the library playlist, if any.
    }

    interface CuratorRelationship {
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
        data: Array<Activities | AppleCurators | Curators>;
        // (Required) The curator for the playlist.
    }

    interface ComposersRelationship {
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
        data: Artists[];
        // (Required) The composers associated with the song.
    }

    interface GenresRelationship {
        href?: string;
        // The relative location to fetch the relationship directly.
        next?: string;
        // The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
        data: Genres[];
        // (Required) The album’s associated genre.
    }

    interface TracksRelationship {
        data: Array<MusicVideos | Songs>;
        // (Required) The ordered songs and music videos in the tracklist of the album.
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
    }

    interface LibraryRelationship {
        href?: string;
        // The relative location to fetch the relationship directly.
        next?: string;
        // The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
        data: LibraryAlbums[];
        // (Required) The library content this album is associated with if added to the user’s library.
    }

    interface MusicVideosRelationship {
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
        data: MusicVideos[];
        // (Required) The music videos for the artist.
    }

    interface PlaylistsRelationship {
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
        data: Playlists[];
        // (Required) The playlists for the artist.
    }

    interface SongsRelationships {
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
        data: Songs[];
        // (Required) The songs associated with the music video.
    }

    interface StationRelationship {
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
        data: Stations[];
        // (Required) The station for the artist.
    }

    interface RecordLabelsRelationship {
        href?: string;
        // The relative location to fetch the relationship directly.
        next?: string;
        // The relative location to request the next page of resources in the collection, if additional resources are available for fetching.
        data: RecordLabels[];
        // (Required) The album’s associated record label.
    }

    interface ContentsRelationship {
        href?: string;
        // A relative location for the relationship.
        next?: string;
        // A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
        data: Resource[];
        // (Required) A list of recommended candidates that are a mixture of albums and playlists.
    }

    /**
     * An object that represents a description attribute.
     * https://developer.apple.com/documentation/applemusicapi/descriptionattribute/
     */
    interface DescriptionAttribute {
        short: string;
        // An abbreviated description to show inline or when the content appears alongside other content.
        standard: string;
        // (Required) A description to show when the content is prominently displayed.
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
                    // (Required) The unique name of the chart to use when fetching a specific chart.
                    data: Albums[];
                    // (Required) The popularity-ordered albums for the chart.
                    href?: string;
                    // A relative location to fetch the chart results directly.
                    name: string;
                    // (Required) The localized display name for the chart.
                    next?: string;
                    // A relative cursor to fetch the next paginated results for the chart if more exist.
                }>;
                // [Cha_rtResponse.Results.AlbumsChart]
                // (Required) The albums results of a chart.
                'music-videos': Array<{
                    chart: string;
                    // (Required) The unique name of the chart to use when fetching a specific chart.
                    data: MusicVideos[];
                    // (Required) The popularity-ordered music videos for the chart.
                    href?: string;
                    // A relative location to fetch the chart results directly.
                    name: string;
                    // (Required) The localized display name for the chart.
                    next?: string;
                    // A relative cursor to fetch the next paginated results for the chart if more exist.[];
                    // [Cha_rtResponse.Results.MusicVideosChart]
                    // (Required) The music videos results of a chart.
                }>;
                playlists: Array<{
                    chart: string;
                    // (Required) The unique name of the chart to use when fetching a specific chart.
                    data: Playlists[];
                    // (Required) The popularity-ordered playlists for the chart.
                    href?: string;
                    // A relative location to fetch the chart results directly.
                    name: string;
                    // (Required) The localized display name for the chart.
                    next?: string;
                    // A relative cursor to fetch the next paginated results for the chart if more exist.
                }>;
                // [Cha_rtResponse.Results.PlaylistsChart]
                // (Required) The playlists results of a chart.
                songs: Array<{
                    chart: string;
                    // (Required) The unique name of the chart to use when fetching a specific chart.
                    data: Songs[];
                    // (Required) The popularity-ordered songs for the chart.
                    href?: string;
                    // A relative location to fetch the chart results directly.
                    name: string;
                    // (Required) The localized display name for the chart.
                    next?: string;
                    // A relative cursor to fetch the next paginated results for the chart if more exist.
                }>;
                // [Cha_rtResponse.Results.SongsChart]
                // (Required) The songs results of a chart.
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
            // A relative cursor to fetch the next paginated collection of resources for the request if more exist.
            data: Resource[];
            // (Required) A paginated collection of resources for the request.
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
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The activities results for a term search for specific resource types.
                albums?: {
                    data: Albums[];
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The albums results for a term search for specific resource types.
                'apple-curators'?: {
                    data: AppleCurators[];
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The Apple curators results for a term search for specific resource types.
                artists?: {
                    data: Artists[];
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The artists results for a term search for specific resource types.
                curators?: {
                    data: Curators[];
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The curators results for a term search for specific resource types.
                'music-videos'?: {
                    data: MusicVideos[];
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The music videos results for a term search for specific resource types.
                playlists?: {
                    data: Playlists[];
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The playlists results for a term search for specific resource types.
                'record-labels'?: {
                    data: RecordLabels[];
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The record labels results for a term search for specific resource types.
                songs?: {
                    data: Songs[];
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The songs results for a term search for specific resource types.
                stations?: {
                    data: Stations[];
                    // (Required) The resources for the search result.
                    href?: string;
                    // The relative location to fetch the search result.
                    next?: string;
                    // A relative cursor to fetch the next paginated collection of resources in the result, if more exist.
                };
                // The stations results for a term search for specific resource types.
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
                // The top results for a term search for specific resource types.
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
