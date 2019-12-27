// Type definitions for @rebass/forms 4.0
// Project: https://github.com/rebassjs/rebass#readme
// Definitions by: zinozzino <https://github.com/zinozzino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react';
import * as Rebass from 'rebass';
import * as StyledSystem from 'styled-system';

type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P] };

interface BoxKnownProps
    extends Rebass.BaseProps,
        StyledSystem.SpaceProps,
        StyledSystem.LayoutProps,
        StyledSystem.FontSizeProps,
        StyledSystem.ColorProps,
        StyledSystem.FlexProps,
        StyledSystem.OrderProps,
        StyledSystem.AlignSelfProps,
        Rebass.SxProps {
    variant?: StyledSystem.ResponsiveValue<string>;
    tx?: string;
}

interface LabelKnownProps
    extends BoxKnownProps,
        StyledSystem.FlexWrapProps,
        StyledSystem.FlexDirectionProps,
        StyledSystem.AlignItemsProps,
        StyledSystem.JustifyContentProps {}

declare module '@rebass/forms' {
    interface LabelProps extends LabelKnownProps, Omit<React.HTMLProps<HTMLLabelElement>, keyof BoxKnownProps> {}

    const Label: React.FunctionComponent<LabelProps>;

    interface InputProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof BoxKnownProps> {}

    const Input: React.FunctionComponent<InputProps>;

    interface SelectProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLSelectElement>, keyof BoxKnownProps> {}

    const Select: React.FunctionComponent<SelectProps>;

    interface TextareaProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLTextAreaElement>, keyof BoxKnownProps> {}

    const Textarea: React.FunctionComponent<TextareaProps>;

    interface RadioProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof BoxKnownProps> {}

    const Radio: React.FunctionComponent<RadioProps>;

    interface CheckboxProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof BoxKnownProps> {}

    const Checkbox: React.FunctionComponent<CheckboxProps>;
}
