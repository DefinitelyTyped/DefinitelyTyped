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
        build?: string;
        /**
         * A URL for your app icon.
         */
        icon?: string;
        /**
         * The name of your app.
         */
        name?: string;
        /**
         * The version of your app.
         */
        version?: string;
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

    /**
     * A dictionary of configuration options for the MusicKit instance.
     */
    interface Configuration {
        /**
         * The version of your app.
         */
        app?: AppConfiguration;
        /**
         * This property indicates whether you have explicitly enabled or disabled
         * declarative markup.
         */
        declarativeMarkup?: boolean;
        /**
         * The developer token to identify yourself as a trusted developer and
         * member of the Apple Developer Program.
         */
        developerToken?: string;
        /**
         * The current storefront for this MusicKit configuration.
         */
        storefrontId?: string;
        /**
         * The playback bit rate of the music player.
         */
        bitrate?: PlaybackBitrate;
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
