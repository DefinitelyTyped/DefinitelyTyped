interface Navigator {
    readonly mediaSession: MediaSession;
}

interface Window {
    MediaSession?: MediaSession | undefined;
}

interface SetPositionState {
    (playbackState?: MediaPositionState): void;
}

interface MediaSession {
    // Current media session playback state.
    playbackState: MediaSessionPlaybackState;
    // Current media session meta data.
    metadata: MediaMetadata | null;

    // Set/Unset actions handlers.
    setActionHandler(
        action: "seekto",
        listener:
            | ((details: Required<Pick<MediaSessionActionDetails, "seekTime">> & MediaSessionActionDetails) => void)
            | null,
    ): void;
    setActionHandler(action: MediaSessionAction, listener: ((details: MediaSessionActionDetails) => void) | null): void;

    // Set/unset position state
    setPositionState: SetPositionState;

    // Set/unset active camera
    setCameraActive(active: boolean): void;

    // Set/unset active microphone
    setMicrophoneActive(active: boolean): void;
}

interface MediaImage {
    // URL from which the user agent can fetch the image’s data.
    src: string;
    // Specify the MediaImage object’s sizes. It follows the spec of sizes attribute in HTML link element.
    sizes?: string | undefined;
    // A hint as to the media type of the image.
    type?: string | undefined;
}

interface MediaMetadataInit {
    // Media's title.
    title?: string | undefined;
    // Media's artist.
    artist?: string | undefined;
    // Media's album.
    album?: string | undefined;
    // Media's artwork.
    artwork?: MediaImage[] | undefined;
}

interface MediaMetadata {
    // Media's title.
    title: string;
    // Media's artist.
    artist: string;
    // Media's album.
    album: string;
    // Media's artwork.
    artwork: ReadonlyArray<MediaImage>;
}

declare var MediaMetadata: {
    prototype: MediaMetadata;
    new(init?: MediaMetadataInit): MediaMetadata;
};

interface MediaPositionState {
    // Duration of media in seconds
    duration?: number | undefined;

    // Playback rate of media, positive for forward playback, negative for backward playback. This number should not be zero
    playbackRate?: number | undefined;

    // Last reported playback position in seconds, should be positive.
    position?: number | undefined;
}

interface MediaSessionActionDetails {
    // The action that the handler is associated with
    action: MediaSessionAction;

    // This MAY be provided when the action is seekbackward or seekforward. Stores number of seconds to move the playback time by.
    seekOffset?: number | undefined;

    // MUST be provided when action is seekto. Stores the time in seconds to move the playback time to.
    seekTime?: number | undefined;

    // MAY be provided when action is seekto. Stores true if the action is being called multiple times as part of a sequence and this is not the last call in that sequence.
    fastSeek?: boolean | undefined;
}
