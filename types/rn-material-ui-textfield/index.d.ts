// Type definitions for rn-material-ui-textfield 1.0
// Project: https://github.com/gabrieldonadel/rn-material-ui-textfield#readme
// Definitions by: Craig Duckett <https://github.com/craigwduckett>
//                 Gabriel Donadel Dall'Agnol <https://github.com/gabrieldonadel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputChangeEventData,
  ColorValue
} from 'react-native';

export interface ContentInset {
    top?: number;
    left?: number;
    right?: number;
    label?: number;
    input?: number;
}

export interface LabelOffset {
    /**
     * Horizontal offset for inactive state
     */
    x0?: number;
    /**
     * Vertical offset for inactive state
     */
    y0?: number;
    /**
     * Horizontal offset for active state
     */
    x1?: number;
    /**
     * Vertical offset for active state
     */
    y1?: number;
}

export interface TextFieldProps extends TextInputProps {
    textColor?:	ColorValue;
    fontSize?: number;
    labelFontSize?: number;
    lineWidth?: number;
    activeLineWidth?: number;
    disabledLineWidth?: number;
    tintColor?: ColorValue;
    baseColor?: ColorValue;
    label?: string;
    title?: string;
    prefix?: string;
    suffix?: string;
    error?: string;
    errorColor?: ColorValue;
    lineType?: 'solid' | 'dotted' | 'dashed' | 'none';
    disabledLineType?: 'solid' | 'dotted' | 'dashed' | 'none';
    animationDuration?: number;
    characterRestriction?: number;
    disabled?: boolean;
    editable?: boolean;
    multiline?: boolean;
    contentInset?: ContentInset;
    labelOffset?: LabelOffset;
    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    labelTextStyle?: StyleProp<TextStyle>;
    titleTextStyle?: StyleProp<TextStyle>;
    affixTextStyle?: StyleProp<TextStyle>;
    formatText?(text: string): string;
    renderLeftAccessory?(): JSX.Element;
    renderRightAccessory?(): JSX.Element;
    onChangeText?(text: string): void;
    onFocus?(event: NativeSyntheticEvent<TextInputFocusEventData>): void;
    onBlur?(event: NativeSyntheticEvent<TextInputChangeEventData>): void;
    inputRef?: React.RefObject<any>;
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
