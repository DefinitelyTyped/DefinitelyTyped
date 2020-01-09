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

export type GeometryFunction = (p0: FeatureLike) => Geometry | RenderFeature;
export interface Options {
    geometry?: string | Geometry | GeometryFunction;
    fill?: Fill;
    image?: ImageStyle;
    renderer?: RenderFunction;
    stroke?: Stroke;
    text?: Text;
    zIndex?: number;
}
export type RenderFunction = (p0: Coordinate | Coordinate[] | Coordinate[][], p1: State) => void;
export type StyleFunction = (p0: FeatureLike, p1: number) => Style | Style[];
export type StyleLike = Style | Style[] | StyleFunction;
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
    setRenderer(renderer: RenderFunction | null): void;
    setStroke(stroke: Stroke): void;
    setText(text: Text): void;
    setZIndex(zIndex: number | undefined): void;
}
export function createDefaultStyle(feature: FeatureLike, resolution: number): Style[];
export function createEditingStyle(): { [key in GeometryType]: Style[] };
export function toFunction(obj: StyleFunction | Style[] | Style): StyleFunction;
