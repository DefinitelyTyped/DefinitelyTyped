import * as React from 'react';
import {
  TextStyle,
  ViewStyle,
  TextProperties,
  TouchableHighlightProperties,
  TouchableNativeFeedbackProperties,
  TabBarIOSProperties,
  ToolbarAndroidProperties
} from 'react-native';

export interface IconProps extends TextProperties {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   * @type {string}
   * @memberof IconProps
   */
  size?: number;

  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://github.com/oblador/react-native-vector-icons/tree/master/Examples/IconExplorer}
   * @type {string}
   * @memberof IconProps
   */
  name: string;

  /**
   * Color of the icon
   *
   * @type {string}
   * @memberof IconProps
   */
  color?: string;
}

export interface IconButtonProps extends IconProps, TouchableHighlightProperties, TouchableNativeFeedbackProperties {
  /**
   * Text and icon color
   * Use iconStyle or nest a Text component if you need different colors.
   *
   * @default 'white'
   * @type {string}
   * @memberof IconButtonProps
   */
  color?: string;

  /**
   * Border radius of the button
   * Set to 0 to disable.
   *
   * @default 5
   * @type {number}
   * @memberof IconButtonProps
   */
  borderRadius?: number;

  /**
   * Styles applied to the icon only
   * Good for setting margins or a different color.
   *
   * @default {marginRight: 10}
   * @type {ViewStyle}
   * @memberof IconButtonProps
   */
  iconStyle?: ViewStyle;

  /**
   * Style prop inherited from TextProperties and TouchableWithoutFeedbackProperties
   * Only exist here so we can have ViewStyle or TextStyle
   *
   * @type {(ViewStyle | TextStyle)}
   * @memberof IconButtonProps
   */
  style?: ViewStyle | TextStyle;

  /**
   * Background color of the button
   *
   * @default '#007AFF'
   * @type {string}
   * @memberof IconButtonProps
   */
  backgroundColor?: string;
}

export type ImageSource = any;

export interface TabBarIOSProps extends TabBarIOSProperties {
  /**
   * Name of the default icon (similar to TabBarIOS.Item icon)
   *
   * @type {string}
   * @memberof TabBarIOSProps
   */
  iconName: string;

  /**
   * Name of the selected icon (similar to TabBarIOS.Item selectedIcon).
   *
   * @default iconName
   * @type {string}
   * @memberof TabBarIOSProps
   */
  selectedIconName: string;

  /**
   * Size of the icon.
   *
   * @default 30
   * @type {number}
   * @memberof TabBarIOSProps
   */
  iconSize: number;

  /**
   * Color of the icon
   *
   * @type {string}
   * @memberof TabBarIOSProps
   */
  iconColor: string;

  /**
   * Color of the selected icon.
   *
   * @default iconColor
   * @type {string}
   * @memberof TabBarIOSProps
   */
  selectedIconColor: string;
}

export interface ToolbarAndroidProps extends ToolbarAndroidProperties {
  /**
   * Name of the navigation logo icon
   * (similar to ToolbarAndroid logo)
   *
   * @type {string}
   * @memberof ToolbarAndroidProps
   */
  logoName: string;

  /**
   * Name of the navigation icon
   * (similar to ToolbarAndroid navIcon)
   *
   * @type {string}
   * @memberof ToolbarAndroidProps
   */
  navIconName: string;

  /**
   * Name of the overflow icon
   * (similar to ToolbarAndroid overflowIcon)
   *
   * @type {string}
   * @memberof ToolbarAndroidProps
   */
  overflowIconName: string;

  /**
   * Size of the icons
   *
   * @default 24
   * @type {number}
   * @memberof ToolbarAndroidProps
   */
  iconSize: number;

  /**
   * Color of the icons
   *
   * @default 'black'
   * @type {string}
   * @memberof ToolbarAndroidProps
   */
  iconColor: string;
}

export class Icon extends React.Component<IconProps, any> {
  static getImageSource(
    name: string,
    color: string,
    size?: number
  ): Promise<ImageSource>;
}

export namespace Icon {
  class ToolbarAndroid extends React.Component<ToolbarAndroidProps, any> {}
  class TabBarIOS extends React.Component<TabBarIOSProps, any> {}
  class Button extends React.Component<IconButtonProps, any> {}
}
