import { Component } from "react";

export interface ItemOfSelectInput {
    label: string;
    value: any;
    key?: string | number | undefined;
}

export interface SelectInputProps<T extends ItemOfSelectInput = ItemOfSelectInput> {
    focus?: boolean | undefined;
    indicatorComponent?: Component | undefined;
    itemComponent?: Component | undefined;
    items?: ReadonlyArray<T> | undefined;
    limit?: number | undefined;
    initialIndex?: number | undefined;
    onSelect?: ((item: T) => void) | undefined;
}

declare class SelectInput extends Component<SelectInputProps> {}

export default SelectInput;
