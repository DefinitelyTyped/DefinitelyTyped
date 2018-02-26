import { Component, ComponentType } from "react";

export type GenericFormSection<P> = Component<P & FormSectionProps<P>>;

export interface FormSectionProps<P = {}> {
    name: string;
    component?: string | ComponentType<P>;
}

export declare class FormSection extends Component<FormSectionProps> {}

export default FormSection;
