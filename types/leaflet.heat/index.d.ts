// Type definitions for Leaflet.heat v0.2.0
// Project: https://github.com/Leaflet/Leaflet.heat
// Definitions by: Önder Ceylan <https://github.com/onderceylan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="leaflet" />

declare namespace L {
    type HeatLatLngTuple = [number, number, number];

    interface ColorGradientConfig {
        [key: number]: string;
    }

    interface HeatMapOptions {
        minOpacity?: number;
        maxZoom?: number;
        max?: number;
        radius?: number;
        blur?: number;
        gradient?: ColorGradientConfig;
    }

    interface HeatLayer extends TileLayer {
        setOptions(options: HeatMapOptions): HeatLayer;
        addLatLng(latlng: LatLng | HeatLatLngTuple): HeatLayer;
        setLatLngs(latlngs: Array<LatLng | HeatLatLngTuple>): HeatLayer;
    }

    function heatLayer(latlngs: Array<LatLng | HeatLatLngTuple>, options: HeatMapOptions): HeatLayer;
}
