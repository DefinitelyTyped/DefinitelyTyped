import type { EventedType } from 'ngraph.events';
/* tslint:disable:no-unnecessary-generics */

declare function createGraph<NodeData = any, LinkData = any>(options?: {
    multigraph: boolean;
}): createGraph.Graph<NodeData, LinkData>;
export = createGraph;

// eslint-disable-next-line no-redeclare
declare namespace createGraph {
    type NodeId = string | number;
    type LinkId = string;
    interface Link<Data = any> {
        id: LinkId;
        fromId: NodeId;
        toId: NodeId;
        data: Data;
    }

    interface Node<Data = any> {
        id: NodeId;
        links: Link[];
        data: Data;
    }

    interface Graph<NodeData = any, LinkData = any> extends EventedType {
        addNode: (node: NodeId, data?: NodeData) => Node<NodeData>;
        addLink: (from: NodeId, to: NodeId, data?: LinkData) => Link<LinkData>;
        removeLink: (link: Link<LinkData>) => boolean;
        removeNode: (nodeId: NodeId) => boolean;
        getNode: (nodeId: NodeId) => Node<NodeData> | undefined;
        hasNode: (nodeId: NodeId) => Node<NodeData> | undefined;
        getLink: (fromNodeId: NodeId, toNodeId: NodeId) => Link<LinkData> | null;
        hasLink: (fromNodeId: NodeId, toNodeId: NodeId) => Link<LinkData> | null;
        getNodesCount: () => number;
        getLinksCount: () => number;
        getNodeCount: () => number;
        getLinkCount: () => number;
        getLinks: (nodeId: NodeId) => Array<Link<LinkData>> | null;
        /** To stop the iteration return true in the callback */
        forEachNode: (callbackPerNode: (node: Node<NodeData>) => void | undefined | null | boolean) => void;
        forEachLinkedNode: (
            nodeId: NodeId,
            callbackPerNode: (node: Node<NodeData>, link: Link<LinkData>) => void,
            oriented?: boolean,
        ) => void;
        forEachLink: (callbackPerLink: (link: Link<LinkData>) => void) => void;
        beginUpdate: () => void;
        endUpdate: () => void;
        clear: () => void;
    }
}
