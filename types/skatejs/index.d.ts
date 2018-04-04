// Type definitions for skatejs 5.0
// Project: https://github.com/skatejs/skatejs
// Definitions by: Martin Hochel <https://github.com/Hotell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace skate;

// Public API: mixins
export { withComponent, withLifecycle, withContext, withChildren, withUpdate, withRenderer } from './api';

// Public API: utils
export { prop, props, link, define, emit, shadow, name } from './api';

// Public types ( Unfortunately TS doesn't have Opaque Types like Flow )
export {
  Constructor,
  CustomElement,
  ComponentProps,
  PropOptions,
  Renderer,
  WithComponent,
  WithLifecycle,
  WithContext,
  WithChildren,
  WithUpdate,
  WithRenderer
} from './types';
