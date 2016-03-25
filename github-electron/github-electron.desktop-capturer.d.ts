// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {

	interface DesktopCapturer {
		getSources(options: any, callback: (error: Error, sources: DesktopCapturerSource[]) => any): void;
	}

	interface DesktopCapturerOptions {
		types?: string[];
		thumbnailSize?: {
			width: number;
			height: number;
		};
	}

	interface DesktopCapturerSource {
		id: string;
		name: string;
		thumbnail: NativeImage;
	}
}
