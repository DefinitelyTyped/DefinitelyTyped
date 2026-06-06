export interface Feature {
    geometry: Geometry;
    attributes: any;
}

export interface Field {
    name: string;
    type: string;
    alias?: string | undefined;
    length?: number | undefined;
}

export interface FeatureSet extends HasZM {
    objectIdFieldName?: string | undefined; // optional
    globalIdFieldName?: string | undefined; // optional
    displayFieldName?: string | undefined; // optional
    geometryType?: esriGeometryType | undefined; // for feature layers only
    spatialReference?: SpatialReference | undefined; // for feature layers only.
    fields?: Field[] | undefined;
    features: Feature[];
}

export type Position2D = [number, number];
export type Position = Position2D | [number, number, number] | [number, number, number, number];

export interface CircularArc {
    "c": [Position, Position2D];
}

export interface Arc {
    "a": [
        Position, // End point: x, y, <z>, <m>
        Position2D, // Center point: center_x, center_y
        number, // minor
        number, // clockwise
        number, // rotation
        number, // axis
        number, // ratio
    ];
}

export type ElipticArc = Arc;

export interface OldCircularArc {
    "a": [
        Position, // End point: x, y, <z>, <m>
        Position2D, // Center point: center_x, center_y
        number, // minor
        number, // clockwise
    ];
}

export interface BezierCurve {
    "b": [
        Position,
        Position2D,
        Position2D,
    ];
}

export type JsonCurve = CircularArc | Arc | OldCircularArc | BezierCurve;

export interface SpatialReferenceWkid {
    wkid?: number | undefined;
    latestWkid?: number | undefined;
    vcsWkid?: number | undefined;
    latestVcsWkid?: number | undefined;
}

export interface SpatialReferenceWkt {
    wkt?: string | undefined;
    latestWkt?: string | undefined;
}

export type SpatialReference = SpatialReferenceWkt | SpatialReferenceWkid;

export interface Geometry {
    spatialReference?: SpatialReference | undefined;
}

export interface HasZM {
    hasZ?: boolean | undefined;
    hasM?: boolean | undefined;
}

export interface Point extends Geometry {
    x: number;
    y: number;
    z?: number | undefined;
    m?: number | undefined;
}

export interface Polyline extends HasZM, Geometry {
    paths: Position[][];
}

export interface PolylineWithCurves extends HasZM, Geometry {
    curvePaths: Array<Array<(Position | JsonCurve)>>;
}

export interface Polygon extends HasZM, Geometry {
    rings: Position[][];
}

export interface PolygonWithCurves extends HasZM, Geometry {
    curveRings: Array<Array<(Position | JsonCurve)>>;
}

export interface Multipoint extends HasZM, Geometry {
    points: Position[];
}

export interface Envelope extends Geometry {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;

    zmin?: number | undefined;
    zmax?: number | undefined;

    mmin?: number | undefined;
    mmax?: number | undefined;
}

export type esriGeometryType =
    | "esriGeometryPoint"
    | "esriGeometryMultipoint"
    | "esriGeometryPolyline"
    | "esriGeometryPolygon"
    | "esriGeometryEnvelope";

export type Color = [number, number, number, number];
export type SimpleMarkerSymbolStyle =
    | "esriSMSCircle"
    | "esriSMSCross"
    | "esriSMSDiamond"
    | "esriSMSSquare"
    | "esriSMSX"
    | "esriSMSTriangle";
export type SimpleLineSymbolStyle =
    | "esriSLSDash"
    | "esriSLSDashDot"
    | "esriSLSDashDotDot"
    | "esriSLSDot"
    | "esriSLSNull"
    | "esriSLSSolid";
export type SimpleFillSymbolStyle =
    | "esriSFSBackwardDiagonal"
    | "esriSFSCross"
    | "esriSFSDiagonalCross"
    | "esriSFSForwardDiagonal"
    | "esriSFSHorizontal"
    | "esriSFSNull"
    | "esriSFSSolid"
    | "esriSFSVertical";
export type SymbolType = "esriSLS" | "esriSMS" | "esriSFS" | "esriPMS" | "esriPFS" | "esriTS";

export interface Symbol {
    "type": SymbolType;
    "style"?: string | undefined;
}

export interface SimpleLineSymbol extends Symbol {
    "type": "esriSLS";
    "style"?: SimpleLineSymbolStyle | undefined;
    "color"?: Color | undefined;
    "width"?: number | undefined;
}

export interface MarkerSymbol extends Symbol {
    "angle"?: number | undefined;
    "xoffset"?: number | undefined;
    "yoffset"?: number | undefined;
}

export interface SimpleMarkerSymbol extends MarkerSymbol {
    "type": "esriSMS";
    "style"?: SimpleMarkerSymbolStyle | undefined;
    "color"?: Color | undefined;
    "size"?: number | undefined;
    "outline"?: SimpleLineSymbol | undefined;
}

export interface SimpleFillSymbol extends Symbol {
    "type": "esriSFS";
    "style"?: SimpleFillSymbolStyle | undefined;
    "color"?: Color | undefined;
    "outline"?: SimpleLineSymbol | undefined; // if outline has been specified
}

export interface PictureSourced {
    "url"?: string | undefined; // Relative URL for static layers and full URL for dynamic layers. Access relative URL using http://<mapservice-url>/<layerId1>/images/<imageUrl11>
    "imageData"?: string | undefined; // "<base64EncodedImageData>";
    "contentType"?: string | undefined;
    "width"?: number | undefined;
    "height"?: number | undefined;
    "angle"?: number | undefined;
    "xoffset"?: number | undefined;
    "yoffset"?: number | undefined;
}

export interface PictureMarkerSymbol extends MarkerSymbol, PictureSourced {
    "type": "esriPMS";
}

export interface PictureFillSymbol extends Symbol, PictureSourced {
    "type": "esriPFS";
    "outline"?: SimpleLineSymbol | undefined; // if outline has been specified
    "xscale"?: number | undefined;
    "yscale"?: number | undefined;
}

export interface Font {
    "family"?: string | undefined; // "<fontFamily>";
    "size"?: number | undefined; // <fontSize>;
    "style"?: "italic" | "normal" | "oblique" | undefined;
    "weight"?: "bold" | "bolder" | "lighter" | "normal" | undefined;
    "decoration"?: "line-through" | "underline" | "none" | undefined;
}

export interface TextSymbol extends MarkerSymbol {
    "type": "esriTS";
    "color"?: Color | undefined;
    "backgroundColor"?: Color | undefined;
    "borderLineSize"?: number | undefined; // <size>;
    "borderLineColor"?: Color | undefined;
    "haloSize"?: number | undefined; // <size>;
    "haloColor"?: Color | undefined;
    "verticalAlignment"?: "baseline" | "top" | "middle" | "bottom" | undefined;
    "horizontalAlignment"?: "left" | "right" | "center" | "justify" | undefined;
    "rightToLeft"?: boolean | undefined;
    "kerning"?: boolean | undefined;
    "font"?: Font | undefined;
    "text"?: string | undefined; // only applicable when specified as a client-side graphic.
}
