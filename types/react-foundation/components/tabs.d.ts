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
export declare const Tabs: React.StatelessComponent<TabsProps>;
export interface TabsProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLUListElement> {
    isVertical?: boolean;
}
/**
 * Tab item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TabItem: React.StatelessComponent<TabItemProps>;
export interface TabItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
    isActive?: boolean;
}
/**
 * Tab panel container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TabsContent: React.StatelessComponent<TabsContentProps>;
export interface TabsContentProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    isVertical?: boolean;
}
/**
 * Tab panel item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const TabPanel: React.StatelessComponent<TabPanelProps>;
export interface TabPanelProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}
