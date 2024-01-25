// https://github.com/bewithjonam/mapboxgl-spiderifier
import { LngLat, Map, MapboxGeoJSONFeature, Marker } from "mapbox-gl";

export function popupOffsetForSpiderLeg(spiderLeg: SpiderLeg, offset?: number): SpiderLegOffsets;

export interface SpiderLegOffsets {
    top: SpiderLegOffset;
    "top-left": SpiderlegOffset;
    "top-right": SpiderlegOffset;
    bottom: SpiderlegOffset;
    "bottom-left": SpiderlegOffset;
    "bottom-right": SpiderlegOffset;
    left: SpiderlegOffset;
    right: SpiderlegOffset;
}
export type SpiderLegOffset = [number, number];

class MapboxglSpiderifier {
    constructor(map: Map, options: Options);

    each: (spiderLeg: SpiderLeg) => void;
    spiderfy: (latLng: LngLat | [number, number], features: Array<Record<string, unknown>>) => void;
    unspiderfy: () => void;
}

export interface Options {
    /** Default: false */
    animate?: boolean;
    /**
     * Number in milliseconds
     * Default 200 */
    animationSpeed?: number;
    /**
     * number of markers till which the spider will be circular and beyond this threshold,
     * it will spider in spiral.
     * Default: 9
     */
    circleSpiralSwitchover?: number;
    customPin?: boolean;
    initializeLeg?: (spiderLeg: SpiderLeg) => void;
    onClick?: (event: MouseEvent, spiderLeg: SpiderLeg) => void;
    // --- <SPIDER TUNING Params>
    // circleSpiralSwitchover: show spiral instead of circle from this marker count upwards
    //                        0 -> always spiral; Infinity -> always circle
    circleSpiralSwitchover?: number; // Default: 9,
    circleFootSeparation?: number; // Default: 25, // related to circumference of circle
    spiralFootSeparation?: number; // Default: 28, // related to size of spiral (experiment!)
    spiralLengthStart?: number; // Default: 15, // ditto
    spiralLengthFactor?: number; // Default: 4, // ditto
}
export default MapboxglSpiderifier;

export interface SpiderLeg {
    feature: MapboxGeoJSONFeature;
    elements: {
        container: HTMLElement;
        line: HTMLElement;
        pin: HTMLElement;
    };
    mapboxMarker: Marker;
    params: {
        /** horizontal offset of pin from the center of spider */
        x: number;
        /** vertical offset of pin from the center of spider */
        y: number;
        /** angle of line from the center of spider */
        angle: number;
        /** leg line length */
        legLength: number;
        /** index of spider leg */
        index: number;
    };
}
