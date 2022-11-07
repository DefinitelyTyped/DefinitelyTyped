// Type definitions for ember-resolver 5.0
// Project: https://github.com/ember-cli/ember-resolver#readme
// Definitions by: Dan Freeman <https://github.com/dfreeman>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 James C. Davis <https://github.com/jamescdavis>
//                 Peter Wagenet <https://github.com/wagenet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import EmberObject from '@ember/object';
import { Resolver } from '@ember/owner';

/**
 * An Ember `Resolver` implementation used by ember-cli.
 */
export default class EmberResolver extends EmberObject implements Resolver {
    resolve: (name: string) => object | undefined;
    normalize: (fullName: `${string}:${string}`) => string;
    /**
     * To customize pluralization provide a `pluralizedTypes` object to your
     * applications resolver:
     *
     * ```js
     * // app/app.js
     * import Resolver from 'ember-resolver';
     *
     * export default class AppResolver extends Resolver {
     *   pluralizedTypes = {
     *     'sheep': 'sheep',
     *     'strategy': 'strategies'
     *   }
     * }
     *
     * // ...snip...
     * export default class App extends Application {
     *   // ...snip...
     *   Resolver = AppResolver;
     * }
     *
     * // ...snip...
     * ```
     */
    pluralizedTypes: Record<string, string>;
}
