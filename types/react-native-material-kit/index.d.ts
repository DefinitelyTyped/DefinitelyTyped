import * as React from "react";
import { TextInputProps, TextStyle, TouchableWithoutFeedbackProps, ViewProps, ViewStyle } from "react-native";

///////////////////////////////
// COMPONENT STYLES
///////////////////////////////

export interface ProgressStyle {
    backgroundColor?: string | undefined;
    progressColor?: string | undefined;
    bufferColor?: string | undefined;
}

export interface TextFieldStyle {
    tintColor?: string | undefined;
    highlightColor?: string | undefined;
    textInputStyle?: {
        color?: string | undefined;
        fontSize?: number | undefined;
        paddingLeft?: number | undefined;
        paddingRight?: number | undefined;
    } | undefined;
}

export interface SpinnerStyle {
    strokeColor?: string[] | undefined;
}

export interface SliderStyle {
    lowerTrackColor?: string | undefined;
    upperTrackColor?: string | undefined;
}

export interface IconToggleStyle {
    onColor?: string | undefined;
    offColor?: string | undefined;
    rippleColor?: string | undefined;
}

export interface SwitchStyle {
    onColor?: string | undefined;
    offColor?: string | undefined;
    thumbOnColor?: string | undefined;
    thumbOffColor?: string | undefined;
    rippleColor?: string | undefined;
}

export interface RadioStyle {
    borderOnColor?: string | undefined;
    borderOffColor?: string | undefined;
    fillColor?: string | undefined;
    rippleColor?: string | undefined;
    extraRippleRadius?: number | undefined;
}

export interface CheckboxStyle {
    borderOnColor?: string | undefined;
    borderOffColor?: string | undefined;
    fillColor?: string | undefined;
    rippleColor?: string | undefined;
    inset?: number | undefined;
}

export interface CardStyle {
    backgroundColor?: string | undefined;
    borderRadius?: number | undefined;
    borderColor?: string | undefined;
    borderWidth?: number | undefined;
    shadowColor?: string | undefined;
    shadowOpacity?: number | undefined;
    shadowRadius?: number | undefined;
    shadowOffset?: {
        height: number;
        width: number;
    } | undefined;
}

export interface CardImageStyle {
    height?: number | undefined;
    resizeMode?: string | undefined;
}

export interface CardTitleStyle {
    position?: "absolute" | "relative" | undefined;
    top?: number | undefined;
    left?: number | undefined;
    backgroundColor?: string | undefined;
    padding?: number | undefined;
    fontSize?: number | undefined;
    color?: string | undefined;
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
}

export interface CardContentStyle {
    padding?: number | undefined;
    color?: string | undefined;
}

export interface CardActionStyle {
    borderStyle?: "solid" | "dotted" | "dashed" | undefined;
    borderTopColor?: string | undefined;
    borderTopWidth?: number | undefined;
    padding?: number | undefined;
}

export interface CardMenuStyle {
    position?: "absolute" | "relative" | undefined;
    top?: number | undefined;
    right?: number | undefined;
    backgroundColor?: string | undefined;
}

export interface ThemeStatic {
    primaryColor?: string | undefined;
    primaryColorRGB?: string | undefined;
    accentColor?: string | undefined;
    accentColorRGB?: string | undefined;
    bgPlain?: string | undefined;
    bgDisabled?: string | undefined;
    fontColor?: string | undefined;
    fontSize?: number | undefined;
    rippleColor?: string | undefined;
    textfieldStyle?: TextFieldStyle | undefined;
    progressStyle?: ProgressStyle | undefined;
    spinnerStyle?: SpinnerStyle | undefined;
    sliderStyle?: SliderStyle | undefined;
    iconToggleStyle?: IconToggleStyle | undefined;
    switchStyle?: SwitchStyle | undefined;
    radioStyle?: RadioStyle | undefined;
    checkboxStyle?: CheckboxStyle | undefined;
    cardStyle?: CardStyle | undefined;
    cardImageStyle?: CardImageStyle | undefined;
    cardTitleStyle?: CardTitleStyle | undefined;
    cardContentStyle?: CardContentStyle | undefined;
    cardActionStyle?: CardActionStyle | undefined;
    cardMenuStyle?: CardMenuStyle | undefined;
}

///////////////////////////////
// HELPERS
///////////////////////////////

export interface FloatingLabelProperties {
    floatingLabelEnabled?: boolean | undefined;
    floatingLabelAniDuration?: number | undefined;
    floatingLabelBottomMargin?: number | undefined;
    floatingLabelFont?: MKPropTypes.font | undefined;
    allowFontScaling?: boolean | undefined;
}

export namespace MKPropTypes {
    interface dimen {
        width?: number | undefined;
        height?: number | undefined;
    }

    interface font {
        color?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?:
            | "normal"
            | "bold"
            | "100"
            | "200"
            | "300"
            | "400"
            | "500"
            | "600"
            | "700"
            | "800"
            | "900"
            | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        fontFamily?: string | undefined;
    }

    type rippleLocation = "tapLocation" | "center";
}

export interface TickProperties extends ViewProps {
    fillColor?: string | undefined;
    inset?: number | undefined;
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

export interface MKButtonProperties extends TouchableWithoutFeedbackProps, MKRippleProperties {
    fab?: boolean | undefined;
    enabled?: boolean | undefined;
}

export interface MKTextFieldProperties extends TextInputProps, FloatingLabelProperties {
    text?: string | undefined;
    password?: boolean | undefined;
    underlineEnabled?: boolean | undefined;
    underlineSize?: number | undefined;
    highlightColor?: string | undefined;
    tintColor?: string | undefined;
    textInputStyle?: TextStyle | undefined;
    allowFontScaling?: boolean | undefined;
    additionalInputProps?: TextInputProps | undefined;
    onTextChange?(val: string): void;
}

export interface MKSwitchProperties extends TouchableWithoutFeedbackProps {
    checked?: boolean | undefined;
    onColor?: string | undefined;
    offColor?: string | undefined;
    trackSize?: number | undefined;
    trackLength?: number | undefined;
    thumbRadius?: number | undefined;
    thumbOnColor?: string | undefined;
    thumbOffColor?: string | undefined;
    thumbAniDuration?: number | undefined;
    rippleColor?: string | undefined;
    rippleAniDuration?: number | undefined;
    onCheckedChange?(opts: { checked: boolean }): void;
}

export interface MKIconToggleProperties extends MKRippleProperties, TouchableWithoutFeedbackProps {
    checked?: boolean | undefined;
    onCheckedChange?(checked: boolean): void;
}

export interface MKRippleProperties extends ViewProps {
    rippleColor?: string | undefined;
    rippleDuration?: number | undefined;
    rippleLocation?: MKPropTypes.rippleLocation | undefined;
    maskEnabled?: boolean | undefined;
    maskColor?: string | undefined;
    maskBorderRadius?: number | undefined;
    maskBorderRadiusInPercent?: number | undefined;
    maskDuration?: number | undefined;
    shadowAniEnabled?: boolean | undefined;
}

export interface MKProgressProperties extends ViewProps {
    progress?: number | undefined;
    buffer?: number | undefined;
    progressColor?: string | undefined;
    bufferColor?: string | undefined;
    progressAniDuration?: number | undefined;
    bufferAniDuration?: number | undefined;
}

export interface IndeterminateProgressProperties extends ViewProps {
    progressColor?: string | undefined;
    progressAniDuration?: number | undefined;
}

export interface BaseSlider extends ViewProps {
    min?: number | undefined;
    max?: number | undefined;
    value?: number | undefined;
    trackSize?: number | undefined;
    thumbRadius?: number | undefined;
    thumbPadding?: number | undefined;
    lowerTrackColor?: string | undefined;
    upperTrackColor?: string | undefined;
    step?: number | undefined;
}

export interface MKSliderProperties extends BaseSlider {
    onChange?(value: number): void;
    onConfirm?(): void;
}

export interface MKRangeSliderProperties extends BaseSlider {
    minValue?: number | undefined;
    maxValue?: number | undefined;
    onStart?(): void;
    onConfirm?(curValue: { min: number; max: number }): void;
    onChange?(curValue: { min: number; max: number }): void;
}

export interface MKSpinnerProperties extends ViewProps {
    strokeColor?: string | undefined;
    strokeWidth?: number | undefined;
    spinnerAniDuration?: number | undefined;
}

export interface MKRadioButtonProperties extends MKRippleProperties, TouchableWithoutFeedbackProps {
    borderOnColor?: string | undefined;
    borderOffColor?: string | undefined;
    fillColor?: string | undefined;
    checked?: boolean | undefined;
    group?: MKRadioButtonGroup | undefined;
    extraRippleRadius?: number | undefined;
    onCheckedChange?(opts: { checked: boolean }): void;
}

export interface MKCheckboxProperties extends MKRippleProperties, TickProperties, TouchableWithoutFeedbackProps {
    borderOnColor?: string | undefined;
    borderOffColor?: string | undefined;
    fillColor?: string | undefined;
    checked?: boolean | undefined;
    editable?: boolean | undefined;
    extraRippleRadius?: number | undefined;
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
            onRemove?: (btn: MKRadioButton) => void,
        );
        add: (btn: MKRadioButton) => void;
        onChecked: (btn: MKRadioButton, checked: boolean) => void;
        onRemoved: (btn: MKRadioButton) => void;
    }
}

export class MKCheckbox extends MKComponent<MKCheckboxProperties, any> {}
