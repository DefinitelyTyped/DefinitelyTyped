declare namespace google.maps.visualization {
    class HeatmapLayer extends MVCObject {
        constructor(opts?: HeatmapLayerOptions);
        getData(): MVCArray<LatLng | WeightedLocation>;
        getMap(): Map;
        setData(data: MVCArray<LatLng | WeightedLocation> | LatLng[] | WeightedLocation[]): void;
        setMap(map: Map | null): void;
        setOptions(options: HeatmapLayerOptions): void;
    }

    interface HeatmapLayerOptions {
        data: any;
        dissipating?: boolean;
        gradient?: string[];
        map?: Map;
        maxIntensity?: number;
        opacity?: number;
        radius?: number;
    }

    interface WeightedLocation {
        location: LatLng;
        weight: number;
    }
}
