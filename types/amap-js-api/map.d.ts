declare namespace AMap {
    namespace Map {
        type Feature = 'bg' | 'point' | 'road' | 'building';
        type ViewMode = '2D' | '3D';
        interface Options {
            view?: View2D;
            layers?: Layer[];
            zoom?: number;
            center?: LocationValue;
            labelzIndex?: number;
            zooms?: [number, number];
            lang?: Lang;
            defaultCursor?: string;
            crs?: 'EPSG3857' | 'EPSG3395' | 'EPSG4326';
            animateEnable?: boolean;
            isHotspot?: boolean;
            defaultLayer?: TileLayer;
            rotateEnable?: boolean;
            resizeEnable?: boolean;
            showIndoorMap?: boolean;
            expandZoomRange?: boolean;
            dragEnable?: boolean;
            zoomEnable?: boolean;
            doubleClickZoom?: boolean;
            keyboardEnable?: boolean;
            jogEnable?: boolean;
            scrollWheel?: boolean;
            touchZoom?: boolean;
            touchZoomCenter?: number;
            mapStyle?: string;
            features?: Feature[] | 'all' | Feature;
            showBuildingBlock?: boolean;
            viewMode?: ViewMode;
            pitch?: number;
            pitchEnable?: boolean;
            buildingAnimation?: boolean;
            skyColor?: string;
            preloadMode?: boolean;
            mask?: Array<[number, number]> | Array<Array<[number, number]>> | Array<Array<Array<[number, number]>>>;
            maxPitch?: number;
            rotation?: number;
            forceVector?: boolean;

            // internal
            baseRender?: 'vw' | 'd' | 'dv' | 'v';
            overlayRender?: 'c' | 'd';
            showLabel?: boolean;
            gridMapForeign?: boolean;
            logoUrl?: string;
            logoUrlRetina?: string;
            copyright?: string;
            turboMode?: boolean;
            workerMode?: boolean;
            // continuousZoomEnable?: boolean;
            // showFog: boolean;
            // yaw: number;
            // scale: number;
            // detectRetina: number;
        }
        interface Status {
            animateEnable: boolean;
            doubleClickZoom: boolean;
            dragEnable: boolean;
            isHotspot: boolean;
            jogEnable: boolean;
            keyboardEnable: boolean;
            pitchEnable: boolean;
            resizeEnable: boolean;
            rotateEnable: boolean;
            scrollWheel: boolean;
            touchZoom: boolean;
            zoomEnable: boolean;
        }
        type HotspotEvent<N extends string> = Event<N, {
            lnglat: LngLat;
            name: string;
            id: string;
            // internal
            isIndoorPOI: boolean;
        }>;
        interface EventMap {
            click: MapsEvent<'click', Map>;
            dblclick: MapsEvent<'dblclick', Map>;
            rightclick: MapsEvent<'rightclick', Map>;
            rdblclick: MapsEvent<'rdblclick', Map>;
            mouseup: MapsEvent<'mouseup', Map>;
            mousedown: MapsEvent<'mousedown', Map>;
            mousemove: MapsEvent<'mousemove', Map>;
            mousewheel: MapsEvent<'mousewheel', Map>;
            mouseover: MapsEvent<'mouseover', Map>;
            mouseout: MapsEvent<'mouseout', Map>;
            touchstart: MapsEvent<'touchstart', Map>;
            touchmove: MapsEvent<'touchmove', Map>;
            touchend: MapsEvent<'touchend', Map>;
            contextmenu: MapsEvent<'contextmenu', Map>;

            hotspotclick: HotspotEvent<'hotspotclick'>;
            hotspotover: HotspotEvent<'hotspotover'>;
            hotspotout: HotspotEvent<'hotspotout'>;

            complete: Event<'complete'>;
            mapmove: Event<'mapmove'>;
            movestart: Event<'movestart'>;
            moveend: Event<'moveend'>;
            zoomchange: Event<'zoomchange'>;
            zoomstart: Event<'zoomstart'>;
            zoomend: Event<'zoomend'>;
            dragstart: Event<'dragstart'>;
            dragging: Event<'dragging'>;
            dragend: Event<'dragend'>;
            resize: Event<'resize'>;
        }
    }

    class Map extends EventEmitter {
        constructor(container: string | HTMLElement, opts?: Map.Options);
        poiOnAMAP(obj: { id: string; location?: LocationValue; name?: string }): void;
        detailOnAMAP(obj: { id: string; location?: LocationValue; name?: string }): void;
        getZoom(): number;
        getLayers(): Layer[];
        getCenter(): LngLat;
        getContainer(): HTMLElement | null;
        getCity(callback: (cityData: {
            city: string;
            citycode: string;
            district: string;
            province: string | never[]; // province is empty array when getCity fail
        }) => void): void;
        getBounds(): Bounds;
        getLabelzIndex(): number;
        getLimitBounds(): Bounds;
        getLang(): Lang;
        getSize(): Size;
        getRotation(): number;
        getStatus(): Map.Status;
        getDefaultCursor(): string;
        getResolution(point?: LocationValue): number;
        getScale(dpi?: number): number;
        setZoom(level: number): void;
        setLabelzIndex(index: number): void;
        setLayers(layers: Layer[]): void;
        add(overlay: Overlay | Overlay[]): void;
        remove(overlay: Overlay | Overlay[]): void;
        getAllOverlays(type?: 'marker' | 'circle' | 'polyline' | 'polygon'): Overlay[];
        setCenter(center: LocationValue): void;
        setZoomAndCenter(zoomLevel: number, center: LocationValue): void;
        setCity(city: string, callback: (this: this, coord: [string, string], zoom: number) => void): void;
        setBounds(bound: Bounds): Bounds;
        setLimitBounds(bound: Bounds): void;
        clearLimitBounds(): void;
        setLang(lang: Lang): void;
        setRotation(rotation: number): void;
        setStatus(status: Partial<Map.Status>): void;
        setDefaultCursor(cursor: string): void;
        zoomIn(): void;
        zoomOut(): void;
        panTo(position: LocationValue): void;
        panBy(x: number, y: number): void;
        setFitView(
            overlayList?: Overlay | Overlay[],
            immediately?: boolean,
            avoid?: [number, number, number, number],
            maxZoom?: number
        ): Bounds | false | undefined;
        clearMap(): void;
        destroy(): void;
        plugin(name: string | string[], callback: () => void): this;
        addControl(control: {}): void; // TODO
        removeControl(control: {}): void; // TODO
        clearInfoWindow(): void;
        pixelToLngLat(pixel: Pixel, level?: number): LngLat;
        lnglatToPixel(lnglat: LocationValue, level?: number): Pixel;
        containerToLngLat(pixel: Pixel): LngLat;
        lngLatToContainer(lnglat: LocationValue): Pixel;
        lnglatTocontainer(lnglat: LocationValue): Pixel;
        setMapStyle(style: string): void;
        getMapStyle(): string;
        setFeatures(feature: Map.Feature | Map.Feature[] | 'all'): void;
        getFeatures(): Map.Feature | Map.Feature[] | 'all';
        setDefaultLayer(layer: TileLayer): void;
        setPitch(pitch: number): void;
        getPitch(): number;
        getViewMode_(): Map.ViewMode;
        lngLatToGeodeticCoord(lnglat: LocationValue): Pixel;
        geodeticCoordToLngLat(pixel: Pixel): LngLat;
    }
}
