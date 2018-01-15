import Features from 'ember-feature-flags';
import './helpers/with-feature';
import { assertType } from './lib/assert';

declare module 'ember-feature-flags' {
    export default interface Features {
        someFeature: boolean;
    }
}

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
assertType<boolean>(features.get('someFeature'));
