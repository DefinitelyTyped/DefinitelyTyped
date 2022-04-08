// Type definitions for @reach/tabs 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface TabsProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
    children: React.ReactNode;
    as?: string;
    index?: number;
    readOnly?: boolean;
    defaultIndex?: number;
    onChange?: (index: number) => void;
}

export interface TabContainerProps extends React.HTMLProps<HTMLElement> {
    children?: React.ReactNode;
    selectedIndex?: number;
    as?: string;
}

export interface TabPanelProps extends React.HTMLProps<HTMLElement> {
    children?: React.ReactNode;
    isSelected?: boolean;
    as?: string;
}

export interface TabProps extends TabPanelProps {
    disabled?: boolean;
}

export const Tabs: React.FC<TabsProps>;
export const TabList: React.FC<TabContainerProps>;
export const TabPanels: React.FC<TabContainerProps>;
export const Tab: React.FC<TabProps>;
export const TabPanel: React.FC<TabPanelProps>;
