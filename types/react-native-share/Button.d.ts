import { Component, FC, ReactNode } from "react";
import { Animated, ImageSourcePropType, StyleProp, TextProps, ViewProps } from "react-native";

export interface ButtonProps {
    buttonStyle: StyleProp<ViewProps>;
    onPress: () => void;
    iconSrc: ImageSourcePropType;
    textStyle: StyleProp<TextProps>;
    children: ReactNode;
}

declare const Button: FC<ButtonProps>;

export default Button;
