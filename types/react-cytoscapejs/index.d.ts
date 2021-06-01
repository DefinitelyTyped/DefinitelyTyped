// Type definitions for react-cytoscapejs 1.2
// Project: https://github.com/plotly/react-cytoscapejs
// Definitions by:  Emmanuel Counasse <https://github.com/manuc66/>
//                  newraina <https://github.com/newraina/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import cytoscape = require('cytoscape');
import { Component, CSSProperties } from 'react';

interface CytoscapeComponentProps {
    id?: string;
    cy?: (cy: cytoscape.Core) => void;
    style?: CSSProperties;
    elements: cytoscape.ElementDefinition[];
    layout?: cytoscape.LayoutOptions;
    stylesheet?: cytoscape.Stylesheet | cytoscape.Stylesheet[] | string;
    className?: string;
    zoom?: number;
    pan?: cytoscape.Position;
    minZoom?: number;
    maxZoom?: number;
    zoomingEnabled?: boolean;
    userZoomingEnabled?: boolean;
    boxSelectionEnabled?: boolean;
    autoungrabify?: boolean;
    autounselectify?: boolean;
    panningEnabled?: boolean;
    userPanningEnabled?: boolean;
    autolock?: boolean;
    get?: (obj: Record<string, any>, key: string) => any;
    toJson?: (obj: Record<string, any>) => any;
    diff?: (objA: Record<string, any>, objB: Record<string, any>) => boolean;
    forEach?: <T>(list: T[], iterator: (value: T, index: number, array: T[]) => void) => void;
    headless?: boolean;
    styleEnabled?: boolean;
    hideEdgesOnViewport?: boolean;
    textureOnViewport?: boolean;
    motionBlur?: boolean;
    motionBlurOpacity?: number;
    wheelSensitivity?: number;
    pixelRatio?: number | string;
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
