// Type definitions for ink-select-input 2.0
// Project: https://github.com/vadimdemedes/ink-select-input#readme
// Definitions by: Łukasz Ostrowski <https://github.com/lukostry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, InkComponent } from 'ink';

interface ItemOfSelectInput {
    label: string;
    value: any;
}

interface SelectInputProps<T extends ItemOfSelectInput = ItemOfSelectInput> {
    focus?: boolean;
    indicatorComponent?: InkComponent;
    itemComponent?: InkComponent;
    items?: ReadonlyArray<T>;
    limit?: number;
    onSelect?: (item: T) => void;
}

declare class SelectInput extends Component<SelectInputProps> { }

export = SelectInput;
