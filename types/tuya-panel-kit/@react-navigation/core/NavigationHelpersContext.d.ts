import * as React from "react";
import type { NavigationHelpers } from "./types";
/**
 * Context which holds the navigation helpers of the parent navigator.
 * Navigators should use this context in their view component.
 */
declare const NavigationHelpersContext: React.Context<
    // tslint:disable-next-line use-default-type-parameter
    NavigationHelpers<Record<string, object | undefined>, {}> | undefined
>;
export default NavigationHelpersContext;
