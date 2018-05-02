// Type definitions for OpenPlayer 1.0
// Project: https://github.com/rafa8626/openplayer
// Definitions by: Rafael Miranda <https://github.com/rafa8626>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace OpenPlayer {
    interface PlayerComponent {
        create(): void;
        destroy(): void;
    }

    interface EventsList {
        [key: string]: (e: any) => void;
    }

    interface Source {
        src: string;
        type: string;
        drm?: object;
    }

    interface Track {
        srclang: string;
        src: string;
        kind: string;
        label: string;
        default?: boolean;
    }

    class Media {
        constructor(element: HTMLMediaElement);
        canPlayType(mimeType: string): boolean;
        load(): void;
        play(): Promise<void>;
        pause(): void;
        destroy(): void;
        // Setters/getters
        src(media?: Source[]): Source[];
        volume(value?: number): number;
        muted(value?: boolean): boolean;
        playbackRate(value?: number): number;
        currentTime(value?: number): number;
        duration(): number;
        paused(): boolean;
        ended(): boolean;
    }

    class Ads {
        constructor(media: Media, adsUrl: string);
        load(): void;
        play(): void;
        pause(): void;
        destroy(): void;
        resizeAds(width?: number, height?: number, transform?: string): void;
        // Setters/getters
        volume(value: number): number;
        muted(value: boolean): boolean;
        currentTime(value: number): number;
        duration(): number;
        paused(): boolean;
        ended(): boolean;
    }

    /**
     * This class handles the creation/destruction of all player's control elements.
     */
    class Controls implements PlayerComponent {
        constructor(player: Player);
        create(): void;
        destroy(): void;
        getContainer(): HTMLDivElement;
    }

    /**
     * This class generates controls to play native media (such as MP4, MP3, HLS, M(PEG-DASH),
     * and have a unified look-and-feel on all modern browsers (including IE11)
     */
    class Player {
        /**
         * Convert all the video/audio tags with `om-player` class in a OpenMedia player instance.
         */
        static init(): void;
        /**
         * Create an instance of Player.
         */
        constructor(element: HTMLMediaElement | string, adsUrl?: string, fill?: boolean);
        /**
         * Create all the markup and events needed for the player.
         *
         * Note that no controls will be created if user is trying to instantiate a video element
         * in an iPhone, because iOS will only use QuickTime as a default constrain.
         */
        init(): void;
        /**
         * Load media.
         *
         * HLS and M(PEG)-DASH perform more operations during loading if browser does not support them natively.
         */
        load(): void;
        /**
         * Play media.
         *
         * If Ads are detected, different methods than the native ones are triggered with this operation.
         */
        play(): void;
        /**
         * Pause media.
         *
         * If Ads are detected, different methods than the native ones are triggered with this operation.
         */
        pause(): void;
        /**
         * Destroy OpenMedia Player instance (including all events associated) and return the
         * video/audio tag to its original state.
         */
        destroy(): void;
        /**
         * Retrieve the parent element (with `om-player` class) of the native video/audio tag.
         *
         * This element is mostly useful to attach other player component's markup in a place
         * different than the controls bar.
         */
        getContainer(): HTMLElement;
        /**
         * Retrieve an instance of the controls object used in the player instance.
         *
         * This element is mostly useful to attach other player component's markup in the controls bar.
         */
        getControls(): Controls;
        /**
         * Retrieve the original video/audio tag.
         *
         * This element is useful to attach different events in other player's components.
         */
        getElement(): HTMLMediaElement;
        /**
         * Retrieve the events attached to the player.
         *
         * This list does not include individual events associated with other player's components.
         */
        getEvents(): EventsList;
        /**
         * Retrieve the current media object (could be Ads or any other media type).
         */
        activeElement(): Ads | Media;
        /**
         * Check if current media is an instance of a native media type.
         */
        isMedia(): boolean;
        /**
         * Check if current media is an instance of an Ad.
         */
        isAd(): boolean;
        /**
         * Retrieve an instance of the `Media` object.
         */
        getMedia(): Media;
        /**
         * Retrieve an instance of the `Ads` object.
         */
        getAd(): Ads;
        /**
         * Append a new `<track>` tag to the video/audio tag and dispatch event
         * so it gets registered/loaded in the player, via `controlschanged` event.
         */
        addCaptions(args: Track): void;
        // Setters/getters
        src(media?: Source[]): Source[];
        id(): string;
    }
}
