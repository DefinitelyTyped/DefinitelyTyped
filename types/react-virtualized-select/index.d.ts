// Type definitions for react-virtualized-select 3.0
// Project: https://github.com/bvaughn/react-virtualized-select
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import { ReactSelectProps } from "react-select";
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

export interface VirtualizedSelectProps extends ReactSelectProps {
    async?: boolean;
    maxHeight?: number;
    optionHeight?: number;
    optionRenderer?(options: VirtualizedOptionRenderOptions<any>): JSX.Element;
    selectComponent?: React.ComponentClass<any> | React.StatelessComponent<any>;
}

declare class VirtualizedSelect extends React.PureComponent<VirtualizedSelectProps> {}
export default VirtualizedSelect;
