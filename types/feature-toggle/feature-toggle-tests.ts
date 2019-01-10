import * as ft from 'feature-toggle';

const features = ft(['ft1', 'ft2']); // $ExpectType FeatureToggle

features.active('ft1'); // $ExpectType boolean
features.activate(['ft1']); // $ExpectType FeatureToggle
features.deactivate(['ft1']); // $ExpectType FeatureToggle
