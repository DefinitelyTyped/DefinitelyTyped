/// <reference types="google.maps" />

declare namespace jQuery.easing {
    type IEasingType =
        | "swing"
        | "easeInQuad"
        | "easeOutQuad"
        | "easeInOutQuad"
        | "easeInCubic"
        | "easeOutCubic"
        | "easeInOutCubic"
        | "easeInQuart"
        | "easeOutQuart"
        | "easeInOutQuart"
        | "easeInQuint"
        | "easeOutQuint"
        | "easeInOutQuint"
        | "easeInSine"
        | "easeOutSine"
        | "easeInOutSine"
        | "easeInExpo"
        | "easeOutExpo"
        | "easeInOutExpo"
        | "easeInCirc"
        | "easeOutCirc"
        | "easeInOutCirc"
        | "easeInElastic"
        | "easeOutElastic"
        | "easeInOutElastic"
        | "easeInBack"
        | "easeOutBack"
        | "easeInOutBack"
        | "easeInBounce"
        | "easeOutBounce"
        | "easeInOutBounce";
}

interface SlidingMarkerOptions extends google.maps.MarkerOptions {
    easing?: jQuery.easing.IEasingType | undefined;
    duration?: number | undefined;
    animateFunctionAdapter?:
        | ((
            marker: google.maps.Marker,
            destPoint: google.maps.LatLng,
            easing: "linear" | jQuery.easing.IEasingType,
            duration: number,
        ) => void)
        | undefined;
}

declare class SlidingMarker extends google.maps.Marker {
    static initializeGlobally(): void;
    constructor(opts?: SlidingMarkerOptions);
    setDuration(duration: number): void;
    getDuration(): number;
    setEasing(easing: jQuery.easing.IEasingType): void;
    getEasing(): jQuery.easing.IEasingType;
    getAnimationPosition(): google.maps.LatLng;
    setPositionNotAnimated(position: google.maps.LatLng | google.maps.LatLngLiteral): void;
}

declare class MarkerWithGhost extends SlidingMarker {
    setGhostPosition(ghostPosition: google.maps.LatLng | google.maps.LatLngLiteral): void;
    getGhostPosition(): google.maps.LatLng;
    getGhostAnimationPosition(): google.maps.LatLng;
}

declare module "SlidingMarker" {
    export = SlidingMarker;
}

declare module "MarkerWithGhost" {
    export = MarkerWithGhost;
}
