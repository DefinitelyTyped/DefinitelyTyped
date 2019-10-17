import { ColorLike } from '../colorlike';
import AtlasManager from './AtlasManager';
import Fill from './Fill';
import ImageStyle from './Image';
import Stroke from './Stroke';

export interface Options {
    fill?: Fill;
    points: number;
    radius?: number;
    radius1?: number;
    radius2?: number;
    angle?: number;
    stroke?: Stroke;
    rotation?: number;
    rotateWithView?: boolean;
    atlasManager?: AtlasManager;
}
export interface RenderOptions {
    strokeStyle?: ColorLike;
    strokeWidth: number;
    size: number;
    lineCap: string;
    lineDash: number[];
    lineDashOffset: number;
    lineJoin: string;
    miterLimit: number;
}
export default class RegularShape extends ImageStyle {
    constructor(options: Options);
    protected atlasManager_: AtlasManager;
    protected radius_: number;
    protected render_(atlasManager: AtlasManager | undefined): void;
    clone(): RegularShape;
    getAngle(): number;
    getChecksum(): string;
    getFill(): Fill;
    getPoints(): number;
    getRadius(): number;
    getRadius2(): number | undefined;
    getStroke(): Stroke;
}
