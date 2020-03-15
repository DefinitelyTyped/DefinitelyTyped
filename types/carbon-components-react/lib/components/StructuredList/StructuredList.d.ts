import * as React from "react";
import { ReactAttr, ReactDivAttr, ReactInputAttr, ReactLabelAttr } from "../../../typings/shared";

// StructuredListWrapper

interface StructureListWrapperInheritedProps extends Omit<ReactAttr, "aria-label"> {
    ariaLabel?: React.AriaAttributes["aria-label"],
}

export interface StructuredListProps extends StructureListWrapperInheritedProps {
    border?: boolean,
    selection?: boolean,
}

export declare class StructuredListWrapper extends React.Component<StructuredListProps> { }

// StructuredListHead

interface StructuredListHeadInheritedProps extends ReactDivAttr { }

export interface StructuredListHeadProps extends StructuredListHeadInheritedProps { }

export declare class StructuredListHead extends React.Component<StructuredListHeadProps> { }

// StructuredListInput

interface StructuredListInputInheritedProps extends Omit<ReactInputAttr, "value"> {
    value: string | number,
}

export interface StructuredListInputProps extends StructuredListInputInheritedProps {
    defaultChecked?: boolean,
}

export declare class StructuredListInput extends React.Component<StructuredListInputProps> { }

// StructuredListRow

interface StructuredListRowSharedProps {
    head?: boolean,
}
interface StructuredListLabelRowInheritedProps extends Omit<ReactLabelAttr, "presentation">, StructuredListRowSharedProps { }
interface StructuredListDivRowInheritedProps extends ReactDivAttr, StructuredListRowSharedProps { }

export interface StructuredListDivRowProps extends StructuredListDivRowInheritedProps {
    label?: Exclude<boolean, true>,
}
export interface StructuredListLabelRowProps extends StructuredListLabelRowInheritedProps {
    label: true,
}

export type AllStructuredListRowProps = StructuredListLabelRowProps | StructuredListDivRowProps;
export declare class StructuredListRow extends React.Component<AllStructuredListRowProps> { }

// StructuredListBody

interface StructuredListBodyInheritedProps extends ReactDivAttr { }

export interface StructuredListBodyProps extends StructuredListBodyInheritedProps { }

export declare class StructuredListBody extends React.Component<StructuredListBodyProps> { }

// StructuredListCell

interface StructuredListCellInheritedProps extends ReactDivAttr { }

export interface StructuredListCellProps extends StructuredListCellInheritedProps {
    head?: boolean,
    noWrap?: boolean,
}

export declare class StructuredListCell extends React.Component<StructuredListCellProps> { }
