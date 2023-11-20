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
