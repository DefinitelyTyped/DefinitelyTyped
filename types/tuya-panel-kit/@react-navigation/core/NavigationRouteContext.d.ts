import * as React from 'react';
import type { Route } from '../routers';
/**
 * Context which holds the route prop for a screen.
 */
declare const NavigationContext: React.Context<Route<string, object | undefined> | undefined>;
export default NavigationContext;
