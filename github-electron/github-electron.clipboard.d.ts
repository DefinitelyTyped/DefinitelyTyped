// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {

	interface Clipboard {
		/**
		 * @returns The contents of the clipboard as plain text.
		 */
		readText(type?: string): string;
		/**
		 * Writes the text into the clipboard as plain text.
		 */
		writeText(text: string, type?: string): void;
		/**
		 * @returns The contents of the clipboard as a NativeImage.
		 */
		readImage(type?: string): NativeImage;
		/**
		 * Writes the image into the clipboard.
		 */
		writeImage(image: NativeImage, type?: string): void;
		/**
		 * Clears everything in clipboard.
		 */
		clear(type?: string): void;
		/**
		 * Note: This API is experimental and could be removed in future.
		 * @returns Whether the clipboard has data in the specified format.
		 */
		has(format: string, type?: string): boolean;
		/**
		 * Reads the data in the clipboard of the specified format.
		 * Note: This API is experimental and could be removed in future.
		 */
		read(format: string, type?: string): any;
	}
}
