// Type definitions for react-virtualized-select 3.0
// Project: https://github.com/bvaughn/react-virtualized-select
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import { ReactSelectProps, LoadOptionsHandler, OptionValues } from "react-select";
import { ListProps } from "react-virtualized";

export interface VirtualizedOptionRenderOptions<T> {
    focusedOption: T;
    focusedOptionIndex: number;
    focusOption(option: T): void;
    key: string;
    labelKey: keyof T;
    listProps: ListProps;
    option: T;
    options: T[];
    selectValue(option: T): void;
    style: Record<string, string>;
    valueArray: T[];
}

/**
 * Dummy interface to allow `VirtualizedSelectProps` to have an `optionRenderer` type
 * incompatible with the one in `ReactSelectProps`.
 */
interface VirtualizedSelectPropsBase<TValue = OptionValues> extends ReactSelectProps<TValue> {
    optionRenderer?: any;
}
export interface VirtualizedSelectProps<TValue = OptionValues> extends VirtualizedSelectPropsBase<TValue> {
    async?: boolean;
    loadOptions?: LoadOptionsHandler<TValue>;
    maxHeight?: number;
    optionHeight?: number;
    optionRenderer?(options: VirtualizedOptionRenderOptions<any>): JSX.Element;
    selectComponent?: React.ComponentClass<any> | React.StatelessComponent<any>;
}

declare class VirtualizedSelect<TValue = OptionValues> extends React.PureComponent<VirtualizedSelectProps<TValue>> {}
export default VirtualizedSelect;
