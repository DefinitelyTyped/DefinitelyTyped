// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {
	/**
	 * The desktopCapturer module can be used to get available sources
	 * that can be used to be captured with getUserMedia.
	 */
	interface DesktopCapturer {
		/**
		 * Starts a request to get all desktop sources.
		 *
		 * Note: There is no guarantee that the size of source.thumbnail is always
		 * the same as the thumnbailSize in options. It also depends on the scale of the screen or window.
		 */
		getSources(options: any, callback: (error: Error, sources: DesktopCapturerSource[]) => any): void;
	}

	interface DesktopCapturerOptions {
		/**
		 * The types of desktop sources to be captured.
		 */
		types?: ('screen' | 'window')[];
		/**
		 * The suggested size that thumbnail should be scaled.
		 * Default: {width: 150, height: 150}
		 */
		thumbnailSize?: {
			width: number;
			height: number;
		};
	}

	interface DesktopCapturerSource {
		/**
		 * The id of the captured window or screen used in navigator.webkitGetUserMedia.
		 * The format looks like window:XX or screen:XX where XX is a random generated number.
		 */
		id: string;
		/**
		 * The described name of the capturing screen or window.
		 * If the source is a screen, the name will be Entire Screen or Screen <index>;
		 * if it is a window, the name will be the window’s title.
		 */
		name: string;
		/**
		 * A thumbnail image.
		 */
		thumbnail: NativeImage;
	}
}
