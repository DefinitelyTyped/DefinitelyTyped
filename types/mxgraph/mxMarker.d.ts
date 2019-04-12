/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
declare namespace mxgraph {
	export class mxMarker {
		/**
		 * Class: mxMarker
		 * 
		 * A static class that implements all markers for VML and SVG using a
		 * registry. NOTE: The signatures in this class will change.
		 * 
		 * Variable: markers
		 * 
		 * Maps from markers names to functions to paint the markers.
		 */
		static markers: Map<string, Function>;

		/**
		 * Function: addMarker
		 * 
		 * Adds a factory method that updates a given endpoint and returns a
		 * function to paint the marker onto the given canvas.
		 */
		static addMarker(type: string, funct: Function);
		/**
		 * Function: createMarker
		 * 
		 * Returns a function to paint the given marker.
		 */
		static createMarker(canvas, shape, type, pe, unitX, unitY, size, source, sw, filled);

	}
}