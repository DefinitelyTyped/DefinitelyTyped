import * as React from "react";

export interface ActionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=1`. This helps screen readers to announce appropriate heading levels.
     * Changing 'level' will not visually change the style of the content.
     */
    level?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    /**
     * Callback function for when the close button is clicked.
     * On small viewports, this will be triggered by a back button if onBack is not set.
     */
    onClose?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /**
     * Callback function for when the back button is clicked. The back button will not display if this is not set.
     */
    onBack?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /**
     * Callback function for when the expand button is clicked.
     * The expand button will not display if this is not set or on small viewports.
     * Only the expand button will be rendered if onMaximize and onMinimize are set.
     *
     * *Note: If `onBack` is set, the maximize button will not appear and a custom maximize button must be provided
     * as a child inside a `Collapsible Menu View`.*
     */
    onMaximize?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /**
     * Callback function for when the minimize button is clicked.
     * The minimize button will not display if this is not set or on small viewports.
     * Only the expand button will be rendered if both onMaximize and onMinimize are set.
     *
     * *Note: If `onBack` is set, the minimize button will not appear and a custom minimize button must be provided
     * as a child inside a `Collapsible Menu View`.*
     */
    onMinimize?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /**
     * Callback function for when the next button is clicked. The previous-next button group will display if either this or onPrevious is set but the button for the one not set will be disabled.
     */
    onNext?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /**
     * Callback function for when the previous button is clicked. The previous-next button group will display if either this or onNext is set but the button for the one not set will be disabled.
     */
    onPrevious?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /**
     * Text to be displayed as the title in the header bar.
     */
    title?: string | undefined;
}

declare const ActionHeader: React.FC<ActionHeaderProps>;
export default ActionHeader;
