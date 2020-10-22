import React = require('react');

import { ViewProps } from '../../../index';
import Circle, { CircleProps } from './Circle';
import ClipPath, { ClipPathProps } from './ClipPath';
import Defs, { DefsProps } from './Defs';
import Ellipse, { EllipseProps } from './Ellipse';
import G, { GProps } from './G';
import Image, { ImageProps } from './Image';
import Line, { LineProps } from './Line';
import LinearGradient, { LinearGradientProps } from './LinearGradient';
import Path, { PathProps } from './Path';
import Pattern, { PatternProps } from './Pattern';
import Polygon, { PolygonProps } from './Polygon';
import Polyline, { PolylineProps } from './Polyline';
import RadialGradient, { RadialGradientProps } from './RadialGradient';
import Rect, { RectProps } from './Rect';
import Stop, { StopProps } from './Stop';
import SvgSymbol, { SymbolProps } from './Symbol';
import Text, { TextProps } from './Text';
import TextPath, { TextPathProps } from './TextPath';
import TSpan, { TSpanProps } from './TSpan';
import Use, { UseProps } from './Use';

export interface SvgProps extends ViewProps {
    opacity?: string | number;
    width?: string | number;
    height?: string | number;
    // more detail https://svgwg.org/svg2-draft/coords.html#ViewBoxAttribute
    viewBox?: string;
    preserveAspectRatio?: string;
}

export default class Svg extends React.Component<SvgProps> {
    static Circle: new (props: CircleProps) => Circle;
    static ClipPath: new (props: ClipPathProps) => ClipPath;
    static Defs: new (props: DefsProps) => Defs;
    static Ellipse: new (props: EllipseProps) => Ellipse;
    static G: new (props: GProps) => G;
    static Image: new (props: ImageProps) => Image;
    static Line: new (props: LineProps) => Line;
    static LinearGradient: new (props: LinearGradientProps) => LinearGradient;
    static Path: new (props: PathProps) => Path;
    static Pattern: new (props: PatternProps) => Pattern;
    static Polygon: new (props: PolygonProps) => Polygon;
    static Polyline: new (props: PolylineProps) => Polyline;
    static RadialGradient: new (props: RadialGradientProps) => RadialGradient;
    static Rect: new (props: RectProps) => Rect;
    static Stop: new (props: StopProps) => Stop;
    static Symbol: new (props: SymbolProps) => SvgSymbol;
    static Text: new (props: TextProps) => Text;
    static TextPath: new (props: TextPathProps) => TextPath;
    static TSpan: new (props: TSpanProps) => TSpan;
    static Use: new (props: UseProps) => Use;
}
