// Type definitions for react-tabs 2.3
// Project: https://github.com/reactjs/react-tabs/
// Definitions by: Yuu Igarashi <https://github.com/yu-i9>
//                 Daniel Tschinder <https://github.com/danez>
//                 Ummon Karpe <https://github.com/Equationist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface TabsProps
    extends Omit<React.HTMLProps<HTMLDivElement>, "className" | "onSelect"> {
    className?: string | string[] | { [name: string]: boolean };
    defaultFocus?: boolean;
    defaultIndex?: number;
    disabledTabClassName?: string;
    domRef?: (node?: HTMLElement) => void;
    forceRenderTabPanel?: boolean;
    onSelect?: (index: number, last: number, event: Event) => boolean | void;
    selectedIndex?: number;
    selectedTabClassName?: string;
    selectedTabPanelClassName?: string;
}

export interface TabListProps
    extends Omit<React.HTMLProps<HTMLUListElement>, "className"> {
    className?: string | string[] | { [name: string]: boolean };
}

export interface TabProps
    extends Omit<React.HTMLProps<HTMLLIElement>, "className" | "tabIndex"> {
    className?: string | string[] | { [name: string]: boolean };
    disabled?: boolean;
    disabledClassName?: string;
    selectedClassName?: string;
    tabIndex?: string;
}

export interface TabPanelProps
    extends Omit<React.HTMLProps<HTMLDivElement>, "className"> {
    className?: string | string[] | { [name: string]: boolean };
    forceRender?: boolean;
    selectedClassName?: string;
}

export declare class Tabs extends React.Component<TabsProps> {}
export declare class TabList extends React.Component<TabListProps> {}
export declare class Tab extends React.Component<TabProps> {}
export declare class TabPanel extends React.Component<TabPanelProps> {}

export declare function resetIdCounter(): void;
