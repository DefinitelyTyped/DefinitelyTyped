// Type definitions for "@atlaskit/dynamic-table 6.1.4
// Project: https://bitbucket.org/atlassian/atlaskit-mk-2/
// Definitions by: Jimmy Luong <https://github.com/dijimsta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
declare module "@atlaskit/dynamic-table" {
    import { Component, ReactNode, ReactElement } from "react";

    export type RowCell = {
        readonly key?: string | number;
        readonly content: ReactNode;
    };

    export type Row = {
        readonly cells: ReadonlyArray<RowCell>;
    };

    export type SortOrder = "ASC" | "DESC";

    export type SpinnerSize = "small" | "medium" | "large" | "xlarge";

    export type LoadingSpinnerSize = "small" | "large";

    export type HeadCell = RowCell & {
        readonly isSortable?: boolean;
        readonly width?: number;
        readonly shouldTruncate?: boolean;
    };

    export type Head = {
        readonly cells: ReadonlyArray<HeadCell>;
    };

    export type SetPageEventHandler = (page: number) => void;

    export type SortEventPayload = {
        readonly key: string | number;
        readonly item: RowCell;
        readonly sortOrder: SortOrder;
    };

    export type SortEventHandler = (payload: SortEventPayload) => void;

    export type DynamicTableStatelessProps = {
        readonly caption?: ReactNode;
        readonly head?: Head;
        readonly rows?: ReadonlyArray<Row>;
        readonly emptyView?: ReactElement<any>;
        readonly loadingSpinnerSize?: LoadingSpinnerSize;
        readonly isLoading?: boolean;
        readonly isFixedSize?: boolean;
        readonly rowsPerPage?: number;
        readonly onSetPage: SetPageEventHandler;
        readonly onSort: SortEventHandler;
        readonly page?: number;
        readonly sortKey?: string;
        readonly sortOrder?: SortOrder;
    };

    export class DynamicTableStateless extends Component<
        DynamicTableStatelessProps
    > {}

    export type DynamicTableProps = DynamicTableStatelessProps & {
        readonly defaultPage: number;
        readonly defaultSortKey?: string;
        readonly defaultSortOrder?: SortOrder;
    };

    export type DynamicTableState = {
        readonly page: number;
        readonly sortKey?: string;
        readonly sortOrder?: SortOrder;
    };

    class DynamicTable extends Component<
        DynamicTableProps,
        DynamicTableState
    > {}

    export default DynamicTable;
}
