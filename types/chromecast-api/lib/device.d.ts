import { EventEmitter } from 'events';
import { DeviceStatus } from "./device";

declare namespace Device {
    interface DeviceOptions {
        name: string;
        friendlyName: string;
        host: string;
    }

    interface MediaResource {
        url: string;
        subtitles?: ReadonlyArray<{
            language: string;
            url: string;
            name: string;
        }>;
        cover?: {
            title: string;
            url: string;
        };
        subtitles_style?: {
            backgroundColor?: string;
            foregroundColor?: string;
            edgeType?: 'NONE' | 'OUTLINE' | 'DROP_SHADOW' | 'RAISED' | 'DEPRESSED';
            edgeColor?: string;
            fontScale?: number;
            fontStyle?: 'NORMAL' | 'BOLD' | 'ITALIC' | 'BOLD_ITALIC';
            fontFamily?: string;
            fontGenericFamily?: 'SANS_SERIF' | 'MONOSPACED_SANS_SERIF' | 'SERIF' | 'MONOSPACED_SERIF' | 'CASUAL' | 'CURSIVE' | 'SMALL_CAPITALS';
            windowColor?: string;
            windowRoundedCornerRadius?: number;
            windowType?: 'NONE' | 'NORMAL' | 'ROUNDED_CORNERS';
        };
    }

    interface PlaybackOptions {
        startTime?: number;
    }

    interface DeviceVolume {
        level?: number;
        muted?: boolean;
    }

    interface Image {
        url: string;
        height?: number;
        width?: number;
    }

    interface GenericMediaMetadata {
        metadataType: 0;
        title?: string;
        subtitle?: string;
        images?: ReadonlyArray<Image>;
        releaseDate?: string; /* ISO 8601 */
    }

    interface MovieMediaMetadata {
        metadataType: 1;
        title?: string;
        subtitle?: string;
        studio?: string;
        images?: ReadonlyArray<Image>;
        releaseDate?: string; /* ISO 8601 */
    }

    interface TvShowMediaMetadata {
        metadataType: 2;
        seriesTitle?: string;
        subtitle?: string;
        season?: number;
        episode?: number;
        images?: ReadonlyArray<Image>;
        originalAirDate?: string; /* ISO 8601 */
    }

    interface MusicTrackMediaMetadata {
        metadataType: 3;
        albumName?: string;
        title?: string;
        albumArtist?: string;
        artist?: string;
        composer?: string;
        trackNumber?: number;
        discNumber?: number;
        images?: ReadonlyArray<Image>;
        releaseDate?: string; /* ISO 8601 */
    }

    interface PhotoMediaMetadata {
        metadataType: 4;
        title?: string;
        artist?: string;
        location?: string;
        latitude?: number;
        longitude?: number;
        width?: number;
        height?: number;
        creationDateTime?: string; /* ISO 8601 */
    }

     interface DeviceStatus {
        mediaSessionId: number;
        playbackRate: number;
        playerState: 'IDLE' | 'PLAYING' | 'PAUSED' | 'BUFFERING';
        currentTime: number;
        supportedMediaCommands: number; /* Flags using bits: 1 Pause; 2 Seek; 4 Stream volume; 8 Stream mute; 16 Skip forward; 32 Skip backward */
        volume: DeviceVolume;
        media?: {
            contentId: string;
            streamType: 'BUFFERED' | 'LIVE' | 'NONE';
            contentType: string;
            metadata?: GenericMediaMetadata | MovieMediaMetadata | TvShowMediaMetadata | MusicTrackMediaMetadata | PhotoMediaMetadata;
            duration?: number;
            customData?: object; /* Application-specific blob of data defined by either the sender application or the receiver application */
        };
        idleReason?: 'CANCELLED' | 'INTERRUPTED' | 'FINISHED' | 'ERROR';
        customData?: object; /* Application-specific blob of data defined by the receiver application */
    }
}

declare class Device extends EventEmitter {
    constructor(options: Device.DeviceOptions);

    name: string;
    friendlyName: string;
    host: string;

    /**
     * Use this function to play any media in the chromecast device. Make sure mediaURL is accessible by the chromecast.
     * Pass an attribute startTime in the opts object to set where to start an audio or video content (in seconds).
     */
    play(resource: string | Device.MediaResource, options: Device.PlaybackOptions, callback?: (error?: Error) => void): void;
    play(resource: string | Device.MediaResource, callback?: (error?: Error) => void): void;

    /**
     * Gets the current status of the cast device including data about current media playback.
     */
    getStatus(callback?: (error?: Error, status?: Device.DeviceStatus) => void): void;

    /**
     * Gets the current status of the cast device including data about current media playback.
     */
    getReceiverStatus(callback?: (error?: Error, status?: Device.DeviceStatus) => void): void;

    /**
     * Seek to the specificTime in seconds.
     */
    seekTo(newCurrentTime: number, callback?: (error?: Error) => void): void;

    /**
     * Seek forward seconds in time relative to the current position.
     */
    seek(seconds: number, callback?: (error?: Error) => void): void;

    /**
     * Pause playback.
     */
    pause(callback?: (error?: Error) => void): void;

    /**
     * Resume playback.
     */
    unpause(callback?: (error?: Error) => void): void;

    /**
     * Resume playback.
     */
    resume(callback?: (error?: Error) => void): void;

    /**
     * Gets the volume of the current playback, if any.
     */
    getVolume(callback?: (error?: Error, volume?: Device.DeviceVolume) => void): void;

    /**
     * Set the volume to a specific level (from 0.0 to 1.0).
     */
    setVolume(volume: number, callback?: (error?: Error) => void): void;

    /**
     * Stop playing the media.
     */
    stop(callback?: (error?: Error) => void): void;

    /**
     * Mutes or unmutes the audio of the playback.
     */
    setVolumeMuted(muted: boolean, callback?: (error?: Error) => void): void;

    /**
     * Turn the subtitles off.
     */
    subtitlesOff(callback?: (error?: Error) => void): void;

    /**
     * Change the subtitles by passing the index of the subtitle you want based on the list you passed before.
     */
    changeSubtitles(subId: number, callback?: (error?: Error) => void): void;

    /**
     * Choose the subtitles font size with fontSize. The default is 1.0.
     */
    changeSubtitleSize(fontScale: number, callback?: (error?: Error) => void): void;

    /**
     * Get the current time of the media playing (in seconds). It's a shortcut for getting the currentTime from the status.
     */
    getCurrentTime(callback?: (error?: Error, time?: number) => void): void;

    close(callback?: () => void): void;

    on(event: 'connected' | 'finished', callback: () => void): this;
    on(event: 'status', callback: (status: DeviceStatus) => void): this;

    _connect(callback: () => void): void;
    _tryConnect(callback: () => void): void;
}

export = Device;
