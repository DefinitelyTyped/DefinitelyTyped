import Features from 'ember-feature-flags';
import 'ember-feature-flags/tests/helpers/with-feature';

// https://www.npmjs.com/package/ember-feature-flags#withfeature
declare var features: Features;
features.isEnabled('new-billing-plans'); // $ExpectType boolean
features.enable('newHomepage'); // $ExpectType void
features.disable('newHomepage'); // $ExpectType void
const setup = {
  "new-billing-plans": true,
  "new-homepage": false
};
features.setup(setup); // $ExpectType void
withFeature('new-homepage'); // $ExpectType void
