// Type definitions for react-otp-input 2.0
// Project: https://github.com/devfolioco/react-otp-input
// Definitions by: Anup Bhatkhande <https://github.com/anupbui>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from "react";

export interface OTPInputProps {
    value: number | string;
    onChange: any;
    numInputs: number;
    separator?: JSX.Element | undefined;
    isDisabled?: boolean | undefined;
    shouldAutoFocus?: boolean | undefined;
    hasErrored?: boolean | undefined;
    isInputNum?: boolean | undefined;
    containerStyle?: string | React.CSSProperties | undefined;
    inputStyle?: string | React.CSSProperties | undefined;
    focusStyle?: string | React.CSSProperties | undefined;
    disabledStyle?: string | React.CSSProperties | undefined;
    errorStyle?: string | React.CSSProperties | undefined;
}

export default class extends React.Component<OTPInputProps> {}
