declare namespace google.maps {
    class StreetViewService {
        getPanorama(
            request: StreetViewLocationRequest | StreetViewPanoRequest,
            cb: (data: StreetViewPanoramaData | null, status: StreetViewStatus) => void,
        ): void;
        getPanoramaById(
            pano: string,
            callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void,
        ): void;
        getPanoramaByLocation(
            latlng: LatLng | LatLngLiteral,
            radius: number,
            callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void,
        ): void;
    }

    enum StreetViewStatus {
        OK = 'OK',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    interface StreetViewLocationRequest {
        location: LatLng | LatLngLiteral;
        preference?: StreetViewPreference;
        radius?: number;
        source?: StreetViewSource;
    }

    interface StreetViewPanoRequest {
        pano: string;
    }

    interface StreetViewLocation {
        description?: string;
        latLng?: LatLng;
        pano?: string;
        shortDescription?: string;
    }

    enum StreetViewPreference {
        BEST = 'best',
        NEAREST = 'nearest',
    }

    enum StreetViewSource {
        DEFAULT = 'default',
        OUTDOOR = 'outdoor',
    }

    interface StreetViewPanoramaData {
        copyright?: string;
        imageDate?: string;
        links?: StreetViewLink[];
        location?: StreetViewLocation;
        tiles?: StreetViewTileData;
    }

    interface StreetViewLink {
        description?: string;
        heading?: number;
        pano?: string;
    }
}
