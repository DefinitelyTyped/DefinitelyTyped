// Type definitions for react-radio-group 3.0
// Project: https://github.com/chenglou/react-radio-group
// Definitions by: Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

export namespace Radio {
    type RadioProps = React.InputHTMLAttributes<HTMLInputElement>;
}
export const Radio: React.ComponentClass<Radio.RadioProps>;

export namespace RadioGroup {
    interface RadioGroupProps {
        name?: string;
        selectedValue?: React.InputHTMLAttributes<HTMLInputElement>['value'];
        onChange?: (value: React.InputHTMLAttributes<HTMLInputElement>['value']) => void;
        Component?: string | React.ReactElement<React.HTMLProps<HTMLElement>>;
    }
}
export const RadioGroup: React.ComponentClass<RadioGroup.RadioGroupProps>;
