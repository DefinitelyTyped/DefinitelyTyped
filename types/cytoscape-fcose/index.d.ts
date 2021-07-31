// Type definitions for cytoscape-fcose 2.1
// Project: https://github.com/iVis-at-Bilkent/cytoscape.js-fcose
// Definitions by: Steve Hankin <https://github.com/stevenhankin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Core, CytoscapeOptions } from "cytoscape";

export = Layout;

declare function Layout(): (cytoscape: (options?: CytoscapeOptions) => Core) => any;
