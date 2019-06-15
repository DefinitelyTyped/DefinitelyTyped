// Type definitions for YouTube
// Project: https://developers.google.com/youtube/
// Definitions by: Daz Wilkin <https://github.com/DazWilkin>,
//                 Ian Obermiller <http://ianobermiller.com>,
//                 Josh Goldberg <https://github.com/JoshuaKGoldberg>
//                 Eliot Fallon <https://github.com/eliotfallon213>
//                 Terry Mun <https://github.com/terrymun>
//                 Paul Hobbel <https://github.com/paulhobbel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * @see https://developers.google.com/youtube/iframe_api_reference
 * @see https://developers.google.com/youtube/player_parameters
 */
declare namespace YT
{
	/**
	 * State of a video player.
	 */
	export const enum PlayerState
	{
		UNSTARTED = -1,
		ENDED = 0,
		PLAYING = 1,
		PAUSED = 2,
		BUFFERING = 3,
		CUED = 5
	}

	/**
	 * Known causes for player errors.
	 */
	export const enum PlayerError
	{
		/**
		 * The request contained an invalid parameter value.
		 */
		InvalidParam = 2,

		/**
		 * The requested content cannot be played in an HTML5 player.
		 */
		Html5Error = 5,

		/**
		 * The video requested was not found.
		 */
		VideoNotFound = 100,

		/**
		 * The owner of the requested video does not allow it to be played in embedded players.
		 */
		EmbeddingNotAllowed = 101,

		/**
		 * This error is the same as 101. It's just a 101 error in disguise!
		 */
		EmbeddingNotAllowed2 = 150
	}

	/**
	 * Whether to auto-hide video controls.
	 */
	export const enum AutoHide
	{
		/**
		 * Controls are visible throughout the video
		 */
		AlwaysVisible = 0,

		/**
		 * Progress bar and player controls slide out of view after a couple of seconds.
		 */
		HideAllControls = 1,

		/**
		 * Progress bar fades out while the player controls remain visible.
		 */
		HideProgressBar = 2
	}

	/**
	 * Whether to autoplay the video.
	 */
	export const enum AutoPlay
	{
		/**
		 * Video does not autoplay.
		 */
		NoAutoPlay = 0,

		/**
		 * Video will autoplay when loaded.
		 */
		AutoPlay = 1
	}

	/**
	 * Whether to use user-preferred or forced caption loading.
	 */
	export const enum ClosedCaptionsLoadPolicy
	{
		/**
		 * Defaults to the user's preferences.
		 */
		UserDefault = 0,

		/**
		 * For closed captions to be shown.
		 */
		ForceOn = 1
	}

	/**
	 * Allowed progress bar colors.
	 */
	export type ProgressBarColor = "red" | "white";

	/**
	 * How video controls are shown.
	 */
	export const enum Controls
	{
		/**
		 * Player controls do not display.
		 */
		Hide = 0,

		/**
		 * Player controls display.
		 */
		ShowLoadPlayer = 1,

		/**
		 * Player controls display after a delay.
		 */
		ShowDelayLoadPlayer = 2
	}

	/**
	 * Whether to allow keyboard controls.
	 */
	export const enum KeyboardControls
	{
		/**
		 * Keyboard controls are enabled.
		 */
		Enable = 0,

		/**
		 * Keyboard controls are disabled.
		 */
		Disable = 1
	}

	/**
	 * Whether the JavaScript API should be enabled.
	 */
	export const enum JsApi
	{
		/**
		 * JavaScript API will be disabled.
		 */
		Disable = 0,

		/**
		 * JavaScript API will be enabled.
		 */
		Enable = 1
	}

	/**
	 * Whether to display the full-screen button.
	 */
	export const enum FullscreenButton
	{
		/**
		 * The full screen button is hidden.
		 */
		Hide = 0,

		/**
		 * The full screen button is visible.
		 */
		Show = 1
	}

	/**
	 * Whether to show video annotations.
	 */
	export const enum IvLoadPolicy
	{
		/**
		 * Video annotations will be shown.
		 */
		Show = 1,

		/**
		 * Video annotations will not be shown.
		 */
		Hide = 3
	}

	/**
	 * Which type of content loads in the player.
	 */
	export type ListType = ListTypePlayer | ListTypeSearch | ListTypeUserUploads;

	/**
	 * The requested video should be shown in the player.
	 */
	export type ListTypePlayer = "player";

	/**
	 * A search area should be shown in the player.
	 */
	export type ListTypeSearch = "search";

	/**
	 * The user's uploads should load in the player.
	 */
	export type ListTypeUserUploads = "user_uploads";

	/**
	 * Whether a single video should be looped.
	 */
	export const enum Loop
	{
		/**
		 * Video or playlist will be played only once.
		 */
		SinglePlay = 0,

		/**
		 * Video or playlist will be played over and over again.
		 */
		Loop = 1
	}

	/**
	 * Comma separated list of video IDs to play after the URL path's video.
	 */
	export const enum ModestBranding
	{
		/**
		 * Player will contain full YouTube branding.
		 */
		Full = 0,

		/**
		 * YouTube logo will not display in the control bar.
		 */
		Modest = 1
	}

	/**
	 * Whether to playback video inline or full-screen in an HTML5 player on iOS
	 */
	export const enum PlaysInline
	{
		/**
		 * Playback in fullscreen.
		 */
		Fullscreen = 0,

		/**
		 * Playback inline
		 */
		Inline = 1
	}

	/**
	 * Whether to show related videos after the video finishes.
	 */
	export const enum RelatedVideos
	{
		/**
		 * Hide related videos after playback is complete.
		 */
		Hide = 0,

		/**
		 * Show related videos after playback is complete.
		 */
		Show = 1
	}

	/**
	 * Whether to show video information before playing.
	 */
	export const enum ShowInfo
	{
		/**
		 * Hide video title and uploader before video starts playing.
		 */
		Hide = 0,

		/**
		 * Show video title and uploader before video starts playing.
		 */
		Show = 1
	}

	/**
	 * Base interface for events triggered by a player.
	 */
	export interface PlayerEvent
	{
		/**
		 * Video player corresponding to the event.
		 */
		target: Player;
	}

	/**
	 * Event for player state change.
	 */
	export interface OnStateChangeEvent extends PlayerEvent
	{
		/**
		 * New player state.
		 */
		data: PlayerState;
	}

	/**
	 * Event for playback quality change.
	 */
	export interface OnPlaybackQualityChangeEvent extends PlayerEvent
	{
		/**
		 * New playback quality.
		 */
		data: string;
	}

	/**
	 * Event for playback rate change.
	 */
	export interface OnPlaybackRateChangeEvent extends PlayerEvent
	{
		/**
		 * New playback rate.
		 */
		data: number;
	}

	/**
	 * Event for a player error.
	 */
	export interface OnErrorEvent extends PlayerEvent
	{
		/**
		 * Which type of error occurred.
		 */
		data: PlayerError;
	}

	/**
	 * Handles a player event.
	 *
	 * @param event   The triggering event.
	 */
	export interface PlayerEventHandler<TEvent extends PlayerEvent>
	{
		(event: TEvent): void;
	}

	/**
	 * YouTube player options.
	 */
	export interface PlayerOptions
	{
		/**
		 * Player width.
		 */
		width?: string | number;

		/**
		 * Player height
		 */
		height?: string | number;

		/**
		 * ID of the video to load.
		 */
		videoId?: string;

		/**
		 * Player parameters.
		 */
		playerVars?: PlayerVars;

		/**
		 * Handlers for events fired by the player.
		 */
		events?: Events;

		/**
		 * Points host to correct origin for CORS
		 */
		host?: string;
	}

	/**
	 * Allowed suggested player video qualities.
	 */
	export type SuggestedVideoQuality = (
		VideoQualityDefault
		| VideoQualitySmall
		| VideoQualityMedium
		| VideoQualityLarge
		| VideoQualityHD720
		| VideoQualityHD1080
		| VideoQualityHighRes);

	/**
	 * Default video quality chosen by YouTube.
	 */
	export type VideoQualityDefault = "default";

	/**
	 * Player height is 240px, and player dimensions are at least 320px by 240px for 4:3 aspect ratio.
	 */
	export type VideoQualitySmall = "small";

	/**
	 * Player height is 360px, and player dimensions are 640px by 360px (for 16:9 aspect ratio) or 480px by 360px (for 4:3 aspect ratio).
	 */
	 export type VideoQualityMedium = "medium";

	/**
	 * Player height is 480px, and player dimensions are 853px by 480px (for 16:9 aspect ratio) or 640px by 480px (for 4:3 aspect ratio).
	 */
	 export type VideoQualityLarge = "large";

	/**
	 * Player height is 720px, and player dimensions are 1280px by 720px (for 16:9 aspect ratio) or 960px by 720px (for 4:3 aspect ratio).
	 */
	 export type VideoQualityHD720 = "hd720";

	/**
	 * Player height is 1080px, and player dimensions are 1920px by 1080px (for 16:9 aspect ratio) or 1440px by 1080px (for 4:3 aspect ratio).
	 */
	 export type VideoQualityHD1080 = "hd1080";

	/**
	 * Player height is greater than 1080px, which means that the player's aspect ratio is greater than 1920px by 1080px.
	 */
	 export type VideoQualityHighRes = "highres";

	/**
	 * Player parameters.
	 */
	export interface PlayerVars
	{
		/**
		 * Whether to autohide video controls (by default, HideProgressBar).
		 */
		autohide?: AutoHide;

		/**
		 * Whether to autoplay the video (by default, NoAutoPlay).
		 */
		autoplay?: AutoPlay;

		/**
		 * Whether to use user-preferred or forced caption loading (by default, UserDefault).
		 */
		cc_load_policy?: ClosedCaptionsLoadPolicy;

		/**
		 * Player progress bar color
		 */
		color?: ProgressBarColor;

		/**
		 * How video controls are shown (by default, ShowLoadPlayer).
		 */
		controls?: Controls;

		/**
		 * Whether to allow keyboard controls (by default, Enable).
		 */
		disablekb?: KeyboardControls;

		/**
		 * Whether the JavaScript API should be enabled (by default, Disable).
		 */
		enablejsapi?: JsApi;

		/**
		 * Time, in seconds from the beginning of the video, when to stop playing.
		 */
		end?: number;

		/**
		 * Whether to display the full-screen button (by default, Show).
		 */
		fs?: FullscreenButton;

		/**
		 * Player language as an ISO 639-1 two-letter language code or fully-specified locale.
		 */
		hl?: string;

		/**
		 * Whether to show video annotations (by default, Show).
		 */
		iv_load_policy?: IvLoadPolicy;

		/**
		 * Identifies content that will load.
		 * If listType is search, this is the search query.
		 * If listType is user_uploads, this is the YouTube user.
		 * If listType is playlist, this is the playlist ID, prepended by 'PL'.
		 */
		list?: string;

		/**
		 * Which type of content loads in the player.
		 */
		listType?: ListType;

		/**
		 * Whether a single video should be looped (by default, SinglePlay).
		 */
		loop?: Loop;

		/**
		 * Whether to hide some YouTube branding (by default, Full).
		 */
		modestbranding?: ModestBranding;

		/**
		 * Origin domain for additional security if using the JavaScript API.
		 */
		origin?: string;

		/**
		 * Comma separated list of video IDs to play after the URL path's video.
		 */
		playlist?: string;

		/**
		 * Whether videos play inline or fullscreen in an HTML5 player on iOS. (currently by default, Fullscreen).
		 */
		playsinline?: PlaysInline;

		/**
		 * Whether to show related videos after the video finishes (by default, Show).
		 */
		rel?: RelatedVideos;

		/**
		 * Whether to show video information before playing (by default, Show).
		 */
		showinfo?: ShowInfo;

		/**
		 * Time, in seconds from the beginning of the video, when to start playing.
		 */
		start?: number;
	}

	/**
	 * Handlers for events fired by the player.
	 */
	export interface Events
	{
		/**
		 * Event fired when a player has finished loading and is ready to begin receiving API calls.
		 */
		onReady?: PlayerEventHandler<PlayerEvent>;

		/**
		 * Event fired when the player's state changes.
		 */
		onStateChange?: PlayerEventHandler<OnStateChangeEvent>;

		/**
		 * Event fired when the playback quality of the player changes.
		 */
		onPlaybackQualityChange?: PlayerEventHandler<OnPlaybackQualityChangeEvent>;

		/**
		 * Event fired when the playback rate of the player changes.
		 */
		onPlaybackRateChange?: PlayerEventHandler<OnPlaybackRateChangeEvent>;

		/**
		 * Event fired when an error in the player occurs
		 */
		onError?: PlayerEventHandler<OnErrorEvent>;

		/**
		 * Event fired to indicate thath the player has loaded, or unloaded, a module
		 * with exposed API methods. This currently only occurs for closed captioning.
		 */
		onApiChange?: PlayerEventHandler<PlayerEvent>;
	}

	/**
	 * Settings to load, play, or queue a video or playlist.
	 */
	export interface VideoOrPlaylistSettings {
		/**
		 * Time, in seconds from the beginning of the (first) video, when to start playing.
		 */
		startSeconds?: number;

		/**
		 * Time, in seconds from the end of the (first) video, when to end playing.
		 */
		endSeconds?: number;

		/**
		 * Suggested video player quality.
		 */
		suggestedQuality?: SuggestedVideoQuality
	}

	/**
	 * Settings to play or queue a video by ID.
	 */
	export interface VideoByIdSettings extends VideoOrPlaylistSettings {
		/**
		 * Video ID.
		 */
		videoId: string;
	}

	/**
	 * Settings to play or queue a video by media content URL.
	 */
	export interface VideoByMediaContentUrlSettings extends VideoOrPlaylistSettings {
		/**
		 * Fully qualified player URL.
		 */
		mediaContentUrl: string;
	}

	/**
	 * Settings to load or queue a playlist.
	 */
	export interface IPlaylistSettings extends VideoOrPlaylistSettings {
		/**
		 * Identifier for the listType videos list.
		 */
		list: string;

		/**
		 * Which type of content loads in the player.
		 */
		listType?: ListType;

		/**
		 * Start index of the playlist, if not 0.
		 */
		index?: number;
	}

	/**
	 * Creates and controls a YouTube player in an <iframe>.
	 */
	export class Player
	{
		/**
		 * Initializes a new instance of the Player class.
		 *
		 * @param container   DOM element to insert the player's <iframe>.
		 * @param options   Player options.
		 */
		constructor(elt: HTMLElement, options: PlayerOptions);

		/**
		 * Initializes a new instance of the Player class.
		 *
		 * @param id   ID of the DOM element to insert the player's <iframe>.
		 * @param options   Player options.
		 */
		constructor(id: string, options: PlayerOptions);

		/**
		 * Queues a video by ID.
		 *
		 * @param videoId   Video ID.
		 * @param startSeconds   Time from which the video should start playing.
		 * @param suggestedQuality   Suggested video player quality.
		 */
		cueVideoById(videoId: string, startSeconds?: number, suggestedQuality?: SuggestedVideoQuality): void;

		/**
		 * Queues a video by ID.
		 *
		 * @param args   Settings to queue the video.
		 */
		cueVideoById(args: VideoByIdSettings): void;

		/**
		 * Loads and plays a video by ID.
		 *
		 * @param videoId   Video ID.
		 * @param startSeconds   Time from which the video should start playing.
		 * @param suggestedQuality   Suggested video player quality.
		 */
		loadVideoById(videoId: string, startSeconds?: number, suggestedQuality?: SuggestedVideoQuality): void;

		/**
		 * Loads and plays a video by ID.
		 *
		 * @param args   Settings to play the video.
		 */
		loadVideoById(args: VideoByIdSettings): void;

		/**
		 * Queues a video by media content URL.
		 *
		 * @param mediaContentUrl   Fully qualified player URL.
		 * @param startSeconds   Time from which the video should start playing.
		 * @param suggestedQuality   Suggested video player quality.
		 */
		cueVideoByUrl(mediaContentUrl: string, startSeconds?: number, suggestedQuality?: SuggestedVideoQuality): void;

		/**
		 * Queues a video by media content URL.
		 *
		 * @param args   Settings to play the video.
		 */
		cueVideoByUrl(args: VideoByMediaContentUrlSettings): void;

		/**
		 * Loads a video by media content URL.
		 *
		 * @param mediaContentUrl   Fully qualified player URL.
		 * @param startSeconds   Time from which the video should start playing.
		 * @param suggestedQuality   Suggested video player quality.
		 */
		loadVideoByUrl(mediaContentUrl: string, startSeconds?: number, suggestedQuality?: SuggestedVideoQuality): void;

		/**
		 * Loads a video by media content URL.
		 *
		 * @param args   Settings to play the video.
		 */
		loadVideoByUrl(args: { mediaContentUrl: string; startSeconds?: number; endSeconds?: number; suggestedQuality?: SuggestedVideoQuality }): void;

		/**
		 * Queues a playlist of videos.
		 *
		 * @param playlist   Video ID(s) to play.
		 * @param index   Start index of the playlist, if not 0.
		 * @param startSeconds   Time from which the video should start playing.
		 * @param suggestedQuality   Suggested video player quality.
		 */
		cuePlaylist(playlist: string | string[], index?: number, startSeconds?: number, suggestedQuality?: SuggestedVideoQuality): void;

		/**
		 * Queues a playlist of videos.
		 *
		 * @param args   Settings to queue the playlist.
		 */
		cuePlaylist(args: IPlaylistSettings): void;

		/**
		 * Loads a playlist of videos.
		 *
		 * @param playlist   Video ID(s) to play.
		 * @param index   Start index of the playlist, if not 0.
		 * @param startSeconds   Time from which the video should start playing.
		 * @param suggestedQuality   Suggested video player quality.
		 */
		loadPlaylist(playlist: string | string[], index?: number, startSeconds?: number, suggestedQuality?: SuggestedVideoQuality): void;

		/**
		 * Loads a playlist of videos.
		 *
		 * @param args    Settings to queue the playlist.
		 */
		loadPlaylist(args: IPlaylistSettings): void;

		/**
		 * Plays the currently cued/loaded video.
		 */
		playVideo(): void;

		/**
		 * Pauses the currently playing video.
		 */
		pauseVideo(): void;

		/**
		 * Stops and cancels loading of the current video.
		 */
		stopVideo(): void;

		/**
		 * Seeks to a specified time in the video.
		 *
		 * @param seconds   Time, in seconds from the beginning of the video.
		 * @param allowSeekAhead   Whether the player is allowed to make a new request for unbuffered data.
		 */
		seekTo(seconds: number, allowSeekAhead: boolean): void;

		/**
		 * Loads and plays the next video in the playlist.
		 */
		nextVideo(): void;

		/**
		 * Loads and plays the previous video in the playlist.
		 */
		previousVideo(): void;

		/**
		 * Loads and plays the specified video in the playlist.
		 *
		 * @param index   Index of the video to play.
		 */
		playVideoAt(index: number): void;

		/**
		 * Mutes the player.
		 */
		mute(): void;

		/**
		 * Unmutes the player.
		 */
		unMute(): void;

		/**
		 * @returns Whether the player is muted.
		 */
		isMuted(): boolean;

		/**
		 * Sets the player volume.
		 *
		 * @param volume   An integer between 0 and 100.
		 */
		setVolume(volume: number): void;

		/**
		 * @returns The player's current volume, an integer between 0 and 100.
		 */
		getVolume(): number;

		/**
		 * Sets the size in pixels of the <iframe> that contains the player.
		 *
		 * @param width   Width in pixels of the <iframe>.
		 * @param height   Height in pixels of the <iframe>.
		 */
		setSize(width: number, height: number): void;

		/**
		 * @returns Playback rate of the currently playing video.
		 */
		getPlaybackRate(): number;

		/**
		 * Sets the suggested playback rate for the current video.
		 *
		 * @param suggestedRate   Suggested playback rate.
		 */
		setPlaybackRate(suggestedRate: number): void;

		/**
		 * @returns Available playback rates for the current video.
		 */
		getAvailablePlaybackRates(): number[];

		/**
		 * Sets whether the player should continuously play a playlist.
		 *
		 * @param loopPlaylists   Whether to continuously loop playlists.
		 */
		setLoop(loopPlaylists: boolean): void;

		/**
		 * Sets whether a playlist's videos should be shuffled.
		 *
		 * @param shufflePlaylist   Whether to shuffle playlist videos.
		 */
		setShuffle(shufflePlaylist: boolean): void;

		/**
		 * @returns A number between 0 and 1 of how much the player has buffered.
		 */
		getVideoLoadedFraction(): number;

		/**
		 * @returns Current player state.
		 */
		getPlayerState(): PlayerState;

		/**
		 * @returns Elapsed time in seconds since the video started playing.
		 */
		getCurrentTime(): number;

		/**
		 * @returns Actual video quality of the current video.
		 */
		getPlaybackQuality(): SuggestedVideoQuality;

		/**
		 * Sets the suggested video quality for the current video.
		 *
		 * @param suggestedQuality   Suggested video quality for the current video.
		 */
		setPlaybackQuality(suggestedQuality: SuggestedVideoQuality): void;

		/**
		 * @returns Quality formats in which the current video is available.
		 */
		getAvailableQualityLevels(): SuggestedVideoQuality[];

		/**
		 * @returns Duration in seconds of the currently playing video.
		 */
		getDuration(): number;

		/**
		 * @returns YouTube.com URL for the currently loaded/playing video.
		 */
		getVideoUrl(): string;

		/**
		 * @returns Embed code for the currently loaded/playing video.
		 */
		getVideoEmbedCode(): string;

		/**
		 * @returns Video IDs in the playlist as they are currently ordered.
		 */
		getPlaylist(): string[];

		/**
		 * @returns Index of the playlist video that is currently playing.
		 */
		getPlaylistIndex(): number;

		/**
		 * Adds an event listener for the specified event.
		 *
		 * @param eventName   Name of the event.
		 * @param listener   Handler for the event.
		 */
		addEventListener<TEvent extends PlayerEvent>(eventName: keyof Events, listener: (event: TEvent) => void): void;

        /**
		 * Remove an event listener for the specified event.
		 *
		 * @param eventName   Name of the event.
		 * @param listener   Handler for the event.
		 */
		removeEventListener<TEvent extends PlayerEvent>(eventName: keyof Events, listener: (event: TEvent) => void): void;
        
		/**
		 * @returns The DOM node for the embedded <iframe>.
		 */
		getIframe(): HTMLIFrameElement;

		/**
		 * Removes the <iframe> containing the player.
		 */
		destroy(): void;
	}
}
