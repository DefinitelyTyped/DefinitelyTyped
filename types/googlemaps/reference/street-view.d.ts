declare namespace google.maps {
    class StreetViewPanorama extends MVCObject {
        constructor(container: Element, opts?: StreetViewPanoramaOptions);
        controls: Array<MVCArray<Node>>;
        getLinks(): StreetViewLink[];
        getLocation(): StreetViewLocation;
        getMotionTracking(): boolean;
        getPano(): string;
        getPhotographerPov(): StreetViewPov;
        getPosition(): LatLng;
        getPov(): StreetViewPov;
        getStatus(): StreetViewStatus;
        getVisible(): boolean;
        getZoom(): number;
        registerPanoProvider(provider: (input: string) => StreetViewPanoramaData, opts?: PanoProviderOptions): void;
        setLinks(links: StreetViewLink[]): void;
        setMotionTracking(motionTracking: boolean): void;
        setOptions(options: StreetViewPanoramaOptions): void;
        setPano(pano: string): void;
        setPosition(latLng: LatLng | LatLngLiteral): void;
        setPov(pov: StreetViewPov): void;
        setVisible(flag: boolean): void;
        setZoom(zoom: number): void;
    }

    interface StreetViewPanoramaOptions {
        addressControl?: boolean;
        addressControlOptions?: StreetViewAddressControlOptions;
        clickToGo?: boolean;
        disableDefaultUI?: boolean;
        disableDoubleClickZoom?: boolean;
        enableCloseButton?: boolean;
        fullscreenControl?: boolean;
        fullscreenControlOptions?: FullscreenControlOptions;
        imageDateControl?: boolean;
        linksControl?: boolean;
        motionTracking?: boolean;
        motionTrackingControl?: boolean;
        motionTrackingControlOptions?: MotionTrackingControlOptions;
        mode?: 'html4' | 'html5' | 'webgl';
        panControl?: boolean;
        panControlOptions?: PanControlOptions;
        pano?: string;
        panoProvider?: (input: string) => StreetViewPanoramaData;
        position?: LatLng | LatLngLiteral;
        pov?: StreetViewPov;
        scrollwheel?: boolean;
        showRoadLabels?: boolean;
        visible?: boolean;
        zoom?: number;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
    }

    interface StreetViewAddressControlOptions {
        position?: ControlPosition;
    }

    interface PanoProviderOptions {
        /**
         * If set, the renderer will use technologies (like webgl) that only work when cors headers are appropiately set on the provided images.
         * It is the developer's task to serve the images correctly in combination with this flag, which might otherwise lead to SecurityErrors.
         */
        cors?: boolean;
    }

    interface StreetViewTileData {
        getTileUrl(pano: string, tileZoom: number, tileX: number, tileY: number): string;
        centerHeading?: number;
        tileSize?: Size;
        worldSize?: Size;
    }

    interface StreetViewPov {
        heading?: number;
        pitch?: number;
    }

    class StreetViewCoverageLayer extends MVCObject {
        getMap(): Map;
        setMap(map: Map | null): void;
    }
}
