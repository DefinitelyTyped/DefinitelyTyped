import Arc from "./entity/arc";
import Circle from "./entity/circle";
import Dimension from "./entity/dimension";
import Ellipse from "./entity/ellipse";
import Insert from "./entity/insert";
import Line from "./entity/line";
import LWPolyline from "./entity/lwpolyline";
import MText from "./entity/mtext";
import Point from "./entity/point";
import Polyline from "./entity/polyline";
import Solid from "./entity/solid";
import Spline from "./entity/spline";
import Text from "./entity/text";
import ThreeDFace from "./entity/threedface";
import Vertex from "./entity/vertex";

export type LayerGroupedEntities = Record<string, Entity>;
export type EntityType =
    | "POINT"
    | "LINE"
    | "LWPOLYLINE"
    | "POLYLINE"
    | "VERTEX"
    | "ARC"
    | "CIRCLE"
    | "ELLIPSE"
    | "SPLINE"
    | "SOLID"
    | "TEXT"
    | "MTEXT"
    | "INSERT"
    | "3DFACE"
    | "DIMENSION";

export type Entity =
    | Vertex
    | Text
    | Spline
    | Solid
    | Polyline
    | Point
    | MText
    | Line
    | LWPolyline
    | Insert
    | Ellipse
    | Dimension
    | Circle
    | Arc
    | ThreeDFace;

export {
    Arc,
    Circle,
    Dimension,
    Ellipse,
    Insert,
    Line,
    LWPolyline,
    MText,
    Point,
    Polyline,
    Solid,
    Spline,
    Text,
    ThreeDFace,
    Vertex,
};
