import * as angular from "angular";

declare const exportedString: "gridster";
export default exportedString;

declare module "angular" {
    namespace gridster {
        interface GridsterConfig {
            // number of columns in the grid
            columns?: number | undefined;
            // whether to push other items out of the way

            // whether to push other items out of the way
            pushing?: boolean | undefined;

            // whether to automatically float items up so they stack
            floating?: boolean | undefined;

            // whether or not to have items switch places instead of push down if they are the same size
            swapping?: boolean | undefined;

            // width of the grid. "auto" will expand the grid to its parent container
            width?: string | undefined;

            // width of grid columns. "auto" will divide the width of the grid evenly among the columns
            colWidth?: string | undefined;

            // height of grid rows. 'match' will make it the same as the column width, a numeric value will be interpreted as pixels,
            // '/2' is half the column width, '*5' is five times the column width, etc.
            rowHeight?: string | undefined;

            // margins in between grid items
            margins?: number[] | undefined;

            // whether to set the outer margin
            outerMargin?: boolean | undefined;

            // toggle mobile view
            isMobile?: boolean | undefined;

            // width threshold to toggle mobile mode
            mobileBreakPoint?: number | undefined;

            // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
            mobileModeEnabled?: boolean | undefined;

            // minimum amount of columns the grid can scale down to
            minColumns?: number | undefined;

            // minimum amount of rows to show if the grid is empty
            minRows?: number | undefined;

            // maximum amount of rows in the grid
            maxRows?: number | undefined;

            // default width of an item in columns
            defaultSizeX?: number | undefined;

            // default height of an item in rows
            defaultSizeY?: number | undefined;

            // minimum column width of an item
            minSizeX?: number | undefined;

            // maximum column width of an item
            maxSizeX?: number | undefined;

            // minumum row height of an item
            minSizeY?: number | undefined;

            // maximum row height of an item
            maxSizeY?: number | undefined;

            saveGridItemCalculatedHeightInMobile?: boolean | undefined;
            // grid item height in mobile display. true- to use the calculated height by sizeY given

            // options to pass to resizable handler
            resizable?: {
                // whether the items are resizable
                enabled?: boolean | undefined;

                // location of the resize handles
                // e.g // ['s', 'e', 'n', 'w', 'se', 'ne', 'sw', 'nw']
                handles?: string[] | undefined;

                // optional callback fired when drag is started
                start?(event: IAngularEvent, $element: IAugmentedJQuery, options: any): void;

                // optional callback fired when item is resized
                resize?(event: IAngularEvent, $element: IAugmentedJQuery, options: any): void;

                // optional callback fired when item is finished dragging
                stop?(event: IAngularEvent, $element: IAugmentedJQuery, options: any): void;
            } | undefined;

            // options to pass to draggable handler
            draggable?: {
                // whether the items are resizable
                enabled?: boolean | undefined;

                // Distance in pixels from the edge of the viewport after which the viewport should scroll, relative to pointer
                scrollSensitivity?: number | undefined;

                // Speed at which the window should scroll once the mouse pointer gets within scrollSensitivity distance
                scrollSpeed?: number | undefined;

                // optional selector for drag handle
                handle?: string | undefined;

                // optional callback fired when drag is started
                start?(event: IAngularEvent, $element: IAugmentedJQuery, options: any): void;

                // optional callback fired when item is moved,
                drag?(event: IAngularEvent, $element: IAugmentedJQuery, options: any): void;

                // optional callback fired when item is finished dragging
                stop?(event: IAngularEvent, $element: IAugmentedJQuery, options: any): void;
            } | undefined;
        }

        interface StandardGridsterItem {
            // width of the item expressed in terms of number of columns it will occupy
            sizeX: number;

            // height of the item expressed in terms of number of rows it will occupy
            sizeY: number;

            // starting row where the item will be placed
            row: number;

            // starting column where the item will be placed
            col: number;
        }
    }
}
