// Type definitions for Leaflet.areaSelect 0.1
// Project: https://github.com/heyman/leaflet-areaselect
// Definitions by: André Wallat <https://github.com/awallat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {
  function areaSelect(box: AreaSelectOptions): AreaSelect;

  interface AreaSelectOptions {
    width?: number;
    height?: number;
    keepAspectRatio?: boolean;
  }

  interface Dimension {
    width: number;
    height: number;
  }

  interface AreaSelect {
    addTo(map: Map): L.Map;
    getBounds(): LatLngBounds;
    remove(): void;
    setDimensions(dim: Dimension): void;
  }
}
