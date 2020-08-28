// Type definitions for react-otp-input 2.0
// Project: https://github.com/devfolioco/react-otp-input
// Definitions by: Anup Bhatkhande <https://github.com/anupbui>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from 'react';

export interface OTPInputProps {
    value: number | string;
    onChange: any;
    numInputs: number;
    separator?: JSX.Element;
    isDisabled?: boolean;
    shouldAutoFocus?: boolean;
    hasErrored?: boolean;
    isInputNum?: boolean;
    containerStyle?: string | React.CSSProperties;
    inputStyle?: string | React.CSSProperties;
    focusStyle?: string | React.CSSProperties;
    disabledStyle?: string | React.CSSProperties;
    errorStyle?: string | React.CSSProperties;
}

export default class extends React.Component<OTPInputProps> { }
