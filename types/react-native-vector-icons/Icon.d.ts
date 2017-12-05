import * as React from 'react';
import {
  TextStyle,
  ViewStyle,
  TextProperties,
  TouchableHighlightProperties,
  TouchableNativeFeedbackProperties,
  TabBarItemProperties,
  ToolbarAndroidProperties
} from 'react-native';

export interface IconProps extends TextProperties {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   */
  size?: number;

  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://github.com/oblador/react-native-vector-icons/tree/master/Examples/IconExplorer}
   */
  name: string;

  /**
   * Color of the icon
   *
   */
  color?: string;
}

export interface IconButtonProps extends IconProps, TouchableHighlightProperties, TouchableNativeFeedbackProperties {
  /**
   * Text and icon color
   * Use iconStyle or nest a Text component if you need different colors.
   *
   * @default 'white'
   */
  color?: string;

  /**
   * Border radius of the button
   * Set to 0 to disable.
   *
   * @default 5
   */
  borderRadius?: number;

  /**
   * Styles applied to the icon only
   * Good for setting margins or a different color.
   *
   * @default {marginRight: 10}
   */
  iconStyle?: ViewStyle;

  /**
   * Style prop inherited from TextProperties and TouchableWithoutFeedbackProperties
   * Only exist here so we can have ViewStyle or TextStyle
   *
   */
  style?: ViewStyle | TextStyle;

  /**
   * Background color of the button
   *
   * @default '#007AFF'
   */
  backgroundColor?: string;
}

export type ImageSource = any;

export interface ToolbarAndroidProps extends ToolbarAndroidProperties {
  /**
   * Name of the navigation logo icon
   * (similar to ToolbarAndroid logo)
   *
   */
  logoName: string;

  /**
   * Name of the navigation icon
   * (similar to ToolbarAndroid navIcon)
   *
   */
  navIconName: string;

  /**
   * Name of the overflow icon
   * (similar to ToolbarAndroid overflowIcon)
   *
   */
  overflowIconName: string;

  /**
   * Size of the icons
   *
   * @default 24
   */
  iconSize: number;

  /**
   * Color of the icons
   *
   * @default 'black'
   */
  iconColor: string;
}

export interface TabBarItemIOSProps extends TabBarItemProperties {
  /**
   * Name of the default icon (similar to TabBarIOS.Item icon)
   *
   */
  iconName: string;

  /**
   * Name of the selected icon (similar to TabBarIOS.Item selectedIcon)
   *
   * Defaults to iconName
   *
   */
  selectedIconName?: string;

  /**
   * Size of the icon
   *
   * @default 30
   */
  iconSize?: number;

  /**
   * Color of the icon
   *
   */
  iconColor?: string;

  /**
   * Color of the selected icon.
   *
   * Defaults to iconColor
   *
   */
  selectedIconColor?: string;
}

export class Icon extends React.Component<IconProps, any> {
  static getImageSource(
    name: string,
    size?: number,
    color?: string,
  ): Promise<ImageSource>;
  static loadFont(
    file?: string
  ): Promise<void>;
}

export namespace Icon {
  class ToolbarAndroid extends React.Component<ToolbarAndroidProps, any> {}
  class TabBarItem extends React.Component<TabBarItemProperties, any> {}
  class TabBarItemIOS extends React.Component<TabBarItemIOSProps, any> {}
  class Button extends React.Component<IconButtonProps, any> {}
}
