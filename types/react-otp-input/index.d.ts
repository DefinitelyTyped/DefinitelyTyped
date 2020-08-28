// Type definitions for react-otp-input 2.0.2
// Project: https://github.com/devfolioco/react-otp-input
// Definitions by: Anup Bhatkhande <https://github.com/anupbui>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as React from 'react';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

declare namespace ReactOTPInput {
    interface OTPInputProps {
        value: number | string;
        onChange: Dispatch<SetStateAction<string | number>>;
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
}

export default class extends React.Component<ReactOTPInput.OTPInputProps> { }
