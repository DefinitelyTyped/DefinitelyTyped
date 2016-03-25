// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.event-emitter.d.ts" />

declare namespace Electron {

	interface Display {
		id: number;
		bounds: Bounds;
		workArea: Bounds;
		size: Dimension;
		workAreaSize: Dimension;
		scaleFactor: number;
		rotation: number;
		touchSupport: string;
	}

	interface Bounds {
		x: number;
		y: number;
		width: number;
		height: number;
	}

	interface Dimension {
		width: number;
		height: number;
	}

	interface Point {
		x: number;
		y: number;
	}

	class Screen extends EventEmitter {
		/**
		 * @returns The current absolute position of the mouse pointer.
		 */
		getCursorScreenPoint(): Point;
		/**
		 * @returns The primary display.
		 */
		getPrimaryDisplay(): Display;
		/**
		 * @returns An array of displays that are currently available.
		 */
		getAllDisplays(): Display[];
		/**
		 * @returns The display nearest the specified point.
		 */
		getDisplayNearestPoint(point: Point): Display;
		/**
		 * @returns The display that most closely intersects the provided bounds.
		 */
		getDisplayMatching(rect: Bounds): Display;
	}
}
