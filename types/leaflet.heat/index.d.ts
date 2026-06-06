import * as L from "leaflet";

declare module "leaflet" {
    type HeatLatLngTuple = [number, number, number];

    interface ColorGradientConfig {
        [key: number]: string;
    }

    interface HeatMapOptions {
        minOpacity?: number | undefined;
        maxZoom?: number | undefined;
        max?: number | undefined;
        radius?: number | undefined;
        blur?: number | undefined;
        gradient?: ColorGradientConfig | undefined;
    }

    interface HeatLayer extends TileLayer {
        setOptions(options: HeatMapOptions): HeatLayer;
        addLatLng(latlng: LatLng | HeatLatLngTuple): HeatLayer;
        setLatLngs(latlngs: Array<LatLng | HeatLatLngTuple>): HeatLayer;
    }

    function heatLayer(latlngs: Array<LatLng | HeatLatLngTuple>, options: HeatMapOptions): HeatLayer;
}
