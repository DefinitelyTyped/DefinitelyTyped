import * as React from 'react';
import { CSSModule } from '../index';

export interface FormTextProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    inline?: boolean;
    tag?: string | React.ReactType;
    color?: string;
    className?: string;
    cssModule?: CSSModule;
}

declare class FormText<T = {[key: string]: any}> extends React.Component<FormTextProps> {}
export default FormText;
