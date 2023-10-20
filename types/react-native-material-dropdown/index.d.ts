import * as React from "react";
import { LayoutChangeEvent, StyleProp, TextStyle, TouchableWithoutFeedbackProps, ViewStyle } from "react-native";

/**
 * Dropdown component props
 */
export interface DropDownProps extends TouchableWithoutFeedbackProps {
    /** Dropdown data items */
    data: DropDownData[];
    /** Component disabled or not. (default: false) */
    disabled?: boolean | undefined;
    /** Selected value */
    value?: string | number | undefined;
    /** Label to be shown for dropdown */
    label?: string | undefined;
    /** Enable RTL layout */
    absoluteRTLLayout?: boolean | undefined;
    /** Provide Dropdown top-left position */
    dropdownOffset?: DropDownOffset | undefined;
    /** Provide Dropdown margins */
    dropdownMargins?: DropDownMargins | undefined;
    /** Provide dropdown position (dynamic if undefined) */
    dropdownPosition?: number | undefined;
    /** Provide Ripple color */
    rippleColor?: string | undefined;
    /** Whether ripple be centered or not (default: false) */
    rippleCentered?: boolean | undefined;
    /** Whether ripple rendered in sequential order (default: false)  */
    rippleSequential?: boolean | undefined;
    /** Ripple insets  */
    rippleInsets?: DropDownInsets | undefined;
    /** Ripple opacity (default: 0.54) */
    rippleOpacity?: number | undefined;
    /** Shade opacity (default: 0.12) */
    shadeOpacity?: number | undefined;
    /** Ripple duration (defailt: 400) */
    rippleDuration?: number | undefined;
    /** Animation duration (default: 225) */
    animationDuration?: number | undefined;
    /** Set font size of dropdown items (default: 16) */
    fontSize?: number | undefined;
    /** Set font size of label (default: 12) */
    labelFontSize?: number | undefined;
    /** Set Text color (default: rgba(0, 0, 0, .87)) */
    textColor?: string | undefined;
    /** Set Item color (default: rgba(0, 0, 0, .54)) */
    itemColor?: string | undefined;
    /** Set selected item color */
    selectedItemColor?: string | undefined;
    /** Set disabled item color */
    disabledItemColor?: string | undefined;
    /** Set base color (default: rgba(0, 0, 0, .38)) */
    baseColor?: string | undefined;
    /** Set Item text style. */
    itemTextStyle?: StyleProp<TextStyle> | undefined;
    /** Set Item count (default: 4) */
    itemCount?: number | undefined;
    /** Set Item padding (default: 8) */
    itemPadding?: number | undefined;
    /** Set container styles */
    containerStyle?: StyleProp<ViewStyle> | undefined;
    /** Set input container styles */
    inputContainerStyle?: StyleProp<ViewStyle> | undefined;
    /** Set the label styles */
    labelTextStyle?: StyleProp<TextStyle> | undefined;
    /** Set overlay styles */
    overlayStyle?: StyleProp<ViewStyle> | undefined;
    /** Set picker styles */
    pickerStyle?: StyleProp<ViewStyle> | undefined;
    /** Specify which orientations are supported. (default: ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']) */
    supportedOrientations?: string[] | undefined;
    /** Use native driver (default: false) */
    useNativeDriver?: boolean | undefined;
    /** Hitslop insets (default: { top: 6, right: 4, bottom: 6, left: 4 }) */
    hitSlop?: DropDownInsets | undefined;

    /** Value extractor function. Extract value from item. */
    valueExtractor?(item: DropDownData, index: number): string;
    /** Label extractor function. Extract label from item. */
    labelExtractor?(item: DropDownData, index: number): string;
    /** Props extractor function. Extract props from item. */
    propsExtractor?(item: DropDownData, index: number): Partial<DropDownProps>;

    /** Event: When layout changes */
    onLayout?(event: LayoutChangeEvent): void;
    /** Event: When dropdown opens */
    onFocus?(): void;
    /** Event: When focus lost from dropdown */
    onBlur?(): void;
    /** Event: When change selected item */
    onChangeText?(value: string, index: number, data: DropDownData[]): void;

    /** Render base component */
    renderBase?(props: RenderBaseProps): JSX.Element;
    /** Render text field accessory */
    renderAccessory?(): JSX.Element;
}

/**
 * Dropdown data item
 */
export interface DropDownData {
    /** Value of item */
    value: string;
    /** Label to be shown */
    label?: string | undefined;
    /** Props for this item */
    props?: Partial<DropDownProps> | undefined;
}

/**
 * Dropdown offset position
 */
export interface DropDownOffset {
    /** Top offset */
    top: number;
    /** Left offset */
    left: number;
}

/**
 * Dropdown margins
 */
export interface DropDownMargins {
    /** Minimum value */
    min: number;
    /** Maximum value */
    max: number;
}

/**
 * Insets
 */
export interface DropDownInsets {
    /** Top */
    top: number;
    /** Right */
    right: number;
    /** Bottom */
    bottom: number;
    /** Left */
    left: number;
}

/**
 * Render base function props
 */
export interface RenderBaseProps extends DropDownProps {
    /** Title of dropdown */
    title: string;
}

/**
 * React-native material dropdown component.
 * Material dropdown with consistent behaviour on iOS and Android
 */
export class Dropdown extends React.PureComponent<DropDownProps> {}
