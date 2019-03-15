// Type definitions for proj4 2.5
// Project: https://github.com/proj4js/proj4js
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace proj4 {
    type TemplateCoordinates = number[] | InterfaceCoordinates;

    interface InterfaceCoordinates {
        x: number;
        y: number;
        z?: number;
        m?: number;
    }

    interface InterfaceDatum {
        datum_type: number;
        a: number;
        b: number;
        es: number;
        ep2: number;
    }

    interface Converter {
        forward<T extends TemplateCoordinates>(coordinates: T): T;
        inverse<T extends TemplateCoordinates>(coordinates: T): T;
    }

    interface InterfaceProjection {
        datum: string;
        b: number;
        rf: number;
        sphere: number;
        es: number;
        e: number;
        ep2: number;
        forward(coordinates: TemplateCoordinates): number[];
        inverse(coordinates: TemplateCoordinates): number[];
    }

    interface ProjectionDefinition {
        title: string;
        projName?: string;
        ellps?: string;
        datum?: string;
        datumName?: string;
        rf?: number;
        lat0?: number;
        lat1?: number;
        lat2?: number;
        lat_ts?: number;
        long0?: number;
        long1?: number;
        long2?: number;
        alpha?: number;
        longc?: number;
        x0?: number;
        y0?: number;
        k0?: number;
        a?: number;
        b?: number;
        R_A?: true;
        zone?: number;
        utmSouth?: true;
        datum_params?: string | number[];
        to_meter?: number;
        units?: string;
        from_greenwich?: number;
        datumCode?: string;
        natGrids?: string;
        axis?: string;
    }

    const defaultDatum: string;

    function Proj(srsCode: any, callback?: any): InterfaceProjection;

    const WGS84: any;

    /**
     * @deprecated v3
     */
    function Point(x: number, y: number, z?: number): InterfaceCoordinates;
    function Point(coordinates: TemplateCoordinates | string): InterfaceCoordinates;

    function toPoint(array: number[]): InterfaceCoordinates;

    function defs(name: string, projection: string | ProjectionDefinition): void;
    function defs(name: string[][]): undefined[];
    function defs(name: string): ProjectionDefinition;

    function transform(
        source: InterfaceProjection,
        dest: InterfaceProjection,
        point: TemplateCoordinates
    ): any;

    function mgrs(coordinates: number[], accuracy: number): string;

    const version: string;
}

declare function proj4(fromProjection: string, toProjection?: string): proj4.Converter;
declare function proj4<T extends proj4.TemplateCoordinates>(
    toProjection: string,
    coordinates: T
): T;
declare function proj4<T extends proj4.TemplateCoordinates>(
    fromProjection: string,
    toProjection: string,
    coordinates: T
): T;

export = proj4;
export as namespace proj4;
