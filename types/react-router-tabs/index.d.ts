import { ComponentType, ReactNode } from "react";
import { Link, LinkProps, NavLinkProps, Route, RouteProps } from "react-router-dom";

export type AriaCurrent = "page" | "step" | "location" | "date" | "time" | "true";

export interface NavTabProps extends NavLinkProps {
    style?: React.CSSProperties | undefined;
    disabled?: boolean | undefined;
    allowClickOnActive?: boolean | undefined;
    "aria-current"?: AriaCurrent | undefined;
}
export interface RoutedTabsProps {
    startPathWith?: string | undefined;
    className?: string | undefined;
    style?: object | undefined;
    tabClassName?: string | undefined;
    activeTabClassName?: string | undefined;
    tabStyle?: object | undefined;
    activeTabStyle?: object | undefined;
    children?: ReactNode | undefined;
}

export const NavTab: ComponentType<NavTabProps>;

export const RoutedTabs: ComponentType<RoutedTabsProps>;
