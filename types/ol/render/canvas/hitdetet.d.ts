import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import { Pixel } from '../../pixel';
import { Size } from '../../size';
import { StyleFunction } from '../../style/Style';
import { Transform } from '../../transform';

export function createHitDetectionImageData(
    size: Size,
    transforms: Transform[],
    features: FeatureLike[],
    styleFunction: StyleFunction | undefined,
    extent: Extent,
    resolution: number,
    rotation: number,
): ImageData;
export function hitDetect(pixel: Pixel, features: FeatureLike[], imageData: ImageData): FeatureLike[];
