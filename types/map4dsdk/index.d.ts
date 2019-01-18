// Type definitions for map4dsdk 1.0
// Project: https://github.com/iotlinkadmin/map4d-web-sdk (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Sua Le <https://github.com/sua8051>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'map4d' {
    interface CircleOptions {
        center: LatLngLike
        radius?: number
        fillColor?: string
        fillOpacity?: number
        visible?: boolean
    }

    class Circle {
        constructor(options: CircleOptions)
        getMap(): Map
        setMap(map: Map): void
    }

    class Icon {
        constructor(width: number, height: number, url: string)
        clone(): Icon
        getWidth(): number
        getHeight(): number
        getUrl(): string
    }

    type LatLngLike = LatLng | { lat: number, lng: number } | [number, number]
    class LatLng {
        constructor(lat: number, lng: number)
        equals(other: LatLng): boolean
        lat(): number
        lng(): number
        toString(): string
    }

    type LatLngBoundsLike = LatLngBounds | [LatLngLike, LatLngLike] | [number, number, number, number]
    class LatLngBounds {
        constructor(sw: LatLngLike, ne: LatLngLike)
        getCenter(): LatLng
        getNortheast(): LatLng
        getSouthwest(): LatLng
    }

    enum ControlOptions {
        TOP_LEFT,
        TOP_RIGHT,
        BOTTOM_LEFT,
        BOTTOM_RIGHT
    }

    interface MapOptions {
        center?: [number, number]
        zoom?: number
        minZoom?: number
        maxZoom?: number
        geolocate?: boolean
        accessKey?: string
        tilt?: number
        mapControls?: boolean
        mapControlOptions?: ControlOptions
    }

    interface AnimationOptions {
        duration?: number
        easing?: (arg0: number) => number
        animate?: boolean
    }

    interface PaddingOptions {
        top?: number
        bottom?: number
        left?: number
        right?: number
    }

    class Map {
        constructor(container: HTMLElement, options?: MapOptions)
        enable3dMode(enabled: boolean): void
        getCenter(): LatLng
        setCenter(latLng: LatLng): void
        setOptions(options: MapOptions): void
        getZoom(): number
        setZoom(zoom: number): void
        getTilt(): number
        setTilt(tilt: number): void
        setMapUrl(mapUrl: string): void
        getMapUrl(): string
        setMinZoom(minZoom: number): void
        setMaxZoom(maxZoom: number): void
        panBy(offset: PointLike, animationOptions?: AnimationOptions): void
        panTo(latLng: LatLngLike, animationOptions?: AnimationOptions): void
        flyTo(latLng: LatLngLike, zoom: number, animationOptions?: AnimationOptions): void
        fitBounds(bounds: LatLngBoundsLike, padding?: PaddingOptions, animationOptions?: AnimationOptions): void
        addListener(eventName: string, func: Function): MapsEventListener
    }

    interface MapsEventListener {
        remove(): void
    }

    interface MarkerOptions {
        position: LatLngLike
        visible?: boolean
        anchor?: Point
        icon?: Icon | string
        elevation?: number
    }

    class Marker {
        constructor(options: MarkerOptions)
        setMap(map: Map): void
        getPosition(): LatLng
        getVisible(): boolean
        getAnchor(): Point
        getIcon(): Icon | string
        getElevation(): number
        getMap(): Map
    }

    type PointLike = Point | { x: number, y: number } | [number, number]
    class Point {
        x: number
        y: number
        constructor(x: number, y: number)
        toString(): string
    }

    interface PolygonOptions {
        paths: LatLngLike[][]
        fillColor?: string
        fillOpacity?: number
        visible?: boolean
    }

    class Polygon {
        constructor(options: PolygonOptions)
        getMap(): Map
        setMap(map: Map): void
    }

    interface PolylineOptions {
        path: LatLngLike[]
        strokeWidth?: number
        strokeColor?: string
        strokeOpacity?: number
        visible?: boolean
        closed?: boolean
    }

    class Polyline {
        constructor(options: PolylineOptions)
        getPath(): LatLng[]
        getMap(): Map
        setMap(map: Map): void
        getStrokeWidth(): number
        getStrokeColor(): string
        getStrokeOpacity(): number
        isVisible(): boolean
        isClosed(): boolean
    }

    class Projection {
        constructor(map: Map)
        fromLatLngToScreen(latLng: LatLng): Point
        fromScreenToLatLng(screenCoordinate: PointLike): LatLng
    }

    type TileAreaId = number
    interface TileAreaOptions {
        bounds: LatLngBoundsLike
        url?: string
        minZoom?: number
        maxZoom?: number
    }

    class TileArea {
        constructor(options: TileAreaOptions)
        getBounds(): LatLngBounds
        getUrl(): string
        getMinZoom(): number
        getMaxZoom(): number
        getMap(): Map
        setMap(map: Map): void
    }
}
