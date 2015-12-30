// Type definitions for spotify-web-api-js
// Project: https://github.com/JMPerez/spotify-web-api-js
// Definitions by: Niels Kristian Hansen Skovmand <https://github.com/skovmand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../spotify-api/spotify-api.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts"/>

/**
 * Declare SpotifyWebApi variable, sincle that is the name of the function in spotify-web-api-js.
 */
declare var SpotifyWebApi: SpotifyWebApiJs.SpotifyWebApiJsStatic;

declare module SpotifyWebApiJs {
    /**
     * An optional callback that receives 2 parameters. The first
     * one is the error object (null if no error), and the second is the value if the request succeeded.
     */
    interface ResultsCallback<T> {
        (error: ErrorObject, value: T) : any
    }

    /**
     * Describes the regular error object: https://developer.spotify.com/web-api/user-guide/#error-details
     */
    interface ErrorObject {
        status: number,
        response: string,
        statusText: string
    }

    /**
     * Describes the static side of SpotifyApi. Get a new instance of the SpotifyApi.
     */
    interface SpotifyWebApiJsStatic {
        new(): SpotifyApiJs;
    }

    /**
     * Describes an instance of SpotifyApi
     */
    interface SpotifyApiJs {
        /**
         * Fetches a resource through a generic GET request.
         * 
         * @param url The URL to be fetched
         * @param callback An optional callback
         */
        getGeneric(url: string, callback?: ResultsCallback<Object>) : Promise<Object>;

        /**
         * Fetches information about the current user.
         * See [Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/)
         * 
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getMe(options?: Object, callback?: ResultsCallback<SpotifyApi.CurrentUsersProfileResponse>) : Promise<SpotifyApi.CurrentUsersProfileResponse>; 

        /**
         * Fetches current user's saved tracks.
         * See [Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/) 
         *
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getMySavedTracks(options?: Object, callback?: ResultsCallback<SpotifyApi.UsersSavedTracksResponse>) : Promise<SpotifyApi.UsersSavedTracksResponse>;
        
        /**
         * Adds a list of tracks to the current user's saved tracks.
         * See [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/)
         * 
         * @param trackIds The ids of the tracks. If you know their Spotify URI it is easy to find their track id (e.g. spotify:track:<here_is_the_track_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        addToMySavedTracks(trackIds: string[], options?: Object, callback?: ResultsCallback<SpotifyApi.SaveTracksForUserResponse>) : Promise<SpotifyApi.SaveTracksForUserResponse>;

        /**
         * Remove a list of tracks from the current user's saved tracks.
         * See [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/)
         * 
         * @param trackIds The ids of the tracks. If you know their Spotify URI it is easy to find their track id (e.g. spotify:track:<here_is_the_track_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        removeFromMySavedTracks(trackIds: string[], options?: Object, callback?: ResultsCallback<SpotifyApi.RemoveUsersSavedTracksResponse>) : Promise<SpotifyApi.RemoveUsersSavedTracksResponse>;

        /**
         * Checks if the current user's saved tracks contains a certain list of tracks.
         * See [Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param trackIds The ids of the tracks. If you know their Spotify URI it is easy to find their track id (e.g. spotify:track:<here_is_the_track_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        containsMySavedTracks(trackIds: string[], options?: Object, callback?: ResultsCallback<SpotifyApi.CheckUsersSavedTracksResponse>) : Promise<SpotifyApi.CheckUsersSavedTracksResponse>;
        
        /**
         * Adds the current user as a follower of one or more other Spotify users.
         * See [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userIds The ids of the users. If you know their Spotify URI it is easy to find their user id (e.g. spotify:user:<here_is_the_user_id>)
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded. one is the error object (null if no error), and the second is an empty value if the request succeeded.
         */
        followUsers(userIds: string[], callback?: ResultsCallback<SpotifyApi.FollowArtistsOrUsersResponse>) : Promise<SpotifyApi.FollowArtistsOrUsersResponse>;
        
        /**
         * Adds the current user as a follower of one or more artists.
         * See [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param artistIds The ids of the artists. If you know their Spotify URI it is easy to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded. one is the error object (null if no error), and the second is an empty value if the request succeeded.
         */
        followArtists(artistIds: string[], callback?: ResultsCallback<SpotifyApi.FollowArtistsOrUsersResponse>) : Promise<SpotifyApi.FollowArtistsOrUsersResponse>;

        /**
         * Add the current user as a follower of one playlist.
         * See [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param ownerId The id of the playlist owner. If you know the Spotify URI of the playlist, it is easy to find the owner's user id (e.g. spotify:user:<here_is_the_owner_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param options A JSON object with options that can be passed. For instance, whether you want the playlist to be followed privately ({public: false})
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        followPlaylist(ownerId: string, playlistId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.FollowPlaylistReponse>) : Promise<SpotifyApi.FollowPlaylistReponse>;

        /**
         * Removes the current user as a follower of one or more other Spotify users.
         * See [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userIds The ids of the users. If you know their Spotify URI it is easy to find their user id (e.g. spotify:user:<here_is_the_user_id>)
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        unfollowUsers(userIds: string[], callback?: ResultsCallback<SpotifyApi.UnfollowArtistsOrUsersResponse>) : Promise<SpotifyApi.UnfollowArtistsOrUsersResponse>;

        /**
         * Removes the current user as a follower of one or more artists.
         * See [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param artistIds The ids of the artists. If you know their Spotify URI it is easy to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        unfollowArtists(artistIds: string[], callback?: ResultsCallback<SpotifyApi.UnfollowArtistsOrUsersResponse>) : Promise<SpotifyApi.UnfollowArtistsOrUsersResponse>;

        /**
         * Remove the current user as a follower of one playlist.
         * See [Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param ownerId The id of the playlist owner. If you know the Spotify URI of the playlist, it is easy to find the owner's user id (e.g. spotify:user:<here_is_the_owner_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        unfollowPlaylist(ownerId: string, playlistId: string, callback?: ResultsCallback<SpotifyApi.UnfollowPlaylistReponse>) : Promise<SpotifyApi.UnfollowPlaylistReponse>;

        /**
         * Checks to see if the current user is following one or more other Spotify users.
         * See [Check if Current User Follows Users or Artists](https://developer.spotify.com/web-api/check-current-user-follows/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userIds The ids of the users. If you know their Spotify URI it is easy to find their user id (e.g. spotify:user:<here_is_the_user_id>)
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        isFollowingUsers(userIds: string[], callback?: ResultsCallback<SpotifyApi.UserFollowsUsersOrArtistsResponse>) : Promise<SpotifyApi.UserFollowsUsersOrArtistsResponse>
        
        /**
         * Checks to see if the current user is following one or more artists.
         * See [Check if Current User Follows](https://developer.spotify.com/web-api/check-current-user-follows/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param artistIds The ids of the artists. If you know their Spotify URI it is easy to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        isFollowingArtists(artistIds: string[], callback?: ResultsCallback<SpotifyApi.UserFollowsUsersOrArtistsResponse>) : Promise<SpotifyApi.UserFollowsUsersOrArtistsResponse>;

        /**
         * Check to see if one or more Spotify users are following a specified playlist.
         * See [Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param ownerId The id of the playlist owner. If you know the Spotify URI of the playlist, it is easy to find the owner's user id (e.g. spotify:user:<here_is_the_owner_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param userIds The ids of the users. If you know their Spotify URI it is easy to find their user id (e.g. spotify:user:<here_is_the_user_id>)
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        areFollowingPlaylist(ownerId: string, playlistId: string, userIds: string[], callback?: ResultsCallback<SpotifyApi.UsersFollowPlaylistReponse>) : Promise<SpotifyApi.UsersFollowPlaylistReponse>;
        
        /**
         * Get the current user's followed artists.
         * See [Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param options Options, being after and limit.
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getFollowedArtists(options?: Object, callback?: ResultsCallback<SpotifyApi.UsersFollowedArtistsResponse>) : Promise<SpotifyApi.UsersFollowedArtistsResponse>;

        /**
         * Fetches information about a specific user.
         * See [Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. If you know the Spotify URI it is easy to find the id (e.g. spotify:user:<here_is_the_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getUser(userId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.UserProfileResponse>) : Promise<SpotifyApi.UserProfileResponse>;
        
        /**
         * Fetches a list of the current user's playlists.
         * See [Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. If you know the Spotify URI it is easy to find the id (e.g. spotify:user:<here_is_the_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getUserPlaylists(userId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.ListOfUsersPlaylistsResponse>) : Promise<SpotifyApi.ListOfUsersPlaylistsResponse>;
        
        /**
         * Fetches a specific playlist.
         * See [Get a Playlist](https://developer.spotify.com/web-api/get-playlist/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. If you know the Spotify URI it is easy to find the user id (e.g. spotify:user:<here_is_the_user_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getPlaylist(userId: string, playlistId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.SinglePlaylistResponse>) : Promise<SpotifyApi.SinglePlaylistResponse>;

        /**
         * Fetches the tracks from a specific playlist.
         * See [Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. If you know the Spotify URI it is easy to find the user id (e.g. spotify:user:<here_is_the_user_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getPlaylistTracks(userId: string, playlistId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.PlaylistTrackResponse>) : Promise<SpotifyApi.PlaylistTrackResponse>;

        /**
         * Creates a playlist and stores it in the current user's library.
         * See [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. You may want to user the "getMe" function to find out the id of the current logged in user
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        createPlaylist(userId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.CreatePlaylistResponse>) : Promise<SpotifyApi.CreatePlaylistResponse>;
        
        /**
         * Change a playlist's name and public/private state
         * See [Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. You may want to user the "getMe" function to find out the id of the current logged in user
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param data A JSON object with the data to update. E.g. {name: 'A new name', public: true}
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        changePlaylistDetails(userId: string, playlistId: string, data: Object, callback?: ResultsCallback<SpotifyApi.ChangePlaylistDetailsReponse>) : Promise<SpotifyApi.ChangePlaylistDetailsReponse>;
        
        /**
         * Add tracks to a playlist.
         * See [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. If you know the Spotify URI it is easy to find the user id (e.g. spotify:user:<here_is_the_user_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param uris An array of Spotify URIs for the tracks
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        addTracksToPlaylist(userId: string, playlistId: string, uris: string[], options?: Object, callback?: ResultsCallback<SpotifyApi.AddTracksToPlaylistResponse>) : Promise<SpotifyApi.AddTracksToPlaylistResponse>;
        
        /**
         * Replace the tracks of a playlist
         * See [Replace a Playlist's Tracks](https://developer.spotify.com/web-api/replace-playlists-tracks/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. If you know the Spotify URI it is easy to find the user id (e.g. spotify:user:<here_is_the_user_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param uris An array of Spotify URIs for the tracks
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        replaceTracksInPlaylist(userId: string, playlistId: string, uris: string[], callback?: ResultsCallback<SpotifyApi.ReplacePlaylistTracksResponse>) : Promise<SpotifyApi.ReplacePlaylistTracksResponse>;

        /**
         * Reorder tracks in a playlist
         * See [Reorder a Playlist’s Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. If you know the Spotify URI it is easy to find the user id (e.g. spotify:user:<here_is_the_user_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param rangeStart The position of the first track to be reordered.
         * @param insertBefore The position where the tracks should be inserted. To reorder the tracks to the end of the playlist, simply set insert_before to the position after the last track.
         * @param options An object with optional parameters (range_length, snapshot_id)
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        reorderTracksInPlaylist(userId: string, playlistId: string, rangeStart: number, insertBefore: number, options?: Object, callback?: ResultsCallback<SpotifyApi.ReorderPlaylistTracksResponse>) : Promise<SpotifyApi.ReorderPlaylistTracksResponse>;

        /**
         * Remove tracks from a playlist
         * See [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. If you know the Spotify URI it is easy to find the user id (e.g. spotify:user:<here_is_the_user_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param uris An array of tracks to be removed. Each element of the array can be either a string, in which case it is treated as a URI, or an object containing the properties `uri` (which is a string) and `positions` (which is an array of integers).
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        removeTracksFromPlaylist(userId: string, playlistId: string, uris: Object[], callback?: ResultsCallback<SpotifyApi.RemoveTracksFromPlaylistResponse>) : Promise<SpotifyApi.RemoveTracksFromPlaylistResponse>;

        /**
         * Remove tracks from a playlist, specifying a snapshot id.
         * See [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param userId The id of the user. If you know the Spotify URI it is easy to find the user id (e.g. spotify:user:<here_is_the_user_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param uris An array of tracks to be removed. Each element of the array can be either a string, in which case it is treated as a URI, or an object containing the properties `uri` (which is a string) and `positions` (which is an array of integers).
         * @param snapshotId The playlist's snapshot ID against which you want to make the changes
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        removeTracksFromPlaylistWithSnapshotId(userId: string, playlistId: string, uris: Object[], snapshotId: string, callback?: ResultsCallback<SpotifyApi.PlaylistSnapshotResponse>) : Promise<SpotifyApi.PlaylistSnapshotResponse>;

        /**
         * Remove tracks from a playlist, specifying the positions of the tracks to be removed.
         * See [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/) on
         * the Spotify Developer site for more information about the endpoint.
         * @param userId The id of the user. If you know the Spotify URI it is easy
         * to find the user id (e.g. spotify:user:<here_is_the_user_id>:playlist:xxxx)
         * @param playlistId The id of the playlist. If you know the Spotify URI it is easy to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
         * @param positions array of integers containing the positions of the tracks to remove from the playlist.
         * @param snapshotId The playlist's snapshot ID against which you want to make the changes
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        removeTracksFromPlaylistInPositions(userId: string, playlistId: string, positions: number[], snapshotId: string, callback?: ResultsCallback<SpotifyApi.PlaylistSnapshotResponse>) : Promise<SpotifyApi.PlaylistSnapshotResponse>;

        /**
         * Fetches an album from the Spotify catalog.
         * See [Get an Album](https://developer.spotify.com/web-api/get-album/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param albumId The id of the album. If you know the Spotify URI it is easy to find the album id (e.g. spotify:album:<here_is_the_album_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getAlbum(albumId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.SingleAlbumResponse>) : Promise<SpotifyApi.SingleAlbumResponse>;

        /**
         * Fetches the tracks of an album from the Spotify catalog.
         * See [Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param albumId The id of the album. If you know the Spotify URI it is easy to find the album id (e.g. spotify:album:<here_is_the_album_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getAlbumTracks(albumId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.AlbumTracksResponse>) : Promise<SpotifyApi.AlbumTracksResponse>;
        
        /**
         * Fetches multiple albums from the Spotify catalog.
         * See [Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param albumIds The ids of the albums. If you know their Spotify URI it is easy to find their album id (e.g. spotify:album:<here_is_the_album_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getAlbums(albumIds: string[], options?: Object, callback?: ResultsCallback<SpotifyApi.MultipleAlbumsResponse>) : Promise<SpotifyApi.MultipleAlbumsResponse>;

        /**
         * Fetches a track from the Spotify catalog.
         * See [Get a Track](https://developer.spotify.com/web-api/get-track/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param trackId The id of the track. If you know the Spotify URI it is easy to find the track id (e.g. spotify:track:<here_is_the_track_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getTrack(trackId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.SingleTrackResponse>) : Promise<SpotifyApi.SingleTrackResponse>;

        /**
         * Fetches multiple tracks from the Spotify catalog.
         * See [Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/) on
         * the Spotify Developer site for more information about the endpoint.
         * @param trackIds The ids of the tracks. If you know their Spotify URI it is easy to find their track id (e.g. spotify:track:<here_is_the_track_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getTracks(trackIds: string[], options?: Object, callback?: ResultsCallback<SpotifyApi.MultipleTracksResponse>) : Promise<SpotifyApi.MultipleTracksResponse>;

        /**
         * Fetches an artist from the Spotify catalog.
         * See [Get an Artist](https://developer.spotify.com/web-api/get-artist/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param artistId The id of the artist. If you know the Spotify URI it is easy to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getArtist(artistId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.SingleArtistResponse>) : Promise<SpotifyApi.SingleArtistResponse>;

        /**
         * Fetches multiple artists from the Spotify catalog.
         * See [Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param artistIds The ids of the artists. If you know their Spotify URI it is easy to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getArtists(artistIds: string[], options?: Object, callback?: ResultsCallback<SpotifyApi.MultipleArtistsResponse>) : Promise<SpotifyApi.MultipleArtistsResponse>;

        /**
         * Fetches the albums of an artist from the Spotify catalog.
         * See [Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param artistId The id of the artist. If you know the Spotify URI it is easy to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getArtistAlbums(artistId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.ArtistsAlbumsResponse>) : Promise<SpotifyApi.ArtistsAlbumsResponse>;

        /**
         * Fetches a list of top tracks of an artist from the Spotify catalog, for a specific country.
         * See [Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param artistId The id of the artist. If you know the Spotify URI it is easy to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
         * @param countryId The id of the country (e.g. ES for Spain or US for United States)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getArtistTopTracks(artistId: string, countryId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.ArtistsTopTracksResponse>) : Promise<SpotifyApi.ArtistsTopTracksResponse>;
        
        /**
         * Fetches a list of artists related with a given one from the Spotify catalog.
         * See [Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param artistId The id of the artist. If you know the Spotify URI it is easy to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getArtistRelatedArtists(artistId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.ArtistsRelatedArtistsResponse>) : Promise<SpotifyApi.ArtistsRelatedArtistsResponse>;

        /**
         * Fetches a list of Spotify featured playlists (shown, for example, on a Spotify player's "Browse" tab).
         * See [Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getFeaturedPlaylists(options?: Object, callback?: ResultsCallback<SpotifyApi.ListOfFeaturedPlaylistsResponse>) : Promise<SpotifyApi.ListOfFeaturedPlaylistsResponse>;
        
        /**
         * Fetches a list of new album releases featured in Spotify (shown, for example, on a Spotify player's "Browse" tab).
         * See [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getNewReleases(options?: Object, callback?: ResultsCallback<SpotifyApi.ListOfNewReleasesResponse>) : Promise<SpotifyApi.ListOfNewReleasesResponse>;

        /**
         * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
         * See [Get a List of Categories](https://developer.spotify.com/web-api/get-list-categories/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getCategories(options?: Object, callback?: ResultsCallback<SpotifyApi.MultipleCategoriesResponse>) : Promise<SpotifyApi.MultipleCategoriesResponse>;

        /**
         * Get a single category used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
         * See [Get a Category](https://developer.spotify.com/web-api/get-category/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param categoryId The id of the category. These can be found with the getCategories function
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getCategory(categoryId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.SingleCategoryResponse>) : Promise<SpotifyApi.SingleCategoryResponse>;
        
        /**
         * Get a list of Spotify playlists tagged with a particular category.
         * See [Get a Category's Playlists](https://developer.spotify.com/web-api/get-categorys-playlists/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param categoryId The id of the category. These can be found with the getCategories function
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        getCategoryPlaylists(categoryId: string, options?: Object, callback?: ResultsCallback<SpotifyApi.CategoryPlaylistsReponse>) : Promise<SpotifyApi.CategoryPlaylistsReponse>;
        
        /**
         * Fetches albums from the Spotify catalog according to a query.
         * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param query The search query
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        searchAlbums(query: string, options?: SpotifyApi.SearchForItemParameterObject, callback?: ResultsCallback<SpotifyApi.AlbumSearchResponse>) : Promise<SpotifyApi.AlbumSearchResponse>;
        
        /**
         * Fetches artists from the Spotify catalog according to a query.
         * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param query The search query
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        searchArtists(query: string, options?: SpotifyApi.SearchForItemParameterObject, callback?: ResultsCallback<SpotifyApi.ArtistSearchResponse>) : Promise<SpotifyApi.ArtistSearchResponse>;
        
        /**
         * Fetches tracks from the Spotify catalog according to a query.
         * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param query The search query
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        searchTracks(query: string, options?: SpotifyApi.SearchForItemParameterObject, callback?: ResultsCallback<SpotifyApi.TrackSearchResponse>) : Promise<SpotifyApi.TrackSearchResponse>;

        /**
         * Fetches playlists from the Spotify catalog according to a query.
         * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on the Spotify Developer site for more information about the endpoint.
         * 
         * @param query The search query
         * @param options A JSON object with options that can be passed
         * @param callback An optional callback that receives 2 parameters. The first one is the error object (null if no error), and the second is the value if the request succeeded.
         */
        searchPlaylists(query: string, options?: SpotifyApi.SearchForItemParameterObject, callback?: ResultsCallback<SpotifyApi.PlaylistSearchResponse>) : Promise<SpotifyApi.PlaylistSearchResponse>;
        
        /**
         * Sets the access token to be used.
         * See [the Authorization Guide](https://developer.spotify.com/web-api/authorization-guide/) on the Spotify Developer site for more information about obtaining an access token.
         * 
         * @param accessToken The access token
         */
        setAccessToken(accessToken: string) : void;

        /**
         * Sets an implementation of Promises/A+ to be used. E.g. Q, when.
         * See [Conformant Implementations](https://github.com/promises-aplus/promises-spec/blob/master/implementations.md) for a list of some available options
         * 
         * @param promiseImplementation A Promises/A+ valid implementation
         * @throws {Error} If the implementation being set doesn't conform with Promises/A+
         */
        setPromiseImplementation(promiseImplementation: Object) : void;
    }
}
