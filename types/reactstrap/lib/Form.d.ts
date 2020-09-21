import * as React from 'react';
import { CSSModule } from '../index';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    [key: string]: any;
    inline?: boolean;
    tag?: React.ElementType;
    innerRef?: React.Ref<HTMLFormElement>;
    cssModule?: CSSModule;
}

declare class Form<T> extends React.Component<FormProps> {}
export default Form;
