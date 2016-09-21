// Type definitions for shapefile 0.5.6
// Project: https://github.com/mbostock/shapefile
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson"/>

declare const shapefile: shapefile.ShapefileStatic;

declare namespace shapefile {
    interface Options {
        encoding: string
        highWaterMark: number
    }
    interface Feature {
        done: boolean
        value: GeoJSON.Feature<any>
    }
    interface Shapefile {
        bbox: Array<number>
        read(): Promise<Feature>;
    }
    interface ShapefileStatic {
        open(shp: any, dbf?: any, options?: Options): Promise<Shapefile>;
        read(shp: any, dbf?: any, options?: Options): Promise<GeoJSON.FeatureCollection<any>>;
    }
}

declare module "shapefile" {
    export = shapefile
}
