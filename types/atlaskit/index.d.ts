// Type definitions for "@atlaskit/dynamic-table 6.1
// Project: https://bitbucket.org/atlassian/atlaskit-mk-2/
// Definitions by: Jimmy Luong <https://github.com/dijimsta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
declare module "@atlaskit/dynamic-table" {
    import { Component, ReactNode, ReactElement } from "react";

    type RowCell = {
        readonly key?: string | number;
        readonly content: ReactNode;
    };

    type Row = {
        readonly cells: ReadonlyArray<RowCell>;
    };

    type SortOrder = "ASC" | "DESC";

    type SpinnerSize = "small" | "medium" | "large" | "xlarge";

    type LoadingSpinnerSize = "small" | "large";

    type HeadCell = RowCell & {
        readonly isSortable?: boolean;
        readonly width?: number;
        readonly shouldTruncate?: boolean;
    };

    type Head = {
        readonly cells: ReadonlyArray<HeadCell>;
    };

    type SetPageEventHandler = (page: number) => void;

    type SortEventPayload = {
        readonly key: string | number;
        readonly item: RowCell;
        readonly sortOrder: SortOrder;
    };

    type SortEventHandler = (payload: SortEventPayload) => void;

    type DynamicTableStatelessProps = {
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

    class DynamicTableStateless extends Component<DynamicTableStatelessProps> {}

    type DynamicTableProps = DynamicTableStatelessProps & {
        readonly defaultPage: number;
        readonly defaultSortKey?: string;
        readonly defaultSortOrder?: SortOrder;
    };

    type DynamicTableState = {
        readonly page: number;
        readonly sortKey?: string;
        readonly sortOrder?: SortOrder;
    };

    export default class extends Component<
        DynamicTableProps,
        DynamicTableState
    > {}
}

// Type definitions for "@atlaskit/button 6.2
// Project: https://bitbucket.org/atlassian/atlaskit-mk-2/
// Definitions by: Jimmy Luong <https://github.com/dijimsta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
declare module "@atlaskit/button" {
    import { Component, ComponentClass, ReactNode, ReactElement } from "react";

    type ButtonAppearances =
        | "default"
        | "danger"
        | "link"
        | "primary"
        | "subtle"
        | "subtle-link"
        | "warning"
        | "help";

    type ButtonProps = {
        /** The base styling to apply to the button. */
        appearance?: ButtonAppearances;
        /** Pass aria-controls to underlying html button. */
        ariaControls?: string;
        /** Pass aria-expanded to underlying html button. */
        ariaExpanded?: boolean;
        /** Pass aria-haspopup to underlying html button. */
        ariaHaspopup?: boolean;
        /** This button's child nodes. */
        children?: ReactNode;
        /** Add a classname to the button. */
        className?: string;
        /** A custom component to use instead of the default button. */
        component?: ComponentClass;
        /** Name property of a linked form that the button submits when clicked. */
        form?: string;
        /** Provides a url for buttons being used as a link. */
        href?: string;
        /** Places an icon within the button, after the button's text. */
        iconAfter?: ReactElement<any>;
        /** Places an icon within the button, before the button's text. */
        iconBefore?: ReactElement<any>;
        /** Pass a reference on to the styled component */
        innerRef?: any;
        /** Provide a unique id to the button. */
        id?: string;
        /** Set if the button is disabled. */
        isDisabled?: boolean;
        /** Change the style to indicate the button is selected. */
        isSelected?: boolean;
        /** Handler to be called on click. */
        onClick?: () => void;
        /** Set the amount of padding in the button. */
        spacing?: "compact" | "default" | "none";
        /** Assign specific tabIndex order to the underlying html button. */
        tabIndex?: number;
        /** Pass target down to a link within the button component, if a href is provided. */
        target?: string;
        /** Set whether it is a button or a form submission. */
        type?: "button" | "submit";
        /** Option to fit button width to its parent width */
        shouldFitContainer?: boolean;
    };

    export default class extends Component<ButtonProps> {}
}
