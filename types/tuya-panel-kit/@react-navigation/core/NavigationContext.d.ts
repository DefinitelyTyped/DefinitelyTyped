import * as React from 'react';
import type { NavigationProp } from './types';
/**
 * Context which holds the navigation prop for a screen.
 */
declare const NavigationContext: React.Context<NavigationProp<Record<string, object | undefined>, string, any, any, {}> | undefined>;
export default NavigationContext;
