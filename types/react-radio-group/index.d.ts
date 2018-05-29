// Type definitions for react-radio-group 3.0
// Project: https://github.com/chenglou/react-radio-group
// Definitions by: Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

// Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
export type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

export namespace Radio {
    type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'name' | 'role' | 'type' | 'aria-checked'> & {
        value: any;
    };
}
export const Radio: React.ComponentClass<Radio.RadioProps>;

export namespace RadioGroup {
    type RadioGroupProps = Omit<React.HTMLProps<any>, 'onChange'> & {
        selectedValue?: any;
        onChange?: (value: any) => void;
        Component?: React.ReactType<Omit<React.HTMLProps<any>, 'onChange' | 'role'>>;
    };
}
export const RadioGroup: React.ComponentClass<RadioGroup.RadioGroupProps>;
