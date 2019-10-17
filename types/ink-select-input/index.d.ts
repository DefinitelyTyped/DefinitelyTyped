// Type definitions for ink-select-input 3.0
// Project: https://github.com/vadimdemedes/ink-select-input#readme
// Definitions by: Łukasz Ostrowski <https://github.com/lukostry>
//                 Jakub Satnik <https://github.com/shatodj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';

export interface ItemOfSelectInput {
    label: string;
    value: any;
    key?: string | number;
}

export interface SelectInputProps<T extends ItemOfSelectInput = ItemOfSelectInput> {
    focus?: boolean;
    indicatorComponent?: Component;
    itemComponent?: Component;
    items?: ReadonlyArray<T>;
    limit?: number;
    initialIndex?: number;
    onSelect?: (item: T) => void;
}

declare class SelectInput extends Component<SelectInputProps> { }

export default SelectInput;
