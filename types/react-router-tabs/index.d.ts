// Type definitions for react-router-tabs 1.3
// Project: https://github.com/chacestew/react-router-tabs#readme
// Definitions by: Joakim Unge <https://github.com/joakimunge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Route, Link, RouteProps } from 'react-router-dom';
import { ReactNode } from 'react';

export type AriaCurrent = 'page' | 'step' | 'location' | 'date' | 'time' | 'true';

export interface NavTabProps {
    to: string | object;
    replace?: boolean;
    exact?: boolean;
    strict?: boolean;
    activeClassName?: string;
    className?: string;
    activeStyle?: object;
    style?: object;
    'aria-current'?: AriaCurrent;
    disabled?: boolean;
}

export interface RoutedTabsProps {
    startPathWith?: string;
    className?: string;
    style?: object;
    tabClassName?: string;
    activeTabClassName?: string;
    tabStyle?: object;
    activeTabStyle?: object;
    children?: ReactNode;
}

export function NavTab(props: NavTabProps): Route;
export function RoutedTabs(props: RoutedTabsProps): ReactNode;
