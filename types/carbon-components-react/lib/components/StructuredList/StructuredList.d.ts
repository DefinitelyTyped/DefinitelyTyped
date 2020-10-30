import * as React from "react";
import { ReactAttr, ReactDivAttr, ReactInputAttr, ReactLabelAttr } from "../../../typings/shared";

// StructuredListWrapper

export interface StructuredListProps extends ReactAttr {
    ariaLabel?: string,
    /**
     * @deprecated
     */
    border?: boolean,
    selection?: boolean,
}

export declare class StructuredListWrapper extends React.Component<StructuredListProps> { }

// StructuredListHead

export interface StructuredListHeadProps extends ReactDivAttr { }

export declare class StructuredListHead extends React.Component<StructuredListHeadProps> { }

// StructuredListInput
type ExcludedListInputProps = "tabIndex" | "type" | "value";
export interface StructuredListInputProps extends Omit<ReactInputAttr, ExcludedListInputProps> {
    defaultChecked?: boolean,
    value: string | number,
}

export declare class StructuredListInput extends React.Component<StructuredListInputProps> { }

// StructuredListRow

export interface StructuredListDivRowProps extends Omit<ReactDivAttr, "onKeyDown" | "tabIndex"> {
    head?: boolean,
    label?: false,
}
export interface StructuredListLabelRowProps extends ReactLabelAttr {
    head?: boolean,
    label: true,
}

export type AllStructuredListRowProps = StructuredListLabelRowProps | StructuredListDivRowProps;
export declare class StructuredListRow extends React.Component<AllStructuredListRowProps> { }

// StructuredListBody

export interface StructuredListBodyProps extends ReactDivAttr { }

export declare class StructuredListBody extends React.Component<StructuredListBodyProps> { }

// StructuredListCell

export interface StructuredListCellProps extends ReactDivAttr {
    head?: boolean,
    noWrap?: boolean,
}

export declare class StructuredListCell extends React.Component<StructuredListCellProps> { }
