import * as React from "react";

export type FormFieldsetProps = {
    className?: string;
} & { [x: string]: any };

export const FormFieldset: React.FunctionComponent<FormFieldsetProps>;

export type InputType = "normal" | "valid" | "invalid" | "warning";

export type FormInputProps = {
    className?: string;
    disabled?: boolean;
    id?: string;
    /* Value for the `name` attribute on the input. */
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    /* Sets the state of the input. Can be left empty for default styles. */
    state?: InputType;
    /* Value for the `type` attribute on the input. */
    type?: string;
    /* Value for the `value` attribute on the input. */
    value?: string;
} & { [x: string]: any };

export const FormInput: React.FunctionComponent<FormInputProps>;

export type FormItemProps = {
    className?: string;
    /* Set to **true** to render an `<input>` with `type` of **checkbox**. */
    isCheck?: boolean;
    /* Set to **true** to display radio buttons and checkboxes in a row. */
    isInline?: boolean;
} & { [x: string]: any };

export const FormItem: React.FunctionComponent<FormItemProps>;

export type FormLabelProps = {
    className?: string;
    /* Set to **true** for required input fields. */
    required?: boolean;
} & { [x: string]: any };

export const FormLabel: React.FunctionComponent<FormLabelProps>;

export type FormLegendProps = {
    className?: string;
} & { [x: string]: any };

export const FormLegend: React.FunctionComponent<FormLegendProps>;

export type FormMessageType = "error" | "warning" | "help";

export type FormMessageProps = {
    className?: string;
    type?: FormMessageType;
} & { [x: string]: any };

export const FormMessage: React.FunctionComponent<FormMessageProps>;

export type FormRadioGroupProps = {
    disabled?: boolean;
    /* Set to **true** to display radio buttons in a row. */
    inline?: boolean;
    onChange?: (...args: any[]) => any;
} & { [x: string]: any };

export class FormRadioGroup extends React.Component<FormRadioGroupProps> {}

export type FormRadioItemProps = {
    /* Set to **true** when radio input is checked and a controlled component. */
    checked?: boolean;
    className?: string;
    /* Set to **true** when the radio input is checked and an uncontrolled component. */
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    /* _INTERNAL USE ONLY._ */
    inline?: boolean;
    /* Sets the `name` for the radio input. */
    name?: string;
    /* Sets the `value` for the radio input. */
    value?: string;
} & { [x: string]: any };

export const FormRadioItem: React.FunctionComponent<FormRadioItemProps>;

export type FormSelectProps = {
    className?: string;
    disabled?: boolean;
} & { [x: string]: any };

export const FormSelect: React.FunctionComponent<FormSelectProps>;

export type FormSetProps = {
    className?: string;
} & { [x: string]: any };

export const FormSet: React.FunctionComponent<FormSetProps>;

export type FormTextareaProps = {
    className?: string;
} & { [x: string]: any };

export const FormTextarea: React.FunctionComponent<FormTextareaProps>;
