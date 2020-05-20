declare namespace google.maps {
    class KmlLayer extends MVCObject {
        constructor(opts?: KmlLayerOptions);
        getDefaultViewport(): LatLngBounds;
        getMap(): Map;
        getMetadata(): KmlLayerMetadata;
        getStatus(): KmlLayerStatus;
        getUrl(): string;
        getZIndex(): number;
        setMap(map: Map | null): void;
        setUrl(url: string): void;
        setZIndex(zIndex: number): void;
        setOptions(options: KmlLayerOptions): void;
    }

    interface KmlLayerOptions {
        clickable?: boolean;
        map?: Map;
        preserveViewport?: boolean;
        screenOverlays?: boolean;
        suppressInfoWindows?: boolean;
        url?: string;
        zIndex?: number;
    }

    interface KmlLayerMetadata {
        author: KmlAuthor;
        description: string;
        hasScreenOverlays: boolean;
        name: string;
        snippet: string;
    }

    enum KmlLayerStatus {
        DOCUMENT_NOT_FOUND = 'DOCUMENT_NOT_FOUND',
        DOCUMENT_TOO_LARGE = 'DOCUMENT_TOO_LARGE',
        FETCH_ERROR = 'FETCH_ERROR',
        INVALID_DOCUMENT = 'INVALID_DOCUMENT',
        INVALID_REQUEST = 'INVALID_REQUEST',
        LIMITS_EXCEEDED = 'LIMITS_EXCEEDED',
        OK = 'OK',
        TIMED_OUT = 'TIMED_OUT',
        UNKNOWN = 'UNKNOWN',
    }

    interface KmlMouseEvent {
        featureData: KmlFeatureData;
        latLng: LatLng;
        pixelOffset: Size;
    }

    interface KmlFeatureData {
        author: KmlAuthor;
        description: string;
        id: string;
        infoWindowHtml: string;
        name: string;
        snippet: string;
    }

    interface KmlAuthor {
        email: string;
        name: string;
        uri: string;
    }
}
