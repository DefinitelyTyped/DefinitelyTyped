import * as React from 'react';
import type { NavigationProp } from './types';
/**
 * Context which holds the navigation prop for a screen.
 */
// tslint:disable-next-line use-default-type-parameter
declare const NavigationContext: React.Context<NavigationProp<Record<string, object | undefined>, string, any, any, {}> | undefined>;
export default NavigationContext;
