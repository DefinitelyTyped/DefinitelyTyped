import * as React from "react";
import { NavigationContainerProps, NavigationContainerRef } from "../core";
import type { DocumentTitleOptions, LinkingOptions, Theme } from "./types";
/**
 * Container component which holds the navigation state designed for React Native apps.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree.
 * When deep link handling is enabled, this will override deep links when specified.
 * Make sure that you don't specify an `initialState` when there's a deep link (`Linking.getInitialURL()`).
 * @param props.onReady Callback which is called after the navigation tree mounts.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.theme Theme object for the navigators.
 * @param props.linking Options for deep linking. Deep link handling is enabled when this prop is provided, unless `linking.enabled` is `false`.
 * @param props.fallback Fallback component to render until we have finished getting initial state when linking is enabled. Defaults to `null`.
 * @param props.documentTitle Options to configure the document title on Web. Updating document title is handled by default unless `documentTitle.enabled` is `false`.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */
declare const NavigationContainer: React.ForwardRefExoticComponent<
    NavigationContainerProps & {
        // tslint:disable-next-line no-redundant-undefined
        theme?: Theme | undefined;
        // tslint:disable-next-line no-redundant-undefined
        linking?: LinkingOptions | undefined;
        fallback?: React.ReactNode | undefined;
        // tslint:disable-next-line no-redundant-undefined
        documentTitle?: DocumentTitleOptions | undefined;
        // tslint:disable-next-line no-redundant-undefined
        onReady?: (() => void) | undefined;
    } & React.RefAttributes<NavigationContainerRef>
>;
export default NavigationContainer;
