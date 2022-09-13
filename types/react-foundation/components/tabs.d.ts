/// <reference types="react" />
import * as React from 'react';
import { FlexboxPropTypes } from '../utils';
/**
 * Tabs component.
 * http://foundation.zurb.com/sites/docs/tabs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Tabs: React.FunctionComponent<TabsProps>;
export interface TabsProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLUListElement> {
    isVertical?: boolean | undefined;
}
/**
 * Tab item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TabItem: React.FunctionComponent<TabItemProps>;
export interface TabItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
    isActive?: boolean | undefined;
}
/**
 * Tab panel container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TabsContent: React.FunctionComponent<TabsContentProps>;
export interface TabsContentProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean | undefined;
    isVertical?: boolean | undefined;
}
/**
 * Tab panel item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TabPanel: React.FunctionComponent<TabPanelProps>;
export interface TabPanelProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean | undefined;
}
