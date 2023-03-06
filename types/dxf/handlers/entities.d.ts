import Line from './entity/line';
import Point from './entity/point';
import LWPolyline from './entity/lwpolyline';
import Polyline from './entity/polyline';
import Vertex from './entity/vertex';
import Arc from './entity/arc';
import Circle from './entity/circle';
import Ellipse from './entity/ellipse';
import Spline from './entity/spline';
import Solid from './entity/solid';
import MText from './entity/mtext';
import Text from './entity/text';
import Insert from './entity/insert';
import ThreeDFace from './entity/threedface';
import Dimension from './entity/dimension';

export type LayerGroupedEntities = Record<string, Entity>;
export type EntityType =
    'POINT'|
    'LINE' |
    'LWPOLYLINE' |
    'POLYLINE' |
    'VERTEX' |
    'ARC' |
    'CIRCLE' |
    'ELLIPSE' |
    'SPLINE' |
    'SOLID' |
    'TEXT' |
    'MTEXT' |
    'INSERT' |
    '3DFACE' |
    'DIMENSION';

export type Entity =
    Vertex |
    Text |
    Spline |
    Solid |
    Polyline |
    Point |
    MText |
    Line |
    LWPolyline |
    Insert |
    Ellipse |
    Dimension |
    Circle |
    Arc |
    ThreeDFace;

export {
    Vertex,
    Text,
    Spline,
    Solid,
    Polyline,
    Point,
    MText,
    Line,
    LWPolyline,
    Insert,
    Ellipse,
    Dimension,
    Circle,
    Arc,
    ThreeDFace
};
