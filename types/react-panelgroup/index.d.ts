// Type definitions for react-panelgroup 1.0
// Project: https://github.com/DanFessler/react-panelgroup, http://www.danfessler.com
// Definitions by: Quentin Golsteyn <https://github.com/qgolsteyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from "react";

/**
 * Interface used to define a number of options for a panel.
 */
export interface PanelWidth {
    size?: number | undefined;
    minSize?: number | undefined;
    resize?: "fixed" | "dynamic" | "stretch" | undefined;
    snap?: number[] | undefined;
}

export interface PropTypes {
    children?: React.ReactNode;
    spacing?: number | undefined;
    borderColor?: string | undefined;
    panelColor?: string | undefined;
    direction?: "row" | "column" | undefined;
    panelWidths?: Array<PanelWidth | null> | undefined;
    onUpdate?: ((data: PanelWidth) => void) | undefined;
}

/**
 * React component that allows for the creation of resizable panels.
 */
export default class PanelGroup extends React.Component<PropTypes> {}
