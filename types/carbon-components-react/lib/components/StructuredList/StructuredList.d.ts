import * as React from "react";
import { ReactAttr, ReactDivAttr, ReactInputAttr, ReactLabelAttr } from "../../../typings/shared";

// StructuredListWrapper

export interface StructuredListWrapperProps extends ReactDivAttr {
    ariaLabel?: string,
    /**
     * @deprecated
     */
    border?: boolean,
    selection?: boolean,
}

export declare const StructuredListWrapper: React.FC<StructuredListWrapperProps>;

// StructuredListHead

export interface StructuredListHeadProps extends ReactDivAttr { }

export declare const StructuredListHead: React.FC<StructuredListHeadProps>;

// StructuredListInput

type ExcludedListInputPropKeys = "tabIndex" | "type" | "value";
export interface StructuredListInputProps extends Omit<ReactInputAttr, ExcludedListInputPropKeys> {
    defaultChecked?: boolean,
    value: string | number,
}

export declare const StructuredListInput: React.FC<StructuredListInputProps>;

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
export declare const StructuredListRow: React.FC<AllStructuredListRowProps>;

// StructuredListBody

export interface StructuredListBodyProps extends ReactDivAttr { }

export declare const StructuredListBody: React.FC<StructuredListBodyProps>;

// StructuredListCell

export interface StructuredListCellProps extends ReactDivAttr {
    head?: boolean,
    noWrap?: boolean,
}

export declare const StructuredListCell: React.FC<StructuredListCellProps>;
