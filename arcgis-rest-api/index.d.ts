// Type definitions for arcgis-to-geojson-utils 10.4
// Project: http://resources.arcgis.com/en/help/arcgis-rest-api/
// Definitions by: Jeff Jacobson <https://github.com/JeffJacobson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ArcGis.Rest {
    interface Feature {
        geometry: Geometry;
        attributes: any;
    }

    interface Field {
        name: string;
        type: string;
        alias?: string;
        length?: number;
    }

    interface FeatureSet extends HasZM {
        objectIdFieldName?: string; // optional
        globalIdFieldName?: string; // optional
        displayFieldName?: string; // optional
        geometryType?: esriGeometryType; // for feature layers only
        spatialReference?: SpatialReference; // for feature layers only.
        fields?: Field[];
        features: Feature[];
    }

    type Position2D = [number, number];
    type Position = Position2D | [number, number, number] | [number, number, number, number];

    interface CircularArc {
        "c": [Position, Position2D];
    }

    interface Arc {
        "a": [
            Position, // End point: x, y, <z>, <m>
            Position2D, // Center point: center_x, center_y
            number, // minor
            number, // clockwise
            number, // rotation
            number, // axis
            number // ratio
        ];
    }

    type ElipticArc = Arc;

    interface OldCircularArc {
        "a": [
            Position, // End point: x, y, <z>, <m>
            Position2D, // Center point: center_x, center_y
            number, // minor
            number // clockwise
        ];
    }

    interface BezierCurve {
        "b": [
            Position,
            Position2D,
            Position2D
        ];
    }

    type JsonCurve = CircularArc | Arc | OldCircularArc | BezierCurve;


    interface SpatialReferenceWkid {
        wkid?: number;
        latestWkid?: number;
        vcsWkid?: number;
        latestVcsWkid?: number;
    }

    interface SpatialReferenceWkt {
        wkt?: string;
        latestWkt?: string;
    }

    type SpatialReference = SpatialReferenceWkt | SpatialReferenceWkid;

    interface Geometry {
        spatialReference?: SpatialReference;
    }

    interface HasZM {
        hasZ?: boolean;
        hasM?: boolean;
    }

    interface Point extends Geometry {
        x: number;
        y: number;
        z?: number;
        m?: number;
    }

    interface Polyline extends HasZM, Geometry {
        paths: Position[][];
    }

    interface PolylineWithCurves extends HasZM, Geometry {
        curvePaths: Array<Array<(Position | JsonCurve)>>;
    }

    interface Polygon extends HasZM, Geometry {
        rings: Position[][];
    }

    interface PolygonWithCurves extends HasZM, Geometry {
        curveRings: Array<Array<(Position | JsonCurve)>>;
    }

    interface Multipoint extends HasZM, Geometry {
        points: Position[];
    }

    interface Envelope extends Geometry {
        xmin: number;
        xmax: number;
        ymin: number;
        ymax: number;

        zmin?: number;
        zmax?: number;

        mmin?: number;
        mmax?: number;
    }

    type esriGeometryType = "esriGeometryPoint" | "esriGeometryMultipoint" | "esriGeometryPolyline" | "esriGeometryPolygon" | "esriGeometryEnvelope";


    type Color = [number, number, number, number];
    type SimpleMarkerSymbolStyle = "esriSMSCircle" | "esriSMSCross" | "esriSMSDiamond" | "esriSMSSquare" | "esriSMSX" | "esriSMSTriangle";
    type SimpleLineSymbolStyle = "esriSLSDash" | "esriSLSDashDot" | "esriSLSDashDotDot" | "esriSLSDot" | "esriSLSNull" | "esriSLSSolid";
    type SimpleFillSymbolStyle = "esriSFSBackwardDiagonal" | "esriSFSCross" | "esriSFSDiagonalCross" | "esriSFSForwardDiagonal" | "esriSFSHorizontal" | "esriSFSNull" | "esriSFSSolid" | "esriSFSVertical";
    type SymbolType = "esriSLS" | "esriSMS" | "esriSFS" | "esriPMS" | "esriPFS" | "esriTS";

    interface Symbol {
        "type": SymbolType;
        "style"?: string;
    }

    interface SimpleLineSymbol extends Symbol {
        "type": "esriSLS";
        "style"?: SimpleLineSymbolStyle;
        "color"?: Color;
        "width"?: number;
    }

    interface MarkerSymbol extends Symbol {
        "angle"?: number;
        "xoffset"?: number;
        "yoffset"?: number;
    }

    interface SimpleMarkerSymbol extends MarkerSymbol {
        "type": "esriSMS";
        "style"?: SimpleMarkerSymbolStyle;
        "color"?: Color;
        "size"?: number;
        "outline"?: SimpleLineSymbol;
    }

    interface SimpleFillSymbol extends Symbol {
        "type": "esriSFS";
        "style"?: SimpleFillSymbolStyle;
        "color"?: Color;
        "outline"?: SimpleLineSymbol; //if outline has been specified
    }

    interface PictureSourced {
        "url"?: string; //Relative URL for static layers and full URL for dynamic layers. Access relative URL using http://<mapservice-url>/<layerId1>/images/<imageUrl11>
        "imageData"?: string; //"<base64EncodedImageData>";
        "contentType"?: string;
        "width"?: number;
        "height"?: number;
        "angle"?: number;
        "xoffset"?: number;
        "yoffset"?: number;

    }

    interface PictureMarkerSymbol extends MarkerSymbol, PictureSourced {
        "type": "esriPMS";
    }

    interface PictureFillSymbol extends Symbol, PictureSourced {
        "type": "esriPFS";
        "outline"?: SimpleLineSymbol; //if outline has been specified
        "xscale"?: number;
        "yscale"?: number;
    }

    interface Font {
        "family"?: string; //"<fontFamily>";
        "size"?: number; //<fontSize>;
        "style"?: "italic" | "normal" | "oblique";
        "weight"?: "bold" | "bolder" | "lighter" | "normal";
        "decoration"?: "line-through" | "underline" | "none";
    }

    interface TextSymbol extends MarkerSymbol {
        "type": "esriTS";
        "color"?: Color;
        "backgroundColor"?: Color;
        "borderLineSize"?: number; // <size>;
        "borderLineColor"?: Color;
        "haloSize"?: number; // <size>;
        "haloColor"?: Color;
        "verticalAlignment"?: "baseline" | "top" | "middle" | "bottom";
        "horizontalAlignment"?: "left" | "right" | "center" | "justify";
        "rightToLeft"?: boolean;
        "kerning"?: boolean;
        "font"?: Font;
        "text"?: string; //only applicable when specified as a client-side graphic.
    }
}