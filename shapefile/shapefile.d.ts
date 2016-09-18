// Type definitions for shapefile 0.5.6
// Project: https://github.com/mbostock/shapefile
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare const shapefile: shapefile.ShapefileStatic;

declare namespace shapefile {
    interface Shapefile {
        _shp: any
        _dbf: any
        bbox: Array<number>
    }
    interface ShapefileStatic {
        open(shp: any, dbf?:any, options?:any): Promise<Shapefile>;
        read(shp: any, dbf?:any, options?:any): Promise<GeoJSON.FeatureCollection<any>>;
    }
}

declare module "shapefile" {
    export = shapefile
}
