/// <reference path="MusicKit.Player.d.ts" />

/**
 * Use the MusicKit namespace to configure MusicKit JS and to access app
 * instances, control music playback, and fetch data from the Apple Music API.
 */

declare namespace MusicKit {
    /**
     * A configuration for an app.
     */
    interface AppConfiguration {
        /**
         * The build number of your app.
         */
        build?: string | undefined;
        /**
         * A URL for your app icon.
         */
        icon?: string | undefined;
        /**
         * The name of your app.
         */
        name?: string | undefined;
        /**
         * The version of your app.
         */
        version?: string | undefined;
    }

    interface FormattedPlaybackDuration {
        hours: number;
        minutes: number;
    }

    interface EmbedOptions {
        height: number | string;
        width: number | string;
    }

    const errors: MKError[];

    const version: string;

    interface AuthStatus {
        NOT_DETERMINED: 0;
        DENIED: 1;
        RESTRICTED: 2;
        AUTHORIZED: 3;
    }

    /**
     * A dictionary of configuration options for the MusicKit instance.
     */
    interface Configuration {
        /**
         * The version of your app.
         */
        app?: AppConfiguration | undefined;
        /**
         * This property indicates whether you have explicitly enabled or disabled
         * declarative markup.
         */
        declarativeMarkup?: boolean | undefined;
        /**
         * The developer token to identify yourself as a trusted developer and
         * member of the Apple Developer Program.
         */
        developerToken?: string | undefined;
        /**
         * The current storefront for this MusicKit configuration.
         */
        storefrontId?: string | undefined;
        /**
         * The playback bit rate of the music player.
         */
        bitrate?: PlaybackBitrate | undefined;
    }
    /**
     * Configure a MusicKit instance.
     */
    function configure(configuration: Configuration): MusicKitInstance;
    /**
     * Returns the configured MusicKit instance.
     */
    function getInstance(): MusicKitInstance;
    /**
     * Returns a formatted artwork URL.
     *
     * @param artwork An artwork resource object.
     * @param height The desired artwork height.
     * @param width the desired artwork width.
     */
    function formatArtworkURL(artwork: Artwork, height: number, width: number): string;
    /**
     * Returns an object with milliseconds formatted into hours and minutes.
     */
    function formattedMilliseconds(milliseconds: number): FormattedPlaybackDuration;
    /**
     * Returns an object with seconds formatted into hours and minutes.
     */
    function formattedSeconds(seconds: number): FormattedPlaybackDuration;
    /**
     * Generates Apple Music web player markup.
     *
     * @param url The iTunes URL for the Apple Music content.
     * @param options The object containing the height and width of the player.
     */
    function generateEmbedCode(url: string, options: EmbedOptions): string;

    function formatMediaTime(seconds: number, separator: string): string;
}
