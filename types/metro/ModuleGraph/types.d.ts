import { TransformResultDependency } from '../DeltaBundler/types';
import { BasicSourceMap } from 'metro-source-map';

export type TransformResult = ConcreteTransformResult | LinkedTransformResult;

export interface ImportNames {
    all: string;
    default: string;
}

export interface ConcreteTransformResult {
    type: 'concrete';
    code: string;
    dependencies: ReadonlyArray<TransformResultDependency>;
    map?: BasicSourceMap;
    soundResources?: string[];

    // NOTE: requireName, importNames and dependencyMapName are only used by the
    // optimizer. They are deleted when the transform result is serialized to
    // JSON.
    dependencyMapName?: string;
    requireName?: string;
    importNames?: ImportNames;
}

export type LinkedTransformResult = Readonly<{
    type: 'linked';
    sourceVariantName: string;
}>;

export interface TransformVariants {
    readonly [name: string]: unknown;
}
