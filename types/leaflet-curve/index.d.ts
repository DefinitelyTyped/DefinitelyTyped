// Type definitions for leaflet-curve 0.1
// Project: https://github.com/onikiienko/Leaflet.curve
// Definitions by: Onikiienko <https://github.com/onikiienko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as L from 'leaflet';

declare module 'leaflet' {
	/**
	 * Drawing Bezier curves and other complex shapes.
	 */
	function curve(path: any[], options?: PathOptions): Path;
}
