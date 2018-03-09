// Type definitions for react-virtualized-select 3.0
// Project: https://github.com/bvaughn/react-virtualized-select
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import { ReactSelectProps, ReactAsyncSelectProps, ReactCreatableSelectProps, LoadOptionsHandler, OptionValues } from "react-select";
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

export declare class VirtualizedSelectCreatable<TValue = OptionValues> extends React.Component<ReactCreatableSelectProps<TValue> & AdditionalVirtualizedSelectProps<TValue>> {}

export declare class VirtualizedSelectAsync<TValue = OptionValues> extends React.Component<ReactAsyncSelectProps<TValue> & AdditionalVirtualizedSelectProps<TValue> & { async: true }> {}

export declare class VirtualizedSelectAsyncCreatable<TValue = OptionValues> extends React.Component<ReactAsyncSelectProps<TValue>
& ReactCreatableSelectProps<TValue> & AdditionalVirtualizedSelectProps<TValue> & { async: true }> {}

declare class VirtualizedSelect<TValue = OptionValues> extends React.PureComponent<ReactSelectProps<TValue> & AdditionalVirtualizedSelectProps<TValue>> {}

export default VirtualizedSelect;
