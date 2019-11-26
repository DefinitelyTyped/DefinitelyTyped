// Type definitions for mapbox-gl-leaflet 0.0
// Project: https://github.com/mapbox/mapbox-gl-leaflet
// Definitions by: Alexey Gorshkov <https://github.com/agorshkov23>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
  class MapboxGL extends Layer {
    constructor(options: MapboxGLOptions);
  }

  function mapboxGL(options: MapboxGLOptions): MapboxGL;

  interface MapboxGLOptions {
    accessToken: string;
    style: string;
  }
}
