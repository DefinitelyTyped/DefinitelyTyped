// Type definitions for react-native-material-kit 0.4
// Project: https://github.com/xinthink/react-native-material-kit
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react'
import {
    ViewStyle,
    TextStyle,
    TextInputProperties,
    TouchableWithoutFeedbackProperties,
} from 'react-native'

interface MKTextFieldProperties extends TextInputProperties {
    floatingLabelEnabled?: boolean
    highlightColor?: string
    tintColor?: string
    textInputStyle?: TextStyle | TextStyle[]
    value: string
    password?: boolean
    underlineSize?: number
    onTextChange?(val: string): void
    style?: any
}

interface MKSpinnerProperties {
    strokeColor?: string
    strokeWidth?: number
    spinnerAniDuration?: number
    style?: ViewStyle
}

interface MKRadioButtonProperties extends TouchableWithoutFeedbackProperties {
    group?: MKRadioButtonGroup
    checked?: boolean
    fillColor?: string
    borderOnColor?: string
    borderOffColor?: string
    extraRippleRadius?: number
    onCheckedChange?(opts: { checked: boolean }): void
}

interface MKCheckboxProperties extends TouchableWithoutFeedbackProperties {
    borderOnColor?: string
    borderOffColor?: string
    fillColor?: string
    checked?: boolean
    editable?: boolean
    extraRippleRadius?: number
    onCheckedChange?(opts: { checked: boolean }): void
}

interface MKRadioButtonGroup {
    buttons: any[]
}

interface Theme {
    radioStyle?: {
        fillColor?: string
        borderOnColor?: string
        borderOffColor?: string
        extraRippleRadius?: number
    }
    checkboxStyle?: {
        fillColor: string
        borderOnColor: string
    }
}

export function setTheme(theme: Theme): void

export class MKTextField extends React.Component<MKTextFieldProperties, any> {}
export class MKSpinner extends React.Component<MKSpinnerProperties, any> {}
export class MKRadioButton extends React.Component<MKRadioButtonProperties, any> {}
export class MKCheckbox extends React.Component<MKCheckboxProperties, any> {}
export class MKColor {
static Amber: '#FFC107'
static Blue: '#2196F3'
static BlueGrey: '#607D8B'
static Brown: '#795548'
static Cyan: '#00BCD4'
static DeepOrange: '#FF5722'
static DeepPurple: '#673AB7'
static Green: '#4CAF50'
static Grey: '#9E9E9E'
static Indigo: '#3F51B5'
static LightBlue: '#03A9F4'
static LightGreen: '#8BC34A'
static Lime: '#CDDC39'
static Orange: '#FF9800'
static Pink: '#FF4081'
static Purple: '#9C27B0'
static RGBIndigo: '63,81,181'
static RGBPink: '255,64,129'
static RGBPurple: '156,39,176'
static RGBTeal: '0,150,136'
static Red: '#FF5252'
static Silver: '#EAEAEA'
static Teal: '#009688'
static Transparent: 'transparent'
static Yellow: '#FFEB3B'
static default: {
    Amber: '#FFC107'
    Blue: '#2196F3'
    BlueGrey: '#607D8B'
    Brown: '#795548'
    Cyan: '#00BCD4'
    DeepOrange: '#FF5722'
    DeepPurple: '#673AB7'
    Green: '#4CAF50'
    Grey: '#9E9E9E'
    Indigo: '#3F51B5'
    LightBlue: '#03A9F4'
    LightGreen: '#8BC34A'
    Lime: '#CDDC39'
    Orange: '#FF9800'
    Pink: '#FF4081'
    Purple: '#9C27B0'
    RGBIndigo: '63,81,181'
    RGBPink: '255,64,129'
    RGBPurple: '156,39,176'
    RGBTeal: '0,150,136'
    Red: '#FF5252'
    Silver: '#EAEAEA'
    Teal: '#009688'
    Transparent: 'transparent'
    Yellow: '#FFEB3B'
}
static palette_blue_400: 'rgb(66,165,245)'
static palette_green_500: 'rgb(76,175,80)'
static palette_red_500: 'rgb(244,67,54)'
static palette_yellow_600: 'rgb(253,216,53)'
}

export namespace MKRadioButton {
    class MKRadioButton {}

    class Group implements MKRadioButtonGroup {
        buttons: any[]
    }
}
