export interface PluralForms {
    zero?: string;
    one?: string;
    two?: string;
    few?: string;
    many?: string;
    other: string;
    [exact: number]: string;
}

export interface PluralProps extends PluralForms {
    value: number;
    offset?: number;
}

export interface SelectProps {
    value: string;
    other: string;
    [selectForm: string]: string;
}
