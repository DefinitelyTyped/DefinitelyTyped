// Type definitions for react-otp-input 2.0.2
// Project: https://github.com/devfolioco/react-otp-input
// Definitions by: Anup Bhatkhande <https://github.com/anupbui>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as React from 'react';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export = OTPInput;

declare namespace OTPInput {
    interface OTPInputProps {
        value: number | string;
        onChange: Dispatch<SetStateAction<string | number>> | any;
        numInputs: number;
        separator?: JSX.Element;
        isDisabled?: boolean;
        shouldAutoFocus?: boolean;
        hasErrored?: boolean;
        isInputNum?: boolean;
        containerStyle?: string | CSSStyleDeclaration | any;
        inputStyle?: string | CSSStyleDeclaration | any;
        focusStyle?: string | CSSStyleDeclaration | any;
        disabledStyle?: string | CSSStyleDeclaration | any;
        errorStyle?: string | CSSStyleDeclaration | any;
    }
}

declare class OTPInput extends React.Component<OTPInput.OTPInputProps> { }
