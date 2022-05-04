import Helper from '@ember/component/helper';

export interface FeatureFlagsSignature {
    Args: {
        Positional: [string];
    };
}

export default class FeatureFlag extends Helper<FeatureFlagsSignature> {}
