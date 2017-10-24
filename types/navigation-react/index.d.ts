// Type definitions for NavigationReact 2.0
// Project: http://grahammendick.github.io/navigation/
// Definitions by: Graham Mendick <https://github.com/grahammendick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { StateNavigator } from 'navigation';
import { Component, HTMLProps } from 'react';

/**
 * Defines the Link Props contract
 */
export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    /**
     * Indicates whether Links listen for navigate events
     */
    lazy?: boolean;
    /**
     * Determines the effect on browser history
     */
    historyAction?: 'add' | 'replace' | 'none';
    /**
     * Handles Link click events
     */
    navigating?(e: MouseEvent, domId: string, link: string): boolean;
    /**
     * The State Navigator
     */
    stateNavigator?: StateNavigator;
}

/**
 * Defines the Refresh Link Props contract
 */
export interface RefreshLinkProps extends LinkProps {
    /**
     * The NavigationData to pass
     */
    navigationData?: any;
    /**
     * Indicates whether to include all the current NavigationData
     */
    includeCurrentData?: boolean;
    /**
     * The data to add from the current NavigationData
     */
    currentDataKeys?: string;
    /**
     * The Css Class to display when the Link is active
     */
    activeCssClass?: string;
    /**
     * Indicates whether the Link is disabled when active
     */
    disableActive?: boolean;
}

/**
 * Hyperlink Component the navigates to the current State
 */
export class RefreshLink extends Component<RefreshLinkProps> { }

/**
 * Defines the Navigation Link Props contract
 */
export interface NavigationLinkProps extends RefreshLinkProps {
    /**
     * The key of the State to navigate to
     */
    stateKey: string;
}

/**
 * Hyperlink Component the navigates to a State
 */
export class NavigationLink extends Component<NavigationLinkProps> { }

/**
 * Defines the Navigation Back Link Props contract
 */
export interface NavigationBackLinkProps extends RefreshLinkProps {
    /**
     * Starting at 1, The number of Crumb steps to go back
     */
    distance: number;
}

/**
 * Hyperlink Component the navigates back along the crumb trail
 */
export class NavigationBackLink extends Component<NavigationBackLinkProps> { }
