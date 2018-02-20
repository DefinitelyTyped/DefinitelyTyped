export declare type Element = string;
export interface BaseBinding {
    type?: string;
    element?: Element;
    debounce?: number;
}
export interface BindCheckbox extends BaseBinding {
    input: 'checkbox';
}
export interface BindRadioSelect extends BaseBinding {
    input: 'radio' | 'select';
    options: any[];
}
export interface BindRange extends BaseBinding {
    input: 'range';
    min?: number;
    max?: number;
    step?: number;
}
export declare type Binding = BaseBinding | BindCheckbox | BindRadioSelect | BindRange;
