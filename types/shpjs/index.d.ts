// Type definitions for shpjs 3.4
// Project: https://github.com/calvinmetcalf/shapefile-js#readme
// Definitions by: Hsiao-Ting Yu <https://github.com/littlebtc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
/// <reference types="geojson" />

declare namespace shpjs {
    // All toBuffer() compatible buffers.
    type ShpJSBuffer = Buffer | ArrayBuffer | { buffer: ArrayBuffer };

    interface FeatureCollectionWithFilename extends GeoJSON.FeatureCollection {
        fileName?: string;
    }

    interface ShpJS {
        (base: string | ShpJSBuffer, whiteList?: ReadonlyArray<string>): Promise<FeatureCollectionWithFilename | FeatureCollectionWithFilename[]>;
        parseZip(buffer: ShpJSBuffer, whiteList?: ReadonlyArray<string>): Promise<FeatureCollectionWithFilename | FeatureCollectionWithFilename[]>;
        getShapeFile(base: string | ShpJSBuffer, whiteList?: ReadonlyArray<string>): Promise<FeatureCollectionWithFilename | FeatureCollectionWithFilename[]>;
        combine(arr: [ReadonlyArray<GeoJSON.Geometry>, ReadonlyArray<GeoJSON.GeoJsonProperties>]): GeoJSON.FeatureCollection;
        parseShp(shp: ShpJSBuffer, prj: string | Buffer): GeoJSON.Geometry[];
        parseDbf(dbf: ShpJSBuffer, cpg: ShpJSBuffer): GeoJSON.GeoJsonProperties[];
    }
}

declare var shpjs: shpjs.ShpJS;
export = shpjs;
