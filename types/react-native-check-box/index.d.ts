// Type definitions for react-native-check-box 2.1
// Project: https://github.com/crazycodeboy/react-native-check-box#readme
// Definitions by: Rodolphe Lemasquerier <https://github.com/rlemasquerier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface CheckBoxProps {
    style?: StyleProp<ViewStyle>;
    leftText?: string;
    leftTextStyle?: StyleProp<TextStyle>;
    leftTextView?: React.ReactNode;
    rightText?: string;
    rightTextStyle?: StyleProp<TextStyle>;
    rightTextView?: React.ReactNode;
    checkedImage?: React.ReactElement;
    unCheckedImage?: React.ReactElement;
    isChecked: boolean;
    onClick: () => void;
    disabled?: boolean;
    checkBoxColor?: string;
    checkedCheckBoxColor?: string;
    uncheckedCheckBoxColor?: string;
}

declare class CheckBox extends React.Component<CheckBoxProps> {}

export default CheckBox;
