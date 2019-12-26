// Type definitions for @rebass/forms 4.0
// Project: https://github.com/rebassjs/rebass#readme
// Definitions by: zinozzino <https://github.com/zinozzino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css';
import * as React from 'react';
import * as StyledComponents from 'styled-components';
import * as StyledSystem from 'styled-system';

declare module '@rebass/forms' {
    interface BaseProps extends React.RefAttributes<any> {
        as?: React.ElementType;
        css?: StyledComponents.CSSObject | StyledComponents.FlattenSimpleInterpolation | string;
    }

    /**
     * The `SxStyleProp` extension `SystemStyleObject` and `Emotion` [style props](https://emotion.sh/docs/object-styles)
     * such that properties that are part of the `Theme` will be transformed to
     * their corresponding values. Other valid CSS properties are also allowed.
     */
    type SxStyleProp =
        | SystemStyleObject
        | Record<
              string,
              | SystemStyleObject
              | ResponsiveStyleValue<number | string>
              | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
          >;

    interface SxProps {
        /**
         * The sx prop lets you style elements inline, using values from your theme.
         */
        sx?: SxStyleProp;
    }

    interface BoxKnownProps
        extends BaseProps,
            StyledSystem.SpaceProps,
            StyledSystem.LayoutProps,
            StyledSystem.FontSizeProps,
            StyledSystem.ColorProps,
            StyledSystem.FlexProps,
            StyledSystem.OrderProps,
            StyledSystem.AlignSelfProps,
            SxProps {
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
