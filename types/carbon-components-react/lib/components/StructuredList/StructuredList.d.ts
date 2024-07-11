import * as React from "react";
import { ReactAttr, ReactDivAttr, ReactInputAttr, ReactLabelAttr } from "../../../typings/shared";

// StructuredListWrapper

export interface StructuredListWrapperProps extends ReactDivAttr {
    ariaLabel?: string | undefined;
    /**
     * @deprecated
     */
    border?: boolean | undefined;
    isCondensed?: boolean | undefined;
    isFlush?: boolean | undefined;
    selection?: boolean | undefined;
}

export declare const StructuredListWrapper: React.FC<StructuredListWrapperProps>;

// StructuredListHead

export interface StructuredListHeadProps extends ReactDivAttr {}

export declare const StructuredListHead: React.FC<StructuredListHeadProps>;

// StructuredListInput

type ExcludedListInputPropKeys = "onChange" | "tabIndex" | "type" | "value";

/**
 * Prop "checked" is not overrideable with the 2021 release flag enabled.
 */
export interface StructuredListInputProps extends Omit<ReactInputAttr, ExcludedListInputPropKeys> {
    /**
     * @deprecated This is not used with the 2021 release flag enabled.
     */
    defaultChecked?: boolean | undefined;
    /**
     * @param event
     * @deprecated This is not used with the 2021 release flag enabled.
     */
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * @deprecated This is not used with the 2021 release flag enabled.
     */
    value: string | number;
}

export declare const StructuredListInput: React.FC<StructuredListInputProps>;

// StructuredListRow

export interface StructuredListDivRowProps extends Omit<ReactDivAttr, "onKeyDown" | "tabIndex"> {
    head?: boolean | undefined;
    /**
     * @deprecated
     */
    label?: false | undefined;
}

/**
 * @deprecated This variant is not supported in the "next" version of StructuredList and is not available with the
 * 2021 release feature flag enabled.
 */
export interface StructuredListLabelRowProps extends ReactLabelAttr {
    head?: boolean | undefined;
    /**
     * @deprecated
     */
    label: true;
}

export type AllStructuredListRowProps = StructuredListLabelRowProps | StructuredListDivRowProps;
export declare const StructuredListRow: React.FC<AllStructuredListRowProps>;

// StructuredListBody

export interface StructuredListBodyProps extends ReactDivAttr {}

export declare const StructuredListBody: React.FC<StructuredListBodyProps>;

// StructuredListCell

/*
 * TODO: make the distinction between span/div when next becomes the stable version. For now this will cover both
 *  next and stable signatures without overcomplicating the types.
 */
export interface StructuredListCellProps extends ReactAttr {
    head?: boolean | undefined;
    noWrap?: boolean | undefined;
}

export declare const StructuredListCell: React.FC<StructuredListCellProps>;
