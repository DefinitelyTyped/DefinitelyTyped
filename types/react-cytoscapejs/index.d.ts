// Type definitions for react-cytoscapejs 1.1
// Project: https://github.com/plotly/react-cytoscapejs
// Definitions by:  Emmanuel COunasse <https://github.com/manuc66/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import cytoscape, { Stylesheet, LayoutOptions, ElementDefinition } from 'cytoscape';
import { Component, CSSProperties } from 'react';

export interface CytoscapeComponentProps {
    id?: string;
    cy?: (cy: cytoscape.Core) => void;
    style?: CSSProperties;
    elements: ElementDefinition[];
    layout?: LayoutOptions;
    stylesheet?: Stylesheet | Stylesheet[] | string;
    className?: string;
    zoom?: number;
    pan?: Position;
    minZoom?: number;
    maxZoom?: number;
    zoomingEnabled?: boolean;
    userZoomingEnabled?: boolean;
    boxSelectionEnabled?: boolean;
    autoungrabify?: boolean;
    autounselectify?: boolean;
}

export default class CytoscapeComponent extends Component<CytoscapeComponentProps> {
    static normalizeElements(
        data:
            | {
                  nodes: ElementDefinition[];
                  edges: ElementDefinition[];
              }
            | ElementDefinition[],
    ): ElementDefinition[];
}
