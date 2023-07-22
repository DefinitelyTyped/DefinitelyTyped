// Type definitions for castjs 5.2.0
// Project: https://github.com/castjs/castjs/tree/master
// Definitions by: Adam Stephenson <https://github.com/adstep>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "castjs"
{
    export interface Options {
        receiver: string;
        joinpolicy: string;
    }

    export interface MediaMetadata {
        /**
         * A URL to an image to use as the poster.
         */
        poster?: string;

        /**
         * A title for the media.
         */
        title?: string;

        /**
         * A description of the media.
         */
        description?: string;

        /**
         * An array of subtitles for the media.
         */
        subtitles?: ReadonlyArray<Subtitle>
    }

    export interface Subtitle
    {
        /**
         * A flag indicating whether the subtitle is active.
         */
        active?: boolean;

        /**
         * Label for the subtitle. E.g. The language (English, Spanish).
         */
        label: string;

        /**
         * A url to the subtitles.
         */
        src: string;
    }

    export default class Castjs {
        /**
         * Gets the castjs Version
         */
        readonly version: string;

        /**
         * Gets the receiver ID
         */
        readonly receiver: string;

        /**
         * A flag that indicates whether casting is available.
         */
        readonly available: boolean;

        /**
         * A flag that indicates whether a cast device is connected.
         */
        readonly connected: boolean;

        /**
         * Gets the cast device name.
         */
        readonly device: string;

        /**
         * Gets the casting media source.
         */
        readonly src: string;

        /**
         * Gets the casting media title.
         */
        readonly title: string;

        /**
         * Gets the casting media desciption.
         */
        readonly description: string;

        /**
         * Gets the casting media poster image.
         */
        readonly poster: string;

        /**
         * Gets the casting media subtitles.
         */
        readonly subtitles: Subtitle[];

        /**
         * Gets the volume level for the casting media.
         */
        readonly volumeLevel: number;

        /**
         * A flag that indicates whether the casting media is muted.
         */
        readonly muted: boolean;

        /**
         * A flag that indicates whether the casting media is paused.
         */
        readonly paused: boolean;

        /**
         * Gets the current time, in seconds, of the casting media.
         */
        readonly time: number;

        /**
         * Gets a formatted time string (hh:mm:ss) representing the current time.
         */
        readonly timePretty: string;

        /**
         * Gets the duration, in seconds, of the casting media.
         */
        readonly duration: number;

        /**
         * Get a formatted time string (hh:mm:ss) representing the duration.
         */
        readonly durationPretty: number;

        /**
         * Get the progress of the casting media as a percentage between 0 and 100.
         */
        readonly progress: number;

        /**
         * gets the state of the casting device.
         */
        readonly state: string;

        constructor(options?: Options);

        /**
         * Emitted when casting is available.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'available', callback: () => void): void;

        /**
         * Emitted when connected with the device.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'connect', callback: () => void): void;

        /**
         * Emitted when disconnceted from the device.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'disconnect', callback: () => void): void;

        /**
         * Emitted when the device goes through a state change.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'statechange', callback: () => void): void;

        /**
         * Emitted when current time changed.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'timeupdate', callback: () => void): void;

        /**
         * Emitted when volume changed.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'volumechange', callback: () => void): void;

        /**
         * Emitted when state changed to muted.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'mute', callback: () => void): void;

        /**
         * Emitted when state changed to unmuted.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'unmute', callback: () => void): void;

        /**
         * Emitted when media is playing.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'playing', callback: () => void): void;

        /**
         * Emitted when media is paused.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'pause', callback: () => void): void;

        /**
         * Emitted when media ended.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'end', callback: () => void): void;

        /**
         * Emitted when media is buffering / seeking.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'buffering', callback: () => void): void;

        /**
         * Emitted on any event except 'error'.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'event', callback: (e: any) => void): void;

        /**
         * Emitted when any error occurs.
         * @param event The event name.
         * @param callback The callback to raise.
         */
        on(event: 'error', callback: (e: any) => void): void;

        /**
         * Creates a cast session with the requestd media.
         * @param source The media source.
         * @param metatada The media metadata.
         */
        cast(source: string, metatadata?: MediaMetadata): Castjs;

        /**
         * Sets the volume.
         * @param value A volume value between 0 and 1.
         */
        volume(value: number): Castjs;

        /**
         * Plays the media.
         */
        play(): Castjs;

        /**
         * Pauses the media.
         */
        pause(): Castjs;

        /**
         * Mutes the media.
         */
        mute(): Castjs;

        /**
         * Unmutes the media.
         */
        unmute(): Castjs;

        /**
         * Changes the active subtitle index.
         */
        subtitle(index: number): Castjs;

        /**
         * Seeks to the specified number of seconds within the media.
         */
        seek(seconds: number): Castjs;

        /**
         * Seeks to the speicifed value within the media. If isPercentage is set, and true, then the value is
         * treated as a percentage between 0 and 100. Else, the value is treated as seconds.
         * @param value The value to seek to.
         * @param isPercentage A flag indicating whether the value is to be treated as a perecntage, or as seconds.
         */
        seek(value: number, isPercentage?: boolean): Castjs;

        /**
         * Disconnects the cast session.
         */
        disconnect(): Castjs;
    }
}
