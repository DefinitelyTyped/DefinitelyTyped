// Type definitions for react-page-visibility 6.4
// Project: https://github.com/pgilad/react-page-visibility#readme
// Definitions by: Daniel <https://github.com/dannycochran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from "react";

/**
 * A hook which returns whether the page is currently visible.
 */
export function usePageVisibility(): boolean;

/**
 * Note that support for these states differs by browser.
 */
export type KnownVisibilityStates = "visible" | "hidden" | "prerender" | "unloaded";

export interface PageVisibilityProps {
    children?:
        | React.ReactNode
        | ((isVisible: boolean, visibilityState: KnownVisibilityStates) => React.ReactNode)
        | undefined;
    onChange?: ((isVisible: boolean, visibilityState: KnownVisibilityStates) => void) | undefined;
}

/**
 * A higher order component for managing visibility state via the child
 * rendering pattern.
 */
export default class PageVisibility extends Component<PageVisibilityProps> {}
