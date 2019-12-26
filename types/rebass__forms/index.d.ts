// Type definitions for @rebass/forms 4.0
// Project: https://github.com/rebassjs/rebass#readme
// Definitions by: zinozzino <https://github.com/zinozzino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css';
import * as React from 'react';
import * as Rebass from 'rebass';
import * as StyledSystem from 'styled-system';

declare module '@rebass/forms' {
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

    interface LabelProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLLabelElement>, keyof BoxKnownProps> {}

    export const Label: React.FunctionComponent<LabelProps>;

    interface InputProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof BoxKnownProps> {}

    export const Input: React.FunctionComponent<InputProps>;

    interface SelectProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLSelectElement>, keyof BoxKnownProps> {}

    export const Select: React.FunctionComponent<SelectProps>;

    interface TextareaProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLTextAreaElement>, keyof BoxKnownProps> {}

    export const Textarea: React.FunctionComponent<TextareaProps>;

    interface RadioProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof BoxKnownProps> {}

    export const Radio: React.FunctionComponent<RadioProps>;

    interface CheckboxProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof BoxKnownProps> {}

    export const Checkbox: React.FunctionComponent<CheckboxProps>;
}
