declare var Wkt: WktModule.WktStatic;

declare namespace WktModule {
    interface WktStatic {
        new(obj?: any): Wkt;
        beginsWith(str: string, sub: string): boolean;
        endsWith(str: string, sub: string): boolean;
        delimiter: string;
        isArray(obj: any): boolean;
        trim(str: string, sub: string): string;
        Wkt: typeof Wkt;
    }

    class Wkt {
        constructor();
        delimiter: string;
        wrapVertices: string;
        regExes: string;
        components: string;
        isCollection(): boolean;
        sameCoords(a: any, b: any): boolean;
        fromObject(obj: any): Wkt;
        toObject(config?: any): any;
        toString(config?: any): string;
        fromJson(obj: any): Wkt;
        toJson(): any;
        merge(wkt: string): Wkt;
        read(str: string): Wkt;
        write(components?: any[]): string;
        type: string;
        extract: Extract;
        isRectangle: boolean;
    }

    type GeometryType = "point" | "multipoint" | "linestring" | "multilinestring" | "polygon" | "multipolygon" | "box";

    interface Extract {
        point(point: any): string;
        multipoint(multipoint: any): string;
        linestring(linestring: any): string;
        multilinestring(multilinestring: any): string;
        polygon(polygon: any): string;
        multipolygon(multipolygon: any): string;
        box(box: any): string;
    }
}
