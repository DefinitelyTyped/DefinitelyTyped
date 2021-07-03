// Type definitions for spotify-web-api-node 5.0
// Project: https://github.com/thelinmichael/spotify-web-api-node
// Definitions by: Magnar Ovedal Myrtveit <https://github.com/Stadly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="spotify-api" />

declare class SpotifyWebApi {
    constructor(credentials?: Credentials);

    getCredentials(): Credentials;
    setCredentials(credentials: Credentials): void;
    resetCredentials(): void;

    getClientId(): string | undefined;
    setClientId(clientId: string): void;
    resetClientId(): void;

    getClientSecret(): string | undefined;
    setClientSecret(clientSecret: string): void;
    resetClientSecret(): void;

    getRedirectURI(): string | undefined;
    setRedirectURI(redirectUri: string): void;
    resetRedirectURI(): void;

    getAccessToken(): string | undefined;
    setAccessToken(accessToken: string): void;
    resetAccessToken(): void;

    getRefreshToken(): string | undefined;
    setRefreshToken(refreshToken: string): void;
    resetRefreshToken(): void;

    /**
     * Look up a track.
     * @param trackId The track's ID.
     * @param options The possible options, currently only market.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getTrack('3Qm86XLflmIXVm1wcwkgDK').then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the track. Not returned if a callback is given.
     */
    getTrack(trackId: string, options: MarketOptions, callback: Callback<SpotifyApi.SingleTrackResponse>): void;
    getTrack(trackId: string, options?: MarketOptions): Promise<Response<SpotifyApi.SingleTrackResponse>>;

    /**
     * Look up several tracks.
     * @param trackIds The IDs of the artists.
     * @param options The possible options, currently only market.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getArtists(['0oSGxfWSnnOXhD2fKuz2Gy', '3dBVyJ7JuOMt4GE9607Qin']).then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the artists. Not returned if a callback is given.
     */
    getTracks(trackIds: ReadonlyArray<string>, options: MarketOptions, callback: Callback<SpotifyApi.MultipleTracksResponse>): void;
    getTracks(trackIds: ReadonlyArray<string>, options?: MarketOptions): Promise<Response<SpotifyApi.MultipleTracksResponse>>;

    /**
     * Look up an album.
     * @param albumId The album's ID.
     * @param options The possible options, currently only market.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the album. Not returned if a callback is given.
     */
    getAlbum(albumId: string, options: MarketOptions, callback: Callback<SpotifyApi.SingleAlbumResponse>): void;
    getAlbum(albumId: string, options?: MarketOptions): Promise<Response<SpotifyApi.SingleAlbumResponse>>;

    /**
     * Look up several albums.
     * @param albumIds The IDs of the albums.
     * @param options The possible options, currently only market.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getAlbums(['0oSGxfWSnnOXhD2fKuz2Gy', '3dBVyJ7JuOMt4GE9607Qin']).then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the albums. Not returned if a callback is given.
     */
    getAlbums(albumIds: ReadonlyArray<string>, options: MarketOptions, callback: Callback<SpotifyApi.MultipleAlbumsResponse>): void;
    getAlbums(albumIds: ReadonlyArray<string>, options?: MarketOptions): Promise<Response<SpotifyApi.MultipleAlbumsResponse>>;

    /**
     * Look up an artist.
     * @param artistId The artist's ID.
     * @param callback Optional callback method to be called instead of the promise.
     * @example api.getArtist('1u7kkVrr14iBvrpYnZILJR').then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the artist. Not returned if a callback is given.
     */
    getArtist(artistId: string, callback: Callback<SpotifyApi.SingleArtistResponse>): void;
    getArtist(artistId: string): Promise<Response<SpotifyApi.SingleArtistResponse>>;

    /**
     * Look up several artists.
     * @param artistIds The IDs of the artists.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getArtists(['0oSGxfWSnnOXhD2fKuz2Gy', '3dBVyJ7JuOMt4GE9607Qin']).then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the artists. Not returned if a callback is given.
     */
    getArtists(artistIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.MultipleArtistsResponse>): void;
    getArtists(artistIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.MultipleArtistsResponse>>;

    /**
     * Search for music entities of certain types.
     * @param query The search query.
     * @param types An array of item types to search across.
     * Valid types are: 'album', 'artist', 'playlist', 'track', 'show', and 'episode'.
     * @param options The possible options, e.g. limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @example search('Abba', ['track', 'playlist'], { limit : 5, offset : 1 }).then(...)
     * @returns A promise that if successful, returns an object containing the
     *          search results. The result is paginated. If the promise is rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    search(query: string, types: ReadonlyArray<SearchType>, options: SearchOptions, callback: Callback<SpotifyApi.SearchResponse>): void;
    search(query: string, types: ReadonlyArray<SearchType>, options?: SearchOptions): Promise<Response<SpotifyApi.SearchResponse>>;

    /**
     * Search for an album.
     * @param query The search query.
     * @param options The possible options, e.g. limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @example searchAlbums('Space Oddity', { limit : 5, offset : 1 }).then(...)
     * @returns A promise that if successful, returns an object containing the
     *          search results. The result is paginated. If the promise is rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    searchAlbums(query: string, options: SearchOptions, callback: Callback<SpotifyApi.SearchResponse>): void;
    searchAlbums(query: string, options?: SearchOptions): Promise<Response<SpotifyApi.SearchResponse>>;

    /**
     * Search for an artist.
     * @param query The search query.
     * @param options The possible options, e.g. limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @example searchArtists('David Bowie', { limit : 5, offset : 1 }).then(...)
     * @returns A promise that if successful, returns an object containing the
     *          search results. The result is paginated. If the promise is rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    searchArtists(query: string, options: SearchOptions, callback: Callback<SpotifyApi.SearchResponse>): void;
    searchArtists(query: string, options?: SearchOptions): Promise<Response<SpotifyApi.SearchResponse>>;

    /**
     * Search for a track.
     * @param query The search query.
     * @param options The possible options, e.g. limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @example searchTracks('Mr. Brightside', { limit : 3, offset : 2 }).then(...)
     * @returns A promise that if successful, returns an object containing the
     *          search results. The result is paginated. If the promise is rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    searchTracks(query: string, options: SearchOptions, callback: Callback<SpotifyApi.SearchResponse>): void;
    searchTracks(query: string, options?: SearchOptions): Promise<Response<SpotifyApi.SearchResponse>>;

    /**
     * Search for playlists.
     * @param query The search query.
     * @param options The possible options.
     * @param callback Optional callback method to be called instead of the promise.
     * @example searchPlaylists('workout', { limit : 1, offset : 0 }).then(...)
     * @returns A promise that if successful, returns an object containing the
     *          search results. The result is paginated. If the promise is rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    searchPlaylists(query: string, options: SearchOptions, callback: Callback<SpotifyApi.SearchResponse>): void;
    searchPlaylists(query: string, options?: SearchOptions): Promise<Response<SpotifyApi.SearchResponse>>;

    /**
     * Get an artist's albums.
     * @param artistId The artist's ID.
     * @param options The possible options, e.g. limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getArtistAlbums('0oSGxfWSnnOXhD2fKuz2Gy', { album_type : 'album', country : 'GB', limit : 2, offset : 5 }).then(...)
     * @returns A promise that if successful, returns an object containing the albums
     *          for the given artist. The result is paginated. If the promise is rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    getArtistAlbums(artistId: string, options: GetArtistAlbumsOptions, callback: Callback<SpotifyApi.ArtistsAlbumsResponse>): void;
    getArtistAlbums(artistId: string, options?: GetArtistAlbumsOptions): Promise<Response<SpotifyApi.ArtistsAlbumsResponse>>;

    /**
     * Get the tracks of an album.
     * @param albumId the album's ID.
     * @param options The possible options, e.g. limit.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 }).then(...)
     * @returns A promise that if successful, returns an object containing the
     *                    tracks in the album. The result is paginated. If the promise is rejected.
     *                    it contains an error object. Not returned if a callback is given.
     */
    getAlbumTracks(albumId: string, options: PaginationMarketOptions, callback: Callback<SpotifyApi.AlbumTracksResponse>): void;
    getAlbumTracks(albumId: string, options?: PaginationMarketOptions): Promise<Response<SpotifyApi.AlbumTracksResponse>>;

    /**
     * Get an artist's top tracks.
     * @param artistId The artist's ID.
     * @param country The country/territory where the tracks are most popular. (format: ISO 3166-1 alpha-2)
     * @param callback Optional callback method to be called instead of the promise.
     * @example getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB').then(...)
     * @returns A promise that if successful, returns an object containing the
     *          artist's top tracks in the given country. If the promise is rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    getArtistTopTracks(artistId: string, country: string, callback: Callback<SpotifyApi.ArtistsTopTracksResponse>): void;
    getArtistTopTracks(artistId: string, country: string): Promise<Response<SpotifyApi.ArtistsTopTracksResponse>>;

    /**
     * Get related artists.
     * @param artistId The artist's ID.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getArtistRelatedArtists('0oSGxfWSnnOXhD2fKuz2Gy').then(...)
     * @returns A promise that if successful, returns an object containing the
     *          related artists. If the promise is rejected, it contains an error object. Not returned if a callback is given.
     */
    getArtistRelatedArtists(artistId: string, callback: Callback<SpotifyApi.ArtistsRelatedArtistsResponse>): void;
    getArtistRelatedArtists(artistId: string): Promise<Response<SpotifyApi.ArtistsRelatedArtistsResponse>>;

    /**
     * Get information about a user.
     * @param userId The user ID.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getUser('thelinmichael').then(...)
     * @returns A promise that if successful, resolves to an object
     *          containing information about the user. If the promise is
     *          rejected, it contains an error object. Not returned if a callback is given.
     */
    getUser(userId: string, callback: Callback<SpotifyApi.UserProfileResponse>): void;
    getUser(userId: string): Promise<Response<SpotifyApi.UserProfileResponse>>;

    /**
     * Get information about the user that has signed in (the current user).
     * @param callback Optional callback method to be called instead of the promise.
     * @example getMe().then(...)
     * @returns A promise that if successful, resolves to an object
     *          containing information about the user. The amount of information
     *          depends on the permissions given by the user. If the promise is
     *          rejected, it contains an error object. Not returned if a callback is given.
     */
    getMe(callback: Callback<SpotifyApi.CurrentUsersProfileResponse>): void;
    getMe(): Promise<Response<SpotifyApi.CurrentUsersProfileResponse>>;

    /**
     * Get a user's playlists.
     * @param userId An optional id of the user. If you know the Spotify URI it is easy
     * to find the id (e.g. spotify:user:<here_is_the_id>). If not provided, the id of the user that granted
     * the permissions will be used.
     * @param options The options supplied to this request.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getUserPlaylists('thelinmichael').then(...)
     * @returns A promise that if successful, resolves to an object containing
     *          a list of playlists. If rejected, it contains an error object. Not returned if a callback is given.
     */
    getUserPlaylists(userId: string, options: PaginationOptions, callback: Callback<SpotifyApi.ListOfUsersPlaylistsResponse>): void;
    getUserPlaylists(options: PaginationOptions, callback: Callback<SpotifyApi.ListOfUsersPlaylistsResponse>): void;
    getUserPlaylists(userId: string, options?: PaginationOptions): Promise<Response<SpotifyApi.ListOfUsersPlaylistsResponse>>;
    getUserPlaylists(options?: PaginationOptions): Promise<Response<SpotifyApi.ListOfUsersPlaylistsResponse>>;

    /**
     * Get a playlist.
     * @param playlistId The playlist's ID.
     * @param options The options supplied to this request.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getPlaylist('3EsfV6XzCHU8SPNdbnFogK').then(...)
     * @returns A promise that if successful, resolves to an object containing
     *          the playlist. If rejected, it contains an error object. Not returned if a callback is given.
     */
    getPlaylist(playlistId: string, options: GetPlaylistOptions, callback: Callback<SpotifyApi.SinglePlaylistResponse>): void;
    getPlaylist(playlistId: string, options?: GetPlaylistOptions): Promise<Response<SpotifyApi.SinglePlaylistResponse>>;

    /**
     * Get tracks in a playlist.
     * @param playlistId The playlist's ID.
     * @param options Optional options, such as fields.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getPlaylistTracks('3ktAYNcRHpazJ9qecm3ptn').then(...)
     * @returns A promise that if successful, resolves to an object that containing
     * the tracks in the playlist. If rejected, it contains an error object. Not returned if a callback is given.
     */
    getPlaylistTracks(playlistId: string, options: GetPlaylistTracksOptions, callback: Callback<SpotifyApi.PlaylistTrackResponse>): void;
    getPlaylistTracks(playlistId: string, options?: GetPlaylistTracksOptions): Promise<Response<SpotifyApi.PlaylistTrackResponse>>;

    /**
     * Create a playlist.
     * @param name The name of the playlist.
     * @param options The possible options, being description, collaborative and public.
     * @param callback Optional callback method to be called instead of the promise.
     * @example createPlaylist('My playlist', {''description': 'My description', 'collaborative' : false, 'public': true}).then(...)
     * @returns A promise that if successful, resolves to an object containing information about the
     *          created playlist. If rejected, it contains an error object. Not returned if a callback is given.
     */
    createPlaylist(playlistName: string, options: PlaylistDetailsOptions, callback: Callback<SpotifyApi.CreatePlaylistResponse>): void;
    createPlaylist(playlistName: string, options?: PlaylistDetailsOptions): Promise<Response<SpotifyApi.CreatePlaylistResponse>>;

    /**
     * Follow a playlist.
     * @param playlistId The playlist's ID
     * @param options The possible options, currently only public.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, simply resolves to an empty object. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    followPlaylist(playlistId: string, options: PublicOptions, callback: Callback<SpotifyApi.FollowPlaylistReponse>): void;
    followPlaylist(playlistId: string, options?: PublicOptions): Promise<Response<SpotifyApi.FollowPlaylistReponse>>;

    /**
     * Unfollow a playlist.
     * @param playlistId The playlist's ID
     * @param options The possible options, currently only public.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, simply resolves to an empty object. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    unfollowPlaylist(playlistId: string, callback: Callback<SpotifyApi.UnfollowPlaylistReponse>): void;
    unfollowPlaylist(playlistId: string): Promise<Response<SpotifyApi.UnfollowPlaylistReponse>>;

    /**
     * Change playlist details.
     * @param playlistId The playlist's ID
     * @param options The possible options, e.g. name, public.
     * @param callback Optional callback method to be called instead of the promise.
     * @example changePlaylistDetails('3EsfV6XzCHU8SPNdbnFogK', {name: 'New name', public: true}).then(...)
     * @returns A promise that if successful, simply resolves to an empty object. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    changePlaylistDetails(playlistId: string, options: ChangePlaylistOptions, callback: Callback<SpotifyApi.ChangePlaylistDetailsReponse>): void;
    changePlaylistDetails(playlistId: string, options?: ChangePlaylistOptions): Promise<Response<SpotifyApi.ChangePlaylistDetailsReponse>>;

    /**
     * Replace the image used to represent a specific playlist.
     * @param playlistId The playlist's ID
     * @param base64URI Base64 encoded JPEG image data, maximum payload size is 256 KB
     * @param callback Optional callback method to be called instead of the promise.
     * @example uploadCustomPlaylistCoverImage('3EsfV6XzCHU8SPNdbnFogK', 'longbase64uri').then(...)
     * @returns A promise that if successful, simply resolves to an empty object. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    uploadCustomPlaylistCoverImage(playlistId: string, base64URI: string, callback: Callback<SpotifyApi.UploadCustomPlaylistCoverImageReponse>): void;
    uploadCustomPlaylistCoverImage(playlistId: string, base64URI: string): Promise<Response<SpotifyApi.UploadCustomPlaylistCoverImageReponse>>;

    /**
     * Add tracks to a playlist.
     * @param playlistId The playlist's ID
     * @param tracks URIs of the tracks to add to the playlist.
     * @param options Options, position being the only one.
     * @param callback Optional callback method to be called instead of the promise.
     * @example addTracksToPlaylist('3EsfV6XzCHU8SPNdbnFogK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]).then(...)
     * @returns A promise that if successful returns an object containing a snapshot_id. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    addTracksToPlaylist(playlistId: string, tracks: ReadonlyArray<string>, options: PositionOptions, callback: Callback<SpotifyApi.AddTracksToPlaylistResponse>): void;
    addTracksToPlaylist(playlistId: string, tracks: ReadonlyArray<string>, options?: PositionOptions): Promise<Response<SpotifyApi.AddTracksToPlaylistResponse>>;

    /**
     * Remove tracks from a playlist.
     * @param playlistId The playlist's ID
     * @param tracks An array of objects containing a property called uri with the track URI (String), and
     * an optional property called positions (int[]), e.g. { uri : "spotify:track:491rM2JN8KvmV6p0oDDuJT", positions : [0, 15] }
     * @param options Options, snapshot_id being the only one.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns an object containing a snapshot_id. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    removeTracksFromPlaylist(playlistId: string, tracks: ReadonlyArray<Track>, options: SnapshotOptions, callback: Callback<SpotifyApi.RemoveTracksFromPlaylistResponse>): void;
    removeTracksFromPlaylist(playlistId: string, tracks: ReadonlyArray<Track>, options?: SnapshotOptions): Promise<Response<SpotifyApi.RemoveTracksFromPlaylistResponse>>;

    /**
     * Remove tracks from a playlist by position instead of specifying the tracks' URIs.
     * @param playlistId The playlist's ID
     * @param positions The positions of the tracks in the playlist that should be removed
     * @param snapshot_id The snapshot ID, or version, of the playlist. Required
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns an object containing a snapshot_id. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    removeTracksFromPlaylistByPosition(playlistId: string, positions: ReadonlyArray<number>, snapshotId: string, callback: Callback<SpotifyApi.RemoveTracksFromPlaylistResponse>): void;
    removeTracksFromPlaylistByPosition(playlistId: string, positions: ReadonlyArray<number>, snapshotId: string): Promise<Response<SpotifyApi.RemoveTracksFromPlaylistResponse>>;

    /**
     * Replace tracks in a playlist.
     * @param playlistId The playlist's ID
     * @param uris An array of track URIs (strings)
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns an empty object. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    replaceTracksInPlaylist(playlistId: string, uris: ReadonlyArray<string>, callback: Callback<SpotifyApi.ReplacePlaylistTracksResponse>): void;
    replaceTracksInPlaylist(playlistId: string, uris: ReadonlyArray<string>): Promise<Response<SpotifyApi.ReplacePlaylistTracksResponse>>;

    /**
     * Reorder tracks in a playlist.
     * @param playlistId The playlist's ID
     * @param rangeStart The position of the first track to be reordered.
     * @param insertBefore The position where the tracks should be inserted.
     * @param options Optional parameters, i.e. range_length and snapshot_id.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns an object containing a snapshot_id. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    reorderTracksInPlaylist(playlistId: string, rangeStart: number, insertBefore: number, options: ReorderPlaylistTracksOptions, callback: Callback<SpotifyApi.ReorderPlaylistTracksResponse>): void;
    reorderTracksInPlaylist(playlistId: string, rangeStart: number, insertBefore: number, options?: ReorderPlaylistTracksOptions): Promise<Response<SpotifyApi.ReorderPlaylistTracksResponse>>;

    /**
     * Get audio features for a single track identified by its unique Spotify ID.
     * @param trackId The track ID
     * @param callback Optional callback method to be called instead of the promise.
     * @example getAudioFeaturesForTrack('38P3Q4QcdjQALGF2Z92BmR').then(...)
     * @returns A promise that if successful, resolves to an object
     *          containing information about the audio features. If the promise is
     *          rejected, it contains an error object. Not returned if a callback is given.
     */
    getAudioFeaturesForTrack(trackId: string, callback: Callback<SpotifyApi.AudioFeaturesResponse>): void;
    getAudioFeaturesForTrack(trackId: string): Promise<Response<SpotifyApi.AudioFeaturesResponse>>;

    /**
     * Get audio analysis for a single track identified by its unique Spotify ID.
     * @param trackId The track ID
     * @param callback Optional callback method to be called instead of the promise.
     * @example getAudioAnalysisForTrack('38P3Q4QcdjQALGF2Z92BmR').then(...)
     * @returns A promise that if successful, resolves to an object
     *          containing information about the audio analysis. If the promise is
     *          rejected, it contains an error object. Not returned if a callback is given.
     */
    getAudioAnalysisForTrack(trackId: string, callback: Callback<SpotifyApi.AudioAnalysisResponse>): void;
    getAudioAnalysisForTrack(trackId: string): Promise<Response<SpotifyApi.AudioAnalysisResponse>>;

    /**
     * Get audio features for multiple tracks identified by their unique Spotify ID.
     * @param trackIds The track IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @example getAudioFeaturesForTracks(['38P3Q4QcdjQALGF2Z92BmR', '2HO2bnoMrpnZUbUqiilLHi']).then(...)
     * @returns A promise that if successful, resolves to an object
     *          containing information about the audio features for the tracks. If the promise is
     *          rejected, it contains an error object. Not returned if a callback is given.
     */
    getAudioFeaturesForTracks(trackIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.MultipleAudioFeaturesResponse>): void;
    getAudioFeaturesForTracks(trackIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.MultipleAudioFeaturesResponse>>;

    /**
     * Create a playlist-style listening experience based on seed artists, tracks and genres.
     * @param options The options supplied to this request.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getRecommendations({ min_energy: 0.4, seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'], min_popularity: 50 }).then(...)
     * @returns A promise that if successful, resolves to an object containing
     *          a list of tracks and a list of seeds. If rejected, it contains an error object. Not returned if a callback is given.
     */
    getRecommendations(options: GetRecommendationsOptions, callback: Callback<SpotifyApi.RecommendationsFromSeedsResponse>): void;
    getRecommendations(options?: GetRecommendationsOptions): Promise<Response<SpotifyApi.RecommendationsFromSeedsResponse>>;

    /**
     * Retrieve a URL where the user can give the application permissions.
     * @param scopes The scopes corresponding to the permissions the application needs.
     * @param state A parameter that you can use to maintain a value between the request and the callback to redirect_uri.It is useful to prevent CSRF exploits.
     * @param showDialog A parameter that you can use to force the user to approve the app on each login rather than being automatically redirected.
     * @returns The URL where the user can give application permissions.
     */
    createAuthorizeURL(scopes: ReadonlyArray<string>, state: string, showDialog?: boolean): string;

    /**
     * Retrieve a list of available genres seed parameter values for recommendations.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getAvailableGenreSeeds().then(...)
     * @returns A promise that if successful, resolves to an object containing
     *          a list of available genres to be used as seeds for recommendations.
     *          If rejected, it contains an error object. Not returned if a callback is given.
     */
    getAvailableGenreSeeds(callback: Callback<SpotifyApi.AvailableGenreSeedsResponse>): void;
    getAvailableGenreSeeds(): Promise<Response<SpotifyApi.AvailableGenreSeedsResponse>>;

    /**
     * Retrieve the tracks that are saved to the authenticated users Your Music library.
     * @param options Options, being market, limit, and/or offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to an object containing a paging object which in turn contains
     *          playlist track objects. Not returned if a callback is given.
     */
    getMySavedTracks(options: PaginationMarketOptions, callback: Callback<SpotifyApi.UsersSavedTracksResponse>): void;
    getMySavedTracks(options?: PaginationMarketOptions): Promise<Response<SpotifyApi.UsersSavedTracksResponse>>;

    /**
     * Check if one or more tracks is already saved in the current Spotify user’s “Your Music” library.
     * @param trackIds The track IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into an array of booleans. The order
     * of the returned array's elements correspond to the track ID in the request.
     * The boolean value of true indicates that the track is part of the user's library, otherwise false.
     * Not returned if a callback is given.
     */
    containsMySavedTracks(trackIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.CheckUsersSavedTracksResponse>): void;
    containsMySavedTracks(trackIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.CheckUsersSavedTracksResponse>>;

    /**
     * Remove a track from the authenticated user's Your Music library.
     * @param trackIds The track IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns null, otherwise an error.
     * Not returned if a callback is given.
     */
    removeFromMySavedTracks(trackIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.RemoveUsersSavedTracksResponse>): void;
    removeFromMySavedTracks(trackIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.RemoveUsersSavedTracksResponse>>;

    /**
     * Add a track from the authenticated user's Your Music library.
     * @param trackIds The track IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns null, otherwise an error. Not returned if a callback is given.
     */
    addToMySavedTracks(trackIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.SaveTracksForUserResponse>): void;
    addToMySavedTracks(trackIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.SaveTracksForUserResponse>>;

    /**
     * Remove an album from the authenticated user's Your Music library.
     * @param albumIds The album IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns null, otherwise an error.
     * Not returned if a callback is given.
     */
    removeFromMySavedAlbums(albumIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.RemoveAlbumsForUserResponse>): void;
    removeFromMySavedAlbums(albumIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.RemoveAlbumsForUserResponse>>;

    /**
     * Add an album from the authenticated user's Your Music library.
     * @param albumIds The track IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns null, otherwise an error. Not returned if a callback is given.
     */
    addToMySavedAlbums(albumIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.SaveAlbumsForUserResponse>): void;
    addToMySavedAlbums(albumIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.SaveAlbumsForUserResponse>>;

    /**
     * Retrieve the albums that are saved to the authenticated users Your Music library.
     * @param options Options, being market, limit, and/or offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to an object containing a paging object which in turn contains
     *          playlist album objects. Not returned if a callback is given.
     */
    getMySavedAlbums(options: PaginationMarketOptions, callback: Callback<SpotifyApi.UsersSavedAlbumsResponse>): void;
    getMySavedAlbums(options?: PaginationMarketOptions): Promise<Response<SpotifyApi.UsersSavedAlbumsResponse>>;

    /**
     * Check if one or more albums is already saved in the current Spotify user’s “Your Music” library.
     * @param albumIds The album IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into an array of booleans. The order
     * of the returned array's elements correspond to the album ID in the request.
     * The boolean value of true indicates that the album is part of the user's library, otherwise false.
     * Not returned if a callback is given.
     */
    containsMySavedAlbums(albumIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.CheckUserSavedAlbumsResponse>): void;
    containsMySavedAlbums(albumIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.CheckUserSavedAlbumsResponse>>;

    /**
     * Get the current user's top artists based on calculated affinity.
     * @param options Options, being time_range, limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into a paging object of artists,
     *          otherwise an error. Not returned if a callback is given.
     */
    getMyTopArtists(options: GetTopOptions, callback: Callback<SpotifyApi.UsersTopArtistsResponse>): void;
    getMyTopArtists(options?: GetTopOptions): Promise<Response<SpotifyApi.UsersTopArtistsResponse>>;

    /**
     * Get the current user's top tracks based on calculated affinity.
     * @param options Options, being time_range, limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into a paging object of tracks,
     *          otherwise an error. Not returned if a callback is given.
     */
    getMyTopTracks(options: GetTopOptions, callback: Callback<SpotifyApi.UsersTopTracksResponse>): void;
    getMyTopTracks(options?: GetTopOptions): Promise<Response<SpotifyApi.UsersTopTracksResponse>>;

    /**
     * Get the Current User's Recently Played Tracks
     * @param options Options, being type, after, limit, before.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into a paging object of play history objects,
     *          otherwise an error. Not returned if a callback is given. Note that the response will be empty
     *          in case the user has enabled private session.
     */
    getMyRecentlyPlayedTracks(options: BeforeOptions | AfterOptions, callback: Callback<SpotifyApi.UsersRecentlyPlayedTracksResponse>): void;
    getMyRecentlyPlayedTracks(options?: BeforeOptions | AfterOptions): Promise<Response<SpotifyApi.UsersRecentlyPlayedTracksResponse>>;

    /**
     * Add track or episode to device queue
     * @param uri URI of the track or episode to add
     * @param options Options, being device_id.
     * @returns A promise that if successful returns null, otherwise an error.
     */
    addToQueue(uri: string, options?: DeviceOptions): Promise<Response<SpotifyApi.AddToQueueResponse>>;

    /**
     * Get the Current User's Connect Devices
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into a paging object of tracks,
     *          otherwise an error. Not returned if a callback is given.
     */
    getMyDevices(callback: Callback<SpotifyApi.UserDevicesResponse>): void;
    getMyDevices(): Promise<Response<SpotifyApi.UserDevicesResponse>>;

    /**
     * Get the Current User's Currently Playing Track.
     * @param options Options, being market.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into a paging object of tracks,
     *          otherwise an error. Not returned if a callback is given.
     */
    getMyCurrentPlayingTrack(options: MarketOptions, callback: Callback<SpotifyApi.CurrentlyPlayingResponse>): void;
    getMyCurrentPlayingTrack(options?: MarketOptions): Promise<Response<SpotifyApi.CurrentlyPlayingResponse>>;

    /**
     * Get Information About The User's Current Playback State
     * @param options Options, being market.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into a paging object of tracks,
     *          otherwise an error. Not returned if a callback is given.
     */
    getMyCurrentPlaybackState(options: MarketOptions, callback: Callback<SpotifyApi.CurrentPlaybackResponse>): void;
    getMyCurrentPlaybackState(options?: MarketOptions): Promise<Response<SpotifyApi.CurrentPlaybackResponse>>;

    /**
     * Transfer a User's Playback
     * @param deviceIds An _array_ containing a device ID on which playback should be started/transferred.
     * (NOTE: The API is currently only supporting a single device ID.)
     * @param options Options, the only one being 'play'.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into an empty response,
     *          otherwise an error. Not returned if a callback is given.
     */
    transferMyPlayback(deviceIds: ReadonlyArray<string>, options: TransferPlaybackOptions, callback: Callback<void>): void;
    transferMyPlayback(deviceIds: ReadonlyArray<string>, options?: TransferPlaybackOptions): Promise<Response<void>>;

    /**
     * Starts or Resumes the Current User's Playback
     * @param options Options, being device_id, context_uri, offset, uris, position_ms.
     * @param callback Optional callback method to be called instead of the promise.
     * @example play({context_uri: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr'}).then(...)
     * @returns A promise that if successful, resolves into an empty response,
     *          otherwise an error. Not returned if a callback is given.
     */
    play(options: PlayOptions, callback: Callback<void>): void;
    play(options?: PlayOptions): Promise<Response<void>>;

    /**
     * Pauses the Current User's Playback
     * @param options Options, being device_id. If left empty will target the user's currently active device.
     * @param callback Optional callback method to be called instead of the promise.
     * @example pause().then(...)
     * @returns A promise that if successful, resolves into an empty response,
     *          otherwise an error. Not returned if a callback is given.
     */
    pause(options: DeviceOptions, callback: Callback<void>): void;
    pause(options?: DeviceOptions): Promise<Response<void>>;

    /**
     * Skip the Current User's Playback To Previous Track
     * @param options Options, being device_id. If left empty will target the user's currently active device.
     * @param callback Optional callback method to be called instead of the promise.
     * @example skipToPrevious().then(...)
     * @returns A promise that if successful, resolves into an empty response,
     *          otherwise an error. Not returned if a callback is given.
     */
    skipToPrevious(options: DeviceOptions, callback: Callback<void>): void;
    skipToPrevious(options?: DeviceOptions): Promise<Response<void>>;

    /**
     * Skip the Current User's Playback To Next Track
     * @param options Options, being device_id. If left empty will target the user's currently active device.
     * @param callback Optional callback method to be called instead of the promise.
     * @example skipToNext().then(...)
     * @returns A promise that if successful, resolves into an empty response,
     *          otherwise an error. Not returned if a callback is given.
     */
    skipToNext(options: DeviceOptions, callback: Callback<void>): void;
    skipToNext(options?: DeviceOptions): Promise<Response<void>>;

    /**
     * Seeks to the given position in the user’s currently playing track.
     *
     * @param positionMs The position in milliseconds to seek to. Must be a positive number.
     * @param options Options, being device_id. If left empty will target the user's currently active device.
     * @param callback An optional callback that receives 2 parameters. The first
     * one is the error object (null if no error), and the second is the value if the request succeeded.
     * @returns Null if a callback is provided, a Promise otherwise
     */
    seek(positionMs: number, options: DeviceOptions, callback: Callback<void>): void;
    seek(positionMs: number, options?: DeviceOptions): Promise<Response<void>>;

    /**
     * Set Repeat Mode On The Current User's Playback
     * @param state State (track, context, or off)
     * @param options Options, being device_id. If left empty will target the user's currently active device.
     * @param callback Optional callback method to be called instead of the promise.
     * @example setRepeat('context', {}).then(...)
     * @returns A promise that if successful, resolves into an empty response,
     *          otherwise an error. Not returned if a callback is given.
     */
    setRepeat(state: RepeatState, options: DeviceOptions, callback: Callback<void>): void;
    setRepeat(state: RepeatState, options?: DeviceOptions): Promise<Response<void>>;

    /**
     * Set Shuffle Mode On The Current User's Playback
     * @param state State
     * @param options Options, being device_id. If left empty will target the user's currently active device.
     * @param callback Optional callback method to be called instead of the promise.
     * @example setShuffle('false').then(...)
     * @returns A promise that if successful, resolves into an empty response,
     *          otherwise an error. Not returned if a callback is given.
     */
    setShuffle(state: boolean, options: DeviceOptions, callback: Callback<void>): void;
    setShuffle(state: boolean, options?: DeviceOptions): Promise<Response<void>>;

    /**
     * Set the volume for the user’s current playback device.
     * @param volumePercent The volume to set. Must be a value from 0 to 100.
     * @param options Options, being device_id. If left empty will target the user's currently active device.
     * @param callback An optional callback that receives 2 parameters. The first
     * one is the error object (null if no error), and the second is the value if the request succeeded.
     * @returns A promise that if successful, resolves into an empty response,
     *          otherwise an error. Not returned if a callback is given.
     */
    setVolume(volumePercent: number, options: DeviceOptions, callback: Callback<void>): void;
    setVolume(volumePercent: number, options?: DeviceOptions): Promise<Response<void>>;

    /**
     * Add the current user as a follower of one or more other Spotify users.
     * @param userIds The IDs of the users to be followed.
     * @param callback Optional callback method to be called instead of the promise.
     * @example followUsers(['thelinmichael', 'wizzler']).then(...)
     * @returns A promise that if successful, simply resolves to an empty object. If rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    followUsers(userIds: ReadonlyArray<string>, callback: Callback<void>): void;
    followUsers(userIds: ReadonlyArray<string>): Promise<Response<void>>;

    /**
     * Add the current user as a follower of one or more artists.
     * @param artistIds The IDs of the artists to be followed.
     * @param callback Optional callback method to be called instead of the promise.
     * @example followArtists(['0LcJLqbBmaGUft1e9Mm8HV', '3gqv1kgivAc92KnUm4elKv']).then(...)
     * @returns A promise that if successful, simply resolves to an empty object. If rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    followArtists(artistIds: ReadonlyArray<string>, callback: Callback<void>): void;
    followArtists(artistIds: ReadonlyArray<string>): Promise<Response<void>>;

    /**
     * Remove the current user as a follower of one or more other Spotify users.
     * @param userIds The IDs of the users to be unfollowed.
     * @param callback Optional callback method to be called instead of the promise.
     * @example unfollowUsers(['thelinmichael', 'wizzler']).then(...)
     * @returns A promise that if successful, simply resolves to an empty object. If rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    unfollowUsers(userIds: ReadonlyArray<string>, callback: Callback<void>): void;
    unfollowUsers(userIds: ReadonlyArray<string>): Promise<Response<void>>;

    /**
     * Remove the current user as a follower of one or more artists.
     * @param artistIds The IDs of the artists to be unfollowed.
     * @param callback Optional callback method to be called instead of the promise.
     * @example unfollowArtists(['0LcJLqbBmaGUft1e9Mm8HV', '3gqv1kgivAc92KnUm4elKv']).then(...)
     * @returns A promise that if successful, simply resolves to an empty object. If rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    unfollowArtists(artistIds: ReadonlyArray<string>, callback: Callback<void>): void;
    unfollowArtists(artistIds: ReadonlyArray<string>): Promise<Response<void>>;

    /**
     * Check to see if the current user is following one or more other Spotify users.
     * @param userIds The IDs of the users to check if are followed by the current user.
     * @param callback Optional callback method to be called instead of the promise.
     * @example isFollowingUsers(['thelinmichael', 'wizzler']).then(...)
     * @returns A promise that if successful, resolves into an array of booleans. The order
     *          of the returned array's elements correspond to the users IDs in the request.
     *          The boolean value of true indicates that the user is following that user, otherwise is not.
     *          Not returned if a callback is given.
     */
    isFollowingUsers(userIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.UserFollowsUsersOrArtistsResponse>): void;
    isFollowingUsers(userIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.UserFollowsUsersOrArtistsResponse>>;

    /**
     * Get the current user's followed artists.
     * @param options Options, being after and limit.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to an object containing a paging object which contains
     * album objects. Not returned if a callback is given.
     */
    getFollowedArtists(options: AfterOptions, callback: Callback<SpotifyApi.UsersFollowedArtistsResponse>): void;
    getFollowedArtists(options?: AfterOptions): Promise<Response<SpotifyApi.UsersFollowedArtistsResponse>>;

    /**
     * Check if users are following a playlist.
     * @param userId The playlist's owner's user ID
     * @param playlistId The playlist's ID
     * @param User IDs of the following users
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns an array of booleans. If rejected,
     * it contains an error object. Not returned if a callback is given.
     */
    areFollowingPlaylist(userId: string, playlistId: string, followerIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.UsersFollowPlaylistReponse>): void;
    areFollowingPlaylist(userId: string, playlistId: string, followerIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.UsersFollowPlaylistReponse>>;

    /**
     * Check to see if the current user is following one or more artists.
     * @param artistIds The IDs of the artists to check if are followed by the current user.
     * @param callback Optional callback method to be called instead of the promise.
     * @example isFollowingArtists(['0LcJLqbBmaGUft1e9Mm8HV', '3gqv1kgivAc92KnUm4elKv']).then(...)
     * @returns A promise that if successful, resolves into an array of booleans. The order
     *          of the returned array's elements correspond to the artists IDs in the request.
     *          The boolean value of true indicates that the user is following that artist, otherwise is not.
     *          Not returned if a callback is given.
     */
    isFollowingArtists(artistIds: ReadonlyArray<string>, callback: Callback<SpotifyApi.UserFollowsUsersOrArtistsResponse>): void;
    isFollowingArtists(artistIds: ReadonlyArray<string>): Promise<Response<SpotifyApi.UserFollowsUsersOrArtistsResponse>>;

    /**
     * Retrieve new releases
     * @param options Options, being country, limit and/or offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to an object containing a paging object which contains
     * album objects. Not returned if a callback is given.
     */
    getNewReleases(options: PaginationCountryOptions, callback: Callback<SpotifyApi.ListOfNewReleasesResponse>): void;
    getNewReleases(options?: PaginationCountryOptions): Promise<Response<SpotifyApi.ListOfNewReleasesResponse>>;

    /**
     * Retrieve featured playlists
     * @param options Options, being country, locale, timestamp, limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to an object containing a paging object which contains
     * featured playlists. Not returned if a callback is given.
     */
    getFeaturedPlaylists(options: GetFeaturedPlaylistsOptions, callback: Callback<SpotifyApi.ListOfFeaturedPlaylistsResponse>): void;
    getFeaturedPlaylists(options?: GetFeaturedPlaylistsOptions): Promise<Response<SpotifyApi.ListOfFeaturedPlaylistsResponse>>;

    /**
     * Retrieve a list of categories used to tag items in Spotify (e.g. in the 'Browse' tab)
     * @param options Options, being country, locale, limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to an object containing a paging object of categories.
     * Not returned if a callback is given.
     */
    getCategories(options: PaginationLocaleOptions, callback: Callback<SpotifyApi.MultipleCategoriesResponse>): void;
    getCategories(options?: PaginationLocaleOptions): Promise<Response<SpotifyApi.MultipleCategoriesResponse>>;

    /**
     * Retrieve a category.
     * @param categoryId The id of the category to retrieve.
     * @param options Options, being country, locale.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to an object containing a category object.
     * Not returned if a callback is given.
     */
    getCategory(categoryId: string, options: LocaleOptions, callback: Callback<SpotifyApi.SingleCategoryResponse>): void;
    getCategory(categoryId: string, options?: LocaleOptions): Promise<Response<SpotifyApi.SingleCategoryResponse>>;

    /**
     * Retrieve playlists for a category.
     * @param categoryId The id of the category to retrieve playlists for.
     * @param options Options, being country, limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to a paging object containing simple playlists.
     * Not returned if a callback is given.
     */
    getPlaylistsForCategory(categoryId: string, options: PaginationCountryOptions, callback: Callback<SpotifyApi.CategoryPlaylistsReponse>): void;
    getPlaylistsForCategory(categoryId: string, options?: PaginationCountryOptions): Promise<Response<SpotifyApi.CategoryPlaylistsReponse>>;

    /**
     * Get a show.
     * @param showId The show's ID.
     * @param options The possible options, currently only market.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getShow('3Qm86XLflmIXVm1wcwkgDK').then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the show. Not returned if a callback is given.
     */
    getShow(showId: string, options: MarketOptions, callback: Callback<SpotifyApi.SingleShowResponse>): void;
    getShow(showId: string, options?: MarketOptions): Promise<Response<SpotifyApi.SingleShowResponse>>;

    /**
     * Look up several shows.
     * @param showIds The IDs of the shows.
     * @param options The possible options, currently only market.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getShows(['0oSGxfWSnnOXhD2fKuz2Gy', '3dBVyJ7JuOMt4GE9607Qin']).then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the shows. Not returned if a callback is given.
     */
    getShows(showIds: ReadonlyArray<string>, options: MarketOptions, callback: Callback<SpotifyApi.MultipleShowsResponse>): void;
    getShows(showIds: ReadonlyArray<string>, options?: MarketOptions): Promise<Response<SpotifyApi.MultipleShowsResponse>>;

    /**
     * Check if one or more shows is already saved in the current Spotify user’s “Your Music” library.
     * @param showIds The show IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into an array of booleans. The order
     * of the returned array's elements correspond to the show ID in the request.
     * The boolean value of true indicates that the show is part of the user's library, otherwise false.
     * Not returned if a callback is given.
     */
    containsMySavedShows(showIds: ReadonlyArray<string>, callback: Callback<boolean[]>): void;
    containsMySavedShows(showIds: ReadonlyArray<string>): Promise<Response<boolean[]>>;

    /**
     * Remove an show from the authenticated user's Your Music library.
     * @param showIds The show IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns null, otherwise an error.
     * Not returned if a callback is given.
     */
    removeFromMySavedShows(showIds: ReadonlyArray<string>, callback: Callback<void>): void;
    removeFromMySavedShows(showIds: ReadonlyArray<string>): Promise<Response<void>>;

    /**
     * Add a show from the authenticated user's Your Music library.
     * @param showIds The show IDs
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful returns null, otherwise an error. Not returned if a callback is given.
     */
    addToMySavedShows(showIds: ReadonlyArray<string>, callback: Callback<void>): void;
    addToMySavedShows(showIds: ReadonlyArray<string>): Promise<Response<void>>;

    /**
     * Retrieve the shows that are saved to the authenticated users Your Music library.
     * @param options Options, being market, limit, and/or offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to an object containing a paging object which in turn contains
     *          playlist show objects. Not returned if a callback is given.
     */
    getMySavedShows(options: PaginationMarketOptions, callback: Callback<SpotifyApi.UsersSavedShowsResponse>): void;
    getMySavedShows(options?: PaginationMarketOptions): Promise<Response<SpotifyApi.SavedShowObject>>;

    /**
     * Get the episodes of an show.
     * @param showId the show's ID.
     * @param options The possible options, being limit, offset, and market.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getShowEpisodes('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 }).then(...)
     * @returns A promise that if successful, returns an object containing the
     *                    episodes in the album. The result is paginated. If the promise is rejected.
     *                    it contains an error object. Not returned if a callback is given.
     */
    getShowEpisodes(showId: string, options: PaginationMarketOptions, callback: Callback<SpotifyApi.ShowEpisodesResponse>): void;
    getShowEpisodes(showId: string, options?: PaginationMarketOptions): Promise<Response<SpotifyApi.ShowEpisodesResponse>>;

    /**
     * Search for a show.
     * @param query The search query.
     * @param options The possible options, e.g. limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @example searchShows('Space Oddity', { limit : 5, offset : 1 }).then(...)
     * @returns A promise that if successful, returns an object containing the
     *          search results. The result is paginated. If the promise is rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    searchShows(query: string, options: PaginationOptions, callback: Callback<SpotifyApi.SearchResponse>): void;
    searchShows(query: string, options?: PaginationOptions): Promise<Response<SpotifyApi.SearchResponse>>;

    /**
     * Search for an episode.
     * @param query The search query.
     * @param options The possible options, e.g. limit, offset.
     * @param callback Optional callback method to be called instead of the promise.
     * @example searchEpisodes('Space Oddity', { limit : 5, offset : 1 }).then(...)
     * @returns A promise that if successful, returns an object containing the
     *          search results. The result is paginated. If the promise is rejected,
     *          it contains an error object. Not returned if a callback is given.
     */
    searchEpisodes(query: string, options: PaginationOptions, callback: Callback<SpotifyApi.SearchResponse>): void;
    searchEpisodes(query: string, options?: PaginationOptions): Promise<Response<SpotifyApi.SearchResponse>>;

    /**
     * Look up an episode.
     * @param episodeId The episode's ID.
     * @param options The possible options, currently only market.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getEpisode('3Qm86XLflmIXVm1wcwkgDK').then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the episode. Not returned if a callback is given.
     */
    getEpisode(episodeId: string, options: MarketOptions, callback: Callback<SpotifyApi.SingleEpisodeResponse>): void;
    getEpisode(episodeId: string, options?: MarketOptions): Promise<Response<SpotifyApi.SingleEpisodeResponse>>;

    /**
     * Look up several episodes.
     * @param episodeIds The IDs of the episodes.
     * @param options The possible options, currently only market.
     * @param callback Optional callback method to be called instead of the promise.
     * @example getEpisodes(['0oSGxfWSnnOXhD2fKuz2Gy', '3dBVyJ7JuOMt4GE9607Qin']).then(...)
     * @returns A promise that if successful, returns an object containing information
     *          about the episodes. Not returned if a callback is given.
     */
    getEpisodes(episodeIds: ReadonlyArray<string>, options: MarketOptions, callback: Callback<SpotifyApi.MultipleEpisodesResponse>): void;
    getEpisodes(episodeIds: ReadonlyArray<string>, options?: MarketOptions): Promise<Response<SpotifyApi.MultipleEpisodesResponse>>;

    /**
     * Request an access token using the Client Credentials flow.
     * Requires that client ID and client secret has been set previous to the call.
     * @param options Options.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into an object containing the access token,
     *          token type and time to expiration. If rejected, it contains an error object. Not returned if a callback is given.
     */
    clientCredentialsGrant(options: {}, callback: Callback<ClientCredentialsGrantResponse>): void;
    clientCredentialsGrant(options?: {}): Promise<Response<ClientCredentialsGrantResponse>>;

    /**
     * Request an access token using the Authorization Code flow.
     * Requires that client ID, client secret, and redirect URI has been set previous to the call.
     * @param code The authorization code returned in the callback in the Authorization Code flow.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves into an object containing the access token,
     *          refresh token, token type and time to expiration. If rejected, it contains an error object.
     *          Not returned if a callback is given.
     */
    authorizationCodeGrant(code: string, callback: Callback<AuthorizationCodeGrantResponse>): void;
    authorizationCodeGrant(code: string): Promise<Response<AuthorizationCodeGrantResponse>>;

    /**
     * Refresh the access token given that it hasn't expired.
     * Requires that client ID, client secret and refresh token has been set previous to the call.
     * @param callback Optional callback method to be called instead of the promise.
     * @returns A promise that if successful, resolves to an object containing the
     *          access token, time to expiration and token type. If rejected, it contains an error object.
     *          Not returned if a callback is given.
     */
    refreshAccessToken(callback: Callback<RefreshAccessTokenResponse>): void;
    refreshAccessToken(): Promise<Response<RefreshAccessTokenResponse>>;
}

type Callback<T> = (error: Error, response: Response<T>) => void;

interface Response<T> {
    body: T;
    headers: Record<string, string>;
    statusCode: number;
}

interface Credentials {
    accessToken?: string;
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    refreshToken?: string;
}

interface Track {
    positions?: ReadonlyArray<number>;
    uri: string;
}

interface LimitOptions {
    limit?: number;
}

interface PaginationOptions extends LimitOptions {
    offset?: number;
}

interface DeviceOptions {
    device_id?: string;
}

interface MarketOptions {
    market?: string;
}

interface FieldsOptions {
    fields?: string;
}

interface PublicOptions {
    public?: boolean;
}

interface SnapshotOptions {
    snapshot_id?: string;
}

interface CountryOptions {
    country?: string;
}

interface BeforeOptions extends LimitOptions {
    before?: number;
}

interface AfterOptions extends LimitOptions {
    after?: number;
}

interface LocaleOptions extends CountryOptions {
    locale?: string;
}

interface PaginationMarketOptions extends PaginationOptions, MarketOptions { }

interface PaginationCountryOptions extends PaginationOptions, CountryOptions { }

interface PaginationLocaleOptions extends PaginationOptions, LocaleOptions { }

interface GetPlaylistOptions extends MarketOptions, FieldsOptions { }

interface PlaylistDetailsOptions extends PublicOptions {
    collaborative?: boolean;
    description?: string;
}

interface ChangePlaylistOptions extends PlaylistDetailsOptions {
    name?: string;
}

interface PositionOptions {
    position?: number;
}

interface GetArtistAlbumsOptions extends PaginationCountryOptions {
    include_groups?: string;
}

interface GetPlaylistTracksOptions extends PaginationMarketOptions, FieldsOptions { }

type SearchType = 'album' | 'artist' | 'playlist' | 'track' | 'show' | 'episode';

interface SearchOptions extends PaginationMarketOptions {
    include_external?: 'audio';
}

interface ReorderPlaylistTracksOptions extends SnapshotOptions {
    range_length?: number;
}

interface GetRecommendationsOptions extends LimitOptions, MarketOptions {
    max_acousticness?: number;
    max_danceability?: number;
    max_duration_ms?: number;
    max_energy?: number;
    max_instrumentalness?: number;
    max_key?: number;
    max_liveness?: number;
    max_loudness?: number;
    max_mode?: number;
    max_popularity?: number;
    max_speechiness?: number;
    max_tempo?: number;
    max_time_signature?: number;
    max_valence?: number;
    min_acousticness?: number;
    min_danceability?: number;
    min_duration_ms?: number;
    min_energy?: number;
    min_instrumentalness?: number;
    min_key?: number;
    min_liveness?: number;
    min_loudness?: number;
    min_mode?: number;
    min_popularity?: number;
    min_speechiness?: number;
    min_tempo?: number;
    min_time_signature?: number;
    min_valence?: number;
    seed_artists?: ReadonlyArray<string> | string;
    seed_genres?: ReadonlyArray<string> | string;
    seed_tracks?: ReadonlyArray<string> | string;
    target_acousticness?: number;
    target_danceability?: number;
    target_duration_ms?: number;
    target_energy?: number;
    target_instrumentalness?: number;
    target_key?: number;
    target_liveness?: number;
    target_loudness?: number;
    target_mode?: number;
    target_popularity?: number;
    target_speechiness?: number;
    target_tempo?: number;
    target_time_signature?: number;
    target_valence?: number;
}

interface GetTopOptions extends PaginationOptions {
    time_range?: 'long_term' | 'medium_term' | 'short_term';
}

interface TransferPlaybackOptions {
    play?: boolean;
}

interface PlayOptions extends DeviceOptions {
    context_uri?: string;
    uris?: ReadonlyArray<string>;
    offset?: { position: number } | { uri: string };
    position_ms?: number;
}

type RepeatState = 'track' | 'context' | 'off';

interface GetFeaturedPlaylistsOptions extends PaginationLocaleOptions {
    timestamp?: string;
}

/**
 * Response returned when using Client Credentials authentication flow
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#example-4
 */
interface ClientCredentialsGrantResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}

/**
 * Response returned when requesting for access token
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#2-have-your-application-request-refresh-and-access-tokens-spotify-returns-access-and-refresh-tokens
 */
interface AuthorizationCodeGrantResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
}

/**
 * Response returned when requesting new access token (via refresh token)
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#4-requesting-a-refreshed-access-token-spotify-returns-a-new-access-token-to-your-app
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#6-requesting-a-refreshed-access-token
 */
interface RefreshAccessTokenResponse {
    access_token: string;
    expires_in: number;
    refresh_token?: string;
    scope: string;
    token_type: string;
}

export = SpotifyWebApi;
