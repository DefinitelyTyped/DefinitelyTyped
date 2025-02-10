/**
 * @external http://www.opengis.net/doc/CS/covjson/1.0
 */
export as namespace CoverageJSON;

/**
 * CoverageJSON documents always consist of a single object. This object (referred to as the
 * CoverageJSON object below) represents a domain, range, coverage, or collection of coverages
 * The CoverageJSON object MAY have any number of members (name/value pairs).
 * The CoverageJSON object MUST have a member with the name "type" whose value is one of: "Domain", "NdArray" (a range encoding), "TiledNdArray" (a range encoding), "Coverage", or "CoverageCollection".
 * The case of the type member values MUST be as shown here.
 */
export type CoverageJSON = Domain | CoverageCollection | Coverage | NdArray;
export type CoverageJsonTypes = CoverageJSON["type"];
export type DomainAxes = Domain["axes"];
export type DomainTypes = Domain["domainType"];

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
 * @description string in multiple languages with tags as defined in BCP 47, and the value is the string in that language. The special language tag "und" can be used to identify a value whose language is unknown or undetermined. [IETF BCP47]
 * http://tools.ietf.org/html/bcp47
 */
export interface I18N {
    [key: string]: string;
}

/**
 * @description Parameter objects represent metadata about the values of the coverage in terms of the observed property (like water temperature), the units, and others.
 * A parameter object MUST NOT have a "unit" member if the "observedProperty" member has a "categories" member
 */

export interface Parameter {
    /** A parameter Object MAY have any number of members (name/value pairs) */
    [key: string]: any;
    /**A parameter object MUST have a member with the name "type" and the value must be "Parameter" */
    type: "Parameter";
    /**A parameter object MAY have a member with the name "id" where the value MUST be a
    string and SHOULD be a common identifier. */
    id?: string;
    /**
     * A parameter object MAY have a member with the name "label" where the value
     * MUST be an i18n object that is the name of the parameter and which SHOULD be
     * short. Note that this SHOULD be left out if it would be identical to the "label" of the
     * "observedProperty" member */
    label?: I18N;
    /**
     * A parameter object MAY have a member with the name "description" where the value
     * MUST be an i18n object which is a, perhaps lengthy, textual description of the parameter
     * Note that some tests using validators will fail if you use a string
     */
    description?: I18N;
    /**
     * A parameter object MUST have a member "observedProperty" where the value is an object
     * which MUST have the member "label" and which MAY have the members "id", "description", and "categories".
     * The value of the
     */
    observedProperty: ObservedProperty;
    /**
     * A parameter object MAY have a member with the name "categoryEncoding" where the value is an object where each key is equal to an "id" value of the "categories" array within the "observedProperty" member of the parameter object. There MUST be no duplicate keys. The value is either an integer or an array of integers where each integer MUST be unique within the object
     */
    categoryEncoding?: CategoryEncoding;

    /**
     * A parameter object MUST NOT have a "unit" member if the "observedProperty" member has a "categories" member
     */
    unit?: Unit;
}

/**
 * Section 9.3
 */
export interface ObservedProperty {
    label: I18N;
    id?: string;
    description?: I18N;
    /**MUST be a non-empty array of category objects */
    categories?: [Category, ...Category[]];
    categoryEnconding?: CategoryEncoding;
}

/**
 * MUST have a id & label member
 * MAY have a description member
 */
export interface Category {
    /**MUST be a i18n object of the name of the category */
    label: I18N;
    id: string;
    /**If given, it should be a textual description of the category */
    description?: I18N;
}

/**
 * MAY have member "categoryEncoding" where value is an object where each key is equal to an id value of the categories array
 * within the observedProperty member of the parameter object
 * There MUST be no duplicate keys
 * The value is either an integer or an array of integers where each integer MUST be unique within the object
 */
export interface CategoryEncoding {
    [key: string]: number | number[];
}

/**
 * the value MUST have either or both the members "label" or/and "symbol" and which MAY have the member "id"
 * If given, the value of "id" MUST be a string and SHOULD be a common identifier. It is recommended to reference a serialization scheme to allow automatic unit conversion
 */
export type Unit =
    & { id?: string }
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
    | string
    | { value: string; type: "http://www.opengis.net/def/uom/UCUM" | string };

/**
 * @description Parameter group objects represent logical groups of parameters, for example vector quantities
 * A parameter group object MUST have either or both the members "label" or/and "observedProperty".
 */
export type ParameterGroup =
    & {
        /** MAY have any number of name/value pairs */
        [key: string]: any;
        /**MUST have member with name "type" and value "ParameterGroup" */
        type: "ParameterGroup";

        label?: I18N;
        /**MAY have member "id" where value MUST be a string and SHOULD be a common identifier */
        id?: string;
        /**MAY have a member with the name "description" where the value MUST be an i18n object which is a, perhaps lengthy, textual description of the parameter group */
        description?: I18N;
        /**
         * A parameter group object MUST have a member with the name "members" where the
         * value is a non-empty array of parameter identifiers (see 6.3 Coverage objects).
         */
        members?: [string, ...string[]];
    }
    & (
        | {
            /**MAY have a member with the name "observedProperty" where the value is an object as specified for parameter objects */
            observedProperty: ObservedProperty;
        }
        | {
            /**
             *  MAY have member "label" which MUST be a i18n object and which SHOULD be short.
             * Note that this SHOULD be left out if it would be identical to the "label" of the "observedProperty" member
             */
            label: I18N;
        }
        | {
            observedProperty: ObservedProperty;
            label: I18N;
        }
    );

/**
 * @section 9.5
 * @description Reference system objects are used to provide information about how to interpret coordinate
 * values within the domain. Coordinates are usually geospatial or temporal in nature, but may also
 * be categorical (based on identifiers). All reference system objects MUST have a member "type",
 * the possible values of which are given in the sections below. Custom values MAY be used as
 * detailed in the Extensions section.
 */
export type ReferenceSystemObject =
    | SpatialReferenceSystem
    | IdentifierBasedReferenceSystem
    | TemporalReferenceSystem;

export interface SpatialReferenceSystem {
    [key: string]: any;
    /**value of type MUST be "GeographicCRS" or "ProjectedCRS" or "VerticalCRS" */
    type: "GeographicCRS" | "ProjectedCRS" | "VerticalCRS";
    /**
     * MAY have an id member whose value MUST be a string and SHOULD be a common identifier for the reference system
     * Note that sometimes (e.g. for numerical model data) the exact CRS may not be known or may
     * be undefined. In this case the "id" may be omitted, but the "type" still indicates that this is a
     * geographic CRS
     */
    id?: string;
    /**MAY have a "description" member which must be an i18n object but no standardized content is interpreted from this description */
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
    /** MUST have member "type". The only currently defined value of it is "TemporalRS" */
    type: "TemporalRS";
    /**
     * MUST have member "calendar" with value "Gregorian" or an URI
     * If Gregorian calendar is used, then "calendar" MUST have value "Gregorian" and cannot be an URI
     */
    calendar: "Gregorian" | string;
    /**
     *  MAY have member "timeScale" with a URI as value
     *  If omitted, the timeScale defaults to UTC @external http://www.opengis.net/def/trs/BIPM/0/UTC.
     *  If timeScale is UTC, then "timeScale" member MUST be omitted
     */
    timeScale?: "UTC" | string;
}

/**
 * @section 9.5.2
 */

export interface IdentifierBasedReferenceSystem {
    /**MUST have member "type" with value "IdentifierRS" */
    type: "IdentifierRS";
    /**MAY have member "id" where value MUST be a string and SHOULD be a common identifier for the RS */
    id?: string;
    /**MAY have member "label" which must be i18n */
    label?: I18N;
    targetConcept?: TargetConcept;
    /**MAY have member "identifiers" where value is an object where each key is an identifier referenced by the identifierRS and each value is an object describing the referenced concept equal to "targetConcept" */
    identifiers?: {
        [key: string]: TargetConcept;
    };
}
/**
 * TargetConcept
 * MAY have member "targetConcept" where value is an object that MUST have member "label" and MAY have member "description"
 */
export interface TargetConcept {
    label: I18N;
    description?: I18N;
    /**Not listed in the requirements but present in examples */
    id?: string;
}
/**
 * @description A domain object is a CoverageJSON object which defines a set of positions and their extent in one or more referencing systems.
 * For interoperability reasons it is RECOMMENDED that a domain object has the
 * member "domainType" with a string value to indicate that the domain follows a certain
 * structure (e.g. a time series, a vertical profile, a spatio-temporal 4D grid). See the section
 * Common Domain Types for details. Custom domain types may be used as recommended
 * in the section Extensions
 */

export interface DomainObject {
    /** value of "type" MUST be "Domain" */
    type: "Domain";

    domainType: DomainTypes;
    /**
     * MUST have member "axes" which has as value an object where each key is an axis identifier and each value an axis object
     * member "axes" MUST NOT be empty
     */
    axes: Domain["axes"];
    /**
     * MAY have member "referencing" where value is an an array of reference system connection objects
     * MUST have "referencing" if the domain object is not part of a coverage collection or if the coverage collection does not have a "referencing" member.
     */
    referencing?: ReferenceSystemConnection[];
}

/**
 * A reference system connection object creates a link between values within domain axes and a
 * reference system to be able to interpret those values, e.g. as coordinates in a certain coordinate reference system.
 */
export interface ReferenceSystemConnection {
    /** MUST have member "coordinates" which has as value an array of coordinate identifiers that are referenced in this object
     * Depending on type of referencing, the ordering of the identifiers MAY be relevant e.g. for 2D/3D CRS. In this case, the order of the identifiers MUST match the order of axes in the CRS
     */
    coordinates: string[];
    /**
     * A reference system connection MUST have a member "system" whose value MUST be a Reference System Object
     */
    system: ReferenceSystemObject;
}

export interface AxisObject {
    /**
     * An axis object MAY have axis value bounds defined in the member "bounds" where the
     * value is an array of values of length len*2 with len being the length of the "values"
     * array. For each axis value at array index i in the "values" array, a lower and upper
     * bounding value at positions 2*i and 2*i+1, respectively, are given in the bounds array.
     * If a domain axis object has no "bounds" member, then a bounds array MAY be derived automatically
     */
    bounds?: number[];
}
/**
 * The values of "start" and "stop" MUST be numbers, and the value of "num" an integer
 * greater than zero. If the value of "num" is 1, then "start" and "stop" MUST have
 * identical values. For num > 1, the array elements of "values" MAY be reconstructed with
 * the formula start + i * step where i is the ith element and in the interval [0, num-1]
 * and step = (stop - start) / (num - 1). If num = 1 then "values" is [start]. Note
 * that "start" can be greater than "stop" in which case the axis values are descending
 * @todo review the usage of the RegularlySpacedAxis in a future Commit
 */
export interface RegularlySpacedAxis {
    start: number;
    stop: number;
    num: number;
}

export interface NdArrayObject {
    type: "NdArray";
    /**
     * An NdArray object MAY have a member with the name "shape" where the value is an array of integers. For 0D arrays, "shape" MAY be omitted (defaulting to []). For >= 1D arrays it MUST be included.
     * Where "shape" is present and non-empty, the product of its values MUST equal the number of elements in the "values" array.
     */
    shape?: number[];
    /**
     * MAY have a member with the name "axisNames" where the value is an array of strings of the same length as "shape", such that each string assigns a name to the corresponding dimension. For 0D arrays, "axisNames" MAY be omitted (defaulting to
     * []). For >= 1D arrays it MUST be included.
     */
    axisNames?: string[];
}
/**
 * A CoverageJSON object with the type "NdArray" is an NdArray object. It represents a multidimensional (>= 0D) array with named axes, encoded as a flat, one-dimensional JSON array in row-major order.
 */
export type NdArray = StringNdArray | NumberNdArray | TiledNdArray;

export interface NumberNdArray extends NdArrayObject {
    /**
     * MUST have member with the name "values" where value is a non-empty array of numbers and nulls, or strings and nulls where nulls represent missing data
     * 0D NdArrays must have exactly one item in the "values" array
     * Within the "values" array, the elements MUST be ordered such that the last dimension in "axisNames" varies fastest, i.e. row-major order. (This mimics the approach taken in NetCDF; see the example below.)
     * Note that common JSON implementations use IEEE 754-2008 64-bit (double precision) floating point numbers as the data type for "values". Users SHOULD be aware of the
     * limitations in precision when encoding numbers in this way. For example, when encoding integers, users SHOULD be aware that only values within the range [-253+1, 253-1] can be represented in a way that will ensure exact interoperability among such implementations
     * [IETF RFC 7159] @external https://datatracker.ietf.org/doc/html/rfc7159
     */
    values: [number | null, ...(number | null)[]];
    /**
     * MUST have member with name "dataType" where value is either "float", "integer" or "string"
     * MUST correspond to the data type of non-null values in "values" array
     */
    dataType: "integer" | "float";
}
/**See above */
export interface StringNdArray extends NdArrayObject {
    dataType: "string";
    values: [string | null, ...(string | null)[]];
}

/**
 * @description A CoverageJSON object with the type "TiledNdArray" is a TiledNdArray object. It represents
    a multidimensional (>= 1D) array with named axes that is split up into sets of linked NdArray
    OPEN GEOSPATIAL CONSORTIUM 21-069R2 35
    documents. Each tileset typically covers a specific data access scenario, for example, loading a
    single time slice of a grid vs. loading a time series of a spatial subset of a grid
 */
export interface TiledNdArray {
    type: "TiledNdArray";
    dataType: "float" | "string" | "integer";
    /**
     * A TiledNdArray object MUST have a member with the name "shape" where the value is a non-empty array of integers
     */
    shape: [number, ...number[]];
    /**MUST have member "tileSets" where value is a non-empty array of TileSet objects */
    tileSets: [TileSet, ...TileSet[]];
    /**
     * A TiledNdArray object MUST have a member with the name "axisNames" where the value is a string array of the same length as "shape"
     */
    axisNames: string[];
}

/**
 * @description
 */
export interface TileSet {
    /**
     * MUST have member "tileShape" where value is an array of same length as "shape"
     * and where each array element is either null or an integer lower or equal than the corresponding element in "shape"
     * A null value denotes that the axis is not tiled
     */
    tileShape: (number | null)[];
    /**
     * MUST have member "urlTemplate" where value is a Level 1 URI template as defined in RFC 6570 @external https://tools.ietf.org/html/rfc6570
     * The URI template MUST contain a variable for each axis name whose corresponding element in "tileShape" is not null
     * A variable for an axis of total size totalSize (from "shape") and tile size tileSize (from "tileShape") and has as value one of the integers 0, 1, …, q + r - 1 where q and r are the quotient and remainder obtained by dividing totalSize by tileSize
     * Each URI that can be generated from the URI template MUST resolve to an NdArray CoverageJSON document where the members "dataType" and "axisNames`" are identical to the ones of the
     * TiledNdArray object, and where each value of `"shape" is an integer equal, or lower if an edge tile, to the corresponding element in "tileShape" while replacing null with the corresponding element of "shape" of the TiledNdArray.
     */
    urlTemplate: string;
}

/**
 * @section 9.6.4
 * A CoverageJSON object with the type "Coverage" is a coverage object
 */
export interface Coverage<D extends Domain = Domain> {
    /** */
    type: "Coverage";

    /**Common identifier SHOULD be included if possible */
    id?: string;
    /**
     * MUST have member "domain" where value is either a domain object or a URL
     */
    domain: D | string;
    /**
     * If the value of "domain" is a URL and the referenced domain has a "domainType" member,        * then the coverage object SHOULD have the member "domainType" where the value MUST equal that of the referenced domain
     * If the coverage object is part of a coverage collection which has a "domainType" member then that member SHOULD be omitted in the coverage object.
     */
    domainType?: Domain["domainType"];
    /**
     * A coverage object MAY have a member with the name "parameters" where the value is an object where each member has as name a short identifier and as value a parameter
     * object. The identifier corresponds to the commonly known concept of “variable name” and
     * is merely used in clients for conveniently accessing the corresponding range object.
     * A coverage object MUST have a "parameters" member if the coverage object is not part of a coverage collection or if the coverage collection does not have a "parameters" member.
     */
    parameters?: { [key: string]: Parameter };
    /**
     * A coverage object MAY have a member with the name "parameterGroups" where the value is an array of ParameterGroup objects.
     */
    parameterGroups?: ParameterGroup[];
    /**
     * A coverage object MUST have a member with the name "ranges" where the value is a range set object.
     * Any member of a range set object has as name any of the names in a "parameters" object in scope and as value either an NdArray or TiledNdArray object or
     * a URL resolving to a CoverageJSON document of such object. A "parameters" member
     * in scope is either within the enclosing coverage object or, if part of a coverage collection,
     * in the parent coverage collection object. The shape and axis names of each NdArray
     * or TiledNdArray object MUST correspond to the domain axes defined by "domain",
     * while single-valued axes MAY be omitted. If the referenced parameter object has a
     * "categoryEncoding" member, then each non-null array element of the "values" member
     * of the NdArray object, or the linked NdArray objects within a TiledNdArray object,
     * MUST be equal to one of the values defined in the "categoryEncoding" object and be interpreted as the matching category
     */
    ranges: Ranges;
}

export interface Ranges {
    [key: string]: NdArray;
}

/**
 * @section 9.6.5
 * @description A CoverageJSON object with the type "CoverageCollection" is a coverage collection object.
 */

export interface CoverageCollection<C extends Coverage = Coverage> {
    type: "CoverageCollection";
    /**
     * A coverage collection object MAY have the member "domainType" with a string value to indicate that the coverage collection only contains coverages of the given domain type.
     * See the section Common Domain Types for details. Custom domain types may be used as recommended in the section Extensions @external https://docs.ogc.org/cs/21-069r2/21-069r2.pdf#%5B%7B%22num%22%3A3041%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C99.212%2C338.319%2Cnull%5D
     */
    domainType?: Domain["domainType"];
    /**
     * MUST have a member "coverages"
     * The value corresponding to "coverages" is an array. Each element in the array is a coverage object as defined above
     */
    coverages: Array<C>;
    /**
     * A coverage collection object MAY have a member with the name "parameters" where the value is an object where each member has as name a short identifier and as value a parameter object.
     */
    parameters?: { [key: string]: Parameter };
    /**
     * A coverage collection object MAY have a member with the name "parameterGroups" where the value is an array of ParameterGroup objects.
     */
    parameterGroups?: ParameterGroup[];
    /**
     * A coverage collection object MAY have a member with t he name "referencing" where the value is an array of reference system connection objects
     */
    referencing?: ReferenceSystemConnection[];
}

/**
 * @section 9.7 Extensions
 * A CoverageJSON document can be extended with custom members and types in a robust and
interoperable way. For that, it makes use of absolute URIs and compact URIs (prefix:suffix)
in order to avoid conflicts with other extensions and future versions of the format. A central
registry of compact URI prefixes is provided which anyone can extend and which is a simple
mapping from compact URI prefix to namespace URI in order to avoid collisions with other
extensions that are based on compact URIs as well. Extensions that do not follow this
approach MAY use simple names instead of absolute or compact URIs but have to accept the
consequence of the document being less interoperable and future-proof. In certain use cases
this is not an issue and may be a preferred solution for simplicity reasons, for example, if such
CoverageJSON documents are only used internally and are not meant to be shared to a wider
audience.
 */

/**
 * MUST have the axes "x","y"
 * MAY have axes "z" and "t"
 * The usage of regularlyspacedaxis is subject to change
 */
export interface Grid extends DomainObject {
    domainType: "Grid";
    axes: {
        x: { values: number[] } | RegularlySpacedAxis;
        y: { values: number[] } | RegularlySpacedAxis;
        z?: { values: number[] };
        t?: { values: string[] };
    };
}
/**
 * @section 9.10.2
 * A domain with VerticalProfile domain type MUST have the axes "x", "y", and "z", where "x" and "y" MUST have a single coordinate value only.
 */
export interface VerticalProfile extends DomainObject {
    domainType: "VerticalProfile";
    axes: {
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        x: { values: [number] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        y: { values: [number] };
        z: { values: number[] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] };
    };
}
/**
 * @section 9.10.3
 * A domain with PointSeries domain type MUST have the axes "x", "y", and "t" where "x" and "y" MUST have a single coordinate value only.
 * A domain with PointSeries domain type MAY have the axis "z" which MUST have a single coordinate value only.
 */
export interface PointSeries extends DomainObject {
    domainType: "PointSeries";
    axes: {
        dataType?: "primitive";
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        x: { values: [number] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        y: { values: [number] };
        t: { values: string[] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] };
    };
}

/**
 * @section 9.10.4
 * A domain with Point domain type MUST have the axes "x" and "y" and MAY have the axes "z" and "t" where all MUST have a single coordinate value only.
 */
export interface Point extends DomainObject {
    domainType: "Point";
    axes: {
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        x: { values: [number] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        y: { values: [number] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] };
    };
}
export type Position = [number, number] | [number, number, number];
/**
 * @section 9.10.5
 * A domain with MultiPointSeries domain type MUST have the axes "composite" and "t".
 * The axis "composite" MUST have the data type "tuple" and the coordinate identifiers "x","y","z" or "x","y", in that order.
 */

export interface MultiPointSeries extends DomainObject {
    domainType: "MultiPointSeries";
    axes: {
        composite: {
            dataType: "tuple";
            coordinates: ["x", "y"] | ["x", "y", "z"];
            /**Essentially Multipoint coordinates */
            values: Position[];
        };
        t: { values: string[] };
    };
}

/**
 * @section 9.10.6 MultiPoint
 *  domain with MultiPoint domain type MUST have the axis "composite" and MAY have the axis "t" where "t" MUST have a single coordinate value only.
 * The axis "composite" MUST have the data type "tuple" and the coordinate identifiers "x","y","z" or "x","y", in that order
 */
export interface MultiPoint extends DomainObject {
    domainType: "MultiPoint";
    axes: {
        composite: {
            dataType: "tuple";
            values: Position[];
            coordinates: ["x", "y"] | ["x", "y", "z"];
        };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] };
    };
}

/**
 * @section 9.10.7
 * A domain with Trajectory domain type MUST have the axis "composite" and MAY have the axis "z" where "z" MUST have a single coordinate value only.
• The axis "composite" MUST have the data type "tuple" and the coordinate identifiers "t","x","y","z" or "t","x","y", in that order.
• The value ordering of the axis "composite" MUST follow the ordering of its "t" coordinate as defined in the corresponding reference system
 */
export interface Trajectory extends DomainObject {
    domainType: "Trajectory";
    axes: {
        composite: {
            dataType: "tuple";
            coordinates: ["t", "x", "y"] | ["t", "x", "y", "z"];
            values: [string, number, number][] | [string, number, number, number][];
        };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] };
    };
}

/**
 * @section 9.10.8
 * A domain with Section domain type MUST have the axes "composite" and "z".
 * The axis "composite" MUST have the data type "tuple" and the coordinate identifiers "t","x","y", in that order.
 * The value ordering of the axis "composite" MUST follow the ordering of its "t" coordinate as defined in the corresponding reference system
 */
export interface Section extends DomainObject {
    domainType: "Section";
    axes: {
        composite: {
            dataType: "tuple";
            coordinates: ["t", "x", "y"];
            values: [string, number, number][];
        };
        z: { values: number[] };
    };
}

/**
 * Section 9.10.9 Polygon
 * Polygons in this domain domain type are defined equally to GeoJSON, except that they can only contain [x,y] positions (and not z or additional coordinates):
 * A LinearRing is an array of 4 or more [x,y] arrays where each of x and y is a coordinate value. The first and last [x,y] elements are identical.
 * A Polygon is an array of LinearRing arrays. For Polygons with multiple rings, the first MUST be the exterior ring and any others MUST be interior rings or holes.
 *
 * A domain with Polygon domain type MUST have the axis "composite" which has a single Polygon value.
 * The axis "composite" MUST have the data type "polygon" and the coordinate identifiers "x","y", in that order.
• A Polygon domain MAY have the axes "z" and "t" which both MUST have a single coordinate value only
 */

export interface Polygon extends DomainObject {
    domainType: "Polygon";
    axes: {
        composite: {
            dataType: "polygon";
            coordinates: ["x", "y"];
            values: [number, number][][][];
        };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] };
    };
}

/**
 * Section 9.10.10 PolygonSeries
 * A domain with PolygonSeries domain type MUST have the axes "composite" and "t" where "composite" MUST have a single Polygon value. Polygons are defined in the Polygon domain type.
 * A domain with PolygonSeries domain type MAY have the axis "z" which MUST have a single coordinate value only.
 * The axis "composite" MUST have the data type "polygon" and the coordinate identifiers "x","y", in that order
 */

export interface PolygonSeries extends DomainObject {
    domainType: "PolygonSeries";
    axes: {
        composite: {
            dataType: "polygon";
            coordinates: ["x", "y"];
            values: [number, number][][][];
        };
        t: { values: string[] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] };
    };
}

/**
 * Section 9.10.11
 * A domain with MultiPolygon domain type MUST have the axis "composite" where the values are Polygons. Polygons are defined in the Polygon domain type.
 * The axis "composite" MUST have the data type "polygon" and the coordinate identifiers "x","y", in that order.
 * A MultiPolygon domain MAY have the axes "z" and "t" which both MUST have a single coordinate value only
 */

export interface MultiPolygon extends DomainObject {
    domainType: "MultiPolygon";
    axes: {
        composite: {
            dataType: "polygon";
            coordinates: ["x", "y"];
            values: [number, number][][][];
        };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        t?: { values: [string] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] };
    };
}

/**
 * Section 9.10.12 MultiPolygonSeries
 * A domain with MultiPolygonSeries domain type MUST have the axes "composite" and "t" where the values of "composite" are Polygons. Polygons are defined in the Polygon domain type.
 * The axis "composite" MUST have the data type "polygon" and the coordinate identifiers "x","y", in that order.
 * A MultiPolygon domain MAY have the axis "z" which MUST have a single coordinate value only
 */
export interface MultiPolygonSeries extends DomainObject {
    domainType: "MultiPolygonSeries";
    axes: {
        composite: {
            dataType: "polygon";
            coordinates: ["x", "y"];
            values: [number, number][][][];
        };
        t: { values: string[] };
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        z?: { values: [number] };
    };
}
