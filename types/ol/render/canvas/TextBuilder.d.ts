import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import SimpleGeometry from '../../geom/SimpleGeometry';
import Text from '../../style/Text';
import { DeclutterGroups } from '../canvas';
import RenderFeature from '../Feature';
import CanvasBuilder, { SerializableInstructions } from './Builder';

export enum TEXT_ALIGN {
    left = 0,
    end = 0,
    center = 0.5,
    right = 1,
    start = 1,
    top = 0,
    middle = 0.5,
    hanging = 0.2,
    alphabetic = 0.8,
    ideographic = 0.8,
    bottom = 1,
}
export default class CanvasTextBuilder extends CanvasBuilder {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number);
    drawText(geometry: SimpleGeometry | RenderFeature, feature: FeatureLike): void;
    finish(): SerializableInstructions;
    setTextStyle(textStyle: Text, declutterGroups: DeclutterGroups): void;
}
