// Type definitions for react-radio-group 3.0
// Project: https://github.com/chenglou/react-radio-group
// Definitions by: Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

type Value = React.InputHTMLAttributes<HTMLInputElement>['value'];

export namespace Radio {
    export type RadioProps = React.InputHTMLAttributes<HTMLInputElement>;
}
export const Radio: React.ComponentClass<Radio.RadioProps>;

export namespace RadioGroup {
    export interface RadioGroupProps {
        name?: string;
        selectedValue?: Value;
        onChange?: (value: Value) => void;
        Component?: string | React.ReactElement<React.HTMLProps<HTMLElement>>;
    }
}
export const RadioGroup: React.ComponentClass<RadioGroup.RadioGroupProps>;
