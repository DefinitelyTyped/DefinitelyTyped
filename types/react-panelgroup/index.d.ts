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
