// Type definitions for Player Framework (MMPPF)
// Project: https://playerframework.codeplex.com/
// Definitions by: Ricardo Sabino <https://github.com/ricardosabino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


///<reference types="winrt"/>

declare namespace PlayerFramework {

	// Enumerations
	enum AdvertisingState {
		/**
		* No ad is loading or playing.
		**/
		none = 0,
		/**
		* An ad is loading.
		**/
		loading = 1,
		/**
		* A linear ad is playing.
		**/
		linear = 2,
		/**
		* A non-linear ad is playing.
		**/
		nonLinear = 3
	}


	enum AutohideBehavior {
		/**
		* No behaviors are applied to the autohide feature.
		**/
		none = 0,
		/**
		* Autohide is allowed during media playback only.
		**/
		allowDuringPlaybackOnly = 1,
		/**
		* Autohide is prevented when the pointer is over interactive components such as the control panel.
		**/
		preventDuringInteractiveHover = 2,
		/**
		* All behaviors are applied to the autohide feature.
		**/
		all = 3
	}

	enum InteractionType {
		/**
		* Indicates no interaction.
		**/
		none = 0,
		/**
		* Indicates a "soft" interaction such as mouse movement or a timeout occurring.
		**/
		soft = 1,
		/**
		* Indicates a "hard" interaction such as a tap, click, or a key is pressed.
		**/
		hard = 2,
		/**
		* Indicates both "soft" and "hard" interactions.
		**/
		all = 3
	}

	enum NetworkState {
		/**
		* The player has not yet initialized any audio/video.
		**/
		empty = 0,
		/**
		* The player has active audio/video and has selected a resource, but is not using the network.
		**/
		idle = 1,
		/**
		* The player is downloading data.
		**/
		loading = 2,
		/**
		* The player has no audio/video source.
		**/
		noSource = 3
	}

	enum MediaQuality {
		/**
		* Typically indicates less than 720p media quality.
		**/
		standardDefinition = 0,
		/**
		* Typically indicates greater than or equal to 720p media quality.
		**/
		highDefinition = 1
	}

	enum PlayerState {
		/**
		* The player is unloaded and no media source is set.
		**/
		unloaded = 0,
		/**
		* The media source is set and the player is waiting to load the media (e.g. autoload is false).
		**/
		pending = 1,
		/**
		* The media source is set, but the player is still executing loading operations.
		**/
		loading = 2,
		/**
		* The media has finished loading, but has not been opened yet.
		**/
		loaded = 3,
		/**
		* The media can be played.
		**/
		opened = 4,
		/**
		* The media has been told to start playing, but the player is still executing starting operations.
		**/
		starting = 5,
		/**
		* The media has been started and the player is either playing or paused.
		**/
		started = 6,
		/**
		* The media has finished, but the player is still executing ending operations.
		**/
		ending = 7,
		/**
		* The media has ended.
		**/
		ended = 8,
		/**
		* The media has failed and the player must be reloaded.
		**/
		failed = 9,
	}

	enum ReadyState  {
		/**
		* The player has no information for the audio/video
		**/
		nothing = 0,
		/**
		* The player has metadata for the audio/video.
		**/
		metadata = 1,
		/**
		* The player has data for the current playback position, but not enough data to play the next frame.
		**/
		currentData = 2,
		/**
		* The player has data for the current playback position and at least the next frame.
		**/
		futureData = 3,
		/**
		* The player has enough data available to start playing.
		**/
		enoughData = 4
	}

	enum MediaErrorCode {
		/**
		* An unknown media error occurred.
		**/
		unknown = 0,
		/**
		* Media playback was aborted.
		**/
		aborted = 1,
		/**
		* Media download failed due to a network error.
		**/
		network = 2,
		/**
		* Media playback was aborted due to a corruption problem or because unsupported features were used.
		**/
		decode = 3,
		/**
		* Media source could not be loaded either because the server or network failed or because the format is not supported.
		**/
		notSupported = 4
	}

	enum ImageErrorCode {
		/**
		* An unknown image error occurred.
		**/
		unknown = 0,
		/**
		* Image download was aborted.
		**/
		aborted = 1
	}

	class TextTrackMode {
		/**
		* The track is disabled.
		**/
		static off: string;
		/**
        * The track is active, but the player is not actively displaying cues.
		**/
        static hidden: string;
		/**
		* The track is active and the player is actively displaying cues.
		**/
		static showing: string;
	}

	enum TextTrackDisplayMode {
		/**
		* Indicates tracks should not be displayed.
		*/
		none = 0,
		/**
		* Indicates tracks should be displayed using custom UI.
		*/
		custom = 1,
		/**
		* Indicates tracks should be displayed using native UI.
		*/
		native = 2,
		/**
		* Indicates tracks should be displayed using both custom and native UI. This is useful for debugging.
		*/
		all = 3
	}

	enum TextTrackReadyState {
		/**
		* The track is unloaded.
		*/
		none = 0,
		/**
		* The track is currently loading.
		*/
		loading = 1,
		/**
		* The track is loaded.
		*/
		loaded = 2,
		/**
		* The track failed to load.
		*/
		error = 3
	}

	enum ViewModelState {
		/**
		* No media is loaded.
		*/
		unloaded = 0,
		/**
		* The media is loading.
		*/
		loading = 1,
		/**
		* The media is paused.
		*/
		paused = 2,
		/**
		* The media is playing.
		*/
		playing = 3
	}



	interface PlaylistItem {
		src: string;
		tracks?: Array<any>; //TODO
	}

	class PluginBase {
		isEnabled: boolean;
		isLoaded: boolean;
		isActive: boolean;
		mediaPlayer: MediaPlayer;
		currentMediaSource: MediaSource;

		load(): void;
		unload(): void;
		update(mediaSource: MediaSource): void;
	}

	namespace Plugins {

		class TrackingPluginBase extends PluginBase {
			trackingEvents: Array<any>;

		}

		class BufferingPlugin extends PluginBase {
			hide(): void;
			show(): void;
		}

		class ControlPlugin extends PluginBase {
			compactThresholdInInches(): number;
			hide(): void;
			isCompact(): boolean;
			orientation(): string;
			show(): void;
		}

		class ErrorPlugin extends PluginBase {
			hide(): void;
			show(): void;
		}

		class LoaderPlugin extends PluginBase {
			hide(): void;
			show(): void;
		}

		/**
		*
		**/
		class PlaylistPlugin extends PluginBase {
			/**
			*
			**/
			autoAdvance: boolean;
			/**
			*
			**/
			currentPlaylistItem: PlaylistItem;
			/**
			*
			**/
			currentPlaylistItemIndex: number;
			/**
			*
			**/
			playlist: Array<PlaylistItem>;
			/**
			*
			**/
			startupPlaylistItemIndex: number;
			/**
			*
			**/
			skipBackThreshold: number;

			// Methods
			goToPreviousPlaylistItem(): void;
			goToNextPlaylistItem(): void;
			canGoToPreviousPlaylistItem(): boolean;
			canGoToNextPlaylistItem(): boolean;
		}

		class PlayTimeTrackingPlugin extends PluginBase {
			playTime: number;
			playTimePercentage: number;
		}

		class PositionTrackingPlugin extends PluginBase {
			evaluateOnForwardOnly: boolean;
			position: number;
			positionPercentage: number;
		}

		class SystemTransportControlsPlugin extends PluginBase {
			isPreviousTrackEnabled: boolean;
			isNextTrackEnabled: boolean;
			nextTrackExists: boolean;
			previousTrackExists: boolean;
		}

		class ChaptersPlugin extends PluginBase {
			defaultChapterCount: number;
			autoCreateDefaultChapters: boolean;
			autoCreateChaptersFromTextTracks: boolean;
			visualMarkerClass: string;
		}

		class DisplayRequestPlugin extends PluginBase {
			isRequestActive: boolean;
		}

		class CaptionSelectorPlugin extends PluginBase {
			hide(): void;
			show(): void;

			/**
			* Not available in phone.
			**/
			alignment: string;
			/**
			* Not available in phone.
			**/
			anchor: HTMLElement;
			/**
			* Not available in phone.
			**/
			placement: string;
		}

		class AudioSelectorPlugin extends PluginBase {
			hide(): void;
			show(): void;

			/**
			* Not available in phone.
			**/
			alignment: string;
			/**
			* Not available in phone.
			**/
			anchor: HTMLElement;
			/**
			* Not available in phone.
			**/
			placement: string;
		}
	}

	/**
	*
	**/
	class InteractiveViewModel {
		/**
		* TODO
		**/
		state: ViewModelState;
		/**
		* TODO
		**/
		startTime: number;
		/**
		* TODO
		**/
		maxTime: number;
		/**
		* TODO
		**/
		endTime: number;
		/**
		* TODO
		**/
		currentItem: number;
		/**
		* TODO
		**/
		bufferedPercentage: number;
		/**
		* TODO
		**/
		playPouseIcon: string;
		/**
		* TODO
		**/
		playPauseLabel: string;
		/**
		* TODO
		**/
		playPauseTooltip: string;
		/**
		* TODO
		**/
		isPlayPauseDisabled: boolean;
		/**
		* TODO
		**/
		isPlayPauseHidden: boolean;
		/**
		* TODO
		**/
		playResumeIcon: string;
		/**
		* TODO
		**/
		playResumeLabel: string;
		/**
		* TODO
		**/
		playResumeTooltip: string;
		/**
		* TODO
		**/
		isPlayResumeDisabled: boolean;
		/**
		* TODO
		**/
		isPlayResumeHidden: boolean;
		/**
		* TODO
		**/
		pauseIcon: string;
		/**
		* TODO
		**/
		pauseLabel: string;
		/**
		* TODO
		**/
		pauseTooltip: string;
		/**
		* TODO
		**/
		isPauseDisabled: boolean;
		/**
		* TODO
		**/
		isPauseHidden: boolean;
		/**
		* TODO
		**/
		replayIcon: string;
		/**
		* TODO
		**/
		replayLabel: string;
		/**
		* TODO
		**/
		replayTooltip: string;
		/**
		* TODO
		**/
		isReplayDisabled: boolean;
		/**
		* TODO
		**/
		isReplayHidden: boolean;
		/**
		* TODO
		**/
		rewindIcon: string;
		/**
		* TODO
		**/
		rewindLabel: string;
		/**
		* TODO
		**/
		rewindTooltip: string;
		/**
		* TODO
		**/
		isRewindDisabled: boolean;
		/**
		* TODO
		**/
		isRewindHidden: boolean;
		/**
		* TODO
		**/
		fastForwardIcon: string;
		/**
		* TODO
		**/
		fastForwardLabel: string;
		/**
		* TODO
		**/
		fastForwardTooltip: string;
		/**
		* TODO
		**/
		isFastForwardDisabled: boolean;
		/**
		* TODO
		**/
		isFastForwardHidden: boolean;
		/**
		* TODO
		**/
		slowMotionIcon: string;
		/**
		* TODO
		**/
		slowMotionLabel: string;
		/**
		* TODO
		**/
		slowMotionTooltip: string;
		/**
		* TODO
		**/
		isSlowMotionDisabled: boolean;
		/**
		* TODO
		**/
		isSlowMotionHidden: boolean;
		/**
		* TODO
		**/
		skipPreviousIcon: string;
		/**
		* TODO
		**/
		skipPreviousLabel: string;
		/**
		* TODO
		**/
		skipPreviousTooltip: string;
		/**
		* TODO
		**/
		isSkipPreviousDisabled: boolean;
		/**
		* TODO
		**/
		isSkipPreviousHidden: boolean;
		/**
		* TODO
		**/
		skipNextIcon: string;
		/**
		* TODO
		**/
		skipNextLabel: string;
		/**
		* TODO
		**/
		skipNextTooltip: string;
		/**
		* TODO
		**/
		isSkipNextDisabled: boolean;
		/**
		* TODO
		**/
		isSkipNextHidden: boolean;
		/**
		* TODO
		**/
		skipBackIcon: string;
		/**
		* TODO
		**/
		skipBackLabel: string;
		/**
		* TODO
		**/
		skipBackTooltip: string;
		/**
		* TODO
		**/
		isSkipBackDisabled: boolean;
		/**
		* TODO
		**/
		isSkipBackHidden: boolean;
		/**
		* TODO
		**/
		skipAheadIcon: string;
		/**
		* TODO
		**/
		skipAheadLabel: string;
		/**
		* TODO
		**/
		skipAheadTooltip: string;
		/**
		* TODO
		**/
		isSkipAheadDisabled: boolean;
		/**
		* TODO
		**/
		isSkipAheadHidden: boolean;
		/**
		* TODO
		**/
		elapsedTime: number;
		/**
		* TODO
		**/
		elapsedTimeText: string;
		/**
		* TODO
		**/
		elapsedTimeLabel: string;
		/**
		* TODO
		**/
		elapsedTimeTooltip: string;
		/**
		* TODO
		**/
		isElapsedTimeDisabled: boolean;
		/**
		* TODO
		**/
		isElapsedTimeHidden: boolean;
		/**
		* TODO
		**/
		remainingTime: number;
		/**
		* TODO
		**/
		remainingTimeText: string;
		/**
		* TODO
		**/
		remainingTimeLabel: string;
		/**
		* TODO
		**/
		remainingTimeTooltip: string;
		/**
		* TODO
		**/
		isRemainingTimeDisabled: boolean;
		/**
		* TODO
		**/
		isRemainingTimeHidden: boolean;
		/**
		* TODO
		**/
		totalTime: number;
		/**
		* TODO
		**/
		totalTimeText: string;
		/**
		* TODO
		**/
		totalTimeLabel: string;
		/**
		* TODO
		**/
		totalTimeTooltip: string;
		/**
		* TODO
		**/
		isTotalTimeDisabled: boolean;
		/**
		* TODO
		**/
		isTotalTimeHidden: boolean;
		/**
		* TODO
		**/
		timelineLabel: string;
		/**
		* TODO
		**/
		timelineTooltip: string;
		/**
		* TODO
		**/
		isTimelineDisabled: boolean;
		/**
		* TODO
		**/
		isTimelineHidden: boolean;
		/**
		* TODO
		**/
		goLiveText: string;
		/**
		* TODO
		**/
		goLiveLabel: string;
		/**
		* TODO
		**/
		goLiveTooltip: string;
		/**
		* TODO
		**/
		isGoLiveDisabled: boolean;
		/**
		* TODO
		**/
		isGoLiveHidden: boolean;
		/**
		* TODO
		**/
		captionsIcon: string;
		/**
		* TODO
		**/
		captionsLabel: string;
		/**
		* TODO
		**/
		captionsTooltip: string;
		/**
		* TODO
		**/
		isCaptionsDisabled: boolean;
		/**
		* TODO
		**/
		audioIcon: string;
		/**
		* TODO
		**/
		audioLabel: string;
		/**
		* TODO
		**/
		audioTooltip: string;
		/**
		* TODO
		**/
		isAudioDisabled: boolean;
		/**
		* TODO
		**/
		isAudioHidden: boolean;
		/**
		* TODO
		**/
		volume: number;
		/**
		* TODO
		**/
		volumeMuteIcon: string;
		/**
		* TODO
		**/
		volumeMuteLabel: string;
		/**
		* TODO
		**/
		volumeMuteTooltip: string;
		/**
		* TODO
		**/
		isVolumeMuteDisabled: boolean;
		/**
		* TODO
		**/
		isVolumeMuteHidden: boolean;
		/**
		* TODO
		**/
		volumeIcon: string;
		/**
		* TODO
		**/
		volumeLabel: string;
		/**
		* TODO
		**/
		volumeTooltip: string;
		/**
		* TODO
		**/
		isVolumeDisabled: boolean;
		/**
		* TODO
		**/
		isVolumeHidden: boolean;
		/**
		* TODO
		**/
		muteIcon: string;
		/**
		* TODO
		**/
		muteLabel: string;
		/**
		* TODO
		**/
		muteTooltip: string;
		/**
		* TODO
		**/
		isMuteDisabled: boolean;
		/**
		* TODO
		**/
		isMuteHidden: boolean;
		/**
		* TODO
		**/
		fullScreenIcon: string;
		/**
		* TODO
		**/
		fullScreenLabel: string;
		/**
		* TODO
		**/
		fullScreenTooltip: string;
		/**
		* TODO
		**/
		isFullScreenDisabled: boolean;
		/**
		* TODO
		**/
		isFullScreenHidden: boolean;
		/**
		* TODO
		**/
		stopIcon: string;
		/**
		* TODO
		**/
		stopLabel: string;
		/**
		* TODO
		**/
		stopTooltip: string;
		/**
		* TODO
		**/
		isStopDisabled: boolean;
		/**
		* TODO
		**/
		isStopHidden: boolean;
		/**
		* TODO
		**/
		infoIcon: string;
		/**
		* TODO
		**/
		infoLabel: string;
		/**
		* TODO
		**/
		infoTooltip: string;
		/**
		* TODO
		**/
		isInfoDisabled: boolean;
		/**
		* TODO
		**/
		isInfoHidden: boolean;
		/**
		* TODO
		**/
		moreIcon: string;
		/**
		* TODO
		**/
		moreLabel: string;
		/**
		* TODO
		**/
		moreTooltip: string;
		/**
		* TODO
		**/
		isMoreDisabled: boolean;
		/**
		* TODO
		**/
		isMoreHidden: boolean;
		/**
		* TODO
		**/
		zoomIcon: string;
		/**
		* TODO
		**/
		zoomLabel: string;
		/**
		* TODO
		**/
		zoomTooltip: string;
		/**
		* TODO
		**/
		isZoomDisabled: boolean;
		/**
		* TODO
		**/
		isZoomHidden: boolean;
		/**
		* TODO
		**/
		signalStrength: number;
		/**
		* TODO
		**/
		signalStrengthLabel: string;
		/**
		* TODO
		**/
		signalStrengthTooltip: string;
		/**
		* TODO
		**/
		isSignalStrengthDisabled: boolean;
		/**
		* TODO
		**/
		isSignalStrengthHidden: boolean;
		/**
		* TODO
		**/
		mediaQuality: MediaQuality;
		/**
		* TODO
		**/
		mediaQualityLabel: string;
		/**
		* TODO
		**/
		mediaQualityTooltip: string;
		/**
		* TODO
		**/
		isMediaQualityDisabled: boolean;
		/**
		* TODO
		**/
		isMediaQualityHidden: boolean;
		/**
		* TODO
		**/
		visualMarkers: Array<any>;
		/**
		* TODO
		**/
		thumbnailImageSrc: string;
		/**
		* TODO
		**/
		isThumbnailVisible: boolean;
		/**
		* TODO
		**/
		mediaMetadata: Object;


		uninitialize(): void;
		playPause(e?: any): void;
		playResume(): void;
		pause(): void;
		replay(): void;
		rewind(): void;
		fastForward(): void;
		slowMotion(): void;
		skipPrevious(): void;
		skipNext(): void;
		skipBack(): void;
		skipAhead(): void;
		startScrub(time: number): void;
		updateScrub(time: number): void;
		completeScrub(time: number): void;
		goLive(): void;
		setVolume(volume: number): void;
		toggleMutted(): void;
		toggleFullScreen(): void;
		stop(): void;
		info(): void;
		more(): void;
		toggleZoom(): void;
		captions(): void;
		audio(): void;
		onTimelineSliderStart(e: any): void;
		onTimelineSliderUpdate(e: any): void;
		onTimelineSliderComplete(e: any): void;
		onTimelineSliderSkipToMarker(e: any): void;
		onVolumeSliderUpdate(e: any): void;
		onVolumeMuteClick(e: any): void;
		onVolumeMuteFocus(e: any): void;
		onVolumeMuteSliderUpdate(e: any): void;
		onVolumeMuteSliderFocusIn(e: any): void;
		onVolumeMuteSliderFocusOut(e: any): void;
		onVolumeMuteSliderMSPointerOver(e: any): void;
		onVolumeMuteSliderMSPointerOut(e: any): void;
		onVolumeMuteSliderTransitionEnd(e: any): void;
	}

	/**
	*
	**/
	class MediaPlayer {
		constructor(element: HTMLElement, options?: any);
		/**
		* Gets or sets the current advertising state of the player.
		**/
		advertisingState: AdvertisingState;
		/**
		* Gets the audio tracks for the current media source.
		**/
		audioTracks: Array<any>;

		/**
		* Gets or sets a value that indicates whether to automatically start buffering the current media source.
		**/
		autobuffer: boolean;
		/**
		* Gets or sets a value that specifies whether interactive elements(e.g.the control panel) will be hidden automatically.
		**/
		autohide: boolean;
		/**
		* Gets or sets the behavior of the autohide feature.
		**/
		autohideBehavior: AutohideBehavior;
		/**
		* Gets or sets the amount of time (in seconds) before interactive elements(e.g.the control panel) will be hidden automatically.
		**/
		autohideTime: number;
		/**
		* Gets or sets a value that specifies whether to start loading the current media source automatically.
		**/
		autoload: boolean;
		/**
		* Gets or sets a value that specifies whether to automatically start playing the current media source.
		**/
		autoplay: boolean;
		/**
		* Gets the buffered time ranges for the current media source.
		**/
		buffered: Array<any>; //TODO: (type: TimeRanges, read - only)
		/**
		* Gets the caption and subtitle tracks for the current media source.
		**/
		captionTracks: Array<any>;
		/**
		* Gets or sets a value that specifies whether to display the native controls for the current media source.
		**/
		controls: boolean;
		/**
		* Gets or sets the current audio track.
		**/
		currentAudioTrack: any; //TODO: (type: AudioTrack, read / write)
		/**
		* Gets or sets the current caption / subtitle track.
		**/
		currentCaptionTrack: any; //TODO: (type: TextTrack, read / write)
		/**
		* Gets the URL of the current media source.
		**/
		currentSrc: string;
		/**
		* Gets or sets the current playback position (in seconds).
		**/
		currentTime: number;
		/**
		* Gets the view model that will be restored following a temporary change to the current interactive view model(e.g.during an ad).
		**/
		defaultInteractiveViewModel: InteractiveViewModel;
		/**
		* Gets or sets the playback rate to use when play is resumed.
		**/
		defaultPlaybackRate: number;
		/**
		* Gets the duration (in seconds) of the current media source.
		**/
		duration: number;
		/**
		* Gets the host element for the control.
		**/
		element: HTMLElement;
		/**
		* Gets a value that specifies whether playback has ended.
		**/
		ended: boolean;
		/**
		* Gets or sets the end time (in seconds) of the current media source.This is useful in live streaming scenarios.
		**/
		endTime: number;
		/**
		* Gets the current error state of the player.
		**/
		error: MediaError;
		/**
		* Gets or sets the height of the host element.
		**/
		height: string;
		/**
		* Gets the earliest possible position (in seconds) that playback can begin.
		**/
		initialTime: number;
		/**
		* Gets or sets the type of interactions that will cause interactive elements(e.g.the control panel) to be shown.
		**/
		interactiveActivationMode: InteractionType;
		/**
		* Gets or sets the type of interactions that will cause interactive elements(e.g.the control panel) to be hidden.
		**/
		interactiveDeactivationMode: InteractionType;
		/**
		* Gets or sets the view model that interactive elements are bound to(e.g.the control panel).
		**/
		interactiveViewModel: InteractiveViewModel;
		/**
		* Gets a value that specifies whether interaction with the audio control is allowed based on the current state of the player.
		**/
		isAudioAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the audio control is enabled.
		**/
		isAudioEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the audio control is visible.
		**/
		isAudioVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the captions control is allowed based on the current state of the player.
		**/
		isCaptionsAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the captions control is enabled.
		**/
		isCaptionsEnabled: boolean; //TODO: READ-ONLY
		/**
		* Gets or sets a value that specifies whether the captions control is visible.
		**/
		isCaptionsVisible: boolean;
		/**
		* Gets a value that specifies whether the current playback position is "live".
		**/
		isCurrentTimeLive: boolean;
		/**
		* Gets a value that specifies whether interaction with the elapsed time control is allowed based on the current state of the player.
		**/
		isElapsedTimeAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the elapsed time control is enabled.
		**/
		isElapsedTimeEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the elapsed time control is visible.
		**/
		isElapsedTimeVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the fast forward control is allowed based on the current state of the player.
		**/
		isFastForwardAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the fast forward control is enabled.
		**/
		isFastForwardEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the fast forward control is visible.
		**/
		isFastForwardVisible: boolean;
		/**
		* Gets or sets a value that specifies whether the player is in full screen mode.
		**/
		isFullScreen: boolean;
		/**
		* Gets a value that specifies whether interaction with the full screen control is allowed based on the current state of the player.
		**/
		isFullScreenAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the full screen control is enabled.
		**/
		isFullScreenEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the full screen control is visible.
		**/
		isFullScreenVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the go live control is allowed based on the current state of the player.
		**/
		isGoLiveAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the go live control is enabled.
		**/
		isGoLiveEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the go live control is visible.
		**/
		isGoLiveVisible: boolean;
		/**
		* Gets or sets a value that specifies whether the player is currently in interactive mode(e.g.showing the control panel).
		**/
		isInteractive: boolean;
		/**
		* Gets a value that specifies whether the current media source is a live stream.
		**/
		isLive: boolean;
		/**
		* Gets a value that specifies whether interaction with the media quality control is allowed based on the current state of the player.
		**/
		isMediaQualityAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the media quality control is enabled.
		**/
		isMediaQualityEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the media quality control is visible.
		**/
		isMediaQualityVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the mute control is allowed based on the current state of the player.
		**/
		isMuteAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the mute control is enabled.
		**/
		isMuteEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the mute control is visible.
		**/
		isMuteVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the pause control is allowed based on the current state of the player.
		**/
		isPauseAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the pause control is enabled.
		**/
		isPauseEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the pause control is visible.
		**/
		isPauseVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the play / pause control is allowed based on the current state of the player.
		**/
		isPlayPauseAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the play / pause control is enabled.
		**/
		isPlayPauseEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the play / pause control is visible.
		**/
		isPlayPauseVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the play / resume control is allowed based on the current state of the player.
		**/
		isPlayResumeAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the play / resume control is enabled.
		**/
		isPlayResumeEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the play / resume control is visible.
		**/
		isPlayResumeVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the remaining time control is allowed based on the current state of the player.
		**/
		isRemainingTimeAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the remaining time control is enabled.
		**/
		isRemainingTimeEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the remaining time control is visible.
		**/
		isRemainingTimeVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the replay control is allowed based on the current state of the player.
		**/
		isReplayAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the replay control is enabled.
		**/
		isReplayEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the replay control is visible.
		**/
		isReplayVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the rewind control is allowed based on the current state of the player.
		**/
		isRewindAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the rewind control is enabled.
		**/
		isRewindEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the rewind control is visible.
		**/
		isRewindVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the signal strength control is allowed based on the current state of the player.
		**/
		isSignalStrengthAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the signal strength control is enabled.
		**/
		isSignalStrengthEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the signal strength control is visible.
		**/
		isSignalStrengthVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the skip ahead control is allowed based on the current state of the player.
		**/
		isSkipAheadAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the skip ahead control is enabled.
		**/
		isSkipAheadEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the skip ahead control is visible.
		**/
		isSkipAheadVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the skip back control is allowed based on the current state of the player.
		**/
		isSkipBackAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the skip back control is enabled.
		**/
		isSkipBackEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the skip back control is visible.
		**/
		isSkipBackVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the skip next control is allowed based on the current state of the player.
		**/
		isSkipNextAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the skip next control is enabled.
		**/
		isSkipNextEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the skip next control is visible.
		**/
		isSkipNextVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the skip previous control is allowed based on the current state of the player.
		**/
		isSkipPreviousAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the skip previous control is enabled.
		**/
		isSkipPreviousEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the skip previous control is visible.
		**/
		isSkipPreviousVisible: boolean;
		/**
		* Gets or sets a value that specifies whether the player is playing in slow motion.
		**/
		isSlowMotion: boolean;
		/**
		* Gets a value that specifies whether interaction with the slow motion control is allowed based on the current state of the player.
		**/
		isSlowMotionAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the slow motion control is enabled.
		**/
		isSlowMotionEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the slow motion control is visible.
		**/
		isSlowMotionVisible: boolean;
		/**
		* Gets or sets a value that specifies whether the start time is offset.
		**/
		isStartTimeOffset: boolean;
		/**
		* Gets a value that specifies whether interaction with the timeline control is allowed based on the current state of the player.
		**/
		isTimelineAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the timeline control is enabled.
		**/
		isTimelineEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the timeline control is visible.
		**/
		isTimelineVisible: boolean;
		/**
		* Gets a value that specifies whether interaction with the volume control is allowed based on the current state of the player.
		**/
		isVolumeAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the volume control is enabled.
		**/
		isVolumeEnabled: boolean;
		/**
		* Gets a value that specifies whether interaction with the volume / mute control is allowed based on the current state of the player.
		**/
		isVolumeMuteAllowed: boolean;
		/**
		* Gets or sets a value that specifies whether the volume / mute control is enabled.
		**/
		isVolumeMuteEnabled: boolean;
		/**
		* Gets or sets a value that specifies whether the volume / mute control is visible.
		**/
		isVolumeMuteVisible: boolean;
		/**
		* Gets or sets a value that specifies whether the volume control is visible.
		**/
		isVolumeVisible: boolean;
		/**
		* Gets or sets the live position (in seconds).
		**/
		liveTime: number;
		/**
		* Gets or sets the live buffer time (in seconds) for the current playback position to be considered "live".
		**/
		liveTimeBuffer: number;
		/**
		* Gets or sets a value that specifies whether playback should be restarted after it ends.
		**/
		loop: boolean;
		/**
		* Gets the media element associated with the player.
		**/
		mediaElement: HTMLMediaElement;
		/**
		* Gets or sets the media extension manager to be used by the player and its plugins.A new instance will be created on first use if one is not already set.
		**/
		mediaExtensionManager: Windows.Media.MediaExtensionManager;
		/**
		* Gets or sets the quality of the current media source.
		**/
		mediaQuality: MediaQuality;
		/**
		* Gets or sets a value that specifies the purpose of the media, such as background audio or alerts.
		**/
		msAudioCategory: string;
		/**
		* Gets or sets a value that specifies the output device ID that the audio will be sent to.
		**/
		msAudioDeviceType: string;
		/**
		* Gets or sets a value that specifies whether the media is flipped horizontally.
		**/
		msHorizontalMirror: boolean;
		/**
		* Gets a value that specifies whether the media can be rendered more efficiently.
		**/
		msIsLayoutOptimalForPlayback: boolean;
		/**
		* Gets a value that specifies whether the system considers the media to be stereo 3D.
		**/
		msIsStereo3D: boolean;
		/**
		* Gets or sets a value that specifies whether the DLNA PlayTo device is available.
		**/
		msPlayToDisabled: boolean;
		/**
		* Gets or sets the primary DLNA PlayTo device.
		**/
		msPlayToPrimary: boolean;
		/**
		* Gets the media source for use by the PlayToManager.
		**/
		msPlayToSource: Object;
		/**
		* Gets or sets a value that specifies whether or not to enable low - latency playback.
		**/
		msRealTime: boolean;
		/**
		* Gets or sets the frame - packing mode for stereo 3D video content.
		**/
		msStereo3DPackingMode: string;
		/**
		* Gets or sets a value that specifies whether the system display is set to stereo display.
		**/
		msStereo3DRenderMode: string;
		/**
		* Gets or sets a value that specifies whether the video frame is trimmed to fit the display.
		**/
		msZoom: boolean;
		/**
		* Gets or sets a value that indicates whether the audio is muted.
		**/
		muted: boolean;
		/**
		* Gets the current network state for the player.
		**/
		networkState: NetworkState;
		/**
		* Gets a value that specifies whether playback is paused.
		**/
		paused: boolean;
		/**
		* Gets or sets the playback rate for the current media source.
		**/
		playbackRate: number;
		/**
		* Gets the played time ranges for the current media source.
		**/
		played: Array<any>; //TODO: (type: TimeRanges, read - only)
		/**
		* Gets the playlist plugin.
		**/
		playlistPlugin: Plugins.PlaylistPlugin;
		/**
		* Gets or sets the current state of the player.
		**/
		playerState: PlayerState;
		/*
		* Gets the plugins associated with the player.
		**/
		plugins: Array<any>; //TODO: (type: ?, read - only)
		/*
		* Gets or sets the URL of an image to display while the current media source is loading.
		**/
		poster: string;
		/**
		** Gets or sets a hint to how much buffering is advisable for the current media source.
		**/
		preload: string;
		/**
		* Gets the current readiness state of the player.
		**/
		readyState: ReadyState;
		/**
		* Gets or sets the amount of time (in seconds) to offset the current playback position during replay.
		**/
		replayOffset: number;
		/**
		* Gets a value that specifies whether the player is currently moving to a new playback position due to a scrub operation.
		**/
		scrubbing: boolean; //TODO: (type: Boolean, read - only)
		/**
		* Gets the seekable time ranges of the current media source.
		**/
		seekable: any; //TODO: (type: TimeRanges, read - only)
		/**
		* Gets a value that specifies whether the player is currently moving to a new playback position due to a seek operation.
		**/
		seeking: boolean; //TODO: (type: Boolean, read - only)
		/**
		* Gets or sets a value that specifies whether the current video frame should be updated during a scrub operation.
		**/
		seekWhileScrubbing: boolean;
		/**
		* Gets or sets the signal strength of the current media source.This is useful in adaptive streaming scenarios.
		**/
		signalStrength: number;
		/**
		* Gets or sets the amount of time (in seconds) that the skip ahead control will seek forward.
		**/
		skipAheadInterval: number;
		/**
		* Gets or sets the amount of time (in seconds) that the skip back control will seek backward.
		**/
		skipBackInterval: number;
		/**
		* Gets or sets the playback rate to use when in slow motion.
		**/
		slowMotionPlaybackRate: number;
		/**
		* Gets or sets the media sources to be considered.
		**/
		sources: Array<any>; //TODO: (type: Array, read / write)
		/**
		* Gets or sets the URL of the current media source to be considered.
		**/
		src: string;
		/**
		* Gets or sets the start time (in seconds) of the current media source.This is useful in live streaming scenarios.
		**/
		startTime: number;
		/**
		* Gets or sets the position (in seconds) where playback should start.This is useful for resuming a video where the user left off in a previous session.
		**/
		startupTime: number;
		/**
		* Gets or sets whether a test for the media feature pack should be performed prior to allowing content to be laoded.This is useful to enable if Windows 8 N / KN users will be using this app.
		**/
		testForMediaPack: boolean;
		/**
		* Gets the text tracks for the current media source.
		**/
		textTracks: any; // TODO: (type: TextTrackList, read - only)
		/**
		* Gets or sets the tracks for the player.
		**/
		tracks: Array<any>; // TODO: (type: Array, read / write)
		/**
		* Gets the intrinsic height of the current video (in pixels).
		**/
		videoHeight: number;
		/**
		* Gets the intrinsic width of the current video (in pixels).
		**/
		videoWidth: number;
		/**
		* Gets or sets the volume level(from 0 to 1) for the audio portions of media playback.
		**/
		volume: number;
		/**
		* Gets or sets the width of the host element.
		**/
		width: string;

		/* Methods */

		/**
		* Adds the specified CSS class to the host element.
		* @param name The name of the class to add. Multiple classes can be added using space-delimited names.
		**/
		addClass(name: string): void;
		/**
		* Adds an event listener for the MediaPlayer events.
		* //TODO
		* @param type The type (name) of the event. You can use any of the following: "".
		* @param listener The listener to invoke when the event is raised.
		* @param capture true to initiate capture, otherwise false.
		**/
		addEventListener(type: string, listener: Function, capture?: boolean): void;
		/**
		* Create a new TextTrack object to add to an HTML5 video.
		* @param kind String The type of text track
		* @param label String A user readable title for a text track
		* @param language String The BCP47 language tag of the track. For example "en" for English or "fr" for French
		**/
		addTextTrack(kind: string, label?: string, language?: string): void;
		/**
		* Raises the audioinvoked event used to indicate that an audio selection dialog should be presented to the user (usually in the form of a flyout).
		**/
		audio(): void;
		/**
		* Returns a value that specifies whether the player can play a given media type.
		* @param type The type of media to be played.
		* @returns One of the following values: "probably", "maybe", or an empty string if the media cannot be rendered.
		**/
		canPlayType(type: string): string;
		/**
		* Raises the captionsinvoked event used to indicate that closed options should be toggled on/off or that a caption selection dialog should be presented to the user (usually in the form of a flyout).
		**/
		captions(): void;
		/**
		* Decreases the current playback rate by a factor of two.After the rate reaches 1(normal speed), it will flip to - 1, and then begins to rewind.
		**/
		decreasePlaybackRate(): void;
		/**
		* Shuts down and releases all resources.
		**/
		dispose(): void;
		/**
		* Gives focus to the host element.
		**/
		focus(): void;
		/**
		* Increases the current playback rate by a factor of two.After the rate reaches - 1, it flips to 1(normal speed), and then begins to fast forward.
		**/
		increasePlaybackRate(): void;
		/**
		* Raises the infoinvoked event used to indicate that more information about the current media should be displayed to the user.
		**/
		info(): void;
		/**
		* Reloads the current media source.
		**/
		load(): void;
		/**
		* Raises the moreinvoked event typically used to indicate that more options that were unable to fit in the control panel should be presented to the user (usually in the form of a flyout).
		**/
		more(): void;
		/**
		* Clears all effects from the media pipeline.
		**/
		msClearEffects(): void;
		/**
		* Steps the video forward or backward by one frame.
		* @param forward If true, the video is stepped forward, otherwise the video is stepped backward.
		**/
		msFrameStep(forward: boolean): void;
		/**
		* Inserts the specified audio effect into the media pipeline.
		* @param activatableClassId The audio effects class.
		* @param effectRequired
		* @param config
		**/
		msInsertAudioEffect(activatableClassId: string, effectRequired: boolean, config: Object): void;
		/**
		* Inserts the specified video effect into the media pipeline.
		* @param activatableClassId The video effects class.
		* @param effectRequired
		* @param config
		**/
		msInsertVideoEffect(activatableClassId: string, effectRequired: boolean, config: Object): void
		/**
		* Sets the MSMediaKeys to be used for decrypting media data.
		* @param mediaKeys The media keys to use for decrypting media data.
		**/
		msSetMediaKeys(mediaKeys: MSMediaKeys): void;
		/**
		* Sets the media protection manager for a given media pipeline.
		* @param mediaProtectionManager
		**/
		msSetMediaProtectionManager(mediaProtectionManager: Windows.Media.Protection.MediaProtectionManager): void;
		/**
		* Sets the dimensions of a sub - rectangle within a video.
		* @param left The left position of the rectangle.
		* @param top The top position of the rectangle.
		* @param right The right position of the rectangle.
		* @param bottom The bottom position of the rectangle.
		**/
		msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;
		/**
		* Pauses playback of the current media source.
		**/
		pause(): void;
		/**
		* Loads and starts playback of the current media source.
		**/
		play(): void;
		/**
		* Resets the playback rate and resumes playing the current media source.
		**/
		playResume(): void;
		/**
		* Removes the specified CSS class from the host element.
		* @param name The name of the class to remove. Multiple classes can be removed using space-delimited names.
		**/
		removeClass(name: string): void;
		/**
		* Removes an event listener from the media player control.
		* @param type The type (name) of the event. You can use any of the following: "". //TODO
		* @param eventHandler The listener to remove.
		**/
		removeEventListener(eventName: string, eventHandler: Function): void;
		/**
		* Supports instant replay by applying an offset to the current playback position.
		**/
		replay(): void;
		/**
		* Reloads the current media source and resumes where playback was left off.
		**/
		retry(): void;
		/**
		* Stops playback and raises the stopped event.
		**/
		stop(): void;
		/**
		* Updates the player and its plugins with the specified media source(e.g.the current playlist item).
		* @param mediaSource A JSON object containing the set of options that represent a media source.
		**/
		update(mediaSource: Object): void;
	}

	class DynamicTextTrack {
		stream: any;
		label: string;
		language: string;
		augmentPayload(payload: any, startTime: number, endTime: number): void;
	}

	namespace UI {
		class Button {
			element: HTMLElement;
			type: string;
			content: string;
			hoverContent: string;
			label: string;
			tooltip: string;
			disabled: boolean;
			hidden: boolean;
			flyout: Element;
		}

		class ControlPanel {
			element: HTMLElement;
			hidden: boolean;
			isPlayPauseHidden: boolean;
			isPlayResumeHidden: boolean;
			isPauseHidden: boolean;
			isReplayHidden: boolean;
			isRewindHidden: boolean;
			isFastForwardHidden: boolean;
			isSlowMotionHidden: boolean;
			isSkipPreviousHidden: boolean;
			isSkipNextHidden: boolean;
			isSkipBackHidden: boolean;
			isSkipAheadHidden: boolean;
			isElapsedTimeHidden: boolean;
			isRemainingTimeHidden: boolean;
			isTotalTimeHidden: boolean;
			isTimelineHidden: boolean;
			isGoLiveHidden: boolean;
			isCaptionsHidden: boolean;
			isAudioHidden: boolean;
			isVolumeMuteHidden: boolean;
			isVolumeHidden: boolean;
			isMuteHidden: boolean;
			isFullScreenHidden: boolean;
			isStopHidden: boolean;
			isInfoHidden: boolean;
			isMoreHidden: boolean;
			isZoomHidden: boolean;
			isSignalStrengthHidden: boolean;
			isMediaQualityHidden: boolean;
			flyoutContainerElement: HTMLElement;
		}

		class Indicator {
			element: HTMLElement;
			value: string;
			label: string;
			tooltip: string;
			disabled: boolean;
			hidden: boolean;
		}

		class Meter {
			element: HTMLElement;
			value: number;
			label: string;
			tooltip: string;
			disabled: boolean;
			hidden: boolean;
		}

		class Slider {
			element: HTMLElement;
			min: number;
			max: number;
			value: number;
			progress: number;
			step: number;
			altStep1: number;
			altStep2: number;
			altStep3: number;
			label: string;
			tooltip: string;
			vertical: boolean;
			disabled: boolean;
			hidden: boolean;
			markers: Array<any>;
			thumbnailImageSrc: string;
			isThumbnailVisible: boolean;
		}


	}
}

declare namespace PlayerFramework.Advertising {
	interface AdvertisementBase {
		source: any;
	}

	class PrerollAdvertisement implements AdvertisementBase {
		source: any;
	}

	class MidrollAdvertisement implements AdvertisementBase {
		source: any;
		time: number;
		timePercentage: number;
	}
}


declare namespace Microsoft.VideoAdvertising {
	class VastAdPayloadHandler {
		static adType: string;
	}

	class Extensions {
		static defaultUserAgent: string;
	}
}

declare namespace Microsoft.PlayerFramework.Js.Advertising {
	/**
	* Provides an ad source that requires a Url to be downloaded and turned into a stream before passing to the ad handler.
	**/
	class RemoteAdSource {

	}
}
