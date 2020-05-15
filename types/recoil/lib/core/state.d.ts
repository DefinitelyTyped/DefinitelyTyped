import { Loadable } from './loadable';

export type NodeKey = string;
export type AtomValues = Map<NodeKey, Loadable<any>>;
export type ComponentCallback = (state: TreeState) => void;
export type TreeState = Readonly<{
    // Information about the TreeState itself:
    isSnapshot: boolean;
    transactionMetadata: object;
    dirtyAtoms: Set<NodeKey>;

    // ATOMS
    atomValues: AtomValues;
    nonvalidatedAtoms: Map<NodeKey, unknown>;

    // NODE GRAPH -- will soon move to StoreState
    // Upstream Node dependencies
    nodeDeps: Map<NodeKey, Set<NodeKey>>;

    // Downstream Node subscriptions
    nodeToNodeSubscriptions: Map<NodeKey, Set<NodeKey>>;
    nodeToComponentSubscriptions: Map<NodeKey, Map<number, [string, ComponentCallback]>>;
}>;
