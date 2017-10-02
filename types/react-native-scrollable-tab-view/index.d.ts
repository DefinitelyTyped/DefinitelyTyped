// Type definitions for react-native-scrollable-tab-view 0.7
// Project: https://github.com/brentvatne/react-native-scrollable-tab-view#readme
// Definitions by: CaiHuan <https://github.com/CaiHuan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import {
  Animated,
  ViewStyle,
  ScrollViewProperties
} from 'react-native';

export interface onChangeTabProperties {
  // currentPage
  i: number;

  // currentPage object
  ref: JSX.Element;

  // previousPage
  from: number;
}

export interface renderTabBarProperties {
  goToPage(pageNumber: number): void;

  tabs: JSX.Element;

  activeTab: number;

  scrollValue: Animated.Value;

  containerWidth: number;
}

export interface ScrollableTabViewProperties extends React.Props<ScrollableTabView> {
  /**
   * tabBarPosition (String) Defaults to "top".
   * "bottom" to position the tab bar below content.
   * "overlayTop" or "overlayBottom" for a semitransparent tab bar that overlays content. Custom
   * tab bars must consume a style prop on their outer element to support this feature: style={this.props.style}.
   */
  tabBarPosition?: 'top' | 'bottom' | 'overlayTop' | 'overlayBottom';

  /**
   * (Integer) - the index of the initially selected tab, defaults to 0 === first tab
   */
  initialPage?: number;

  /**
   * (Integer) - set selected tab(can be buggy see
   * https://github.com/skv-headless/react-native-scrollable-tab-view/issues/126
   */
  page?: number;

  /**
   * onChangeTab (Function) - function to call when tab changes, should accept 1 argument which is
   * an Object containing two keys: i: the index of the tab that is selected, ref: the ref of the
   * tab that is selected
   */
  onChangeTab?(value: onChangeTabProperties): void;

  /**
   * onScroll (Function) - function to call when the pages are sliding,
   * should accept 1 argument which is an Float number representing the page position in the slide frame.
   */
  onScroll?(value: number): void;

  /**
   * renderTabBar (Function:ReactComponent) - accept 1 argument props and should return a component
   * to use as the tab bar. The component has goToPage, tabs, activeTab and ref added to the props,
   * and should implement setAnimationValue to be able to animate itself along with the tab content.
   * You can manually pass the props to the TabBar component.
   */
  renderTabBar?(value: JSX.Element): JSX.Element;

  /**
   * style (View.propTypes.style)
   */
  style?: ViewStyle;

  /**
   * contentProps (Object) - props that are applied to root ScrollView/ViewPagerAndroid.
   * Note that overriding defaults set by the library may break functionality; see the source for details.
   */
  contentProps?: ScrollViewProperties;

  /**
   * scrollWithoutAnimation (Bool) - on tab press change tab without animation.
   */
  scrollWithoutAnimation?: boolean;

  /**
   * locked (Bool) - disables horizontal dragging to scroll between tabs, default is false.
   */
  locked?: boolean;

  /**
   * prerenderingSiblingsNumber (Integer) - pre-render nearby # sibling, Infinity === render all
   * the siblings, default to 0 === render current page.
   */
  prerenderingSiblingsNumber?: number;
}

export default class ScrollableTabView extends React.Component<ScrollableTabViewProperties> {
}
