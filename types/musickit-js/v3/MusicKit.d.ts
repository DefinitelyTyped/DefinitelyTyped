/// <reference path="MusicKit.Player.d.ts" />

/**
 * Use the MusicKit namespace to configure MusicKit on the Web and access the singleton instance.
 * It is also a global variable on the window object, and a namespace for other utils and enums.
 */

declare namespace MusicKit {
    /**
     * A configuration for an app.
     */
    interface AppConfiguration {
        /**
         * Current build number or version of your app
         */
        build?: string | undefined;
        /**
         * A URL to the image used to represent your application during the authorization flow.
         * Ideally this image has a square aspect ratio and is 152px by 152px (2x image content to support Retina Displays). Display dimensions are 76px by 76px.
         */
        icon?: string | undefined;
        /**
         * The name of your application during the authorization flow.
         */
        name: string;
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

    interface AuthStatus {
        NOT_DETERMINED: 0;
        DENIED: 1;
        RESTRICTED: 2;
        AUTHORIZED: 3;
    }

    /**
     * The MusicKitConfiguration object is passed to the MusicKit.configure() method above and supports the following properties.
     * https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-musickit--page#musickitconfiguration
     */
    interface MusicKitConfiguration {
        /**
         * The version of your app.
         */
        app: AppConfiguration;
        /**
         * The developer token to identify yourself as a trusted developer and
         * member of the Apple Developer Program.
         */
        developerToken: string;
        /**
         * This is the value used for the {{storefrontId}} token in the path argument of the Passthrough API method, which helps create reusable URL templates by abstracting the storefront.
         * If not set, the storefrontId will use the authenticated user’s storefront, which is likely ideal in most situations.
         */
        storefrontId?: string | undefined;
        /**
         * Can be used to target a bit rate for playback. Otherwise MusicKit will do its best to determine a proper bit rate.
         * Can be changed later on the instance.
         */
        bitrate?: PlaybackBitrate | undefined;
    }
    /**
     * Configure a MusicKit instance.
     * https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-musickit--page#configure
     * @param configuration Required: The configuration for the MusicKit instance.
     */
    function configure(configuration: MusicKitConfiguration): Promise<MusicKitInstance>;
    /**
     * Returns the configured MusicKit instance.
     * https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-musickit--page#getinstance
     */
    function getInstance(): MusicKitInstance;
    function getInstances(): MusicKitInstance[];
    /**
     * Returns a formatted artwork URL.
     * https://js-cdn.music.apple.com/musickit/v3/docs/index.html?path=/docs/reference-javascript-musickit--page#formatartworkurl
     * @param artwork Required: An artwork resource object.
     * @param height Optional: The desired artwork height.
     * @param width Optional: the desired artwork width.
     */
    function formatArtworkURL(artwork: Artwork, height?: number, width?: number): string;
    /**
     * Returns an object with milliseconds formatted into hours and minutes.
     * https://developer.apple.com/documentation/musickitjs/musickit/2992811-formattedmilliseconds
     * @param milliseconds Required: The milliseconds to format.
     */
    function formattedMilliseconds(milliseconds: number): FormattedPlaybackDuration;
    /**
     * Returns an object with seconds formatted into hours and minutes.
     */
    function formattedSeconds(seconds: number): FormattedPlaybackDuration;
    /**
     * Generates Apple Music web player markup.
     * https://developer.apple.com/documentation/musickitjs/musickit/2992813-generateembedcode
     * @param url The iTunes URL for the Apple Music content.
     * @param options The object containing the height and width of the player. The default value is {height: '450px', width: '660px'}
     */
    function generateEmbedCode(url: string, options: EmbedOptions): string;

    function formatMediaTime(seconds: number, separator: string): string;

    function formattedMediaURL(url: string): {
        contentId: string;
        isUTS: boolean;
        kind: 'album' | 'playlist' | 'song' | 'music-video' | 'podcast' | 'episode';
        storefrontId: string;
    };

    /**
     *  Get HLS js file URLs
     */
    function getHlsJsCdnConfig(): {
        hls: string;
        rtc: string;
    };

    function getPlayerType(): 'audio' | 'video' | 'podcast-episodes';

    type version = string;
}
