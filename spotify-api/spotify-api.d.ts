// Type definitions for The Spotify Web API v1.0
// Project: https://developer.spotify.com/web-api/
// Definitions by: Niels Kristian Hansen Skovmand <https://github.com/skovmand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Release comments:
// -----------------
// TrackObjects and AlbumObjects is specified in the docs as always having the available_markets property, 
// but when it is sent in https://developer.spotify.com/web-api/console/get-current-user-saved-tracks
// the available_markets are missing. Therefore it is marked as optional in this source code.


declare module SpotifyApi {

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
     * GET /v1/albums/{id}
     */
    interface SingleAlbumResponse extends AlbumObjectFull {}

    /**
     * Get Several Albums   
     * GET /v1/albums
     */
    interface MultipleAlbumsResponse {
        albums: AlbumObjectFull[]
    }

    /**
     * Get an Album’s Tracks   
     * GET /v1/albums/{id}/tracks
     */
    interface AlbumTracksResponse extends PagingObject<TrackObjectSimplified> {}

    /**
     * Get an Artist   
     * GET /v1/artists/{id}
     */
    interface SingleArtistResponse extends ArtistObjectFull {}

    /**
     * Get Several Artists   
     * GET /v1/artists
     */
    interface MultipleArtistsResponse {
        artists: ArtistObjectFull[]
    }

    /**
     * Get an Artist’s Albums   
     * GET /v1/artists/{id}/albums
     */
    interface ArtistsAlbumsResponse extends PagingObject<AlbumObjectSimplified> {}

    /**
     * Get an Artist’s Top Tracks   
     * GET /v1/artists/{id}/top-tracks
     */
    interface ArtistsTopTracksResponse {
        tracks: TrackObjectFull[]
    }

    /**
     * Get an Artist’s Related Artists   
     * GET /v1/artists/{id}/related-artists
     */
    interface ArtistsRelatedArtistsResponse {
        artists: ArtistObjectFull[]
    }

    /**
     * Get a list of featured playlists   
     * GET /v1/browse/featured-playlists
     */
    interface ListOfFeaturedPlaylistsResponse {
        message?: string,
        playlists: PagingObject<PlaylistObjectSimplified>
    } 

    /**
     * Get a list of new releases   
     * GET /v1/browse/new-releases
     */
    interface ListOfNewReleasesResponse {
        message?: string,
        albums: PagingObject<AlbumObjectSimplified>
    }

    /**
     * Get a list of categories   
     * GET /v1/browse/categories
     */
    interface MultipleCategoriesResponse {
        categories: PagingObject<CategoryObject>
    }

    /**
     * Get a category   
     * GET /v1/browse/categories/{category_id}
     */
    interface SingleCategoryResponse extends CategoryObject {}

    /**
     * Get a categorys playlists   
     * GET /v1/browse/categories/{id}/playlists
     */
    interface CategoryPlaylistsReponse {
        playlists: PagingObject<PlaylistObjectSimplified>
    }

    /**
     * Get Current User’s Profile   
     * GET /v1/me
     */
    interface CurrentUsersProfileResponse extends UserObjectPrivate {}

    /**
     * Get User’s Followed Artists   
     * GET /v1/me/following?type=artist
     */
    interface UsersFollowedArtistsResponse {
        artists: CursorBasedPagingObject<ArtistObjectFull>
    }

    /**
     * Follow artists or users   
     * PUT /v1/me/following
     */
    interface FollowArtistsOrUsersResponse extends VoidResponse {}

    /**
     * Unfollow artists or users   
     * DELETE /v1/me/following
     */
    interface UnfollowArtistsOrUsersResponse extends VoidResponse {}

    /**
     * Check if User Follows Users or Artists
     * GET /v1/me/following/contains
     */
    interface UserFollowsUsersOrArtistsResponse extends Array<boolean> {}

    /**
     * Follow a Playlist
     * PUT /v1/users/{owner_id}/playlists/{playlist_id}/followers
     */
    interface FollowPlaylistReponse extends VoidResponse {}

    /**
     * Unfollow a Playlist
     * DELETE /v1/users/{owner_id}/playlists/{playlist_id}/followers
     */
    interface UnfollowPlaylistReponse extends VoidResponse {}

    /**
     * Save tracks for user
     * PUT /v1/me/tracks?ids={ids}
     */
    interface SaveTracksForUserResponse extends VoidResponse {}

    /**
     * Get user's saved tracks   
     * GET /v1/me/tracks
     */
    interface UsersSavedTracksResponse extends PagingObject<SavedTrackObject> {}

    /**
     * Remove User’s Saved Tracks
     * DELETE /v1/me/tracks?ids={ids}
     */
    interface RemoveUsersSavedTracksResponse extends VoidResponse {}

    /**
     * Check User’s Saved Tracks    
     * GET /v1/me/tracks/contains
     */
    interface CheckUsersSavedTracksResponse extends Array<boolean> {}
    
    /**
     * Save albums for user   
     * PUT /v1/me/albums?ids={ids}
     */
    interface SaveAlbumsForUserResponse extends VoidResponse {}

    /**
     * Get user's saved albums   
     * GET /v1/me/albums
     */
    interface UsersSavedAlbumsResponse extends PagingObject<AlbumObjectFull> {}

    /**
     * Remove Albums for Current User   
     * DELETE /v1/me/albums?ids={ids}
     */
    interface RemoveAlbumsForUserResponse extends VoidResponse {}

    /**
     * Check user's saved albums   
     * DELETE /v1/me/albums/contains?ids={ids}
     */
    interface CheckUserSavedAlbumsResponse extends Array<boolean> {}
    
    /**
     * Search for an album   
     * GET /v1/search?type=album
     */
    interface AlbumSearchResponse {
        albums: PagingObject<AlbumObjectSimplified>
    }

    /**
     * Search for an artist   
     * GET /v1/search?type=artist
     */
    interface ArtistSearchResponse {
        artists: PagingObject<ArtistObjectFull>
    }

    /**
     * Search for a playlist   
     * GET /v1/search?type=playlist
     */
    interface PlaylistSearchResponse {
        playlists: PagingObject<PlaylistObjectSimplified>
    }

    /**
     * Search for a track   
     * GET /v1/search?type=track
     */
    interface TrackSearchResponse {
        tracks: PagingObject<TrackObjectFull>
    }

    /**
     * Get a track   
     * GET /v1/tracks/{id}
     */
    interface SingleTrackResponse extends TrackObjectFull {}

    /**
     * Get multiple tracks   
     * GET /v1/tracks?ids={ids}
     */
    interface MultipleTracksResponse {
        tracks: TrackObjectFull[]
    }

    /**
     * Get user profile   
     * GET /v1/users/{user_id} 
     */
    interface UserProfileResponse extends UserObjectPublic {}

    /**
     * Get a list of a user's playlists   
     * GET /v1/users/{user_id}/playlists
     */
    interface ListOfUsersPlaylistsResponse extends PagingObject<PlaylistObjectSimplified> {}

    /**
     * Get a list of the current user's playlists
     * GET /v1/me/playlists
     */
    interface ListOfCurrentUsersPlaylistsResponse extends PagingObject<PlaylistObjectSimplified> {}

    /**
     * Get a playlist   	
     * GET /v1/users/{user_id}/playlists/{playlist_id}
     */
    interface SinglePlaylistResponse extends PlaylistObjectFull {}

    /**
     * Get a playlist's tracks   
     * GET /v1/users/{user_id}/playlists/{playlist_id}/tracks
     */
    interface PlaylistTrackResponse extends PagingObject<PlaylistTrackObject> {}

    /**
     * Create a Playlist   
     * POST /v1/users/{user_id}/playlists
     */
    interface CreatePlaylistResponse extends PlaylistObjectFull {}

    /**
     * Change a Playlist’s Details   
     * PUT /v1/users/{user_id}/playlists/{playlist_id}
     */
    interface ChangePlaylistDetailsReponse extends VoidResponse {}

    /**
     * Add Tracks to a Playlist   
     * POST /v1/users/{user_id}/playlists/{playlist_id}/tracks
     */
    interface AddTracksToPlaylistResponse extends PlaylistSnapshotResponse {}

    /**
     * Remove Tracks from a Playlist   
     * DELETE /v1/users/{user_id}/playlists/{playlist_id}/tracks
     */
    interface RemoveTracksFromPlaylistResponse extends PlaylistSnapshotResponse {}

    /**
     * Reorder a Playlist’s Tracks   
     * PUT /v1/users/{user_id}/playlists/{playlist_id}/tracks
     */
    interface ReorderPlaylistTracksResponse extends PlaylistSnapshotResponse {}

    /**
     * Replace a Playlist’s Tracks   
     * PUT /v1/users/{user_id}/playlists/{playlist_id}/tracks
     */
    interface ReplacePlaylistTracksResponse extends VoidResponse {}

    /**
     * Check if Users Follow a Playlist   
     * GET /v1/users/{user_id}/playlists/{playlist_id}/followers/contains
     */
    interface UsersFollowPlaylistReponse extends Array<boolean> {}



    //
    // Objects from the Object Models of the Spotify Web Api 
    // [Object Model](https://developer.spotify.com/web-api/object-model)
    //

    //
    // The Paging Object wrappers used for retrieving collections from the Spotify API.
    // 

    /**
     * BasePagingObject which the IPagingObject and ICursorBasedPagingObject extend from.
     * Doesn't exist in itself in the spotify API.
     */
    interface BasePagingObject <T>{
        href: string,
        items: T[],
        limit: number,
        next: string,
        total: number
    }

    /**
     * Paging Object wrapper used for retrieving collections from the Spotify API.
     * [](https://developer.spotify.com/web-api/object-model/#paging-object)
     */
    interface PagingObject<T> extends BasePagingObject<T> {
        previous: string,
        offset: number
    }

    /**
     * Cursor Based Paging Object wrappers used for retrieving collections from the Spotify API.
     * [](https://developer.spotify.com/web-api/object-model/#cursor-based-paging-object)
     */
    interface CursorBasedPagingObject<T> extends BasePagingObject<T> {
        cursors: CursorObject    
    }



    // 
    // All other objects of the Object Models from the Spotify Web Api, ordered alphabetically.
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
        type: string,
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
        type: string,
        uri: string    
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
        type: string
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
        type: string,
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
        type: string,
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
        type: string,
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
        type: string,
        uri: string
    }

}