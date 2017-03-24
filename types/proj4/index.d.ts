// Type definitions for proj4 2.3
// Project: https://github.com/proj4js/proj4js
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
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

    interface Static {
        forward(coordinates: TemplateCoordinates): number[];
        inverse(coordinates: TemplateCoordinates): number[];
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

    export const defaultDatum: string;

    export function Proj(srsCode: any, callback?: any): InterfaceProjection;

    export const WGS84: any;

    /**
     * Depecrated v3
     */
    export function Point(x: number, y: number, z?: number): InterfaceCoordinates;
    export function Point(coordinates: TemplateCoordinates | string): InterfaceCoordinates;

    export function toPoint(array: number[]): InterfaceCoordinates;

    export function defs(name: string, projection?: string): any;
    export function defs(name: string[][]): any;

    export function transform(source: InterfaceProjection, dest: InterfaceProjection, point: TemplateCoordinates): any;

    export function mgrs(coordinates: number[], accuracy: number): string;

    export const version: string;
}

declare function proj4(fromProjection: string, toProjection?: string, coordinates?: proj4.TemplateCoordinates): proj4.Static;
declare function proj4(fromProjection: string, coordinates: proj4.TemplateCoordinates): number[];
export = proj4;
