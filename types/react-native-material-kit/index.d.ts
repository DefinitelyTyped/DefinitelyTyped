// Type definitions for react-native-material-kit 0.5
// Project: https://github.com/xinthink/react-native-material-kit
// Definitions by: Kyle Roach <https://github.com/iRoachie>
//                 Tim Wang <https://github.com/timwangdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import {
    ViewStyle,
    TextStyle,
    TextInputProps,
    TouchableWithoutFeedbackProps,
    ViewProps,
} from 'react-native';

///////////////////////////////
// COMPONENT STYLES
///////////////////////////////

export interface ProgressStyle {
    backgroundColor?: string;
    progressColor?: string;
    bufferColor?: string;
}

export interface TextFieldStyle {
    tintColor?: string;
    highlightColor?: string;
    textInputStyle?: {
        color?: string;
        fontSize?: number;
        paddingLeft?: number;
        paddingRight?: number;
    };
}

export interface SpinnerStyle {
    strokeColor?: string[];
}

export interface SliderStyle {
    lowerTrackColor?: string;
    upperTrackColor?: string;
}

export interface IconToggleStyle {
    onColor?: string;
    offColor?: string;
    rippleColor?: string;
}

export interface SwitchStyle {
    onColor?: string;
    offColor?: string;
    thumbOnColor?: string;
    thumbOffColor?: string;
    rippleColor?: string;
}

export interface RadioStyle {
    borderOnColor?: string;
    borderOffColor?: string;
    fillColor?: string;
    rippleColor?: string;
    extraRippleRadius?: number;
}

export interface CheckboxStyle {
    borderOnColor?: string;
    borderOffColor?: string;
    fillColor?: string;
    rippleColor?: string;
    inset?: number;
}

export interface CardStyle {
    backgroundColor?: string;
    borderRadius?: number;
    borderColor?: string;
    borderWidth?: number;
    shadowColor?: string;
    shadowOpacity?: number;
    shadowRadius?: number;
    shadowOffset?: {
        height: number;
        width: number;
    };
}

export interface CardImageStyle {
    height?: number;
    resizeMode?: string;
}

export interface CardTitleStyle {
    position?: 'absolute' | 'relative';
    top?: number;
    left?: number;
    backgroundColor?: string;
    padding?: number;
    fontSize?: number;
    color?: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}

export interface CardContentStyle {
    padding?: number;
    color?: string;
}

export interface CardActionStyle {
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    borderTopColor?: string;
    borderTopWidth?: number;
    padding?: number;
}

export interface CardMenuStyle {
    position?: 'absolute' | 'relative';
    top?: number;
    right?: number;
    backgroundColor?: string;
}

export interface ThemeStatic {
    primaryColor?: string;
    primaryColorRGB?: string;
    accentColor?: string;
    accentColorRGB?: string;
    bgPlain?: string;
    bgDisabled?: string;
    fontColor?: string;
    fontSize?: number;
    rippleColor?: string;
    textfieldStyle?: TextFieldStyle;
    progressStyle?: ProgressStyle;
    spinnerStyle?: SpinnerStyle;
    sliderStyle?: SliderStyle;
    iconToggleStyle?: IconToggleStyle;
    switchStyle?: SwitchStyle;
    radioStyle?: RadioStyle;
    checkboxStyle?: CheckboxStyle;
    cardStyle?: CardStyle;
    cardImageStyle?: CardImageStyle;
    cardTitleStyle?: CardTitleStyle;
    cardContentStyle?: CardContentStyle;
    cardActionStyle?: CardActionStyle;
    cardMenuStyle?: CardMenuStyle;
}

///////////////////////////////
// HELPERS
///////////////////////////////

export interface FloatingLabelProperties {
    floatingLabelEnabled?: boolean;
    floatingLabelAniDuration?: number;
    floatingLabelBottomMargin?: number;
    floatingLabelFont?: MKPropTypes.font;
    allowFontScaling?: boolean;
}

export namespace MKPropTypes {
    interface dimen {
        width?: number;
        height?: number;
    }

    interface font {
        color?: string;
        fontSize?: number;
        fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
        fontStyle?: 'normal' | 'italic';
        fontFamily?: string;
    }

    type rippleLocation = 'tapLocation' | 'center';
}

export interface TickProperties extends ViewProps {
    fillColor?: string;
    inset?: number;
}

///////////////////////////////
// COMPONENTS
///////////////////////////////

export class MKComponent<P, S> extends React.Component<P, S> {
    static Builder: any;
}

export interface MKColorStatic {
    Amber: string;
    Blue: string;
    BlueGrey: string;
    Brown: string;
    Cyan: string;
    DeepOrange: string;
    DeepPurple: string;
    Green: string;
    Grey: string;
    Indigo: string;
    LightBlue: string;
    LightGreen: string;
    Lime: string;
    Orange: string;
    Pink: string;
    Purple: string;
    RGBIndigo: string;
    RGBPink: string;
    RGBPurple: string;
    RGBTeal: string;
    Red: string;
    Silver: string;
    Teal: string;
    Transparent: string;
    Yellow: string;
    default: {
        Amber: string;
        Blue: string;
        BlueGrey: string;
        Brown: string;
        Cyan: string;
        DeepOrange: string;
        DeepPurple: string;
        Green: string;
        Grey: string;
        Indigo: string;
        LightBlue: string;
        LightGreen: string;
        Lime: string;
        Orange: string;
        Pink: string;
        Purple: string;
        RGBIndigo: string;
        RGBPink: string;
        RGBPurple: string;
        RGBTeal: string;
        Red: string;
        Silver: string;
        Teal: string;
        Transparent: string;
        Yellow: string;
    };
    palette_blue_400: string;
    palette_green_500: string;
    palette_red_500: string;
    palette_yellow_600: string;
}

export interface MKButtonProperties extends
    TouchableWithoutFeedbackProps, MKRippleProperties {
        fab?: boolean;
        enabled?: boolean;
}

export interface MKTextFieldProperties extends TextInputProps, FloatingLabelProperties {
    text?: string;
    password?: boolean;
    underlineEnabled?: boolean;
    underlineSize?: number;
    highlightColor?: string;
    tintColor?: string;
    textInputStyle?: TextStyle;
    allowFontScaling?: boolean;
    additionalInputProps?: TextInputProps;
    onTextChange?(val: string): void;
}

export interface MKSwitchProperties extends TouchableWithoutFeedbackProps {
    checked?: boolean;
    onColor?: string;
    offColor?: string;
    trackSize?: number;
    trackLength?: number;
    thumbRadius?: number;
    thumbOnColor?: string;
    thumbOffColor?: string;
    thumbAniDuration?: number;
    rippleColor?: string;
    rippleAniDuration?: number;
    onCheckedChange?(opts: { checked: boolean }): void;
}

export interface MKIconToggleProperties extends MKRippleProperties, TouchableWithoutFeedbackProps {
    checked?: boolean;
    onCheckedChange?(checked: boolean): void;
}

export interface MKRippleProperties extends ViewProps {
    rippleColor?: string;
    rippleDuration?: number;
    rippleLocation?: MKPropTypes.rippleLocation;
    maskEnabled?: boolean;
    maskColor?: string;
    maskBorderRadius?: number;
    maskBorderRadiusInPercent?: number;
    maskDuration?: number;
    shadowAniEnabled?: boolean;
}

export interface MKProgressProperties extends ViewProps {
    progress?: number;
    buffer?: number;
    progressColor?: string;
    bufferColor?: string;
    progressAniDuration?: number;
    bufferAniDuration?: number;
}

export interface IndeterminateProgressProperties extends ViewProps {
    progressColor?: string;
    progressAniDuration?: number;
}

export interface BaseSlider extends ViewProps {
    min?: number;
    max?: number;
    value?: number;
    trackSize?: number;
    thumbRadius?: number;
    thumbPadding?: number;
    lowerTrackColor?: string;
    upperTrackColor?: string;
    step?: number;
}

export interface MKSliderProperties extends BaseSlider {
    onChange?(value: number): void;
    onConfirm?(): void;
}

export interface MKRangeSliderProperties extends BaseSlider {
    minValue?: number;
    maxValue?: number;
    onStart?(): void;
    onConfirm?(curValue: { min: number, max: number }): void;
    onChange?(curValue: { min: number, max: number }): void;
}

export interface MKSpinnerProperties extends ViewProps {
    strokeColor?: string;
    strokeWidth?: number;
    spinnerAniDuration?: number;
}

export interface MKRadioButtonProperties extends MKRippleProperties, TouchableWithoutFeedbackProps {
    borderOnColor?: string;
    borderOffColor?: string;
    fillColor?: string;
    checked?: boolean;
    group?: MKRadioButtonGroup;
    extraRippleRadius?: number;
    onCheckedChange?(opts: { checked: boolean }): void;
}

export interface MKCheckboxProperties extends MKRippleProperties, TickProperties, TouchableWithoutFeedbackProps {
    borderOnColor?: string;
    borderOffColor?: string;
    fillColor?: string;
    checked?: boolean;
    editable?: boolean;
    extraRippleRadius?: number;
    onCheckedChange?(opts: { checked: boolean }): void;
}

export interface MKRadioButtonGroup {
    buttons: any[];
}

///////////////////////////////
// MAIN EXPORTS
///////////////////////////////

export const theme: ThemeStatic;
export const MKColor: MKColorStatic;
export function setTheme(theme: ThemeStatic): void;
export function getTheme(): ThemeStatic;

export class MKButton extends MKComponent<MKButtonProperties, any> {}

export class MKTextField extends MKComponent<MKTextFieldProperties, any> {}

export class MKSwitch extends MKComponent<MKSwitchProperties, any> {}

export class MKIconToggle extends MKComponent<MKIconToggleProperties, any> {}

export class MKRipple extends MKComponent<MKRippleProperties, any> {}

export class MKProgress extends MKComponent<MKProgressProperties, any> {}

export namespace MKProgress {
    class Indeterminate extends React.Component<IndeterminateProgressProperties> {}
}

export class MKSlider extends MKComponent<MKSliderProperties, any> {}

export class MKRangeSlider extends MKComponent<MKRangeSliderProperties, any> {}

export class MKSpinner extends MKComponent<MKSpinnerProperties, any> {}

export class MKRadioButton extends MKComponent<MKRadioButtonProperties, any> {}

export namespace MKRadioButton {
    class MKRadioButton {}

    class Group implements MKRadioButtonGroup {
        buttons: any[];
        constructor(
            onAdd?: (btn: MKRadioButton) => void,
            onRemove?: (btn: MKRadioButton) => void
        );
        add: (btn: MKRadioButton) => void;
        onChecked: (btn: MKRadioButton, checked: boolean) => void;
        onRemoved: (btn: MKRadioButton) => void;
    }
}

export class MKCheckbox extends MKComponent<MKCheckboxProperties, any> {}
