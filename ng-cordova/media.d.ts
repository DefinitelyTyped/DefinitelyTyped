// Type definitions for ngCordova geolocation plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Viktor Zhakhalov <https://github.com/zhakhalov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../cordova/plugins/Media.d.ts" />

declare module ngCordova {
	/**
	 * $cordovaMedia
	 */
	export interface IMediaService {
		/**
		 * @param {string} src - A URI containing the audio content
		 * @returns {IMedia} - media object, to be used for future methods
		 */
		newMedia(src: string): IMedia;
	}

	export interface IMediaNotification {
		/**
		 * Media status.
		 */
		status?: number;
		/**
		 * Duration of media in seconds.
		 */
		duration?: number;
		/**
		 * Current position of media in seconds.
		 */
		position?: number;
	}

	export interface IMediaOptions {

		/**
		 * Number of times you want the media file to play
		 */
		numberOfLoops: number;

		/**
		 * Allow playback when the screen is locked
		 */
		playAudioWhenScreenIsLocked: boolean;
	}

	export interface IMedia {

		/**
		 * Start or resume playing an audio file. Options are only available for iOS devices.
		 * @param {IMediaOptions} options - for iOS only
		 */
		play(options?: IMediaOptions): ng.IPromise<void>;

		/**
		 * Pause playback of an audio file.
		 */
		pause(): void;

		/**
		 * Stop playing an audio file.
		 */
		stop(): void;

		/**
		 * Releases the underlying operating system's audio resources.
		 */
		release(): void;

		/**
		 * Moves the position within the audio file.
		 * @param {number} timing - The position to set the playback position within the audio, in milliseconds.
		 */
		seekTo(timing: number): void;

		/**
		 * Set the volume for audio playback.
		 * @param {number} volume - The volume to set for playback. Value must be within range of 0.0 - 1.0.
		 */
		setVolume(volume: number): void;

		/**
		 * Start recording an audio file.
		 */
		startRecord(): void;

		/**
		 * Stop recording an audio file.
		 */
		stopRecord(): void;

		/**
		 * Gets current time in seconds.
		 */
		currentTime(): ng.IPromise<number>;

		/**
		 * Gets duration in seconds.
		 */
		getDuration(): ng.IPromise<number>;
	}
}
