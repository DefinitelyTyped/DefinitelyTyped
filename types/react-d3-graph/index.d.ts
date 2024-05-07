import { Component, MouseEvent } from "react";

export type NodeLabelProperty<N extends GraphNode> = ((node: N) => string) | keyof N;
export type LinkLabelProperty<L extends GraphLink> = ((node: L) => string) | keyof L;

export type NodeWithExtraParameters = GraphNode & { [key: string]: string };

export type NodeSize =
    | number
    | {
        width: number;
        height: number;
    };

export interface NodeLevelNodeConfiguration {
    color: string;
    fontColor: string;
    opacity: number;
    renderLabel: boolean;
    size: NodeSize;
    strokeColor: string;
    strokeWidth: number;
    svg: string;
    symbolType: string;
    viewGenerator: (node: NodeWithExtraParameters) => any;
    labelProperty: NodeLabelProperty<NodeWithExtraParameters>;
}

export interface GraphLevelNodeConfiguration<N extends GraphNode> {
    color: string;
    fontColor: string;
    opacity: number;
    renderLabel: boolean;
    size: NodeSize;
    strokeColor: string;
    strokeWidth: number;
    svg: string;
    symbolType: string;
    fontSize: number;
    fontWeight: string;
    highlightColor: string;
    highlightFontSize: number;
    highlightFontWeight: string;
    highlightStrokeColor: "SAME" | string;
    highlightStrokeWidth: "SAME" | number;
    mouseCursor: string;
    viewGenerator: (node: N) => any;
    labelProperty: NodeLabelProperty<N>;
    labelPosition: "left" | "right" | "top" | "bottom" | "center";
}

export interface GraphNode extends Partial<NodeLevelNodeConfiguration> {
    id: string;
}

export interface LinkLevelLinkConfiguration {
    color: string;
    fontColor: string;
    opacity: number;
    strokeWidth: number;
    markerWidth: number;
}

export interface GraphLevelLinkConfiguration<L extends GraphLink> extends LinkLevelLinkConfiguration {
    fontSize: number;
    fontWeight: string;
    highlightColor: string;
    highlightFontSize: number;
    highlightFontWeight: string;
    labelProperty: LinkLabelProperty<L>;
    renderLabel: boolean;
    semanticStrokeWidth: boolean;
    markerHeight: number;
    type: string;
    mouseCursor: string;
}

export interface GraphLink extends Partial<LinkLevelLinkConfiguration> {
    source: string;
    target: string;
}

export interface GraphConfiguration<N extends GraphNode, L extends GraphLink> {
    node: Partial<GraphLevelNodeConfiguration<N>>;
    link: Partial<GraphLevelLinkConfiguration<L>>;
    automaticRearrangeAfterDropNode: boolean;
    collapsible: boolean;
    directed: boolean;
    focusZoom: number;
    focusAnimationDuration: number;
    height: number;
    nodeHighlightBehavior: boolean;
    linkHighlightBehavior: boolean;
    highlightDegree: number;
    highlightOpacity: number;
    maxZoom: number;
    minZoom: number;
    initialZoom: number | null;
    panAndZoom: boolean;
    staticGraph: boolean;
    staticGraphWithDragAndDrop: boolean;
    width: number;
    d3: {
        /**
         * @see https://github.com/d3/d3-force#simulation_alphaTarget
         * @default 0.05
         */
        alphaTarget?: number | undefined;
        /**
         * this will define how close nodes are to each other.
         * - If value is positive, nodes will attract each other.
         * - If value is negative, nodes will repel each other. Most of the times this is what we want, so nodes don"t overlap.
         *
         * @see https://github.com/d3/d3-force#forces
         * @default -100
         */
        gravity?: number | undefined;
        /**
         * the length of each link from the center of the nodes it joins.
         *
         * @default 100
         */
        linkLength?: number | undefined;
        /**
         * @see https://github.com/d3/d3-force#link_strength
         * @default 1
         */
        linkStrength?: number | undefined;
        /**
         * Completely disables d3 force link and simulation to re-trigger so that one can obtain precise render of node positions
         *
         * @see https://github.com/danielcaldas/react-d3-graph/pull/278
         * @default false
         */
        disableLinkForce?: boolean | undefined;
    };
}

export interface GraphData<N extends GraphNode, L extends GraphLink> {
    nodes: N[];
    links: L[];
    focusedNodeId?: string | undefined;
}

export interface GraphEventCallbacks {
    onClickGraph: (event: MouseEvent) => void;
    onClickNode: (nodeId: string) => void;
    onDoubleClickNode: (nodeId: string) => void;
    onRightClickNode: (event: MouseEvent, nodeId: string) => void;
    onMouseOverNode: (nodeId: string) => void;
    onMouseOutNode: (nodeId: string) => void;
    onClickLink: (source: string, target: string) => void;
    onRightClickLink: (event: MouseEvent, source: string, target: string) => void;
    onMouseOverLink: (source: string, target: string) => void;
    onMouseOutLink: (source: string, target: string) => void;
    onNodePositionChange: (nodeId: string, x: number, y: number) => void;
    onZoomChange: (previousZoom: number, newZoom: number) => void;
}

export interface GraphProps<N extends GraphNode, L extends GraphLink> extends Partial<GraphEventCallbacks> {
    id: string;
    data?: GraphData<N, L> | undefined;
    config?: Partial<GraphConfiguration<N, L>> | undefined;
}

export class Graph<N extends GraphNode, L extends GraphLink> extends Component<GraphProps<N, L>, any> {
    constructor(props: GraphProps<N, L>, ...args: any[]);

    UNSAFE_componentWillReceiveProps(nextProps: any): any;

    componentDidMount(): void;

    componentDidUpdate(): void;

    componentWillUnmount(): void;

    render(): any;
    /**
     * Sets nodes and links highlighted value.
     *
     * @param id - the id of the node to highlight.
     * @param value - the highlight value to be set (true or false).
     */
    _setNodeHighlightedValue: (id: string, value: boolean) => void;
}

export class Link extends Component<any, any> {
    constructor(...args: any[]);

    render(): any;
}

export class Node extends Component<any, any> {
    constructor(...args: any[]);

    render(): any;
}
