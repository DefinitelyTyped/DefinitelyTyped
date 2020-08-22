import { Component, ReactNode, FC } from 'react';
import { Animated, StyleProp, ViewProps, ImageSourcePropType, TextProps } from 'react-native';

export interface ButtonProps {
    buttonStyle: StyleProp<ViewProps>;
    onPress: () => void;
    iconSrc: ImageSourcePropType;
    textStyle: StyleProp<TextProps>;
    children: ReactNode;
}

declare const Button: FC<ButtonProps>;

export default Button;
