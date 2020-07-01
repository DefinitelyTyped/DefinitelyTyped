// Type definitions for playmusic 2.3
// Project: https://www.github.com/jamon/playmusic
// Definitions by: Nick Paddock <https://github.com/nickp10>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface InitOptions {
    androidId?: string;
    email?: string;
    password?: string;
    masterToken?: string;
}

export interface LoginOptions {
    androidId?: string;
    email?: string;
    password?: string;
}

export interface LoginResponse {
    androidId: string;
    masterToken: string;
}

export interface LibraryOptions {
    limit?: number;
    nextPageToken?: string;
}

export interface LibraryResponse {
    data?: LibraryData;
    kind?: string;
    nextPageToken?: string;
}

export interface LibraryData {
    items?: LibraryItem[];
}

export interface LibraryItem {
    album?: string;
    albumArtist?: string;
    albumArtRef?: ArtRef[];
    artist?: string;
    artistArtRef?: ArtRef[];
    artistId?: string[];
    beatsPerMinute?: number;
    clientId?: string;
    comment?: string;
    composer?: string;
    creationTimestamp?: string;
    deleted?: boolean;
    discNumber?: number;
    durationMillis?: string;
    estimatedSize?: string;
    genre?: string;
    id?: string;
    kind?: string;
    lastModifiedTimestamp?: string;
    nid?: string;
    playCount?: number;
    rating?: string;
    recentTimestamp?: string;
    storeId?: string;
    title?: string;
    totalDiscCount?: number;
    totalTrackCount?: number;
    trackNumber?: number;
    year?: number;
}

export interface ArtRef {
    url?: string;
}

export interface PlaylistListResponse {
    data?: PlaylistListData;
    kind?: string;
}

export interface PlaylistListData {
    items?: PlaylistListItem[];
}

export interface PlaylistListItem {
    accessControlled?: boolean;
    creationTimestamp?: string;
    deleted?: boolean;
    description?: string;
    id?: string;
    kind?: string;
    lastModifiedTimestamp?: string;
    name?: string;
    ownerName?: string;
    ownerProfilePhotoUrl?: string;
    recentTimestamp?: string;
    shareToken?: string;
    type?: string;
}

export interface PlaylistOptions {
    limit?: number;
    nextPageToken?: string;
}

export interface PlaylistResponse {
    data?: PlaylistData;
    kind?: string;
    nextPageToken?: string;
}

export interface PlaylistData {
    items?: PlaylistItem[];
}

export interface PlaylistItem {
    absolutePosition?: string;
    clientId?: string;
    creationTimestamp?: string;
    deleted?: boolean;
    id?: string;
    kind?: string;
    lastModifiedTimestamp?: string;
    playlistId?: string;
    source?: string;
    track?: PlaylistTrack;
    trackId?: string;
}

export interface PlaylistTrack {
    album?: string;
    albumArtist?: string;
    albumArtRef?: ArtRef[];
    albumAvailableForPurchase?: boolean;
    albumId?: string;
    artist?: string;
    artistArtRef?: ArtRef[];
    artistId?: string[];
    composer?: string;
    contentType?: string;
    discNumber?: number;
    durationMillis?: string;
    estimatedSize?: string;
    genre?: string;
    kind?: string;
    nid?: string;
    playCount?: number;
    storeId?: string;
    title?: string;
    trackAvailableForPurchase?: boolean;
    trackAvailableForSubscription?: boolean;
    trackNumber?: number;
    trackType?: string;
    year?: number;
}

export interface PlaylistMeta {
    name?: string;
    description?: string;
    shareState?: string;
}

export interface MutateResponses {
    mutate_response?: MutateResponse[];
}

export interface MutateResponse {
    client_id?: string;
    id?: string;
    response_code?: string;
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
    updatePlayListMeta(playlistId: string, updates: PlaylistMeta, callback: (error: Error, mutationStatus: MutateResponses) => void): void;

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
        entryAfterClientId?: string): void;

    /**
     * Move the specified entry inbetween two specified entries (identified by their clientIds)
     *
     * @param entryToMove string - the song id to move
     * @param entryBeforeClientId - optional clientId of playlist entry where to move song after
     * @param entryAfterClientId - optional clientId of playlist entry where to move song before
     * @param callback function(err, playlistEntries) - success callback
     */
    movePlayListEntry(entryToMove: string, entryBeforeClientId: string, entryAfterClientId: string, callback: (error: Error, mutateResponses: MutateResponses) => void): void;

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
    removePlayListEntry(playlistItemIds: string | string[], callback: (error: Error, mutateResponses: MutateResponses) => void): void;

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
