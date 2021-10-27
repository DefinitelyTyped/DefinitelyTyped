import Line from './entity/Line';
import Point from './entity/Point';
import LWPolyline from './entity/LWPolyline';
import Polyline from './entity/Polyline';
import Vertex from './entity/Vertex';
import Arc from './entity/Arc';
import Circle from './entity/Circle';
import Ellipse from './entity/Ellipse';
import Spline from './entity/Spline';
import Solid from './entity/Solid';
import MText from './entity/MText';
import Text from './entity/Text';
import Insert from './entity/Insert';
import ThreeDFace from './entity/ThreeDFace';
import Dimension from './entity/Dimension';

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
