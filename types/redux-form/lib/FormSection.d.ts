import { Component } from "react";
import { ComponentConstructor } from "redux-form";

export type GenericFormSection<P> = Component<P & FormSectionProps<P>>;

export interface FormSectionProps<P = {}> {
    name: string;
    component?: string | ComponentConstructor<P>;
}

declare class FormSection extends Component<FormSectionProps> {}
