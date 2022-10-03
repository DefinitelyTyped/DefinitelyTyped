// Type definitions for non-npm package @ember/routing 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Frouting
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import { Opaque } from 'ember/-private/type-utils';

// In normal TypeScript, this component is essentially an opaque token
// that just needs to be importable. Declaring it with a unique interface
// like this, however, gives tools like Glint (that DO have a richer
// notion of what it is) a place to install more detailed type information.
export interface LinkTo extends Opaque<'component:link-to'> {}

/**
 * The `LinkTo` component renders a link to the supplied `route` passing
 * an optionally supplied model to the route as its `model` context of the route.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.components/methods/LinkTo?anchor=LinkTo
 */
export const LinkTo: LinkTo;
