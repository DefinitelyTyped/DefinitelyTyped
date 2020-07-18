import { MessageDescriptor } from "@lingui/core";

export interface PluralForms {
    zero?: string | MessageDescriptor;
    one?: string | MessageDescriptor;
    two?: string | MessageDescriptor;
    few?: string | MessageDescriptor;
    many?: string | MessageDescriptor;
    other: string | MessageDescriptor;
    [exact: number]: string | MessageDescriptor;
}

export interface PluralProps extends PluralForms {
    value: number;
    offset?: number;
}

export interface SelectProps {
    value: string;
    other: string | MessageDescriptor;
    [selectForm: string]: string | MessageDescriptor;
}
