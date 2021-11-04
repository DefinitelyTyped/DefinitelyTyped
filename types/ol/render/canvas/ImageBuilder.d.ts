import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import MultiPoint from '../../geom/MultiPoint';
import Point from '../../geom/Point';
import ImageStyle from '../../style/Image';
import { SerializableInstructions } from '../canvas';
import RenderFeature from '../Feature';
import CanvasBuilder from './Builder';

export default class CanvasImageBuilder extends CanvasBuilder {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number);
    drawMultiPoint(multiPointGeometry: MultiPoint | RenderFeature, feature: FeatureLike): void;
    drawPoint(pointGeometry: Point | RenderFeature, feature: FeatureLike): void;
    finish(): SerializableInstructions;
    setImageStyle(imageStyle: ImageStyle, opt_sharedData?: any): void;
}
