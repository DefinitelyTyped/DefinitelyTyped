// Type definitions for react-split-pane v0.1.63
// Project: https://github.com/tomkp/react-split-pane
// Definitions by: Roger Chen <https://github.com/rcchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
        onResizerClick?: Function;
        onResizerDoubleClick?: Function;
        
        /**
         * Either a number (in pixels) or string (percentage)
         */
        size?: number | string;
        split?: string;
        /* Styling to be applied to both panes */
        paneStyle?: React.CSSProperties;
        /* Styling to be applied to the first pane, with precedence over paneStyle */
        pane1Style?: React.CSSProperties;
        /* Styling to be applied to the second pane, with precedence over paneStyle */
        pane2Style?: React.CSSProperties;
        /* Styling to be applied to the resizer bar */
        resizerStyle?: React.CSSProperties;
    }

    interface ReactSplitPaneClass extends React.ComponentClass<ReactSplitPaneProps> { }
}

declare module "react-split-pane" {
    var split: ReactSplitPane.ReactSplitPaneClass;
    export = split;
}
