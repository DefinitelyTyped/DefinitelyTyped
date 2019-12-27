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

export interface LabelProps extends LabelKnownProps, Omit<React.HTMLProps<HTMLLabelElement>, keyof BoxKnownProps> {}

export const Label: React.FunctionComponent<LabelProps>;

export interface InputProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof BoxKnownProps> {}

export const Input: React.FunctionComponent<InputProps>;

export interface SelectProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLSelectElement>, keyof BoxKnownProps> {}

export const Select: React.FunctionComponent<SelectProps>;

export interface TextareaProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLTextAreaElement>, keyof BoxKnownProps> {}

export const Textarea: React.FunctionComponent<TextareaProps>;

export interface RadioProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof BoxKnownProps> {}

export const Radio: React.FunctionComponent<RadioProps>;

export interface CheckboxProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLInputElement>, keyof BoxKnownProps> {}

export const Checkbox: React.FunctionComponent<CheckboxProps>;
