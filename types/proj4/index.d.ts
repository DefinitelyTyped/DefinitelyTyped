declare namespace proj4 {
    type TemplateCoordinates = number[] | InterfaceCoordinates;

    interface InterfaceCoordinates {
        x: number;
        y: number;
        z?: number | undefined;
        m?: number | undefined;
    }

    interface InterfaceDatum {
        datum_type: number;
        a: number;
        b: number;
        es: number;
        ep2: number;
    }

    interface Converter {
        forward<T extends TemplateCoordinates>(coordinates: T, enforceAxis?: boolean): T;
        inverse<T extends TemplateCoordinates>(coordinates: T, enforceAxis?: boolean): T;
    }

    interface InterfaceProjection {
        datum: string;
        b: number;
        rf: number;
        sphere: number;
        es: number;
        e: number;
        ep2: number;
        forward(coordinates: TemplateCoordinates, enforceAxis?: boolean): number[];
        inverse(coordinates: TemplateCoordinates, enforceAxis?: boolean): number[];
    }

    interface ProjectionDefinition {
        title: string;
        projName?: string | undefined;
        ellps?: string | undefined;
        datum?: string | undefined;
        datumName?: string | undefined;
        rf?: number | undefined;
        lat0?: number | undefined;
        lat1?: number | undefined;
        lat2?: number | undefined;
        lat_ts?: number | undefined;
        long0?: number | undefined;
        long1?: number | undefined;
        long2?: number | undefined;
        alpha?: number | undefined;
        longc?: number | undefined;
        x0?: number | undefined;
        y0?: number | undefined;
        k0?: number | undefined;
        a?: number | undefined;
        b?: number | undefined;
        R_A?: true | undefined;
        zone?: number | undefined;
        utmSouth?: true | undefined;
        datum_params?: string | number[] | undefined;
        to_meter?: number | undefined;
        units?: string | undefined;
        from_greenwich?: number | undefined;
        datumCode?: string | undefined;
        nadgrids?: string | undefined;
        axis?: string | undefined;
    }

    interface PROJJSONDefinition {
        $schema?: string;
        type: string;
        name?: string;
        id?: {
            authority: string;
            code: number;
        };
        scope?: string;
        area?: string;
        bbox?: {
            south_latitude: number;
            west_longitude: number;
            north_latitude: number;
            east_longitude: number;
        };
        components?: PROJJSONDefinition[];
        datum?: {
            type: string;
            name: string;
        };
        datum_ensemble?: {
            name: string;
            members: {
                name: string;
                id?: {
                    authority: string;
                    code: number;
                };
            }[];
            ellipsoid?: {
                name: string;
                semi_major_axis: number;
                inverse_flattening?: number;
            };
            accuracy?: string;
            id?: {
                authority: string;
                code: number;
            };
        };
        coordinate_system?: {
            subtype: string;
            axis: {
                name: string;
                abbreviation?: string;
                direction: string;
                unit: string;
            }[];
        };
        conversion?: {
            name: string;
            method: {
                name: string;
            };
            parameters: {
                name: string;
                value: number;
                unit?: string;
            }[];
        };
        transformation?: {
            name: string;
            method: {
                name: string;
            };
            parameters: {
                name: string;
                value: number;
                unit?: string;
                type?: string;
                file_name?: string;
            }[];
        };
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

    function defs(name: string, projection: string | ProjectionDefinition | PROJJSONDefinition): void;
    function defs(name: string[][]): undefined[];
    function defs(name: string): ProjectionDefinition;
    function nadgrid(key: string, grid: ArrayBuffer): void;

    function transform(
        source: InterfaceProjection,
        dest: InterfaceProjection,
        point: TemplateCoordinates,
    ): any;

    function mgrs(coordinates: number[], accuracy: number): string;

    const version: string;
}

declare function proj4(
    fromProjection: string | proj4.PROJJSONDefinition,
    toProjection?: string | proj4.PROJJSONDefinition,
): proj4.Converter;
declare function proj4<T extends proj4.TemplateCoordinates>(
    toProjection: string | proj4.PROJJSONDefinition,
    coordinates: T,
): T;
declare function proj4<T extends proj4.TemplateCoordinates>(
    fromProjection: string | proj4.PROJJSONDefinition,
    toProjection: string | proj4.PROJJSONDefinition,
    coordinates: T,
): T;

export = proj4;
export as namespace proj4;
