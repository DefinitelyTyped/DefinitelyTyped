// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {
	/**
	 * The clipboard module provides methods to perform copy and paste operations.
	 */
	interface Clipboard {
		/**
		 * @returns The contents of the clipboard as plain text.
		 */
		readText(type?: ClipboardType): string;
		/**
		 * Writes the text into the clipboard as plain text.
		 */
		writeText(text: string, type?: ClipboardType): void;
		/**
		 * @returns The contents of the clipboard as markup.
		 */
		readHtml(type?: ClipboardType): string;
		/**
		 * Writes markup to the clipboard.
		 */
		writeHtml(markup: string, type?: ClipboardType): void;
		/**
		 * @returns The contents of the clipboard as a NativeImage.
		 */
		readImage(type?: ClipboardType): NativeImage;
		/**
		 * Writes the image into the clipboard.
		 */
		writeImage(image: NativeImage, type?: ClipboardType): void;
		/**
		 * @returns The contents of the clipboard as RTF.
		 */
		readRtf(type?: ClipboardType): string;
		/**
		 * Writes the text into the clipboard in RTF.
		 */
		writeRtf(text: string, type?: ClipboardType): void;
		/**
		 * Clears everything in clipboard.
		 */
		clear(type?: ClipboardType): void;
		/**
		 * @returns Array available formats for the clipboard type.
		 */
		availableFormats(type?: ClipboardType): string[];
		/**
		 * Returns whether the clipboard supports the format of specified data.
		 * Note: This API is experimental and could be removed in future.
		 * @returns Whether the clipboard has data in the specified format.
		 */
		has(format: string, type?: ClipboardType): boolean;
		/**
		 * Reads the data in the clipboard of the specified format.
		 * Note: This API is experimental and could be removed in future.
		 */
		read(format: string, type?: ClipboardType): any;
		/**
		 * Writes data to the clipboard.
		 */
		write(data: {
			text?: string;
			rtf?: string;
			html?: string;
			image?: NativeImage;
		}, type?: ClipboardType): void;
	}

	type ClipboardType = '' | 'selection';
}
