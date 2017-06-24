// Type definitions for angular-gridster (gridster module) 0.13
// Project: https://github.com/ManifestWebDesign/angular-gridster
// Definitions by: Joao Monteiro <https://github.com/jpmnteiro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from "angular";

export default "gridster";

declare module "angular" {
    namespace gridster {
        interface GridsterConfig {
            // number of columns in the grid
            columns?: number;
            // whether to push other items out of the way

            // whether to push other items out of the way
            pushing?: boolean;

            // whether to automatically float items up so they stack
            floating?: boolean;

            // whether or not to have items switch places instead of push down if they are the same size
            swapping?: boolean;

            // width of the grid. "auto" will expand the grid to its parent container
            width?: string;

            // width of grid columns. "auto" will divide the width of the grid evenly among the columns
            colWidth?: string;

            // height of grid rows. 'match' will make it the same as the column width, a numeric value will be interpreted as pixels,
            // '/2' is half the column width, '*5' is five times the column width, etc.
            rowHeight?: string;

            // margins in between grid items
            margins?: number[];

            // whether to set the outer margin
            outerMargin?: boolean;

            // toggle mobile view
            isMobile?: boolean;

            // width threshold to toggle mobile mode
            mobileBreakPoint?: number;

            // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
            mobileModeEnabled?: boolean;

            // minimum amount of columns the grid can scale down to
            minColumns?: number;

            // minimum amount of rows to show if the grid is empty
            minRows?: number;

            // maximum amount of rows in the grid
            maxRows?: number;

            // default width of an item in columns
            defaultSizeX?: number;

            // default height of an item in rows
            defaultSizeY?: number;

            // minimum column width of an item
            minSizeX?: number;

            // maximum column width of an item
            maxSizeX?: number;

            // minumum row height of an item
            minSizeY?: number;

            // maximum row height of an item
            maxSizeY?: number;

            saveGridItemCalculatedHeightInMobile?: boolean;
            // grid item height in mobile display. true- to use the calculated height by sizeY given

            // options to pass to resizable handler
            resizable?: {
                // whether the items are resizable
                enabled?: boolean;

                // location of the resize handles
                // e.g // ['s', 'e', 'n', 'w', 'se', 'ne', 'sw', 'nw']
                handles?: string[];

                // optional callback fired when drag is started
                start?(event: angular.IAngularEvent, $element: angular.IAugmentedJQuery, options: any): void;

                // optional callback fired when item is resized
                resize?(event: angular.IAngularEvent, $element: angular.IAugmentedJQuery, options: any): void;

                // optional callback fired when item is finished dragging
                stop?(event: angular.IAngularEvent, $element: angular.IAugmentedJQuery, options: any): void;
            };

            // options to pass to draggable handler
            draggable?: {
                // whether the items are resizable
                enabled?: boolean;

                // Distance in pixels from the edge of the viewport after which the viewport should scroll, relative to pointer
                scrollSensitivity?: number;

                // Speed at which the window should scroll once the mouse pointer gets within scrollSensitivity distance
                scrollSpeed?: number;

                // optional selector for drag handle
                handle?: string;

                // optional callback fired when drag is started
                start?(event: angular.IAngularEvent, $element: angular.IAugmentedJQuery, options: any): void;

                // optional callback fired when item is moved,
                drag?(event: angular.IAngularEvent, $element: angular.IAugmentedJQuery, options: any): void;

                // optional callback fired when item is finished dragging
                stop?(event: angular.IAngularEvent, $element: angular.IAugmentedJQuery, options: any): void;
            };
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
