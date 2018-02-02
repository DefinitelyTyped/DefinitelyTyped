// Type definitions for react-native-scrollable-tab-view 0.8
// Project: https://github.com/skv-headless/react-native-scrollable-tab-view
// Definitions by: CaiHuan <https://github.com/CaiHuan>
//                 Egor Shulga <https://github.com/egorshulga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { Animated, ScrollViewProperties, ViewStyle, TextStyle } from 'react-native';

export interface ScrollableTabViewProperties extends React.Props<ScrollableTabView> {
    /**
     * accept 1 argument props and should return a component
     * to use as the tab bar. The component has goToPage, tabs, activeTab and ref added to the props,
     * and should implement setAnimationValue to be able to animate itself along with the tab content.
     * You can manually pass the props to the TabBar component.
     */
    renderTabBar?: ((props: TabBarProps) => JSX.Element) | false;

    /**
     * Defaults to "top".
     * "bottom" to position the tab bar below content.
     * "overlayTop" or "overlayBottom" for a semitransparent tab bar that overlays content. Custom
     * tab bars must consume a style prop on their outer element to support this feature: style={this.props.style}.
     */
    tabBarPosition?: 'top' | 'bottom' | 'overlayTop' | 'overlayBottom';

    /**
     * function to call when tab changes, should accept 1 argument which is
     * an Object containing two keys: i: the index of the tab that is selected, ref: the ref of the
     * tab that is selected
     */
    onChangeTab?(value: ChangeTabProperties): void;

    /**
     * function to call when the pages are sliding,
     * should accept 1 argument which is an Float number representing the page position in the slide frame.
     */
    onScroll?(value: number): void;

    /**
     * disables horizontal dragging to scroll between tabs, default is false.
     */
    locked?: boolean;

    /**
     * the index of the initially selected tab, defaults to 0 === first tab
     */
    initialPage?: number;

    /**
     * set selected tab(can be buggy see
     * https://github.com/skv-headless/react-native-scrollable-tab-view/issues/126
     */
    page?: number;

    /**
     * style of the default tab bar's underline
     */
    tabBarUnderlineStyle?: ViewStyle;

    /**
     * color of the default tab bar's background, defaults to white
     */
    tabBarBackgroundColor?: string;

    /**
     * color of the default tab bar's text when active, defaults to navy
     */
    tabBarActiveTextColor?: string;

    /**
     * color of the default tab bar's text when inactive, defaults to black
     */
    tabBarInactiveTextColor?: string;

    /**
     * additional styles to the tab bar's text
     */
    tabBarTextStyle?: TextStyle;

    /**
     * style (View.propTypes.style)
     */
    style?: ViewStyle;

    /**
     * props that are applied to root ScrollView/ViewPagerAndroid.
     * Note that overriding defaults set by the library may break functionality; see the source for details.
     */
    contentProps?: ScrollViewProperties;

    /**
     * on tab press change tab without animation.
     */
    scrollWithoutAnimation?: boolean;

    /**
     * pre-render nearby # sibling, Infinity === render all
     * the siblings, default to 0 === render current page.
     */
    prerenderingSiblingsNumber?: number;
}

export type TabBarProps<T = {}> = T & {
    goToPage?: (pageNumber: number) => void;
    tabs?: JSX.Element[];
    activeTab?: number;
    scrollValue?: Animated.Value;
    containerWidth?: number;
};

export interface ChangeTabProperties {
    // currentPage
    i: number;
    // currentPage object
    ref: JSX.Element;
    // previousPage
    from: number;
}

export default class ScrollableTabView extends React.Component<ScrollableTabViewProperties> {
}

// Each top-level child component should have a tabLabel prop
// that can be used by the tab bar component to render out the labels.
export type TabProps<T = {}> = T & {
    tabLabel: React.ReactType;
};

export interface DefaultTabBarProps {
    backgroundColor?: string;
    activeTextColor?: string;
    inactiveTextColor?: string;
    textStyle?: TextStyle;
    tabStyle?: ViewStyle;
    renderTab?: RenderTabProperties;
    underlineStyle?: ViewStyle;
}

export type RenderTabProperties =
    (name: string, pageIndex: number, isTabActive: boolean, goToPage: (pageNumber: number) => void) => JSX.Element;

export class DefaultTabBar extends React.Component<TabBarProps<DefaultTabBarProps>> {
}

export interface ScrollableTabBarProps extends DefaultTabBarProps {
    scrollOffset?: number;
    style?: ViewStyle;
    tabsContainerStyle?: ViewStyle;
}

export class ScrollableTabBar extends React.Component<TabBarProps<ScrollableTabBarProps>> {
}
