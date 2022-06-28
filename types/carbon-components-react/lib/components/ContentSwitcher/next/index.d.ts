import * as React from "react";
import { ReactButtonAttr, ReactDivAttr, ForwardRefReturn } from "../../../../typings/shared";

export interface ContentSwitcherNextProps {
    children?: React.ReactNode | undefined;
    defaultSelectedIndex?: number | undefined;
    onChange?(data: { selectedIndex: number }): void;
    selectedIndex?: number | undefined;
}

export declare const ContentSwitcher: React.FC<ContentSwitcherNextProps>;

type ExcludedContentTabsPropsKeys = "aria-label" | "onKeyDown" | "role";
export interface ContentTabsProps extends Omit<ReactDivAttr, ExcludedContentTabsPropsKeys> {
    activation?: "automatic" | "manual" | undefined;
    'aria-label': string;
    children?: React.ReactNode | undefined;
    size?: "sm" | "md" | "lg" | undefined;
}

export declare const ContentTabs: React.FC<ContentTabsProps>;

type ExcludedContentTabPropKeys = "aria-controls" | "aria-selected" | "id" | "onClick" | "role" | "tabIndex" | "type";
export interface ContentTabProps extends Omit<ReactButtonAttr, ExcludedContentTabPropKeys> {
    children?: React.ReactNode | undefined;
}

export declare const ContentTab: ForwardRefReturn<HTMLButtonElement, ContentTabProps>;

export interface ContentPanelsProps {
    children?: React.ReactNode | undefined;
}

export declare const ContentPanels: React.FC<ContentPanelsProps>;

type ExcludedContentPanelPropKeys = "aria-labelledby" | "hidden" | "id" | "role" | "tabIndex";
export interface ContentPanelProps extends Omit<ReactDivAttr, ExcludedContentPanelPropKeys> {
    children?: React.ReactNode | undefined;
}

export declare const ContentPanel: ForwardRefReturn<HTMLDivElement, ContentPanelProps>;
