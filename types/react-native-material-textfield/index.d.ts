import * as React from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface ContentInset {
    top?: number | undefined;
    label?: number | undefined;
    input?: number | undefined;
}

export interface TextFieldProps extends TextInputProps {
    animationDuration?: number | undefined;

    fontSize?: number | undefined;
    labelFontSize?: number | undefined;
    contentInset?: ContentInset | undefined;

    style?: StyleProp<TextStyle> | undefined;
    labelTextStyle?: StyleProp<TextStyle> | undefined;
    titleTextStyle?: StyleProp<TextStyle> | undefined;
    affixTextStyle?: StyleProp<TextStyle> | undefined;

    tintColor?: string | undefined;
    textColor?: string | undefined;
    baseColor?: string | undefined;

    label?: string | undefined;
    title?: string | undefined;

    characterRestriction?: number | undefined;

    error?: string | undefined;
    errorColor?: string | undefined;

    lineWidth?: number | undefined;
    activeLineWidth?: number | undefined;

    disabled?: boolean | undefined;

    disabledLineWidth?: number | undefined;

    clearTextOnFocus?: boolean | undefined;

    prefix?: string | undefined;
    suffix?: string | undefined;

    containerStyle?: StyleProp<ViewStyle> | undefined;
    inputContainerStyle?: StyleProp<ViewStyle> | undefined;

    onPress?(event: Event): void;
    onChangeText?(text: string): void;

    renderLeftAccessory?(): JSX.Element;
    renderRightAccessory?(): JSX.Element;

    lineType?: "solid" | "dotted" | "dashed" | "none" | undefined;
    disabledLineType?: "solid" | "dotted" | "dashed" | "none" | undefined;

    editable?: boolean | undefined;
    multiline?: boolean | undefined;

    formatText?(text: string): string;
    /**
     * Label position adjustment
     */
    labelOffset?: LabelOffset | undefined;
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

/**
 * Material Style Text Field
 * @see https://github.com/n4kz/react-native-material-textfield/blob/master/src/components/field/index.js
 */
export class TextField extends React.Component<TextFieldProps, any> {
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
     * Set current value
     */
    setValue(value?: string): void;
}

export class OutlinedTextField extends TextField {}
export class FilledTextField extends TextField {}
