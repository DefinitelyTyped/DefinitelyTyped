import { Component } from "react";
import { StyleProp, TextProps, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonProps extends TouchableOpacityProps, Pick<TextProps, "allowFontScaling"> {
    containerStyle?: StyleProp<ViewStyle> | undefined;
    disabledContainerStyle?: StyleProp<ViewStyle> | undefined;
    style?: StyleProp<TextStyle> | undefined;
    styleDisabled?: StyleProp<TextStyle> | undefined;
    childGroupStyle?: StyleProp<ViewStyle> | undefined;
    androidBackground?: object | undefined;
}

export default class Button extends Component<ButtonProps> {
    constructor(props: object);
}
