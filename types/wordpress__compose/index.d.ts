// Type definitions for @wordpress/compose 4.0
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/compose/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/**
 * External dependencies
 */
import { flowRight } from 'lodash';

// Utils
export { default as createHigherOrderComponent } from './utils/create-higher-order-component';

/**
 * Composes multiple higher-order components into a single higher-order component. Performs right-to-left function
 * composition, where each successive invocation is supplied the return value of the previous.
 *
 * @param hocs The HOC functions to invoke.
 *
 * @return Returns the new composite function.
 */
export { flowRight as compose };

// Higher-order components
export { default as ifCondition } from './higher-order/if-condition';
export { default as pure } from './higher-order/pure';
export { default as withGlobalEvents } from './higher-order/with-global-events';
export { default as withInstanceId } from './higher-order/with-instance-id';
export { default as withSafeTimeout } from './higher-order/with-safe-timeout';
export { default as withState } from './higher-order/with-state';

// Hooks
export { default as useMediaQuery } from './hooks/use-media-query';
export { default as useReducedMotion } from './hooks/use-reduced-motion';
