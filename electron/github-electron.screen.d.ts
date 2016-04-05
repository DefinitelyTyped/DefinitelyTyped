// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.event-emitter.d.ts" />

declare namespace Electron {
	/**
	 * The Display object represents a physical display connected to the system.
	 * A fake Display may exist on a headless system, or a Display may correspond to a remote, virtual display.
	 */
	interface Display {
		/**
		 * Unique identifier associated with the display.
		 */
		id: number;
		bounds: Bounds;
		workArea: Bounds;
		size: Dimension;
		workAreaSize: Dimension;
		/**
		 * Output device’s pixel scale factor.
		 */
		scaleFactor: number;
		/**
		 * Can be 0, 1, 2, 3, each represents screen rotation in clock-wise degrees of 0, 90, 180, 270.
		 */
		rotation: number;
		touchSupport: 'available' | 'unavailable' | 'unknown';
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

	type DisplayMetrics = 'bounds' | 'workArea' | 'scaleFactor' | 'rotation';

	/**
	 * The screen module retrieves information about screen size, displays, cursor position, etc.
	 * You should not use this module until the ready event of the app module is emitted.
	 */
	class Screen extends EventEmitter {
		/**
		 * Emitted when newDisplay has been added.
		 */
		on(event: 'display-added', listener: (event: Event, newDisplay: Display) => void): this;
		/**
		 * Emitted when oldDisplay has been removed.
		 */
		on(event: 'display-removed', listener: (event: Event, oldDisplay: Display) => void): this;
		/**
		 * Emitted when one or more metrics change in a display.
		 */
		on(event: 'display-metrics-changed', listener: (event: Event, display: Display, changedMetrics: DisplayMetrics[]) => void): this;
		on(event: string, listener: Function): this;
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
