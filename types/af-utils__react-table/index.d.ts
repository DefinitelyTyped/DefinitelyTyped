import * as Headless from "@af-utils/react-virtual-headless";
import * as React from "react";

export type RowProps = Record<string, unknown> & {
    ref: React.Ref<HTMLElement>;
};

export interface ComponentMap {
    // For the basic table elements, you can use a string for dom elements
    // Otherwise, a function that accepts a props object for the specific table element and returns a react element
    // When using a function, you must render children with no changes, as the library renders the children specifically.

    // Outer table element
    Table?:
        | string
        | ((
            props: React.HTMLAttributes<HTMLTableElement>,
        ) => React.ReactElement<React.HTMLAttributes<HTMLTableElement>>);

    // Table body section
    Tbody?:
        | string
        | ((
            props: React.HTMLAttributes<HTMLTableSectionElement>,
        ) => React.ReactElement<React.HTMLAttributes<HTMLTableSectionElement>>);

    // Table header section
    Thead?:
        | string
        | ((
            props: React.HTMLAttributes<HTMLTableSectionElement>,
        ) => React.ReactElement<React.HTMLAttributes<HTMLTableSectionElement>>);

    // Table footer section
    Tfoot?:
        | string
        | ((
            props: React.HTMLAttributes<HTMLTableSectionElement>,
        ) => React.ReactElement<React.HTMLAttributes<HTMLTableSectionElement>>);

    // Table row element
    Tr?:
        | string
        | ((
            props: React.HTMLAttributes<HTMLTableRowElement>,
        ) => React.ReactElement<React.HTMLAttributes<HTMLTableRowElement>>);

    // Table header element
    Th?:
        | string
        | ((
            props: React.HTMLAttributes<HTMLTableCellElement>,
        ) => React.ReactElement<React.HTMLAttributes<HTMLTableCellElement>>);

    // Table data element
    Td?:
        | string
        | ((
            props: React.HTMLAttributes<HTMLTableCellElement>,
        ) => React.ReactElement<React.HTMLAttributes<HTMLTableCellElement>>);

    // Row rendering function
    Row?: ({ i, i2, model, data }: {
        i: number;
        i2: number;
        model: Headless.Model;
        data: RowProps;
    }) => React.ReactNode;

    // Cell is called by Row, since the user can override Row, they can choose to pass different props to Cell.
    // I don't think it's possible to tighten this type.
    Cell?: (props: Record<string, unknown>) => React.ReactNode;
    // Same as above.
    CellForEmptyRow?: (props: Record<string, unknown>) => React.ReactNode;

    HeaderCells?: ({ columns, components }: {
        columns: ColumnModel[];
        components: ComponentMap;
    }) => React.ReactNode;
    // Same as above.
    HeaderCell?: (props: Record<string, unknown>) => React.ReactNode;

    FooterCells?: ({ columns, components }: {
        columns: ColumnModel[];
        components: ComponentMap;
    }) => React.ReactNode;
    FooterCell?: (props: Record<string, unknown>) => React.ReactNode;

    // "/* To prevent double memoization in case of HOC usage */"
    OriginalRow?: ({ i, i2, model, data }: {
        i: number;
        i2: number;
        model: Headless.Model;
        data: RowProps;
    }) => React.ReactNode;
}

export const DefaultTableComponents: ComponentMap;

export interface TableColumnProps {
    key: string;
    // Note, align is not explicitly checked in the code.
    align?: React.CSSProperties["textAlign"];
    label?: string;
    Cell?: React.ReactNode;
    render?: (cellData: any, row: any) => React.ReactNode;
    // Note, format overrides render if both are present.
    format?: (cellData: any) => React.ReactNode;
    background?: string;
    border?: string;
    width?: number;
    minWidth?: number;
}

/**
 * ColumnModel is a class for rendering column information.
 * Keys is declared as a static property of the class, which is used internally to map column props to instance variables.
 * TableColumnProps validates the types of these keys, but I thought the static property declaration should be included since it is exported.
 */
export class ColumnModel {
    static readonly KEYS: [
        "key",
        "align",
        "label",
        "render",
        "format",
        "Cell",
        "background",
        "border",
        "width",
        "minWidth",
    ];

    // Don't think it's possible to not redefine these.
    key: string;
    align?: React.CSSProperties["textAlign"];
    label?: string;
    Cell?: React.ReactNode;
    render?: (cellData: any, row: any) => React.ReactNode;
    format?: (cellData: any) => React.ReactNode;
    background?: string;
    border?: string;
    width?: number;
    minWidth?: number;
}

// Since components can be overridden, I don't think it's possible to provide a more specific type than HTMLElement.
// The user could provide any DOM element (with varying results on their end lol) as the base table element.
export interface TableProps extends React.HTMLAttributes<HTMLElement> {
    model: Headless.Model;
    columns: ColumnModel[];

    // getRowData is hard to confine to a single set of types
    // since you can overwrite the default Row component, you could then call getRowData with whatever you want.
    // The default Row component calls getRowData with the index of the row.
    getRowData: (...args: any[]) => any;

    getKey?: (index: number, rowProps?: RowProps) => any;

    // getRowProps by default provides a ref to the row.  You shouldn't need to use this since you can override the Row component.
    getRowProps?: (model: Headless.Model, index: number, rowData?: any) => RowProps;

    components?: ComponentMap;
    headless?: boolean;
    footer?: boolean;
    className?: string;

    // Defaults to base TableColumn, can be extended
    ColumnModel?: typeof ColumnModel;

    tabIndex?: number;
}

export const Table: React.FC<TableProps>;

export * from "@af-utils/react-virtual-headless";

export {};
