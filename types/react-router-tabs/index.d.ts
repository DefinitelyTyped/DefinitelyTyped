// Type definitions for react-router-tabs 1.3
// Project: https://github.com/chacestew/react-router-tabs#readme
// Definitions by: Joakim Unge <https://github.com/joakimunge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Route, Link, RouteProps, LinkProps, NavLinkProps } from 'react-router-dom';
import { ReactNode, ComponentType } from 'react';

export type AriaCurrent = 'page' | 'step' | 'location' | 'date' | 'time' | 'true';

export interface NavTabProps extends NavLinkProps {
    style?: React.CSSProperties;
    disabled?: boolean;
    allowClickOnActive?: boolean;
    'aria-current'?: AriaCurrent;
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

export const NavTab: ComponentType<NavTabProps>;

export const RoutedTabs: ComponentType<RoutedTabsProps>;
