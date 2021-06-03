// Type definitions for react-native-button 3.0
// Project: https://github.com/ide/react-native-button
// Definitions by: mkchung <https://github.com/mkchung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from 'react';
import {
    StyleProp,
    TextProps,
    TextStyle,
    TouchableOpacityProps,
    ViewStyle,
} from 'react-native';

export interface ButtonProps
    extends TouchableOpacityProps,
    Pick<TextProps, 'allowFontScaling'> {
    containerStyle?: StyleProp<ViewStyle>;
    disabledContainerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<TextStyle>;
    styleDisabled?: StyleProp<TextStyle>;
    childGroupStyle?: StyleProp<ViewStyle>;
    androidBackground?: object;
}

export default class Button extends Component<ButtonProps> {
    constructor(props: object);
}
