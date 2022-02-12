// eslint-disable-next-line import/no-unresolved
import * as ngraph from '../ngraph.graph';

export interface Generators {
    ladder(n: number): ngraph.Graph;
    complete(n: number): ngraph.Graph;
    completeBipartite(n: number, m: number): ngraph.Graph;
    balancedBinTree(n: number): ngraph.Graph;
    path(n: number): ngraph.Graph;
    circularLadder(n: number): ngraph.Graph;
    grid(n: number, m: number): ngraph.Graph;
    grid3(n: number, m: number, z: number): ngraph.Graph;
    noLinks(n: number): ngraph.Graph;
    wattsStrogatz(n: number, k: number, p: any, seed: number): ngraph.Graph;
    cliqueCircle(cliqueCount: number, cliqueSize: number): ngraph.Graph;
}

export function factory(createGraph: any): Generators;

export const ladder: Generators[ 'ladder' ];
export const complete: Generators[ 'complete' ];
export const completeBipartite: Generators[ 'completeBipartite' ];
export const balancedBinTree: Generators[ 'balancedBinTree' ];
export const path: Generators[ 'path' ];
export const circularLadder: Generators[ 'circularLadder' ];
export const grid: Generators[ 'grid' ];
export const grid3: Generators[ 'grid3' ];
export const noLinks: Generators[ 'noLinks' ];
export const wattsStrogatz: Generators[ 'wattsStrogatz' ];
export const cliqueCircle: Generators[ 'cliqueCircle' ];
