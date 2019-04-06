import React from 'react';

import { ViewProps } from '../../../index';
import Circle from './Circle';
import ClipPath from './ClipPath';
import Defs from './Defs';
import Ellipse from './Ellipse';
import G from './G';
import Image from './Image';
import Line from './Line';
import LinearGradient from './LinearGradient';
import Path from './Path';
import Pattern from './Pattern';
import Polygon from './Polygon';
import Polyline from './Polyline';
import RadialGradient from './RadialGradient';
import Rect from './Rect';
import Stop from './Stop';
import Symbol from './Symbol';
import Text from './Text';
import TextPath from './TextPath';
import TSpan from './TSpan';
import Use from './Use';

export interface SvgProps extends ViewProps {
    className?: string;
    opacity?: string | number;
    width?: string | number;
    height?: string | number;
    // more detail https://svgwg.org/svg2-draft/coords.html#ViewBoxAttribute
    viewBox?: string;
    preserveAspectRatio?: string;
}

export default class Svg extends React.Component<SvgProps> {
    static Circle: Circle;
    static ClipPath: ClipPath;
    static Defs: Defs;
    static Ellipse: Ellipse;
    static G: G;
    static Image: Image;
    static Line: Line;
    static LinearGradient: LinearGradient;
    static Path: Path;
    static Pattern: Pattern;
    static Polygon: Polygon;
    static Polyline: Polyline;
    static RadialGradient: RadialGradient;
    static Rect: Rect;
    static Stop: Stop;
    static Symbol: Symbol;
    static Text: Text;
    static TextPath: TextPath;
    static TSpan: TSpan;
    static Use: Use;
}
