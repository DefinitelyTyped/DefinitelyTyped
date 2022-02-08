import { ColorLike } from '../colorlike';
import AtlasManager from './AtlasManager';
import Fill from './Fill';
import ImageStyle from './Image';
import Stroke from './Stroke';

export interface Options {
    fill?: Fill | undefined;
    points: number;
    radius?: number | undefined;
    radius1?: number | undefined;
    radius2?: number | undefined;
    angle?: number | undefined;
    stroke?: Stroke | undefined;
    rotation?: number | undefined;
    rotateWithView?: boolean | undefined;
    atlasManager?: AtlasManager | undefined;
}
export interface RenderOptions {
    strokeStyle?: ColorLike | undefined;
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
