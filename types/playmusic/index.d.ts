/// <reference types="node" />

export interface InitOptions {
    androidId?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    masterToken?: string | undefined;
}

export interface LoginOptions {
    androidId?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}

export interface LoginResponse {
    androidId: string;
    masterToken: string;
}

export interface LibraryOptions {
    limit?: number | undefined;
    nextPageToken?: string | undefined;
}

export interface LibraryResponse {
    data?: LibraryData | undefined;
    kind?: string | undefined;
    nextPageToken?: string | undefined;
}

export interface LibraryData {
    items?: LibraryItem[] | undefined;
}

export interface LibraryItem {
    album?: string | undefined;
    albumArtist?: string | undefined;
    albumArtRef?: ArtRef[] | undefined;
    artist?: string | undefined;
    artistArtRef?: ArtRef[] | undefined;
    artistId?: string[] | undefined;
    beatsPerMinute?: number | undefined;
    clientId?: string | undefined;
    comment?: string | undefined;
    composer?: string | undefined;
    creationTimestamp?: string | undefined;
    deleted?: boolean | undefined;
    discNumber?: number | undefined;
    durationMillis?: string | undefined;
    estimatedSize?: string | undefined;
    genre?: string | undefined;
    id?: string | undefined;
    kind?: string | undefined;
    lastModifiedTimestamp?: string | undefined;
    nid?: string | undefined;
    playCount?: number | undefined;
    rating?: string | undefined;
    recentTimestamp?: string | undefined;
    storeId?: string | undefined;
    title?: string | undefined;
    totalDiscCount?: number | undefined;
    totalTrackCount?: number | undefined;
    trackNumber?: number | undefined;
    year?: number | undefined;
}

export interface ArtRef {
    url?: string | undefined;
}

export interface PlaylistListResponse {
    data?: PlaylistListData | undefined;
    kind?: string | undefined;
}

export interface PlaylistListData {
    items?: PlaylistListItem[] | undefined;
}

export interface PlaylistListItem {
    accessControlled?: boolean | undefined;
    creationTimestamp?: string | undefined;
    deleted?: boolean | undefined;
    description?: string | undefined;
    id?: string | undefined;
    kind?: string | undefined;
    lastModifiedTimestamp?: string | undefined;
    name?: string | undefined;
    ownerName?: string | undefined;
    ownerProfilePhotoUrl?: string | undefined;
    recentTimestamp?: string | undefined;
    shareToken?: string | undefined;
    type?: string | undefined;
}

export interface PlaylistOptions {
    limit?: number | undefined;
    nextPageToken?: string | undefined;
}

export interface PlaylistResponse {
    data?: PlaylistData | undefined;
    kind?: string | undefined;
    nextPageToken?: string | undefined;
}

export interface PlaylistData {
    items?: PlaylistItem[] | undefined;
}

export interface PlaylistItem {
    absolutePosition?: string | undefined;
    clientId?: string | undefined;
    creationTimestamp?: string | undefined;
    deleted?: boolean | undefined;
    id?: string | undefined;
    kind?: string | undefined;
    lastModifiedTimestamp?: string | undefined;
    playlistId?: string | undefined;
    source?: string | undefined;
    track?: PlaylistTrack | undefined;
    trackId?: string | undefined;
}

export interface PlaylistTrack {
    album?: string | undefined;
    albumArtist?: string | undefined;
    albumArtRef?: ArtRef[] | undefined;
    albumAvailableForPurchase?: boolean | undefined;
    albumId?: string | undefined;
    artist?: string | undefined;
    artistArtRef?: ArtRef[] | undefined;
    artistId?: string[] | undefined;
    composer?: string | undefined;
    contentType?: string | undefined;
    discNumber?: number | undefined;
    durationMillis?: string | undefined;
    estimatedSize?: string | undefined;
    genre?: string | undefined;
    kind?: string | undefined;
    nid?: string | undefined;
    playCount?: number | undefined;
    storeId?: string | undefined;
    title?: string | undefined;
    trackAvailableForPurchase?: boolean | undefined;
    trackAvailableForSubscription?: boolean | undefined;
    trackNumber?: number | undefined;
    trackType?: string | undefined;
    year?: number | undefined;
}

export interface PlaylistMeta {
    name?: string | undefined;
    description?: string | undefined;
    shareState?: string | undefined;
}

export interface MutateResponses {
    mutate_response?: MutateResponse[] | undefined;
}

export interface MutateResponse {
    client_id?: string | undefined;
    id?: string | undefined;
    response_code?: string | undefined;
}

export default class PlayMusic {
    constructor();
    init(options: InitOptions, callback: (error: Error) => void): void;
    login(options: LoginOptions, callback: (error: Error, response: LoginResponse) => void): void;

    /**
     * Returns settings / device ids authorized for account.
     *
     * @param callback function(error, response) - success callback
     */
    getSettings(callback: (error: Error, response: any) => void): void;

    /**
     * Returns list of all tracks.
     *
     * @param callback function(error, response) - success callback
     */
    getLibrary(callback: (error: Error, response: LibraryResponse) => void): void;

    /**
     * Returns list of all tracks.
     *
     * @param options object - parameters
     * @param callback function(error, response) - success callback
     */
    getLibrary(options: LibraryOptions, callback: (error: Error, response: LibraryResponse) => void): void;

    /**
     * Returns stream URL for a track.
     *
     * @param id string - track id, hyphenated is preferred, but "nid" will work for all access tracks (not uploaded ones)
     * @param callback function(err, streamUrl) - success callback
     */
    getStreamUrl(id: string, callback: (error: Error, streamUrl: string) => void): void;

    /**
     * Opens and returns a stream object
     *
     * @param id string - track id, hyphenated is preferred, but "nid" will work for all access tracks (not uploaded ones)
     * @param callback function(stream) - success callback
     */
    getStream(id: string, callback: (error: Error, stream: any) => void): void;

    /**
     * Searches for All Access tracks.
     *
     * @param text string - search text
     * @param maxResults int - max number of results to return
     * @param callback function(err, searchResults) - success callback
     */
    search(text: string, maxResults: number, callback: (error: Error, searchResults: any) => void): void;

    /**
     * Returns list of all playlists.
     *
     * @param callback function(error, playlists) - success callback
     */
    getPlayLists(callback: (error: Error, response: PlaylistListResponse) => void): void;

    /**
     * Creates a new playlist.
     *
     * @param playlistName string - the playlist name
     * @param callback function(error, mutateResponses) - success callback
     */
    addPlayList(playlistName: string, callback: (error: Error, mutateResponses: MutateResponses) => void): void;

    /**
     * Deletes a playlist
     *
     * @param playlistId string - the playlist id
     * @param callback function(err, mutationStatus) - success callback
     */
    deletePlaylist(playlistId: string, callback: (error: Error, mutationStatus: MutateResponses) => void): void;

    /**
     * Updates a playlist's metadata
     *
     * @param playlistId string - the playlist id
     * @param updates object - data to update the playlist with
     * @param callback function(err, mutationStatus) - success callback
     */
    updatePlayListMeta(
        playlistId: string,
        updates: PlaylistMeta,
        callback: (error: Error, mutationStatus: MutateResponses) => void,
    ): void;

    /**
     * Adds a track to end of a playlist.
     *
     * @param songId string or array of string - the song id(s)
     * @param playlistId string - the playlist id
     * @param callback function(error, mutateResponses) - success callback
     * @param entryBeforeClientId - optional clientId of playlist entry where to add song after
     * @param entryAfterClientId - optional clientId of playlist entry where to add song before
     */
    addTrackToPlayList(
        songIds: string | string[],
        playlistId: string,
        callback: (error: Error, mutateResponses: MutateResponses) => void,
        entryBeforeClientId?: string,
        entryAfterClientId?: string,
    ): void;

    /**
     * Move the specified entry inbetween two specified entries (identified by their clientIds)
     *
     * @param entryToMove string - the song id to move
     * @param entryBeforeClientId - optional clientId of playlist entry where to move song after
     * @param entryAfterClientId - optional clientId of playlist entry where to move song before
     * @param callback function(err, playlistEntries) - success callback
     */
    movePlayListEntry(
        entryToMove: string,
        entryBeforeClientId: string,
        entryAfterClientId: string,
        callback: (error: Error, mutateResponses: MutateResponses) => void,
    ): void;

    /**
     * Increments track's playcount
     *
     * @param songId int - the song id. See http://bit.ly/1L4U6oK for id requirements.
     * @param callback function(err, mutationStatus) - success callback
     */
    incrementTrackPlaycount(songId: string, callback: (error: Error, mutationStatus: MutateResponses) => void): void;

    /**
     * Change metadata of a track a library
     * Currently only support changing rating
     * You need to change a song object with a different rating value:
     * 5 = thumb up, 1 = thumb down, 0 = no thumb
     *
     * @param song object - the track dictionary. You can get from getAllAccessTrack or from getLibrary
     * @param callback function(err, success) - success callback
     */
    changeTrackMetadata(song: any, callback: (error: Error, success: MutateResponses) => void): void;

    /**
     * Removes given entry ids from playlist entries.
     *
     * @param playlistItemIds string or array of string - the entry id(s). You can get this from getPlayListEntries or PlaylistItem#id.
     * @param callback function(error, mutateResponses) - success callback
     */
    removePlayListEntry(
        playlistItemIds: string | string[],
        callback: (error: Error, mutateResponses: MutateResponses) => void,
    ): void;

    /**
     * Returns tracks on all playlists.
     *
     * @param callback function(error, response) - success callback
     */
    getPlayListEntries(callback: (error: Error, response: PlaylistResponse) => void): void;

    /**
     * Returns tracks on all playlists.
     *
     * @param options object - parameters
     * @param callback function(error, response) - success callback
     */
    getPlayListEntries(options: PlaylistOptions, callback: (error: Error, response: PlaylistResponse) => void): void;
}
