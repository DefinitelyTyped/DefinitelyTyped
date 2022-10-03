// Type definitions for The Spotify Web API (including changes March 29th 2016)
// Project: https://developer.spotify.com/web-api/
// Definitions by: Niels Kristian Hansen Skovmand <https://github.com/skovmand>
//                 Magnar Ovedal Myrtveit <https://github.com/Stadly>
//                 Nils Måsén <https://github.com/piksel>
//                 Basti Ortiz <https://github.com/Some-Dood>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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
     * `q` and `type` are required in the API. Previous versions of the type declarations marked them
     * as optional in order for external libraries to "implement them as function call parameters instead".
     * Now, the type declaration shall mark them as required. If necessary, one can consider this to be a
     * "breaking change". In that case, one can use TypeScript's built-in utility type `Omit<T, K>`.
     * For example, one can remove the `q` and `type` by annotating the type
     * as `Omit<SpotifyApi.SearchForItemParameterObject, "q" | "type">`.
     */
    interface SearchForItemParameterObject {
        /**
         * The search query's keywords (and optional field filters and operators).
         */
        q: string;
        /**
         * A comma-separated list of item types to search across. Valid types are: `album`, `artist`, `playlist`, and `track`.
         * Search results include hits from all the specified item types.
         * For example: `q=name:abacab&type=album,track` returns both albums and tracks with `“abacab”` included in their name.
         */
        type: string;
        /**
         * An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) or the string `from_token`.
         * If a country code is specified, only artists, albums, and tracks with content that is playable in that market is returned.
         */
        market?: string | undefined;
        /**
         * The maximum number of results to return.
         * Default: `20`. Minimum: `1`. Maximum: `50`.
         */
        limit?: number | undefined;
        /**
         * The index of the first result to return.
         * Default: `0` (first result). Maximum offset (including limit): `2,000`.
         * Use with limit to get the next page of search results.
         */
        offset?: number | undefined;
        /**
         * Possible values: `audio`.
         * If `include_external=audio` is specified, the response will include any relevant audio content that is hosted externally.
         * By default external content is filtered out from responses.
         */
        include_external?: string | undefined;
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
        limit?: number | undefined;
        market?: string | undefined;
        max_acousticness?: number | undefined;
        max_danceability?: number | undefined;
        max_duration_ms?: number | undefined;
        max_energy?: number | undefined;
        max_instrumentalness?: number | undefined;
        max_key?: number | undefined;
        max_liveness?: number | undefined;
        max_loudness?: number | undefined;
        max_mode?: number | undefined;
        max_popularity?: number | undefined;
        max_speechiness?: number | undefined;
        max_tempo?: number | undefined;
        max_time_signature?: number | undefined;
        max_valence?: number | undefined;
        min_acousticness?: number | undefined;
        min_danceability?: number | undefined;
        min_duration_ms?: number | undefined;
        min_energy?: number | undefined;
        min_instrumentalness?: number | undefined;
        min_key?: number | undefined;
        min_liveness?: number | undefined;
        min_loudness?: number | undefined;
        min_mode?: number | undefined;
        min_popularity?: number | undefined;
        min_speechiness?: number | undefined;
        min_tempo?: number | undefined;
        min_time_signature?: number | undefined;
        min_valence?: number | undefined;
        seed_artists?: string[] | string | undefined; // Array of strings or Comma separated string
        seed_genres?: string[] | string | undefined; // Array of strings or Comma separated string
        seed_tracks?: string[] | string | undefined; // Array of strings or Comma separated string
        target_acousticness?: number | undefined;
        target_danceability?: number | undefined;
        target_duration_ms?: number | undefined;
        target_energy?: number | undefined;
        target_instrumentalness?: number | undefined;
        target_key?: number | undefined;
        target_liveness?: number | undefined;
        target_loudness?: number | undefined;
        target_mode?: number | undefined;
        target_popularity?: number | undefined;
        target_speechiness?: number | undefined;
        target_tempo?: number | undefined;
        target_time_signature?: number | undefined;
        target_valence?: number | undefined;
    }

    interface RecentlyPlayedParameterObject {
        limit?: number | undefined;
        after?: number | undefined;
        before?: number | undefined;
    }

    interface TransferPlaybackParameterObject {
        play?: boolean | undefined;
    }

    interface TrackRelinkingParameterObject {
        market?: string | undefined;
    }

    interface DeviceSpecificParameterObject {
        device_id?: string | undefined;
        context_uri?: string | undefined;
        position_ms?: number | undefined;
        uris?: string[] | undefined;
        offset?: Object | undefined;
    }

    interface PlayParameterObject {
        device_id?: string | undefined;
        context_uri?: string | undefined;
        uris?: string[] | undefined;
        offset?:
            | {
                  position?: number | undefined;
                  uri?: string | undefined;
              }
            | undefined;
        position_ms?: number | undefined;
    }

    interface RestrictionsObject {
        reason: string;
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
        snapshot_id: string;
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
        albums: AlbumObjectFull[];
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
        artists: ArtistObjectFull[];
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
        tracks: TrackObjectFull[];
    }

    /**
     * Get an Artist’s Related Artists
     *
     * GET /v1/artists/{id}/related-artists
     * https://developer.spotify.com/web-api/get-related-artists/
     */
    interface ArtistsRelatedArtistsResponse {
        artists: ArtistObjectFull[];
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
    interface AudioAnalysisResponse extends AudioAnalysisObject {}

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
        audio_features: AudioFeaturesObject[];
    }

    /**
     * Get a list of featured playlists
     *
     * GET /v1/browse/featured-playlists
     * https://developer.spotify.com/web-api/get-list-featured-playlists/
     */
    interface ListOfFeaturedPlaylistsResponse {
        message?: string | undefined;
        playlists: PagingObject<PlaylistObjectSimplified>;
    }

    /**
     * Get a list of new releases
     *
     * GET /v1/browse/new-releases
     * https://developer.spotify.com/web-api/get-list-new-releases/
     */
    interface ListOfNewReleasesResponse {
        message?: string | undefined;
        albums: PagingObject<AlbumObjectSimplified>;
    }

    /**
     * Get a list of categories
     *
     * GET /v1/browse/categories
     * https://developer.spotify.com/web-api/get-list-categories/
     */
    interface MultipleCategoriesResponse {
        categories: PagingObject<CategoryObject>;
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
    interface CategoryPlaylistsResponse {
        playlists: PagingObject<PlaylistObjectSimplified>;
    }
    /**
     * Get a categorys playlists
     *
     * GET /v1/browse/categories/{id}/playlists
     * https://developer.spotify.com/web-api/get-categorys-playlists/
     * @deprecated Use `CategoryPlaylistsResponse` instead
     */
    interface CategoryPlaylistsReponse extends CategoryPlaylistsResponse {}

    /**
     * Get Playlist Cover Image
     *
     * GET /v1/playlists/playlist_id/image
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist-cover
     */
    interface PlaylistCoverImageResponse extends Array<ImageObject> {}

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
        artists: CursorBasedPagingObject<ArtistObjectFull>;
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
    interface FollowPlaylistResponse extends VoidResponse {}
    /**
     * Follow a Playlist
     *
     * PUT /v1/users/{owner_id}/playlists/{playlist_id}/followers
     * https://developer.spotify.com/web-api/follow-playlist/
     * @deprecated Use `FollowPlaylistResponse` instead
     */
    interface FollowPlaylistReponse extends FollowPlaylistResponse {}

    /**
     * Unfollow a Playlist
     *
     * DELETE /v1/users/{owner_id}/playlists/{playlist_id}/followers
     * https://developer.spotify.com/web-api/unfollow-playlist/
     */
    interface UnfollowPlaylistResponse extends VoidResponse {}
    /**
     * Unfollow a Playlist
     *
     * DELETE /v1/users/{owner_id}/playlists/{playlist_id}/followers
     * https://developer.spotify.com/web-api/unfollow-playlist/
     * @deprecated Use `UnfollowPlaylistResponse` instead
     */
    interface UnfollowPlaylistReponse extends UnfollowPlaylistResponse {}

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
     * Get user's saved shows
     *
     * GET /v1/me/shows
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-shows
     */
    type UsersSavedShowsResponse = PagingObject<SavedShowObject>;

    /**
     * Save Shows for Current User
     *
     * PUT /v1/me/shows
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/save-shows-user
     */
    interface SaveShowsForUserResponse extends VoidResponse {}

    /**
     * Remove User's Saved Shows
     *
     * DELETE /v1/me/shows
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-shows-user
     */
    interface RemoveShowsForUserResponse extends VoidResponse {}

    /**
     * Check User's Saved Shows
     *
     * GET /v1/me/shows/contains
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-shows
     */
    interface CheckUserSavedShowsResponse extends Array<boolean> {}

    /**
     * Get User's Saved Episodes
     *
     * GET /v1/me/episodes
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-saved-episodes
     */
    type UsersSavedEpisodesResponse = PagingObject<SavedEpisodeObject>;

    /**
     * Save Episodes for Current User
     *
     * PUT /v1/me/episodes
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/save-episodes-user
     */
    interface SaveEpisodesForUserResponse extends VoidResponse {}

    /**
     * Remove User's Saved Episodes
     *
     * DELETE /v1/me/episodes
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/remove-episodes-user
     */
    interface RemoveEpisodesForUserResponse extends VoidResponse {}

    /**
     * Check User's Saved Episodes
     *
     * GET /v1/me/shows/episodes
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/check-users-saved-episodes
     */
    interface CheckUserSavedEpisodesResponse extends Array<boolean> {}

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
     * Get a User’s Recently Played Tracks
     *
     * GET /v1/me/player/recently-played
     * https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/
     */
    interface UsersRecentlyPlayedTracksResponse extends CursorBasedPagingObject<PlayHistoryObject> {}

    /**
     * Add an item to the end of the user’s current playback queue.
     *
     * POST /v1/me/player/queue
     * https://developer.spotify.com/documentation/web-api/reference/player/add-to-queue/
     */
    interface AddToQueueResponse extends VoidResponse {}

    /**
     * Get the list of objects that make up the user's queue.
     *
     * GET /v1/me/player/queue
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-queue
     */
    interface UsersQueueResponse {
        currently_playing: TrackObjectFull | EpisodeObjectFull;
        queue: Array<TrackObjectFull | EpisodeObjectFull>;
    }

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
        genres: string[];
    }

    /**
     * Get Available Markets
     *
     * GET /v1/markets
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-available-markets
     */
    interface AvailableMarketsResponse {
        markets: string[];
    }

    /**
     * Search for an album
     *
     * GET /v1/search?type=album
     * https://developer.spotify.com/web-api/search-item/
     */
    interface AlbumSearchResponse {
        albums: PagingObject<AlbumObjectSimplified>;
    }

    /**
     * Search for an artist
     *
     * GET /v1/search?type=artist
     * https://developer.spotify.com/web-api/search-item/
     */
    interface ArtistSearchResponse {
        artists: PagingObject<ArtistObjectFull>;
    }

    /**
     * Search for a playlist
     *
     * GET /v1/search?type=playlist
     * https://developer.spotify.com/web-api/search-item/
     */
    interface PlaylistSearchResponse {
        playlists: PagingObject<PlaylistObjectSimplified>;
    }

    /**
     * Search for a track
     *
     * GET /v1/search?type=track
     * https://developer.spotify.com/web-api/search-item/
     */
    interface TrackSearchResponse {
        tracks: PagingObject<TrackObjectFull>;
    }

    /**
     * Search for a show
     *
     * GET /v1/search?type=show
     * https://developer.spotify.com/web-api/search-item/
     */
    interface ShowSearchResponse {
        shows: PagingObject<ShowObjectSimplified>;
    }

    /**
     * Search for a episode
     *
     * GET /v1/search?type=episode
     * https://developer.spotify.com/web-api/search-item/
     */
    interface EpisodeSearchResponse {
        episodes: PagingObject<EpisodeObjectSimplified>;
    }

    /**
     * Search for artists/albums/tracks/playlists/show/episode
     *
     * GET /v1/search
     * https://developer.spotify.com/web-api/search-item/
     */
    interface SearchResponse
        extends Partial<ArtistSearchResponse>,
            Partial<AlbumSearchResponse>,
            Partial<TrackSearchResponse>,
            Partial<PlaylistSearchResponse>,
            Partial<ShowSearchResponse>,
            Partial<EpisodeSearchResponse> {}

    /**
     * Get an Show
     *
     * GET /v1/shows/{id}
     * https://developer.spotify.com/web-api/get-show/
     */
    type SingleShowResponse = ShowObject;

    /**
     * Get Several Shows
     *
     * GET /v1/shows?ids={ids}
     * https://developer.spotify.com/documentation/web-api/reference/shows/get-several-shows/
     */
    interface MultipleShowsResponse {
        shows: ShowObjectSimplified[];
    }

    /**
     * Get an Shows’s Episodes
     *
     * GET /v1/shows/{id}/episodes
     * https://developer.spotify.com/documentation/web-api/reference/shows/get-shows-episodes/
     */
    type ShowEpisodesResponse = PagingObject<EpisodeObjectSimplified>;

    /**
     * Get an Episode
     *
     * GET /v1/episodes/{id}
     * https://developer.spotify.com/documentation/web-api/reference/episodes/get-an-episode/
     */
    type SingleEpisodeResponse = EpisodeObject;

    /**
     * Get Several Episodes
     *
     * GET /v1/episodes?ids={ids}
     * https://developer.spotify.com/documentation/web-api/reference/episodes/get-several-episodes/
     */
    interface MultipleEpisodesResponse {
        episodes: EpisodeObject[];
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
        tracks: TrackObjectFull[];
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
    interface ChangePlaylistDetailsResponse extends VoidResponse {}
    /**
     * Change a Playlist’s Details
     *
     * PUT /v1/users/{user_id}/playlists/{playlist_id}
     * https://developer.spotify.com/web-api/change-playlist-details/
     * @deprecated Use `ChangePlaylistDetailsResponse` instead
     */
    interface ChangePlaylistDetailsReponse extends ChangePlaylistDetailsResponse {}

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
    interface ReplacePlaylistTracksResponse extends PlaylistSnapshotResponse {}

    /**
     * Upload a Custom Playlist Cover Image
     *
     * PUT /v1/users/{user_id}/playlists/{playlist_id}/images
     * https://developer.spotify.com/web-api/upload-a-custom-playlist-cover-image/
     */
    interface UploadCustomPlaylistCoverImageResponse extends VoidResponse {}
    /**
     * Upload a Custom Playlist Cover Image
     *
     * PUT /v1/users/{user_id}/playlists/{playlist_id}/images
     * https://developer.spotify.com/web-api/upload-a-custom-playlist-cover-image/
     * @deprecated Use `UploadCustomPlaylistCoverImageResponse` instead
     */
    interface UploadCustomPlaylistCoverImageReponse extends UploadCustomPlaylistCoverImageResponse {}

    /**
     * Check if Users Follow a Playlist
     *
     * GET /v1/users/{user_id}/playlists/{playlist_id}/followers/contains
     * https://developer.spotify.com/web-api/check-user-following-playlist/
     */
    interface UsersFollowPlaylistResponse extends Array<boolean> {}
    /**
     * Check if Users Follow a Playlist
     *
     * GET /v1/users/{user_id}/playlists/{playlist_id}/followers/contains
     * https://developer.spotify.com/web-api/check-user-following-playlist/
     * @deprecated Use `UsersFollowPlaylistResponse` instead
     */
    interface UsersFollowPlaylistReponse extends UsersFollowPlaylistResponse {}

    interface UserDevicesResponse {
        devices: UserDevice[];
    }

    interface CurrentPlaybackResponse extends CurrentlyPlayingObject, PlaybackObject {}

    interface CurrentlyPlayingResponse extends CurrentlyPlayingObject {}

    //
    // Objects from the Object Models of the Spotify Web Api, ordered alphabetically.
    // [Object Model](https://developer.spotify.com/web-api/object-model)
    //

    /**
     * Full Album Object
     * [album object (full)](https://developer.spotify.com/web-api/object-model/#album-object-simplified)
     */
    interface AlbumObjectFull extends AlbumObjectSimplified {
        /**
         * The copyright statements of the album.
         */
        copyrights: CopyrightObject[];
        /**
         * Known external IDs for the album.
         */
        external_ids: ExternalIdObject;
        /**
         * A list of the genres used to classify the album.
         * For example: `"Prog Rock"` , `"Post-Grunge"`. (If not yet classified, the array is empty.)
         */
        genres: string[];
        /**
         * The label for the album.
         */
        label: string;
        /**
         * The popularity of the album. The value will be between `0` and `100`, with `100` being the most popular.
         * The popularity is calculated from the popularity of the album’s individual tracks;
         */
        popularity: number;
        /**
         * The tracks of the album.
         */
        tracks: PagingObject<TrackObjectSimplified>;
    }

    /**
     * Simplified Album Object
     * [album object (simplified)](https://developer.spotify.com/web-api/object-model/#album-object-simplified)
     */
    interface AlbumObjectSimplified extends ContextObject {
        /**
         * The field is present when getting an artist’s albums.
         * Possible values are “album”, “single”, “compilation”, “appears_on”.
         * Compare to album_type this field represents relationship between the artist and the album.
         */
        album_group?: 'album' | 'single' | 'compilation' | 'appears_on' | undefined;
        /**
         * The type of the album: one of “album”, “single”, or “compilation”.
         */
        album_type: 'album' | 'single' | 'compilation';
        /**
         * The artists of the album.
         * Each artist object includes a link in href to more detailed information about the artist.
         */
        artists: ArtistObjectSimplified[];
        /**
         * The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
         * Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
         */
        available_markets?: string[] | undefined;
        /**
         * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the album.
         */
        id: string;
        /**
         * The cover art for the album in various sizes, widest first.
         */
        images: ImageObject[];
        /**
         * The name of the album. In case of an album takedown, the value may be an empty string.
         */
        name: string;
        /**
         * The date the album was first released, for example `1981`.
         * Depending on the precision, it might be shown as `1981-12` or `1981-12-15`.
         */
        release_date: string;
        /**
         * The precision with which release_date value is known: `year`, `month`, or `day`.
         */
        release_date_precision: 'year' | 'month' | 'day';
        /**
         * Part of the response when [Track Relinking](https://developer.spotify.com/documentation/general/guides/track-relinking-guide/) is applied,
         * the original track is not available in the given market, and Spotify did not have any tracks to relink it with.
         * The track response will still contain metadata for the original track,
         * and a restrictions object containing the reason why the track is not available: `"restrictions" : {"reason" : "market"}`
         */
        restrictions?: RestrictionsObject | undefined;
        type: 'album';
        /**
         * The number of tracks in the album.
         */
        total_tracks: number;
    }

    /**
     * Full Artist Object
     * [artist object (full)](https://developer.spotify.com/web-api/object-model/)
     */
    interface ArtistObjectFull extends ArtistObjectSimplified {
        /**
         * Information about the followers of the artist.
         */
        followers: FollowersObject;
        /**
         * A list of the genres the artist is associated with.
         * For example: `"Prog Rock"` , `"Post-Grunge"`.
         * (If not yet classified, the array is empty.)
         */
        genres: string[];
        /**
         * Images of the artist in various sizes, widest first.
         */
        images: ImageObject[];
        /**
         * The popularity of the artist. The value will be between `0` and `100`, with `100` being the most popular.
         * The artist’s popularity is calculated from the popularity of all the artist’s tracks.
         */
        popularity: number;
    }

    /**
     * Simplified Artist Object
     * [artist object (simplified)](https://developer.spotify.com/web-api/object-model/)
     */
    interface ArtistObjectSimplified extends ContextObject {
        /**
         * The name of the artist.
         */
        name: string;
        /**
         * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the artist.
         */
        id: string;
        type: 'artist';
    }

    /**
     * Audio Features Object
     * https://developer.spotify.com/web-api/object-model/#audio-features-object
     */
    interface AudioFeaturesObject {
        acousticness: number;
        analysis_url: string;
        danceability: number;
        duration_ms: number;
        energy: number;
        id: string;
        instrumentalness: number;
        key: number;
        liveness: number;
        loudness: number;
        mode: number;
        speechiness: number;
        tempo: number;
        time_signature: number;
        track_href: string;
        type: 'audio_features';
        uri: string;
        valence: number;
    }

    /**
     * Audio Analysis Object
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-analysis
     */
    interface AudioAnalysisObject {
        meta: AudioAnalysisMeta;
        track: AudioAnalysisTrack;
        bars: AudioAnalysisIntervalObject[];
        beats: AudioAnalysisIntervalObject[];
        sections: AudioAnalysisSection[];
        segments: AudioAnalysisSegment[];
        tatums: AudioAnalysisIntervalObject[];
    }

    interface AudioAnalysisMeta {
        analyzer_version: string;
        platform: string;
        detailed_status: string;
        status_code: number;
        timestamp: number;
        analysis_time: number;
        input_process: string;
    }

    interface AudioAnalysisTrack {
        num_samples: number;
        duration: number;
        sample_md5: string;
        offset_seconds: number;
        window_seconds: number;
        analysis_sample_rate: number;
        analysis_channels: number;
        end_of_fade_in: number;
        start_of_fade_out: number;
        loudness: number;
        tempo: number;
        tempo_confidence: number;
        time_signature: number;
        time_signature_confidence: number;
        key: number;
        key_confidence: number;
        mode: number;
        mode_confidence: number;
        codestring: string;
        code_version: number;
        echoprintstring: string;
        echoprint_version: number;
        synchstring: string;
        synch_version: number;
        rhythmstring: string;
        rhythm_version: number;
    }

    interface AudioAnalysisIntervalObject {
        start: number;
        duration: number;
        confidence: number;
    }

    interface AudioAnalysisSection {
        start: number;
        duration: number;
        confidence: number;
        loudness: number;
        tempo: number;
        tempo_confidence: number;
        key: number;
        key_confidence: number;
        mode: number;
        mode_confidence: number;
        time_signature: number;
        time_signature_confidence: number;
    }

    interface AudioAnalysisSegment {
        start: number;
        duration: number;
        confidence: number;
        loudness_start: number;
        loudness_max: number;
        loudness_max_time: number;
        loudness_end: number;
        pitches: number[];
        timbre: number[];
    }

    /**
     * Category Object
     * [category object](https://developer.spotify.com/web-api/object-model/)
     */
    interface CategoryObject {
        href: string;
        icons: ImageObject[];
        id: string;
        name: string;
    }

    /**
     * Copyright object
     * [copyright object](https://developer.spotify.com/web-api/object-model/)
     */
    interface CopyrightObject {
        text: string;
        type: 'C' | 'P';
    }

    /**
     * Cursor object
     * [cursor object](https://developer.spotify.com/web-api/object-model/)
     */
    interface CursorObject {
        after: string;
        before?: string | undefined;
    }

    /**
     * Error object
     * [error object](https://developer.spotify.com/web-api/object-model/)
     */
    interface ErrorObject {
        /**
         * The HTTP status code (also returned in the response header;
         * see [Response Status Codes](https://developer.spotify.com/documentation/web-api/#response-status-codes) for more information).
         */
        status: number;
        /**
         * A short description of the cause of the error.
         */
        message: string;
    }

    /**
     * External Id object
     * [](https://developer.spotify.com/web-api/object-model/)
     *
     * Note that there might be other types available, it couldn't be found in the docs.
     */
    interface ExternalIdObject {
        isrc?: string | undefined;
        ean?: string | undefined;
        upc?: string | undefined;
    }

    /**
     * External Url Object
     * [](https://developer.spotify.com/web-api/object-model/)
     *
     * Note that there might be other types available, it couldn't be found in the docs.
     */
    interface ExternalUrlObject {
        spotify: string;
    }

    /**
     * Followers Object
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface FollowersObject {
        /**
         * A link to the Web API endpoint providing full details of the followers; `null` if not available.
         * Please note that this will always be set to `null`, as the Web API does not support it at the moment.
         */
        href: null;
        /**
         * The total number of followers.
         */
        total: number;
    }

    /**
     * Image Object
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface ImageObject {
        /**
         * The image height in pixels. If unknown: `null` or not returned.
         */
        height?: number | undefined;
        /**
         * The source URL of the image.
         */
        url: string;
        /**
         * The image width in pixels. If unknown: null or not returned.
         */
        width?: number | undefined;
    }

    /**
     * Paging Object wrapper used for retrieving collections from the Spotify API.
     * [](https://developer.spotify.com/web-api/object-model/#paging-object)
     */
    interface PagingObject<T> {
        href: string;
        items: T[];
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
    }

    /**
     * Cursor Based Paging Object wrappers used for retrieving collections from the Spotify API.
     * [](https://developer.spotify.com/web-api/object-model/#cursor-based-paging-object)
     */
    interface CursorBasedPagingObject<T> {
        href: string;
        items: T[];
        limit: number;
        next: string | null;
        cursors: CursorObject;
        total?: number | undefined;
    }

    /**
     * Base Playlist Object. Does not in itself exist in Spotify Web Api,
     * but needs to be made since the tracks types vary in the Full and Simplified versions.
     */
    interface PlaylistBaseObject extends ContextObject {
        /**
         * Returns `true` if context is not search and the owner allows other users to modify the playlist.
         * Otherwise returns `false`.
         */
        collaborative: boolean;
        /**
         * The playlist description. Only returned for modified, verified playlists, otherwise null.
         */
        description: string | null;
        /**
         * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the playlist.
         */
        id: string;
        /**
         * Images for the playlist. The array may be empty or contain up to three images.
         * The images are returned by size in descending order.
         * See [Working with Playlists](https://developer.spotify.com/documentation/general/guides/working-with-playlists/).
         * Note: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day.
         */
        images: ImageObject[];
        /**
         * The name of the playlist.
         */
        name: string;
        /**
         * The user who owns the playlist.
         */
        owner: UserObjectPublic;
        /**
         * The playlist’s public/private status:
         * `true` the playlist is public,
         * `false` the playlist is private,
         * or `null` the playlist status is not relevant.
         */
        public: boolean | null;
        /**
         * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version:
         * see [Remove tracks from a playlist](https://developer.spotify.com/documentation/web-api/reference/playlists/remove-tracks-playlist/).
         */
        snapshot_id: string;
        type: 'playlist';
    }

    /**
     * Playlist Object Full
     * [](https://developer.spotify.com/web-api/object-model/#playlist-object-full)
     */
    interface PlaylistObjectFull extends PlaylistBaseObject {
        /**
         * Information about the followers of the playlist.
         */
        followers: FollowersObject;
        /**
         * Information about the tracks of the playlist.
         */
        tracks: PagingObject<PlaylistTrackObject>;
    }

    /**
     * Playlist Object Simplified
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface PlaylistObjectSimplified extends PlaylistBaseObject {
        tracks: {
            href: string;
            total: number;
        };
    }

    /**
     * The Track Object in Playlists
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface PlaylistTrackObject {
        added_at: string;
        added_by: UserObjectPublic;
        is_local: boolean;
        track: TrackObjectFull | null;
    }

    /**
     * Recommendations Object
     * [](https://developer.spotify.com/web-api/object-model/#recommendations-object)
     */
    interface RecommendationsObject {
        seeds: RecommendationsSeedObject[];
        tracks: RecommendationTrackObject[];
    }
    
    /**
     * Recommendation Track Object
     * Uses the same object structure as Full Track Object, but with `album.album_type` in caps.
     */
    interface RecommendationTrackObject extends Omit<TrackObjectFull, "album"> {
        album: RecommendationAlbumObject;
    }

    /**
     * Recommendation Album Object
     * Uses the same object structure as Simple Album Object, but with `album_type` in caps.
     */
    interface RecommendationAlbumObject extends Omit<AlbumObjectSimplified, "album_type"> {
        /**
         * The type of the album: one of “ALBUM”, “SINGLE”, or “COMPILATION”.
         * Note that this differs from the types returned by all other spotify APIs by being in all caps.
         */
        album_type: 'ALBUM' | 'SINGLE' | 'COMPILATION';
    }

    /**
     * Recommendations Seed Object
     * [](https://developer.spotify.com/web-api/object-model/#recommendations-seed-object)
     */
    interface RecommendationsSeedObject {
        afterFilteringSize: number;
        afterRelinkingSize: number;
        href: string;
        id: string;
        initialPoolSize: number;
        type: 'artist' | 'track' | 'genre';
    }

    /**
     * Saved Track Object in Playlists
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface SavedTrackObject {
        added_at: string;
        track: TrackObjectFull;
    }

    /**
     * Saved Track Object in Playlists
     * [](https://developer.spotify.com/web-api/object-model/)
     */
    interface SavedAlbumObject {
        added_at: string;
        album: AlbumObjectFull;
    }

    /**
     * Saved Episode Object
     * [saved episode object](https://developer.spotify.com/documentation/web-api/reference/#object-savedepisodeobject)
     */
    interface SavedEpisodeObject {
        /**
         * The date and time the episode was saved.
         */
        added_at: string;
        /**
         * Information about the episode.
         */
        episode: EpisodeObject;
    }

    /**
     * Saved Show Object
     * [saved show object](https://developer.spotify.com/documentation/web-api/reference/object-model/#saved-show-object)
     */
    interface SavedShowObject {
        /**
         * The date and time the show was saved.
         */
        added_at: string;
        /**
         * Information about the show.
         */
        show: ShowObjectSimplified;
    }

    /**
     * Full Track Object
     * [track object (full)](https://developer.spotify.com/web-api/object-model/#track-object-full)
     */
    interface TrackObjectFull extends TrackObjectSimplified {
        /**
         * The album on which the track appears.
         */
        album: AlbumObjectSimplified;
        /**
         * Known external IDs for the track.
         */
        external_ids: ExternalIdObject;
        /**
         * The popularity of the track. The value will be between `0` and `100`, with `100` being the most popular.
         * The popularity of a track is a value between `0` and `100`, with `100` being the most popular.
         * The popularity is calculated by algorithm and is based, in the most part,
         * on the total number of plays the track has had and how recent those plays are.
         */
        popularity: number;
        /**
         * Whether or not the track is from a local file.
         */
        is_local?: boolean | undefined;
    }

    /**
     * Simplified Track Object
     * [track object (simplified)](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
     */
    interface TrackObjectSimplified {
        /**
         * The artists who performed the track.
         */
        artists: ArtistObjectSimplified[];
        /**
         * A list of the countries in which the track can be played,
         * identified by their [ISO 3166-1 alpha-2 code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
         */
        available_markets?: string[] | undefined;
        /**
         * The disc number (usually `1` unless the album consists of more than one disc).
         */
        disc_number: number;
        /**
         * The track length in milliseconds.
         */
        duration_ms: number;
        /**
         * Whether or not the track has explicit lyrics (`true` = yes it does; `false` = no it does not OR unknown).
         */
        explicit: boolean;
        /**
         * Known external URLs for this track.
         */
        external_urls: ExternalUrlObject;
        /**
         * A link to the Web API endpoint providing full details of the track.
         */
        href: string;
        /**
         * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the track.
         */
        id: string;
        /**
         * Part of the response when [Track Relinking](https://developer.spotify.com/documentation/general/guides/track-relinking-guide/) is applied.
         * If `true`, the track is playable in the given market. Otherwise, `false`.
         */
        is_playable?: boolean | undefined;
        /**
         * Part of the response when [Track Relinking](https://developer.spotify.com/documentation/general/guides/track-relinking-guide/) is applied,
         * and the requested track has been replaced with different track.
         * The track in the `linked_from` object contains information about the originally requested track.
         */
        linked_from?: TrackLinkObject | undefined;
        /**
         * Part of the response when [Track Relinking](https://developer.spotify.com/documentation/general/guides/track-relinking-guide/) is applied,
         * the original track is not available in the given market, and Spotify did not have any tracks to relink it with.
         * The track response will still contain metadata for the original track, and a restrictions object containing the reason
         * why the track is not available: `"restrictions" : {"reason" : "market"}`.
         */
        restrictions?: RestrictionsObject | undefined;
        /**
         * The name of the track.
         */
        name: string;
        /**
         * A link to a 30 second preview (MP3 format) of the track. Can be null
         */
        preview_url: string | null;
        /**
         * The number of the track. If an album has several discs, the track number is the number on the specified disc.
         */
        track_number: number;
        /**
         * The object type: “track”.
         */
        type: 'track';
        /**
         * The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the track.
         */
        uri: string;
    }

    /**
     * Track Link Object
     * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
     */
    interface TrackLinkObject {
        external_urls: ExternalUrlObject;
        href: string;
        id: string;
        type: 'track';
        uri: string;
    }

    /**
     * Episode Object
     * [episode object](https://developer.spotify.com/documentation/web-api/reference/#object-episodeobject)
     */
    interface EpisodeObject extends EpisodeObjectSimplified {
        /**
         * The show on which the episode belongs.
         */
        show: ShowObjectSimplified;
        /**
         * The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the episode.
         */
        uri: string;
    }

    interface EpisodeObjectFull extends EpisodeObject {}

    /**
     * Simplified Episode Object
     * [episode object (simplified)](https://developer.spotify.com/documentation/web-api/reference/object-model/#episode-object-simplified)
     */
    interface EpisodeObjectSimplified extends ContextObject {
        /**
         * A URL to a 30 second preview (MP3 format) of the episode. null if not available.
         */
        audio_preview_url: string | null;
        /**
         * A description of the episode.
         */
        description: string;
        /**
         * The episode length in milliseconds.
         */
        duration_ms: number;
        /**
         * Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
         */
        explicit: boolean;
        /**
         * A description of the episode. This field may contain HTML tags.
         */
        html_description: string;
        /**
         * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the episode.
         */
        id: string;
        /**
         * The cover art for the episode in various sizes, widest first.
         */
        images: ImageObject[];
        /**
         * True if the episode is hosted outside of Spotify’s CDN.
         */
        is_externally_hosted: boolean;
        /**
         * True if the episode is playable in the given market. Otherwise false.
         */
        is_playable: boolean;
        /**
         * The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
         * @deprecated Note: This field is deprecated and might be removed in the future. Please use the languages field instead.
         */
        language: string;
        /**
         * A list of the languages used in the episode, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
         * Optional because sometimes only the deprecated language field is set and this one isn't set at all.
         */
        languages?: string[] | undefined;
        /**
         * The name of the episode.
         */
        name: string;
        /**
         * The date the episode was first released, for example "1981-12-15". Depending on the precision, it might be shown as "1981" or "1981-12".
         */
        release_date: string;
        /**
         * The precision with which release_date value is known: "year", "month", or "day".
         */
        release_date_precision: string;
        /**
         * The user’s most recent position in the episode. Set if the supplied access token is a user token and has the scope user-read-playback-position.
         */
        resume_point?: ResumePointObject | undefined;
        type: 'episode';
    }

    /**
     * Resume Point Object
     * [resume point object](https://developer.spotify.com/documentation/web-api/reference/object-model/#resume-point-object)
     */
    interface ResumePointObject {
        /**
         * Whether or not the episode has been fully played by the user.
         */
        fully_played: boolean;
        /**
         * The user’s most recent position in the episode in milliseconds.
         */
        resume_position_ms: number;
    }

    /**
     * Show Object
     * [show object](https://developer.spotify.com/documentation/web-api/reference/#object-showobject)
     */
    interface ShowObject extends ShowObjectSimplified {
        episodes: PagingObject<EpisodeObjectSimplified>;
        external_urls: ExternalUrlObject;
    }

    interface ShowObjectFull extends ShowObject {}

    /**
     * Simplified Show Object
     * [show object (simplified)](https://developer.spotify.com/documentation/web-api/reference/object-model/#show-object-simplified)
     */
    interface ShowObjectSimplified extends ContextObject {
        /**
         * A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2 code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
         */
        available_markets: string[];
        /**
         * The copyright statements of the show.
         */
        copyrights: CopyrightObject[];
        /**
         * A description of the show.
         */
        description: string;
        /**
         * A description of the show. This field may contain HTML tags.
         */
        html_description: string;
        /**
         * Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).
         */
        explicit: boolean;
        /**
         * The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) for the show.
         */
        id: string;
        /**
         * The cover art for the show in various sizes, widest first.
         */
        images: ImageObject[];
        /**
         * True if all of the show’s episodes are hosted outside of Spotify’s CDN. This field might be null in some cases.
         */
        is_externally_hosted: boolean | null;
        /**
         * A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
         */
        languages: string[];
        /**
         * The media type of the show.
         */
        media_type: string;
        /**
         * The name of the show.
         */
        name: string;
        /**
         * The publisher of the show.
         */
        publisher: string;
        /**
         * The object type: “show”.
         */
        type: 'show';
        // This is found in https://developer.spotify.com/documentation/web-api/reference/shows/get-a-show/ but not in
        // https://developer.spotify.com/documentation/web-api/reference/object-model/#show-object-full.
        // Also it is not always sent, so it is marked optional here.
        /**
         * Total number of episodes in the show.
         */
        total_episodes?: number | undefined;
    }

    /**
     * User Object (Private)
     * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
     */
    interface UserObjectPrivate extends UserObjectPublic {
        birthdate: string;
        country: string;
        email: string;
        product: string;
    }

    /**
     * User Object (Public)
     * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
     */
    interface UserObjectPublic {
        display_name?: string | undefined;
        external_urls: ExternalUrlObject;
        followers?: FollowersObject | undefined;
        href: string;
        id: string;
        images?: ImageObject[] | undefined;
        type: 'user';
        uri: string;
    }

    /**
     * Context Object
     * [](https://developer.spotify.com/web-api/object-model/#context-object)
     */
    interface ContextObject {
        /**
         * The object type.
         */
        type: 'artist' | 'playlist' | 'album' | 'show' | 'episode';
        /**
         * A link to the Web API endpoint providing full details.
         */
        href: string;
        /**
         * Known external URLs.
         */
        external_urls: ExternalUrlObject;
        /**
         * The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
         */
        uri: string;
    }

    /**
     * Play History Object
     * [](https://developer.spotify.com/web-api/web-api-personalization-endpoints/get-recently-played/#play-history-object)
     */
    interface PlayHistoryObject {
        track: TrackObjectFull;
        played_at: string;
        context: ContextObject;
    }

    interface PlaybackObject {
        shuffle_state: boolean;
        repeat_state: 'off' | 'track' | 'context';
    }

    interface CurrentlyPlayingObject {
        timestamp: number;
        device: UserDevice;
        actions: ActionsObject;
        progress_ms: number | null;
        is_playing: boolean;
        item: TrackObjectFull | EpisodeObject | null;
        context: ContextObject | null;
        currently_playing_type: 'track' | 'episode' | 'ad' | 'unknown';
    }

    interface UserDevice {
        id: string | null;
        is_active: boolean;
        is_restricted: boolean;
        name: string;
        type: string;
        volume_percent: number | null;
    }

    interface ActionsObject {
        disallows: DisallowsObject;
    }

    interface DisallowsObject {
        interrupting_playback?: boolean | undefined;
        pausing?: boolean | undefined;
        resuming?: boolean | undefined;
        seeking?: boolean | undefined;
        skipping_next?: boolean | undefined;
        skipping_prev?: boolean | undefined;
        toggling_repeat_context?: boolean | undefined;
        toggling_repeat_track?: boolean | undefined;
        toggling_shuffle?: boolean | undefined;
        transferring_playback?: boolean | undefined;
    }
}
