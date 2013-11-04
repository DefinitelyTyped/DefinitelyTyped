/**
  * Forces Leaflet to use the Canvas back-end (if available) for vector layers 
  * instead of SVG. This can increase performance considerably in some cases 
  * (e.g. many thousands of circle markers on the map).
  */
declare var L_PREFER_CANVAS: boolean;

/**
  * Forces Leaflet to not use touch events even if it detects them.
  */
declare var L_NO_TOUCH: boolean;

/**
  * Forces Leaflet to not use hardware-accelerated CSS 3D transforms for positioning 
  * (which may cause glitches in some rare environments) even if they're supported.
  */
declare var L_DISABLE_3D: boolean;
