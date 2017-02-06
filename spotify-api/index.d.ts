// Type definitions for The Spotify Web API (including changes March 29th 2016)
// Project: https://developer.spotify.com/web-api/
// Definitions by: Niels Kristian Hansen Skovmand <https://github.com/skovmand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Release comments:
// -----------------

// The audio analysis object is not yet in the Object Model at Spotify, therefore it is typed as any in this file.

// TrackObjects and AlbumObjects is specified in the docs as always having the available_markets property,
// but when it is sent in https://developer.spotify.com/web-api/console/get-current-user-saved-tracks
// the available_markets are missing. Therefore it is marked as optional in this source code.


declare namespace SpotifyApi {

    //
    // Parameter Objects for searching
    //

    /**
     * Object for search parameters for searching for tracks, playlists, artists or albums.
     * See: [Search for an item](https://developer.spotify.com/web-api/search-item/)
     *
     * q and type are not optional in the API, however they are marked as optional here, since various libraries
     * implement them as function call parameters instead. This could be changed.
     *
     * @param q Required. The search query's keywords (and optional field filters and operators).
     * @param type Required. A comma-separated list of item types to search across. Valid types are: album, artist, playlist, and track.
     * @param market Optional. An ISO 3166-1 alpha-2 country code or the string from_token
     * @param limit Optional. The maximum number of results to return. Default: 20. Minimum: 1. Maximum: 50.
     * @param offset Optional. The index of the first result to return. Default: 0 (i.e., the first result). Maximum offset: 100.000. Use with limit to get the next page of search results.
     */
    interface SearchForItemParameterObject {
        q?: string;
        type?: string;
        market?: string;
        limit?: number;
        offset?: number;
    }

    /**
     * Object for use in Recommendations Based on Seeds.
     * See: [Recommendations Based on Seeds](https://developer.spotify.com/web-api/get-recommendations/)
     *
     * @limit q Optional. The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20. Minimum: 1. Maximum: 100.
     * @market q Optional. An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking. Because min_*, max_* and target_* are applied to pools before relinking, the generated results may not precisely match the filters applied. Original, non-relinked tracks are available via the linked_from attribute of the relinked track response.
     * @max_ q Optional. Multiple values. For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
     * @min_ q Optional. Multiple values. For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
     * @seed_artists q A comma separated list of Spotify IDs for seed artists. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
     * @seed_genres q A comma separated list of any genres in the set of available genre seeds. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
     * @seed_tracks q A comma separated list of Spotify IDs for a seed track. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
     * @target_ q Optional. Multiple values. For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
     */
    interface RecommendationsOptionsObject {
        limit?: number,
        market?: string,
        max_acousticness?: number,
        max_danceability?: number,
        max_duration_ms?: number,
        max_energy?: number,
        max_instrumentalness?: number,
        max_key?: number,
        max_liveness?: number,
        max_loudness?: number,
        max_mode?: number,
        max_popularity?: number,
        max_speechiness?: number,
        max_tempo?: number,
        max_time_signature?: number,
        max_valence?: number,
        min_acousticness?: number,
        min_danceability?: number,
        min_duration_ms?: number,
        min_energy?: number,
        min_instrumentalness?: number,
        min_key?: number,
        min_liveness?: number,
        min_loudness?: number,
        min_mode?: number,
        min_popularity?: number,
        min_speechiness?: number,
        min_tempo?: number,
        min_time_signature?: number,
        min_valence?: number,
        seed_artists?: string,   // Comma separated string
        seed_genres?: string,   // Comma separated string
        seed_tracks?: string,   // Comma separated string
        target_acousticness?: number
        target_danceability?: number
        target_duration_ms?: number
        target_energy?: number
        target_instrumentalness?: number
        target_key?: number
        target_liveness?: number
        target_loudness?: number
        target_mode?: number
        target_popularity?: number
        target_speechiness?: number
        target_tempo?: number
        target_time_signature?: number
        target_valence?: number
    }


    //
    // Responses from the Spotify Web API in the same order as in the API endpoint docs seen here:
    // [API Endpoint Reference](https://developer.spotify.com/web-api/endpoint-reference/)
    //

    // Generic interfaces for re-use:

    /**
     * Void Response
     */
    interface VoidResponse {}

    /**
     * Response with Playlist Snapshot
     */
    interface PlaylistSnapshotResponse {
        snapshot_id: string
    }


    // Spotify API Endpoints:

    /**
     * Get an Album
     * 
     * GET /v1/albums/{id}
     * https://developer.spotify.com/web-api/get-album/
     */
    interface SingleAlbumResponse extends AlbumObjectFull {}

    /**
     * Get Several Albums
     * 
     * GET /v1/albums?ids={ids}
     * https://developer.spotify.com/web-api/get-several-albums/ 
     */
    interface MultipleAlbumsResponse {
        albums: AlbumObjectFull[]
    }

    /**
     * Get an Album’s Tracks
     * 
     * GET /v1/albums/{id}/tracks
     * https://developer.spotify.com/web-api/get-albums-tracks/
     */
    interface AlbumTracksResponse extends PagingObject<TrackObjectSimplified> {}

    /**
     * Get an Artist
     * 
     * GET /v1/artists/{id}
     * https://developer.spotify.com/web-api/get-artist/
     */
    interface SingleArtistResponse extends ArtistObjectFull {}

    /**
     * Get Several Artists
     * 
     * /v1/artists?ids={ids} 
     * https://developer.spotify.com/web-api/get-several-artists/
     */
    interface MultipleArtistsResponse {
        artists: ArtistObjectFull[]
    }

    /**
     * Get an Artist’s Albums
     * 
     * GET /v1/artists/{id}/albums
     * https://developer.spotify.com/web-api/get-artists-albums/
     */
    interface ArtistsAlbumsResponse extends PagingObject<AlbumObjectSimplified> {}

    /**
     * Get an Artist’s Top Tracks
     * 
     * GET /v1/artists/{id}/top-tracks
     * https://developer.spotify.com/web-api/get-artists-top-tracks/
     */
    interface ArtistsTopTracksResponse {
        tracks: TrackObjectFull[]
    }

    /**
     * Get an Artist’s Related Artists
     * 
     * GET /v1/artists/{id}/related-artists
     * https://developer.spotify.com/web-api/get-related-artists/
     */
    interface ArtistsRelatedArtistsResponse {
        artists: ArtistObjectFull[]
    }

    /**
     * Get Audio Analysis for a Track
     * 
     * GET /v1/audio-analysis/{id}
     * https://developer.spotify.com/web-api/get-audio-analysis/
     * 
     * At the time of typing, the Audio Analysis Object is absent from the Object Model, so it is typed as any.
     * Object Model: https://developer.spotify.com/web-api/object-model/
     */
    interface AudioAnalysisResponse extends Object {}

    /**
     * Get audio features for a track
     * 
     * GET /v1/audio-features/{id}
     * https://developer.spotify.com/web-api/get-audio-features/
     */
    interface AudioFeaturesResponse extends AudioFeaturesObject {}

    /**
     * Get audio features for several tracks
     * 
     * GET /v1/audio-features?ids={ids}
     * https://developer.spotify.com/get-several-audio-features/
     */
    interface MultipleAudioFeaturesResponse {
        "audio_features": AudioFeaturesObject[]
    }

    /**
     * Get a list of featured playlists
     * 
     * GET /v1/browse/featured-playlists
     * https://developer.spotify.com/web-api/get-list-featured-playlists/
     */
    interface ListOfFeaturedPlaylistsResponse {
        message?: string,
        playlists: PagingObject<PlaylistObjectSimplified>
    }

    /**
     * Get a list of new releases
     * 
     * GET /v1/browse/new-releases
     * https://developer.spotify.com/web-api/get-list-new-releases/
     */
    interface ListOfNewReleasesResponse {
        message?: string,
        albums: PagingObject<AlbumObjectSimplified>
    }

    /**
     * Get a list of categories
     * 
     * GET /v1/browse/categories
     * https://developer.spotify.com/web-api/get-list-categories/
     */
    interface MultipleCategoriesResponse {
        categories: PagingObject<CategoryObject>
    }

    /**
     * Get a category
     * 
     * GET /v1/browse/categories/{id}
     * https://developer.spotify.com/web-api/get-category/
     */
    interface SingleCategoryResponse extends CategoryObject {}

    /**
     * Get a categorys playlists
     * 
     * GET /v1/browse/categories/{id}/playlists
     * https://developer.spotify.com/web-api/get-categorys-playlists/
     */
    interface CategoryPlaylistsReponse {
        playlists: PagingObject<PlaylistObjectSimplified>
    }

    /**
     * Get Current User’s Profile
     * 
     * GET /v1/me
     * https://developer.spotify.com/web-api/get-current-users-profile/
     */
    interface CurrentUsersProfileResponse extends UserObjectPrivate {}

    /**
     * Get User’s Followed Artists
     * 
     * GET /v1/me/following
     * https://developer.spotify.com/web-api/get-followed-artists/
     */
    interface UsersFollowedArtistsResponse {
        artists: CursorBasedPagingObject<ArtistObjectFull>
    }

    /**
     * Follow artists or users
     * 
     * PUT /v1/me/following
     * https://developer.spotify.com/web-api/follow-artists-users/
     */
    interface FollowArtistsOrUsersResponse extends VoidResponse {}

    /**
     * Unfollow artists or users
     * 
     * DELETE /v1/me/following
     * https://developer.spotify.com/web-api/unfollow-artists-users/
     */
    interface UnfollowArtistsOrUsersResponse extends VoidResponse {}

    /**
     * Check if User Follows Users or Artists
     * 
     * GET /v1/me/following/contains
     * https://developer.spotify.com/web-api/check-current-user-follows/
     */
    interface UserFollowsUsersOrArtistsResponse extends Array<boolean> {}

    /**
     * Follow a Playlist
     * 
     * PUT /v1/users/{owner_id}/playlists/{playlist_id}/followers
     * https://developer.spotify.com/web-api/follow-playlist/
     */
    interface FollowPlaylistReponse extends VoidResponse {}

    /**
     * Unfollow a Playlist
     * 
     * DELETE /v1/users/{owner_id}/playlists/{playlist_id}/followers
     * https://developer.spotify.com/web-api/unfollow-playlist/
     */
    interface UnfollowPlaylistReponse extends VoidResponse {}

    /**
     * Save tracks for user
     * 
     * PUT /v1/me/tracks?ids={ids}
     * https://developer.spotify.com/web-api/save-tracks-user/
     */
    interface SaveTracksForUserResponse extends VoidResponse {}

    /**
     * Get user's saved tracks
     * 
     * GET /v1/me/tracks
     * https://developer.spotify.com/web-api/get-users-saved-tracks/
     */
    interface UsersSavedTracksResponse extends PagingObject<SavedTrackObject> {}

    /**
     * Remove User’s Saved Tracks
     * 
     * DELETE /v1/me/tracks?ids={ids}
     * https://developer.spotify.com/web-api/remove-tracks-user/
     */
    interface RemoveUsersSavedTracksResponse extends VoidResponse {}

    /**
     * Check User’s Saved Tracks
     * 
     * GET /v1/me/tracks/contains?ids={ids}
     * https://developer.spotify.com/web-api/check-users-saved-tracks/
     */
    interface CheckUsersSavedTracksResponse extends Array<boolean> {}

    /**
     * Save albums for user
     * 
     * PUT /v1/me/albums?ids={ids}
     * https://developer.spotify.com/web-api/save-albums-user/
     */
    interface SaveAlbumsForUserResponse extends VoidResponse {}

    /**
     * Get user's saved albums
     * 
     * GET /v1/me/albums
     * https://developer.spotify.com/web-api/get-users-saved-albums/
     */
    interface UsersSavedAlbumsResponse extends PagingObject<SavedAlbumObject> {}

    /**
     * Remove Albums for Current User
     * 
     * DELETE /v1/me/albums?ids={ids}
     * https://developer.spotify.com/web-api/remove-albums-user/
     */
    interface RemoveAlbumsForUserResponse extends VoidResponse {}

    /**
     * Check user's saved albums
     * 
     * GET /v1/me/albums/contains?ids={ids}
     * https://developer.spotify.com/web-api/check-users-saved-albums/
     */
    interface CheckUserSavedAlbumsResponse extends Array<boolean> {}

    /**
     * Get a User’s Top Artists and Tracks (Note: This is only Artists)
     * 
     * GET /v1/me/top/{type}
     * https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/
     */
    interface UsersTopArtistsResponse extends PagingObject<ArtistObjectFull> {}

    /**
     * Get a User’s Top Artists and Tracks (Note: This is only Tracks)
     * 
     * GET /v1/me/top/{type}
     * https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/
     */
    interface UsersTopTracksResponse extends PagingObject<TrackObjectFull> {}

    /**
     * Get recommendations based on seeds
     * 
     * GET /v1/recommendations
     * https://developer.spotify.com/get-recommendations/
     */
    interface RecommendationsFromSeedsResponse extends RecommendationsObject {}

    /**
     * Get available genre seeds
     * 
     * GET /v1/recommendations/available-genre-seeds
     * https://developer.spotify.com/web-api/get-recommendations/#available-genre-seeds
     */
    interface AvailableGenreSeedsResponse {
        "genres": string[]
    }

    /**
     * Search for an album
     * 
     * GET /v1/search?type=album
     * https://developer.spotify.com/web-api/search-item/
     */
    interface AlbumSearchResponse {
        albums: PagingObject<AlbumObjectSimplified>
    }

    /**
     * Search for an artist
     * 
     * GET /v1/search?type=artist
     * https://developer.spotify.com/web-api/search-item/
     */
    interface ArtistSearchResponse {
        artists: PagingObject<ArtistObjectFull>
    }

    /**
     * Search for a playlist
     * 
     * GET /v1/search?type=playlist
     * https://developer.spotify.com/web-api/search-item/
     */
    interface PlaylistSearchResponse {
        playlists: PagingObject<PlaylistObjectSimplified>
    }

    /**
     * Search for a track
     * 
     * GET /v1/search?type=track
     * https://developer.spotify.com/web-api/search-item/
     */
    interface TrackSearchResponse {
        tracks: PagingObject<TrackObjectFull>
    }

    /**
     * Get a track
     * 
     * GET /v1/tracks/{id}
     * https://developer.spotify.com/web-api/get-track/
     */
    interface SingleTrackResponse extends TrackObjectFull {}

    /**
     * Get multiple tracks
     * 
     * GET /v1/tracks?ids={ids}
     * https://developer.spotify.com/web-api/get-several-tracks/
     */
    interface MultipleTracksResponse {
        tracks: TrackObjectFull[]
    }

    /**
     * Get user profile
     * 
     * GET /v1/users/{user_id}
     * https://developer.spotify.com/web-api/get-users-profile/
     */
    interface UserProfileResponse extends UserObjectPublic {}

    /**
     * Get a list of a user's playlists
     * 
     * GET /v1/users/{user_id}/playlists
     * https://developer.spotify.com/web-api/get-list-users-playlists/
     */
    interface ListOfUsersPlaylistsResponse extends PagingObject<PlaylistObjectSimplified> {}

    /**
     * Get a list of the current user's playlists
     * 
     * GET /v1/me/playlists
     * https://developer.spotify.com/web-api/get-list-users-playlists/
     */
    interface ListOfCurrentUsersPlaylistsResponse extends PagingObject<PlaylistObjectSimplified> {}

    /**
     * Get a playlist
     * 
     * GET /v1/users/{user_id}/playlists/{playlist_id}
     * https://developer.spotify.com/web-api/get-playlist/
     */
    interface SinglePlaylistResponse extends PlaylistObjectFull {}

    /**
     * Get a playlist's tracks
     * 
     * GET /v1/users/{user_id}/playlists/{playlist_id}/tracks
     * https://developer.spotify.com/web-api/get-playlists-tracks/
     */
    interface PlaylistTrackResponse extends PagingObject<PlaylistTrackObject> {}

    /**
     * Create a Playlist
     * 
     * POST /v1/users/{user_id}/playlists
     * https://developer.spotify.com/web-api/create-playlist/
     */
    interface CreatePlaylistResponse extends PlaylistObjectFull {}

    /**
     * Change a Playlist’s Details
     * 
     * PUT /v1/users/{user_id}/playlists/{playlist_id}
     * https://developer.spotify.com/web-api/change-playlist-details/
     */
    interface ChangePlaylistDetailsReponse extends VoidResponse {}

    /**
     * Add Tracks to a Playlist
     * 
     * POST /v1/users/{user_id}/playlists/{playlist_id}/tracks
     * https://developer.spotify.com/web-api/add-tracks-to-playlist/
     */
    interface AddTracksToPlaylistResponse extends PlaylistSnapshotResponse {}

    /**
     * Remove Tracks from a Playlist
     * 
     * DELETE /v1/users/{user_id}/playlists/{playlist_id}/tracks
     * https://developer.spotify.com/web-api/remove-tracks-playlist/
     */
    interface RemoveTracksFromPlaylistResponse extends PlaylistSnapshotResponse {}

    /**
     * Reorder a Playlist’s Tracks
     * 
     * PUT /v1/users/{user_id}/playlists/{playlist_id}/tracks
     * https://developer.spotify.com/web-api/reorder-playlists-tracks/
     */
    interface ReorderPlaylistTracksResponse extends PlaylistSnapshotResponse {}

    /**
     * Replace a Playlist’s Tracks
     * 
     * PUT /v1/users/{user_id}/playlists/{playlist_id}/tracks
     * https://developer.spotify.com/web-api/replace-playlists-tracks/
     */
    interface ReplacePlaylistTracksResponse extends VoidResponse {}

    /**
     * Check if Users Follow a Playlist
     * 
     * GET /v1/users/{user_id}/playlists/{playlist_id}/followers/contains
     * https://developer.spotify.com/web-api/check-user-following-playlist/
     */
    interface UsersFollowPlaylistReponse extends Array<boolean> {}



    //
    // Objects from the Object Models of the Spotify Web Api, ordered alphabetically.
    // [Object Model](https://developer.spotify.com/web-api/object-model)
    //

    /**
     * Full Album Object
     * [album object (full)](https://developer.spotify.com/web-api/object-model/#album-object-simplified)
     */
    interface AlbumObjectFull extends AlbumObjectSimplified {
        artists: ArtistObjectSimplified[],
        copyrights: CopyrightObject[],
        external_ids: ExternalIdObject,
        genres: string[],
        popularity: number,
        release_date: string,
        release_date_precision: string,
        tracks: PagingObject<TrackObjectSimplified>,
    }

    /**
     * Simplified Album Object
     * [album object (simplified)](https://developer.spotify.com/web-api/object-model/#album-object-simplified)
     */
    interface AlbumObjectSimplified {
        album_type: string,
        available_markets?: string[],
        external_urls: ExternalUrlObject,
        href: string,
        id: string,
        images: ImageObject[],
        name: string,
        type: "album",
        uri: string
    }

    /**
     * Full Artist Object
     * [artist object (full)](https://developer.spotify.com/web-api/object-model/)
     */
    interface ArtistObjectFull extends ArtistObjectSimplified {
        followers: FollowersObject,
        genres: string[],
        images: ImageObject[],
        popularity: number,
    }

    /**
     * Simplified Artist Object
     * [artist object (simplified)](https://developer.spotify.com/web-api/object-model/)
     */
    interface ArtistObjectSimplified {
        external_urls: ExternalUrlObject,
        href: string,
        id: string,
        name: string,
        type: "artist",
        uri: string
    }

    /**
     * Audio Features Object
     * https://developer.spotify.com/web-api/object-model/#audio-features-object
     */
    interface AudioFeaturesObject {
        acousticness: number,
        analysis_url: string,
        danceability: number,
        duration_ms: number,
        energy: number,
        id: string,
        instrumentalness: number,
        key: number,
        liveness: number,
        loudness: number,
        mode: number,
        speechiness: number,
        tempo: number,
        time_signature: number,
        track_href: string,
        type: "audio_features",
        uri: string,
        valence: number
    }

    /**
     * Category Object
     * [category object](https://developer.spotify.com/web-api/object-model/)
     */
    interface CategoryObject {
        href: string,
        icons: ImageObject[],
        id: string,
        name: string
    }

    /**
     * Copyright object
     * [copyright object](https://developer.spotify.com/web-api/object-model/)
     */
    interface CopyrightObject {
        text: string,
        type: "C" | "P"
    }

    /**
     * Cursor object
     * [cursor object](https://developer.spotify.com/web-api/object-model/)
     */
    interface CursorObject {
        after: string
    }

    /**
     * Error object
     * [error object](https://developer.spotify.com/web-api/object-model/)
     */
    interface ErrorObject {
        status: number,
        message: string
    }

    /**
     * External Id object
     * [](https://developer.spotify.com/web-api/object-model/)
     *
     * Note that there might be other types available, it couldn't be found in the docs.
     */
    interface ExternalIdObject {
        isrc?: string,
        ean?: string,
        upc?: string
    }

    /**
     * External Url Object
     * [](https://developer.spotify.com/web-api/object-model/)
     *
     * Note that there might be other types available, it couldn't be found in the docs.
     */
    interface ExternalUrlObject {
        spotify: string
    }

    /**
     * Followers Object
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface FollowersObject {
        href: string,
        total: number
    }

    /**
     * Image Object
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface ImageObject {
        height?: number,
        url: string,
        width?: number
    }

    /**
     * Paging Object wrapper used for retrieving collections from the Spotify API.
     * [](https://developer.spotify.com/web-api/object-model/#paging-object)
     */
    interface PagingObject<T> {
        href: string,
        items: T[],
        limit: number,
        next: string,
        offset: number,
        previous: string,
        total: number
    }

    /**
     * Cursor Based Paging Object wrappers used for retrieving collections from the Spotify API.
     * [](https://developer.spotify.com/web-api/object-model/#cursor-based-paging-object)
     */
    interface CursorBasedPagingObject<T> {
        href: string,
        items: T[],
        limit: number,
        next: string,
        cursors: CursorObject,
        total: number
    }

    /**
     * Base Playlist Object. Does not in itself exist in Spotify Web Api,
     * but needs to be made since the tracks types vary in the Full and Simplified versions.
     */
    interface PlaylistBaseObject {
        collaborative: boolean,
        external_urls: ExternalUrlObject,
        href: string,
        id: string,
        images: ImageObject[],
        name: string,
        owner: UserObjectPublic,
        public: boolean,
        snapshot_id: string,
        type: "playlist",
        uri: string
    }

    /**
     * Playlist Object Full
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface PlaylistObjectFull extends PlaylistBaseObject {
        description: string,
        followers: FollowersObject,
        tracks: PagingObject<PlaylistTrackObject>
    }

    /**
     * Playlist Object Simplified
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface PlaylistObjectSimplified extends PlaylistBaseObject {
        tracks: {
            href: string,
            total: number
        }
    }

    /**
     * The Track Object in Playlists
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface PlaylistTrackObject {
        added_at: string,
        added_by: UserObjectPublic,
        is_local: boolean,
        track: TrackObjectFull
    }

    /**
     * Recommendations Object
     * [](https://developer.spotify.com/web-api/object-model/#recommendations-object)
     */
    interface RecommendationsObject {
        seeds: RecommendationsSeedObject[],
        tracks: TrackObjectSimplified[]
    }

    /**
     * Recommendations Seed Object
     * [](https://developer.spotify.com/web-api/object-model/#recommendations-seed-object)
     */
    interface RecommendationsSeedObject {
        afterFilteringSize: number,
        afterRelinkingSize: number,
        href: string,
        id: string,
        initialPoolSize: number,
        type: "artist" | "track" | "genre"
    }

    /**
     * Saved Track Object in Playlists
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface SavedTrackObject {
        added_at: string,
        track: TrackObjectFull
    }

    /**
     * Saved Track Object in Playlists
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface SavedAlbumObject {
        added_at: string,
        album: AlbumObjectFull
    }

    /**
     * Full Track Object
     * [track object (full)](https://developer.spotify.com/web-api/object-model/#track-object-full)
     */
    interface TrackObjectFull extends TrackObjectSimplified {
        album: AlbumObjectSimplified,
        external_ids: ExternalIdObject,
        popularity: number
    }

    /**
     * Simplified Track Object
     * [track object (simplified)](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
     */
    interface TrackObjectSimplified {
        artists: ArtistObjectSimplified[],
        available_markets?: string[],
        disc_number: number,
        duration_ms: number,
        explicit: boolean,
        external_urls: ExternalUrlObject,
        href: string,
        id: string,
        is_playable?: boolean,
        linked_from?: TrackLinkObject,
        name: string,
        preview_url: string,
        track_number: number,
        type: "track",
        uri: string
    }

    /**
     * Track Link Object
     * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
     */
    interface TrackLinkObject {
        external_urls: ExternalUrlObject,
        href: string,
        id: string,
        type: "track",
        uri: string
    }

    /**
     * User Object (Private)
     * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
     */
    interface UserObjectPrivate extends UserObjectPublic {
        birthdate: string,
        country: string,
        email: string,
        product: string
    }

    /**
     * User Object (Public)
     * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
     */
    interface UserObjectPublic {
        display_name?: string,
        external_urls: ExternalUrlObject,
        followers?: FollowersObject,
        href: string,
        id: string,
        images?: ImageObject[],
        type: "user",
        uri: string
    }

}
