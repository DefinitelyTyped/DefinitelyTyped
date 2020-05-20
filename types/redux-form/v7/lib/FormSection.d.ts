import { Component, ComponentType } from "react";

export interface FormSectionProps<P> {
    name: string;
    component?: ComponentType<P>;
}

export declare class FormSection<P = {}> extends Component<FormSectionProps<P> & P> {}

export default FormSection;
