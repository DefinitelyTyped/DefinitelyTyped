// Type definitions for react-native-check-box 2.1
// Project: https://github.com/crazycodeboy/react-native-check-box#readme
// Definitions by: Rodolphe Lemasquerier <https://github.com/rlemasquerier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface CheckBoxProps {
    style?: StyleProp<ViewStyle> | undefined;
    leftText?: string | undefined;
    leftTextStyle?: StyleProp<TextStyle> | undefined;
    leftTextView?: React.ReactNode | undefined;
    rightText?: string | undefined;
    rightTextStyle?: StyleProp<TextStyle> | undefined;
    rightTextView?: React.ReactNode | undefined;
    checkedImage?: React.ReactElement | undefined;
    unCheckedImage?: React.ReactElement | undefined;
    isChecked: boolean;
    onClick: () => void;
    disabled?: boolean | undefined;
    checkBoxColor?: string | undefined;
    checkedCheckBoxColor?: string | undefined;
    uncheckedCheckBoxColor?: string | undefined;
}

declare class CheckBox extends React.Component<CheckBoxProps> {}

export default CheckBox;
