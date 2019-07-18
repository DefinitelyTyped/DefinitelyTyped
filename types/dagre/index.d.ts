// Type definitions for dagre 0.8
// Project: https://github.com/dagrejs/dagre
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
//                 Lisa Vallfors <https://github.com/Frankrike>
//                 Pete Vilter <https://github.com/vilterp>
//                 David Newell <https://github.com/rustedgrail>
//                 York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as graphlib from '@dagrejs/graphlib';

export as namespace dagre;

export { graphlib };

export interface NodeConfig {
    width?: number;
    height?: number;
}

export interface EdgeConfig {
    minlen?: number;
    weight?: number;
    width?: number;
    height?: number;
    lablepos?: 'l'|'c'|'r';
    labeloffest?: number;
}

export function layout(graph: graphlib.Graph, layout?: graphlib.GraphLabel & NodeConfig & EdgeConfig): void;
