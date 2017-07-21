import { Component, ComponentType } from "react";

export type GenericFormSection<P> = Component<P & FormSectionProps<P>>;

export interface FormSectionProps<P = {}> {
    name: string;
    component?: string | ComponentType<P>;
}

declare class FormSection extends Component<FormSectionProps> {}
