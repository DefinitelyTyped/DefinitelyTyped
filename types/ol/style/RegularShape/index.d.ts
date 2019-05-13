declare module 'ol/style/RegularShape' {

  import { ColorLike } from 'ol/colorlike';
  import AtlasManager from 'ol/style/AtlasManager';
  import Fill from 'ol/style/Fill';
  import ImageStyle from 'ol/style/Image';
  import Stroke from 'ol/style/Stroke';

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

  export default class RegularShape extends ImageStyle {
    constructor(options: Options);
    protected atlasManager_: AtlasManager;
    protected radius_: number;
    protected render_(atlasManager: AtlasManager): void;
    clone(): RegularShape;
    clone(): ImageStyle;
    getAngle(): number;
    getChecksum(): string;
    getFill(): Fill;
    getPoints(): number;
    getRadius(): number;
    getRadius2(): number;
    getStroke(): Stroke;
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

}
