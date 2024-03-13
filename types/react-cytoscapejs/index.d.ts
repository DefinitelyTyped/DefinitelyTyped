import cytoscape = require("cytoscape");
import { Component, CSSProperties } from "react";

interface CytoscapeComponentProps {
    id?: string | undefined;
    cy?: ((cy: cytoscape.Core) => void) | undefined;
    style?: CSSProperties | undefined;
    elements: cytoscape.ElementDefinition[];
    layout?: cytoscape.LayoutOptions | undefined;
    stylesheet?: cytoscape.Stylesheet | cytoscape.Stylesheet[] | string | undefined;
    className?: string | undefined;
    zoom?: number | undefined;
    pan?: cytoscape.Position | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    zoomingEnabled?: boolean | undefined;
    userZoomingEnabled?: boolean | undefined;
    boxSelectionEnabled?: boolean | undefined;
    autoungrabify?: boolean | undefined;
    autounselectify?: boolean | undefined;
    panningEnabled?: boolean | undefined;
    userPanningEnabled?: boolean | undefined;
    autolock?: boolean | undefined;
    get?: ((obj: Record<string, any>, key: string) => any) | undefined;
    toJson?: ((obj: Record<string, any>) => any) | undefined;
    diff?: ((objA: Record<string, any>, objB: Record<string, any>) => boolean) | undefined;
    forEach?: (<T>(list: T[], iterator: (value: T, index: number, array: T[]) => void) => void) | undefined;
    headless?: boolean | undefined;
    styleEnabled?: boolean | undefined;
    hideEdgesOnViewport?: boolean | undefined;
    textureOnViewport?: boolean | undefined;
    motionBlur?: boolean | undefined;
    motionBlurOpacity?: number | undefined;
    wheelSensitivity?: number | undefined;
    pixelRatio?: number | string | undefined;
}

declare class CytoscapeComponent extends Component<CytoscapeComponentProps> {
    static normalizeElements(
        data:
            | {
                nodes: cytoscape.ElementDefinition[];
                edges: cytoscape.ElementDefinition[];
            }
            | cytoscape.ElementDefinition[],
    ): cytoscape.ElementDefinition[];
}

export default CytoscapeComponent;
