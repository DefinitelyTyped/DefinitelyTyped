import BaseEvent from '../events/Event';
import { FeatureLike } from '../Feature';
import { TransformFunction } from '../proj';
import BuilderGroup from '../render/canvas/BuilderGroup';
import Style from '../style/Style';

export function defaultOrder(feature1: FeatureLike, feature2: FeatureLike): number;
export function getSquaredTolerance(resolution: number, pixelRatio: number): number;
export function getTolerance(resolution: number, pixelRatio: number): number;
export function renderFeature<T>(
    replayGroup: BuilderGroup,
    feature: FeatureLike,
    style: Style,
    squaredTolerance: number,
    listener: (p0: BaseEvent) => void,
    opt_transform?: TransformFunction,
): boolean;
