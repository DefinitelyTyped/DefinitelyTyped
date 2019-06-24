import { Coordinate } from '../coordinate';
import { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import GeometryType from '../geom/GeometryType';
import { State } from '../render';
import RenderFeature from '../render/Feature';
import Fill from './Fill';
import ImageStyle from './Image';
import Stroke from './Stroke';
import Text from './Text';

export function createDefaultStyle(feature: FeatureLike, resolution: number): Style[];
export function createEditingStyle(): { [key in GeometryType]: Style[] };
export function toFunction(obj: StyleFunction | Style[] | Style): StyleFunction;
export type GeometryFunction = ((param0: FeatureLike) => Geometry | RenderFeature);
export interface Options {
    geometry?: string | Geometry | GeometryFunction;
    fill?: Fill;
    image?: ImageStyle;
    renderer?: RenderFunction;
    stroke?: Stroke;
    text?: Text;
    zIndex?: number;
}
export type RenderFunction = ((param0: Coordinate | Coordinate[] | Coordinate[][], param1: State) => void);
export default class Style {
    constructor(opt_options?: Options);
    clone(): Style;
    getFill(): Fill;
    getGeometry(): string | Geometry | GeometryFunction;
    getGeometryFunction(): GeometryFunction;
    getImage(): ImageStyle;
    getRenderer(): RenderFunction;
    getStroke(): Stroke;
    getText(): Text;
    getZIndex(): number;
    setFill(fill: Fill): void;
    setGeometry(geometry: string | Geometry | GeometryFunction): void;
    setImage(image: ImageStyle): void;
    setRenderer(renderer: RenderFunction): void;
    setStroke(stroke: Stroke): void;
    setText(text: Text): void;
    setZIndex(zIndex: number): void;
}
export type StyleFunction = ((param0: FeatureLike, param1: number) => Style | Style[]);
export type StyleLike = Style | Style[] | StyleFunction;
