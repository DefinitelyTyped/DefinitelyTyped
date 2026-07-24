/**
 * CoverageJSON is an official Open Geospatial Consortium standard for sharing spatio-temporal data on the web
 * http://www.opengis.net/doc/CS/covjson/1.0
 */
export as namespace CoverageJSON;

export type CoverageJSON = Domain | CoverageCollection | Coverage | NdArray;
export type CoverageJsonTypes = CoverageJSON["type"];
export type DomainAxes = Domain["axes"];

/**
 * Common domainType ID's
 */
export type DomainTypes = Domain["domainType"];

export type PrimitiveValue =
    | string
    | number
    | boolean
    | null
    | object
    | undefined; // undefined ensures that interface does not reject other members
export type Value = PrimitiveValue | PrimitiveValue[];
/**
 * Common Domains
 */
export type Domain =
    | Grid
    | Trajectory
    | Point
    | PointSeries
    | MultiPoint
    | MultiPointSeries
    | Polygon
    | PolygonSeries
    | MultiPolygon
    | MultiPolygonSeries
    | VerticalProfile
    | Section;

/**
 * An object whose keys are BCP 47 language tags and the values are the strings in that language
 * http://tools.ietf.org/html/bcp47
 */
export interface I18N {
    [key: string]: string;
}

/**
 * Parameter objects represent metadata about the values of the coverage in terms of the observed property (like water temperature), the units, and others.
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E3%2E%C2%A0%20Parameter%20Objects,-Parameter
 */
export interface Parameter {
    [key: string]: Value;
    type: "Parameter";
    /**
     * Common ID for the parameter
     */
    id?: string;
    label?: I18N;
    description?: I18N;
    observedProperty: ObservedProperty;
    categoryEncoding?: CategoryEncoding;
    /**
     * DO NOT include if "observedProperty" has a "categories" member
     */
    unit?: Unit;
}

export interface ObservedProperty {
    label: I18N;
    id?: string;
    description?: I18N;
    categories?: [Category, ...Category[]];
}

export interface Category {
    label: I18N;
    id: string;
    description?: I18N;
}

/**
 * The values of keys must be unique within the object. The keys must be present in the "categories" member of the "observedProperty" member
 */
export interface CategoryEncoding {
    [key: string]: number | number[];
}

export type Unit =
    & {
        /**
         * Common ID for the unit
         */
        id?: string;
    }
    & (
        | { label: I18N; symbol: UnitSymbol }
        | { label: I18N | string }
        | { symbol: UnitSymbol }
    );

/**
 * MUST either be a string of the symbolic notation of the unit
 * OR an object with the members "value" and "type" where "value" is the symbolic unit notation and "type" refernces the unit serialization scheme that is used
 * "type" MUST have the value "http://www.opengis.net/def/uom/UCUM" if UCUM (http://unitsofmeasure.org/) is used or a custom value as recommended in section https://docs.ogc.org/cs/21-069r2/21-069r2.pdf#%5B%7B%22num%22%3A3041%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C99.212%2C338.319%2Cnull%5D
 */
export type UnitSymbol =
    | /**
     * Symbolic notation of the unit
     */ string
    | {
        value: string;
        /**
         * The serialization scheme for the unit. If UCUM (https://unitsofmeasure.org) is used, then the value MUST be "http://www.opengis.net/def/uom/UCUM"
         */
        type: "http://www.opengis.net/def/uom/UCUM" | string;
    };

/**
 * A logical grouping of parameters via the "members" array
 */
export type ParameterGroup =
    & {
        [key: string]: Value;
        type: "ParameterGroup";

        label?: I18N;
        /**
         * Common ID for the group
         */
        id?: string;
        description?: I18N;
        members: [string, ...string[]];
    }
    & (
        | {
            observedProperty: ObservedProperty;
        }
        | {
            label: I18N;
        }
        | {
            observedProperty: ObservedProperty;
            label: I18N;
        }
    );

/**
 * Provide information about how to interpret coordinate values within the domain.
 * Coordinates are usually geospatial or temporal in nature, but may be categorical.
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E6%2E1%2E2%2E%C2%A0%20Reference%20System%20Connection%20Objects
 */
export type ReferenceSystemObject =
    | SpatialReferenceSystem
    | IdentifierBasedReferenceSystem
    | TemporalReferenceSystem;

export interface SpatialReferenceSystem {
    [key: string]: Value;
    type: "GeographicCRS" | "ProjectedCRS" | "VerticalCRS";
    /**
     * A common ID for the system and should be omitted if unclear in which case meaning is derived from the "type"
     * MAY have an id member whose value MUST be a string and SHOULD be a common identifier for the reference system
     */
    id?: string;
    /**
     * No standardized meaning is to be derived from this member
     */
    description?: I18N;
}

/**
 * If the calendar is based on years, months, days, then the referenced values SHOULD use
 * one of the following ISO8601-based lexical representations:
 * • YYYY
 * • ±XYYYY (where X stands for extra year digits)
 * • YYYY-MM
 * • YYYY-MM-DD
 * • YYYY-MM-DDTHH:MM:SS[.F]Z where Z is either “Z” or a time scale offset +|-HH:MM
 * • If calendar dates with reduced precision are used in a lexical representation (e.g. "2016"),
 *  then a client SHOULD interpret those dates in that reduced precision.
 * • If "type" is "TemporalRS" and "calendar" is "Gregorian", then the above lexical
 * representation MUST be used
 */
export interface TemporalReferenceSystem {
    type: "TemporalRS";
    /**
     * If Gregorian calendar is used, then "calendar", the value must be "Gregorian" and cannot be an URI
     */
    calendar: "Gregorian" | string;
    /**
     * If the timeScale is "UTC", then this member should be omitted, else the value should be an URI
     */
    timeScale?: "UTC" | string;
}

export interface IdentifierBasedReferenceSystem {
    type: "IdentifierRS";
    /**
     * Common ID for the Reference System
     */
    id?: string;
    label?: I18N;
    targetConcept?: TargetConcept;
    /** */
    /**MAY have member "identifiers" where value is an object where each key is an identifier referenced by the identifierRS and each value is an object describing the referenced concept equal to "targetConcept" */
    identifiers?: {
        [key: string]: TargetConcept;
    };
}

export interface TargetConcept {
    label: I18N;
    description?: I18N;
    id?: string;
}
/**
 * A CoverageJSON object which defines a set of positions and their extent in one or more referencing systems.
 * The "domainType" property indicates the structure of the domain and should be included
 */

export interface DomainObject {
    type: "Domain";
    /**
     * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E6%2E1%2E1%2E%C2%A0%20Axis%20Objects
     */
    axes: Domain["axes"];
    /**
     * MUST be included if the domain object is not part of a coverage collection or if the coverage collection does not have a "referencing" member.
     */
    referencing?: ReferenceSystemConnection[];
}

/**
 * Creates a link between values within domain axes and a reference system to be able to interpret those values, e.g. as coordinates in a certain coordinate reference system.
 */
export interface ReferenceSystemConnection<
    T extends ReferenceSystemObject = ReferenceSystemObject,
> {
    /** An array of coordinate identifiers that are referenced in this object
     * Depending on type of referencing, the ordering of the identifiers MAY be relevant e.g. for 2D/3D CRS. In this case, the order of the identifiers MUST match the order of axes in the CRS
     */
    coordinates: string[];
    system: T;
}

export interface WithBounds<T> {
    /**
     * The value is an array of values of length len*2 with len being the length of the "values" array.
     * For each axis value at array index i in the "values" array, a lower and upper
     * bounding value at positions 2*i and 2*i+1, respectively, are given in the bounds array.
     * Can be derived automatically if not provided
     */
    bounds?: T;
}
/**
 * "num" MUST be  an integer and must be > 0
 * If "num" = 1, then "start" and "stop" MUST have identical values
 * If "num" > 1, then the array of values can be reconstructed with the formular `start + i * step`
 * where `i` is the i-th element in the interval [0, num-1] and `step` = (stop - start) / (num - 1)`
 * If "num" = 1, then the reconstructured array = [start]
 * If `start > stop`, the values are monotonically decreasing
 */
export interface RegularlySpacedAxis {
    start: number;
    stop: number;
    num: number;
}

export interface NdArrayObject {
    type: "NdArray";
    /**
     * An NdArray object MAY have a member with the name "shape" where the value is an array of integers.
     * For 0D arrays, "shape" MAY be omitted (defaulting to []) but MUST be included for >= 1D arrays
     * Where "shape" is present and non-empty, the product of its values MUST equal the number of elements in the "values" array.
     */
    shape?: number[];
    /**
     * An array of strings of the same length as "shape", such that each string assigns a name to the corresponding dimension.
     * Can be omitted for 0D array (defaults to []). Must be included for >= 1D arrays
     */
    axisNames?: string[];
}
/**
 * Represents a multidimensional (>= 0D) array with named axes, encoded as a flat, one-dimensional JSON array in row-major order.
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E6%2E2%2E%C2%A0%20NdArray%20Objects,-A
 */
export type NdArray = StringNdArray | NumberNdArray | TiledNdArray;

export interface ValuesNdArray<
    T extends string | number,
> extends NdArrayObject {
    /**
     * The data type of the non-null values in the "values" array
     */
    dataType: T extends string ? "string" : "float" | "integer";
    /**
     * For 0D arrays, the array must have exactly one item
     * Elements MUST be ordered such that the last dimension in "axisNames" varies fastest, i.e. row-major order, mimicing the approach taken in NetCDF
     * Note that common JSON implementations use IEEE 754-2008 64-bit (double precision) floating point numbers as the data type for "values"
     * Users SHOULD be aware of the limitations in precision when encoding numbers in this way.
     * For example, when encoding integers, users SHOULD be aware that only values within the range [-253+1, 253-1] can be represented in a way that will ensure exact interoperability among such implementations
     */
    values: [T | null, ...(T | null)[]];
}
export type NumberNdArray = ValuesNdArray<number>;
export type StringNdArray = ValuesNdArray<string>;

/**
 * It represents a multidimensional (>= 1D) array with named axes that is split up into sets of linked NdArray documents.
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E6%2E3%2E%C2%A0%20TiledNdArray%20Objects,-A
 */
export interface TiledNdArray extends Omit<NdArrayObject, "type"> {
    type: "TiledNdArray";
    dataType: "float" | "string" | "integer";
    shape: [number, ...number[]];
    /**
     * Each tileset typically covers a specific data access scenario, for example, loading a single time slice of a grid vs. loading a time series of a spatial subset of a grid
     */
    tileSets: [TileSet, ...TileSet[]];
    axisNames: string[];
}

export interface TileSet {
    /**
     * An array of same length as "shape" of the TiledNdArray object and where each array element is either null or an integer lower or equal than the corresponding element in "shape".
     * A null value denotes that the axis is not tiled
     */
    tileShape: (number | null)[];
    /**
     * A Level 1 URI template as defined in RFC 6570 https://tools.ietf.org/html/rfc6570.
     * The URI template MUST contain a variable for each axis name whose corresponding element in "tileShape" is not null.
     * A variable for an axis of total size totalSize (from "shape") and tile size tileSize (from "tileShape") and has as value one of the integers 0, 1, …, q + r - 1 where q and r are the quotient and remainder obtained by dividing totalSize by tileSize.
     * Each URI that can be generated from the URI template MUST resolve to an NdArray CoverageJSON document where the members "dataType" and "axisNames`" are identical to the ones of the
     * TiledNdArray object, and where each value of `"shape" is an integer equal, or lower if an edge tile, to the corresponding element in "tileShape" while replacing null with the corresponding element of "shape" of the TiledNdArray.
     */
    urlTemplate: string;
}
/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E6%2E4%2E%C2%A0%20Coverage%20Objects,-A
 */
export interface Coverage<D extends Domain | string = Domain | string> {
    [key: string]: Value;
    type: "Coverage";
    /**
     * Common ID for the Coverage
     */
    id?: string;
    /**
     * A domain object or an URL resolving to a domain object
     */
    domain: D;
    /**
     * The expected value of the domain's "domainType" member.
     * If the coverage is part of a coverage collection which has a "domainType" declared, this should be omitted
     */
    domainType?: D extends Domain ? D["domainType"] : Domain["domainType"];
    /**
     * A object where the key is an ID of a parameter and the value is the parameter object
     * The ID corresponds to the commonly known concept of “variable name” and is merely used in for conveniently accessing the corresponding range object.
     * Must be present if the Coverage is not part of a Coverage Collection
     */
    parameters?: { [key: string]: Parameter };
    parameterGroups?: ParameterGroup[];
    /**
     * An object where the key is a key of the "parameters" member and the value is a NdArray object or an URL resolving to an NdArray object.
     * The "parameters" member is either declared in the coverage object or in the parent coverage collection object.
     * The shape and axis names of each NdArray or TiledNdArray object MUST correspond to the domain axes defined by "domain".
     * Single-valued axes MAY be omitted.
     * If the referenced parameter object has a "categoryEncoding" member, then each non-null array element of the "values" member of the NdArray object, or the linked NdArray objects within a TiledNdArray object,
     * MUST be equal to one of the values defined in the "categoryEncoding" object and be interpreted as the matching category
     */
    ranges: Ranges;
}

export interface Ranges {
    [key: string]: NdArray | string;
}

/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E6%2E5%2E%C2%A0%20Coverage%20Collection%20Objects,-A
 */
export interface CoverageCollection<
    D extends Domain | string = Domain | string,
> {
    type: "CoverageCollection";
    /**
     * Indicates that the coverage collection only contains coverages of the given domain type.
     */
    domainType?: D extends Domain ? D["domainType"] : Domain["domainType"];
    coverages: Coverage<D>[];
    parameters?: { [key: string]: Parameter };
    parameterGroups?: ParameterGroup[];
    referencing?: ReferenceSystemConnection[];
}

export type Position2D = [number, number];
export type Position3D = [number, number, number];
export type Position = Position2D | Position3D;

/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E1%2E%C2%A0%20Grid,-A
 */
export interface Grid extends DomainObject {
    domainType?: "Grid";
    axes: {
        x: ({ values: number[] } & WithBounds<number[]>) | RegularlySpacedAxis;
        y: ({ values: number[] } & WithBounds<number[]>) | RegularlySpacedAxis;
        z?: ({ values: number[] } & WithBounds<number[]>) | RegularlySpacedAxis;
        t?: { values: string[] } & WithBounds<string[]>;
    };
}

/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E2%2E%C2%A0%20VerticalProfile,-A
 */
export interface VerticalProfile extends DomainObject {
    domainType?: "VerticalProfile";
    axes: {
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        x: { values: [number] } & WithBounds<[number, number]>;
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        y: { values: [number] } & WithBounds<[number, number]>;
        z: ({ values: number[] } & WithBounds<number[]>) | RegularlySpacedAxis;
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] } & WithBounds<[string, string]>;
    };
}
/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E3%2E%C2%A0%20PointSeries,-A
 */
export interface PointSeries extends DomainObject {
    domainType?: "PointSeries";
    axes: Omit<Point["axes"], "t"> & {
        t: { values: string[] } & WithBounds<string[]>;
    };
}
/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E4%2E%C2%A0%20Point,-A
 */
export interface Point extends DomainObject {
    domainType?: "Point";
    axes: {
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        x: { values: [number] } & WithBounds<[number, number]>;
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        y: { values: [number] } & WithBounds<[number, number]>;
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] } & WithBounds<[number, number]>;
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] } & WithBounds<[string, string]>;
    };
}
/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E5%2E%C2%A0%20MultiPointSeries,-A
 */
export interface MultiPointSeries extends DomainObject {
    domainType?: "MultiPointSeries";
    axes: Omit<MultiPoint["axes"], "t"> & {
        t: { values: string[] } & WithBounds<string[]>;
    };
}
/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E6%2E%C2%A0%20MultiPoint,-A
 */
export interface MultiPoint extends DomainObject {
    domainType?: "MultiPoint";
    axes: {
        composite:
            & { dataType: "tuple" }
            & (
                | (
                    & { coordinates: ["x", "y"]; values: Position2D[] }
                    & WithBounds<
                        Position2D[]
                    >
                )
                | (
                    & { coordinates: ["x", "y", "z"]; values: Position3D[] }
                    & WithBounds<
                        Position3D[]
                    >
                )
            );
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] } & WithBounds<[string, string]>;
    };
}
/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E7%2E%C2%A0%20Trajectory,-A
 */
export interface Trajectory extends DomainObject {
    domainType?: "Trajectory";
    axes: {
        composite:
            & {
                dataType: "tuple";
            }
            & (
                | ({
                    coordinates: ["t", "x", "y"];
                    values: [string, ...Position2D][];
                } & WithBounds<[string, ...Position2D][]>)
                | ({
                    coordinates: ["t", "x", "y", "z"];
                    values: [string, ...Position3D][];
                } & WithBounds<[string, ...Position3D][]>)
            );
        z?:
            // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
            { values: [number] } & WithBounds<[number, number]>;
    };
}
/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E8%2E%C2%A0%20Section,-A
 */
export interface Section extends DomainObject {
    domainType?: "Section";
    axes: {
        composite: {
            dataType: "tuple";
            coordinates: ["t", "x", "y"];
            values: [string, ...Position2D][];
            bounds?: [string, ...Position2D][];
        };
        z: ({ values: number[] } & WithBounds<number[]>) | RegularlySpacedAxis;
    };
}

/**
 * An array of 4 or more [x,y] arrays where each of x and y is a coordinate value.
 * The first and last [x,y] elements are identical.
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=Polygons,holes
 */
export type LinearRing = Position2D[][];

/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E9%2E%C2%A0%20Polygon,-Polygons
 */
export interface Polygon extends DomainObject {
    domainType?: "Polygon";
    axes: {
        composite: {
            dataType: "polygon";
            coordinates: ["x", "y"];
            // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
            values: [LinearRing];
        } & WithBounds<[LinearRing, LinearRing]>;
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] } & WithBounds<[number, number]>;
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] } & WithBounds<[string, string]>;
    };
}
/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E10%2E%C2%A0%20PolygonSeries,-A
 */
export interface PolygonSeries extends DomainObject {
    domainType?: "PolygonSeries";
    axes: Omit<Polygon["axes"], "t"> & {
        t: { values: string[] } & WithBounds<string[]>;
    };
}

/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E11%2E%C2%A0%20MultiPolygon,-A
 */
export interface MultiPolygon extends DomainObject {
    domainType?: "MultiPolygon";
    axes: {
        composite: {
            dataType: "polygon";
            coordinates: ["x", "y"];
            values: LinearRing[];
        } & WithBounds<LinearRing[]>;
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] } & WithBounds<[string, string]>;
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] } & WithBounds<[number, number]>;
    };
}

/**
 * https://docs.ogc.org/cs/21-069r2/21-069r2.html#_d5c16418-1a20-4dbf-bf7a-8e685062df97:~:text=9%2E10%2E12%2E%C2%A0%20MultiPolygonSeries,-A
 */
export interface MultiPolygonSeries extends DomainObject {
    domainType?: "MultiPolygonSeries";
    axes: Omit<MultiPolygon["axes"], "t"> & {
        t: { values: string[] } & WithBounds<string[]>;
    };
}
