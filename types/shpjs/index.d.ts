/// <reference types="node" />
/// <reference types="geojson" />

declare namespace shpjs {
    // All toBuffer() compatible buffers.
    type ShpJSBuffer = Buffer | ArrayBuffer | { buffer: ArrayBuffer };

    interface FeatureCollectionWithFilename extends GeoJSON.FeatureCollection {
        fileName?: string | undefined;
    }

    interface ShpJS {
        (
            base: string | ShpJSBuffer,
            whiteList?: ReadonlyArray<string>,
        ): Promise<FeatureCollectionWithFilename | FeatureCollectionWithFilename[]>;
        parseZip(
            buffer: ShpJSBuffer,
            whiteList?: ReadonlyArray<string>,
        ): Promise<FeatureCollectionWithFilename | FeatureCollectionWithFilename[]>;
        getShapeFile(
            base: string | ShpJSBuffer,
            whiteList?: ReadonlyArray<string>,
        ): Promise<FeatureCollectionWithFilename | FeatureCollectionWithFilename[]>;
        combine(
            arr: [ReadonlyArray<GeoJSON.Geometry>, ReadonlyArray<GeoJSON.GeoJsonProperties>],
        ): GeoJSON.FeatureCollection;
        parseShp(shp: ShpJSBuffer, prj?: string | Buffer): GeoJSON.Geometry[];
        parseDbf(dbf: ShpJSBuffer, cpg: ShpJSBuffer): GeoJSON.GeoJsonProperties[];
    }
}

declare var shpjs: shpjs.ShpJS;
export = shpjs;
