// Type definitions for react-cytoscapejs 1.1
// Project: https://github.com/plotly/react-cytoscapejs
// Definitions by:  Emmanuel COunasse <https://github.com/manuc66/>
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
