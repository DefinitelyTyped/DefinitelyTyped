// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare namespace Electron {
	/**
	 * This class is used to represent an image.
	 */
	class NativeImage {
		/**
		 * Creates an empty NativeImage instance.
		 */
		static createEmpty(): NativeImage;
		/**
		 * Creates a new NativeImage instance from file located at path.
		 */
		static createFromPath(path: string): NativeImage;
		/**
		 * Creates a new NativeImage instance from buffer.
		 * @param scaleFactor 1.0 by default.
		 */
		static createFromBuffer(buffer: Buffer, scaleFactor?: number): NativeImage;
		/**
		 * Creates a new NativeImage instance from dataURL
		 */
		static createFromDataURL(dataURL: string): NativeImage;
		/**
		 * @returns Buffer Contains the image's PNG encoded data.
		 */
		toPng(): Buffer;
		/**
		 * @returns Buffer Contains the image's JPEG encoded data.
		 */
		toJpeg(quality: number): Buffer;
		/**
		 * @returns string The data URL of the image.
		 */
		toDataURL(): string;
		/**
		 * @returns boolean Whether the image is empty.
		 */
		isEmpty(): boolean;
		/**
		 * @returns {} The size of the image.
		 */
		getSize(): any;
		/**
		 * Marks the image as template image.
		 */
		setTemplateImage(option: boolean): void;
		/**
		 * Returns a boolean whether the image is a template image.
		 */
		isTemplateImage(): boolean;
	}
}
