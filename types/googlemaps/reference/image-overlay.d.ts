declare namespace google.maps {
    interface MapType {
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
        alt?: string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
        projection?: Projection;
        radius?: number;
        tileSize?: Size;
    }

    interface Projection {
        fromLatLngToPoint(latLng: LatLng, point?: Point): Point;
        fromPointToLatLng(pixel: Point, noWrap?: boolean): LatLng;
    }

    class ImageMapType extends MVCObject implements MapType {
        constructor(opts: ImageMapTypeOptions);
        getOpacity(): number;
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
        setOpacity(opacity: number): void;
        alt: string;
        maxZoom: number;
        minZoom: number;
        name: string;
        projection: Projection;
        radius: number;
        tileSize: Size;
    }

    interface ImageMapTypeOptions {
        alt?: string;
        getTileUrl(tileCoord: Point, zoom: number): string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
        opacity?: number;
        tileSize: Size;
    }

    class GroundOverlay extends MVCObject {
        constructor(url: string, bounds: LatLngBounds | LatLngBoundsLiteral, opts?: GroundOverlayOptions);
        getBounds(): LatLngBounds;
        getMap(): Map;
        getOpacity(): number;
        getUrl(): string;
        setMap(map: Map | null): void;
        setOpacity(opacity: number): void;
    }

    interface GroundOverlayOptions {
        clickable?: boolean;
        map?: Map;
        opacity?: number;
    }

    class StyledMapType extends MVCObject implements MapType {
        constructor(styles: MapTypeStyle[], options?: StyledMapTypeOptions);
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
        alt: string;
        maxZoom: number;
        minZoom: number;
        name: string;
        projection: Projection;
        radius: number;
        tileSize: Size;
    }

    interface StyledMapTypeOptions {
        alt?: string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
    }
}
