import { add, enable, disable, merge, enabled, unstable_featureFlagInfo } from '@carbon/feature-flags';

add('feature-flag-a', false);

enable('feature-flag-a');

disable('feature-flag-a');

merge({
    'feature-flag-a': true,
    'feature-flag-b': false,
    'feature-flag-c': true,
});

enabled('feature-flag-a');

unstable_featureFlagInfo[0].name;

unstable_featureFlagInfo[1].name;
