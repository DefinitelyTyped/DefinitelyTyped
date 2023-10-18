import * as React from "react";
import {
    ColorValue,
    NativeSyntheticEvent,
    StyleProp,
    TextInputChangeEventData,
    TextInputFocusEventData,
    TextInputProps,
    TextStyle,
    ViewStyle,
} from "react-native";

export interface ContentInset {
    top?: number | undefined;
    left?: number | undefined;
    right?: number | undefined;
    label?: number | undefined;
    input?: number | undefined;
}

export interface LabelOffset {
    /**
     * Horizontal offset for inactive state
     */
    x0?: number | undefined;
    /**
     * Vertical offset for inactive state
     */
    y0?: number | undefined;
    /**
     * Horizontal offset for active state
     */
    x1?: number | undefined;
    /**
     * Vertical offset for active state
     */
    y1?: number | undefined;
}

export interface TextFieldProps extends TextInputProps {
    textColor?: ColorValue | undefined;
    fontSize?: number | undefined;
    labelFontSize?: number | undefined;
    lineWidth?: number | undefined;
    activeLineWidth?: number | undefined;
    disabledLineWidth?: number | undefined;
    tintColor?: ColorValue | undefined;
    baseColor?: ColorValue | undefined;
    label?: string | undefined;
    title?: string | undefined;
    prefix?: string | undefined;
    suffix?: string | undefined;
    error?: string | undefined;
    errorColor?: ColorValue | undefined;
    lineType?: "solid" | "dotted" | "dashed" | "none" | undefined;
    disabledLineType?: "solid" | "dotted" | "dashed" | "none" | undefined;
    animationDuration?: number | undefined;
    characterRestriction?: number | undefined;
    disabled?: boolean | undefined;
    editable?: boolean | undefined;
    multiline?: boolean | undefined;
    contentInset?: ContentInset | undefined;
    labelOffset?: LabelOffset | undefined;
    containerStyle?: StyleProp<ViewStyle> | undefined;
    inputContainerStyle?: StyleProp<ViewStyle> | undefined;
    labelTextStyle?: StyleProp<TextStyle> | undefined;
    titleTextStyle?: StyleProp<TextStyle> | undefined;
    affixTextStyle?: StyleProp<TextStyle> | undefined;
    formatText?(text: string): string;
    renderLeftAccessory?(): JSX.Element;
    renderRightAccessory?(): JSX.Element;
    onChangeText?(text: string): void;
    onFocus?(event: NativeSyntheticEvent<TextInputFocusEventData>): void;
    onBlur?(event: NativeSyntheticEvent<TextInputChangeEventData>): void;
    inputRef?: React.RefObject<any> | undefined;
}

/**
 * Material Style Text Field
 * @see https://github.com/gabrieldonadel/rn-material-ui-textfield/blob/master/src/components/field/index.js
 */
export class TextField extends React.Component<TextFieldProps> {
    /*
     * Acquire focus
     */
    focus(): void;
    /*
     * Release focus
     */
    blur(): void;
    /*
     * Clear text field
     */
    clear(): void;
    /*
     * Get current value
     */
    value(): string;
    /*
     * Get current focus state
     */
    isFocused(): boolean;
    /*
     * Get current restriction state
     */
    isRestricted(): boolean;
    /*
     * Get default value visibility
     */
    isDefaultVisible(): boolean;
    /*
     * Get placeholder visibility
     */
    isPlaceholderVisible(): boolean;
    /*
     * Set current value
     */
    setValue(value?: string): void;
}

export class OutlinedTextField extends TextField {}
export class FilledTextField extends TextField {}
