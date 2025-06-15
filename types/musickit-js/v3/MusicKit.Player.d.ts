declare namespace MusicKit {
    enum PlaybackType {
        none,
        preview,
        unencryptedFull,
        encryptedFul,
    }

    enum PresentationMode {
        pictureinpicture,
        inline,
    }

    enum PlayActivityEndReasonType {
        NOT_APPLICABLE,
        OTHER,
        TRACK_SKIPPED_FORWARDS,
        PLAYBACK_MANUALLY_PAUSED,
        PLAYBACK_SUSPENDED,
        MANUALLY_SELECTED_PLAYBACK_OF_A_DIFF_ITEM,
        PLAYBACK_PAUSED_DUE_TO_INACTIVITY,
        NATURAL_END_OF_TRACK,
        PLAYBACK_STOPPED_DUE_TO_SESSION_TIMEOUT,
        TRACK_BANNED,
        FAILED_TO_LOAD,
        PAUSED_ON_TIMEOUT,
        SCRUB_BEGIN,
        SCRUB_END,
        TRACK_SKIPPED_BACKWARDS,
        NOT_SUPPORTED_BY_CLIENT,
        QUICK_PLAY,
        EXITED_APPLICATION,
    }

    type PlaybackActions = 'REPEAT' | 'SHUFFLE' | 'AUTOPLAY';

    /**
     * The playback states of the music player.
     * https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-musickit--page#playbackstates
     */
    enum PlaybackStates {
        none,
        loading,
        playing,
        paused,
        stopped,
        ended,
        seeking,
        waiting,
        stalled,
        completed,
    }

    /**
     * The playback bit rate of the music player.
     * https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-musickit--page#playbackbitrate
     */
    enum PlaybackBitrate {
        HIGH = 256,
        STANDARD = 64,
    }

    /**
     * Possible values for the playback mode for the music player.
     */
    enum PlaybackMode {
        PREVIEW_ONLY,
        MIXED_CONTENT,
        FULL_PLAYBACK_ONLY,
    }

    /**
     * Possible values for the repeat mode for the music player.
     * https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-musickit--page#playerrepeatmode
     */
    enum PlayerRepeatMode {
        none,
        one,
        all,
    }

    /**
     * Possible values for the shuffle mode for the music player.
     * https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-musickit--page#playershufflemode
     */
    enum PlayerShuffleMode {
        off,
        songs,
    }

    type MediaItemPosition = number;
}
