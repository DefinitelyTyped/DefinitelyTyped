// Type definitions for react-split-pane v0.1.38
// Project: https://github.com/tomkp/react-split-pane
// Definitions by: Roger Chen <https://github.com/rcchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react"/>

declare namespace ReactSplitPane {
    interface ReactSplitPaneProps {
        allowResize?: boolean;
        className?: string;
        /**
         * Either a number (in pixels) or string (percentage)
         */
        defaultSize?: number | string;
        /**
         * Either a number (in pixels) or string (percentage)
         */
        maxSize?: number | string;
        /**
         * Either a number (in pixels) or string (percentage)
         */
        minSize?: number | string;
        onChange?: Function;
        onDragFinished?: Function;
        onDragStarted?: Function;
        primary?: string;
        /**
         * Either a number (in pixels) or string (percentage)
         */
        size?: number | string;
        split?: string;
    }

    interface ReactSplitPaneClass extends React.ComponentClass<ReactSplitPaneProps> { }
}

declare module "react-split-pane" {
    var split: ReactSplitPane.ReactSplitPaneClass;
    export = split;
}
