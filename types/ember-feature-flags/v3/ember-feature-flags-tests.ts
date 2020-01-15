import Features from 'ember-feature-flags';
import 'ember-feature-flags/tests/helpers/with-feature';

/** Static assertion that `value` has type `T` */
// Disable tslint here b/c the generic is used to let us do a type coercion and
// validate that coercion works for the type value "passed into" the function.
// tslint:disable-next-line:no-unnecessary-generics
export declare function assertType<T>(value: T): void;

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
  'new-billing-plans': true,
  'new-homepage': false
};
features.setup(setup); // $ExpectType void
withFeature('new-homepage'); // $ExpectType void
assertType<boolean>(features.get('someFeature'));
