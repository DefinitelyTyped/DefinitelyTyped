import {
    TransformResult,
    ImportNames,
    ConcreteTransformResult,
    LinkedTransformResult,
    TransformVariants,
} from 'metro';

export const importNames: ImportNames = {
    all: 'all',
    default: 'default',
};

export const concrete: ConcreteTransformResult = {
    type: 'concrete',
    code: 'code',
    dependencies: [],
    soundResources: ['test'],
    dependencyMapName: 'name',
    requireName: 'name',
    importNames,
};

export const linked: LinkedTransformResult = {
    type: 'linked',
    sourceVariantName: 'name',
};

export const result: TransformResult = concrete;

export const variants: TransformVariants = {
    v1: false
};
