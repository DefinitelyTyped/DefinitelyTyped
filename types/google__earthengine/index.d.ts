declare const ee: ee.EarthEngineSdk;

export = ee;
export as namespace ee;

declare namespace ee {
    type EeCallback<Value> = (value: Value | null, error?: string) => void;

    interface EeServiceAccountKey {
        client_email: string;
        private_key: string;
    }

    interface EeString {
        cat(other: string | EeString): EeString;
    }

    interface EeDictionary {
        get(key: string): unknown;
        getInfo(callback: EeCallback<Record<string, number>>): void;
    }

    interface EeGeometry {
        buffer(metres: number): EeGeometry;
        union(other: EeGeometry): EeGeometry;
    }

    interface EeElement {
        readonly __eeElement?: never;
    }

    interface EeFilter {
        readonly __eeFilter?: never;
    }

    interface EeFeature extends EeElement {
        readonly __eeFeature?: never;
    }

    interface EeFeatureCollection {
        readonly __eeFeatureCollection?: never;
    }

    interface EeReducer {
        combine(options: { reducer2: EeReducer; sharedInputs: boolean }): EeReducer;
    }

    interface EeKernel {
        readonly __eeKernel?: never;
    }

    interface EeReduceRegionOptions {
        reducer: EeReducer;
        geometry: EeGeometry;
        scale: number;
        maxPixels: number;
    }

    interface EeVisualizationOptions {
        bands?: readonly string[];
        min?: number;
        max?: number;
        gamma?: number;
        palette?: readonly string[];
    }

    interface EeDownloadOptions {
        dimensions: string;
        region: EeGeometry;
        format: string;
        crs: string;
        maxPixels: number;
    }

    interface EeImage extends EeElement {
        normalizedDifference(bands: readonly string[]): EeImage;
        rename(name: string): EeImage;
        reduceRegion(options: EeReduceRegionOptions): EeDictionary;
        id(): EeString;
        get(property: string): unknown;
        convolve(kernel: EeKernel): EeImage;
        clip(geometry: EeGeometry): EeImage;
        visualize(options: EeVisualizationOptions): EeImage;
        paint(options: { featureCollection: EeFeatureCollection; color: number; width: number }): EeImage;
        select(bands: readonly string[]): EeImage;
        getDownloadURL(params: EeDownloadOptions): string;
        getDownloadURL(params: EeDownloadOptions, callback: EeCallback<string>): void;
    }

    interface EeDescribedFeatures {
        features: Array<{ properties: Record<string, unknown> }>;
    }

    interface EeImageCollection {
        filterDate(since: string, until: string): EeImageCollection;
        filterBounds(geometry: EeGeometry): EeImageCollection;
        filter(criterion: EeFilter): EeImageCollection;
        distinct(property: string): EeImageCollection;
        sort(property: string): EeImageCollection;
        first(): EeImage;
        map(transform: (element: EeElement) => EeFeature): EeImageCollection;
        getInfo(callback: EeCallback<EeDescribedFeatures>): void;
        mosaic(): EeImage;
    }

    interface EarthEngineSdk {
        data: {
            authenticateViaPrivateKey(
                key: EeServiceAccountKey,
                onSuccess?: () => void,
                onError?: (error: string) => void,
                extraScopes?: readonly string[],
                suppressDefaultScopes?: boolean,
            ): void;
        };
        initialize(
            apiBaseUrl?: string | null,
            tileBaseUrl?: string | null,
            onSuccess?: () => void,
            onError?: (error: Error | null) => void,
            xsrfToken?: string | null,
            project?: string | null,
        ): void;
        Image(element?: EeElement | EeImage | string): EeImage;
        ImageCollection(source: string | readonly EeImage[]): EeImageCollection;
        Feature(geometry: EeGeometry | null, properties?: Record<string, unknown>): EeFeature;
        FeatureCollection(feature: EeFeature): EeFeatureCollection;
        String(value: string): EeString;
        Geometry: {
            Polygon(coordinates: readonly (readonly (readonly number[])[])[]): EeGeometry;
            Point(coordinates: readonly number[]): EeGeometry;
        };
        Filter: {
            lt(property: string, value: number): EeFilter;
        };
        Reducer: {
            mean(): EeReducer;
            minMax(): EeReducer;
        };
        Kernel: {
            gaussian(options: { radius: number; sigma: number }): EeKernel;
        };
    }
}
