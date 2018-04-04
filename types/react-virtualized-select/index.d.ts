// Type definitions for react-virtualized-select 3.0
// Project: https://github.com/bvaughn/react-virtualized-select
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";
import { ReactSelectProps, ReactAsyncSelectProps, LoadOptionsHandler, OptionValues } from "react-select";
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

export interface AdditionalVirtualizedSelectProps<TValue> {
    maxHeight?: number;
    optionHeight?: number;
    optionRenderer?(options: VirtualizedOptionRenderOptions<TValue>): JSX.Element;
    selectComponent?: React.ComponentClass<any> | React.StatelessComponent<any>;
}

type VirtualizedSelectProps<TValue = OptionValues> = (ReactAsyncSelectProps<TValue> & AdditionalVirtualizedSelectProps<TValue> & { async: true }) |
    ReactSelectProps<TValue> & AdditionalVirtualizedSelectProps<TValue>;

declare class VirtualizedSelect<TValue = OptionValues> extends React.PureComponent<VirtualizedSelectProps<TValue>> {}
export default VirtualizedSelect;
