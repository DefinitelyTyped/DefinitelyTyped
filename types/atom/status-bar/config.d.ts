import "../index";

declare module "atom" {
    interface ConfigValues {
        /** Show status bar at the bottom of the workspace. */
        "status-bar.isVisible": boolean;

        /** Fit the status-bar to the window's full-width. */
        "status-bar.fullWidth": boolean;

        /**
         *  Format for the cursor position status bar element, where %L is the line
         *  number and %C is the column number.
         */
        "status-bar.cursorPositionFormat": string;

        /**
         *  Format for the selection count status bar element, where %L is the line
         *  count and %C is the character count.
         */
        "status-bar.selectionCountFormat": string;
    }
}
