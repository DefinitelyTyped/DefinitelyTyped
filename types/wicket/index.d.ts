export {};

declare class WktClass {
    constructor();
    delimiter: string;
    wrapVertices: string;
    regExes: string;
    components: string;
    isCollection(): boolean;
    sameCoords(a: any, b: any): boolean;
    fromObject(obj: any): WktClass;
    toObject(config?: any): any;
    toString(config?: any): string;
    fromJson(obj: any): WktClass;
    toJson(): any;
    merge(wkt: string): WktClass;
    read(str: string): WktClass;
    write(components?: any[]): string;
    type: string;
    extract: Extract;
    isRectangle: boolean;
}

export function beginsWith(str: string, sub: string): boolean;
export function endsWith(str: string, sub: string): boolean;
export let delimiter: string;
export function isArray(obj: any): boolean;
export function trim(str: string, sub: string): string;
export let Wkt: typeof WktClass;

export type GeometryType =
    | "point"
    | "multipoint"
    | "linestring"
    | "multilinestring"
    | "polygon"
    | "multipolygon"
    | "box";

export interface Extract {
    point(point: any): string;
    multipoint(multipoint: any): string;
    linestring(linestring: any): string;
    multilinestring(multilinestring: any): string;
    polygon(polygon: any): string;
    multipolygon(multipolygon: any): string;
    box(box: any): string;
}
