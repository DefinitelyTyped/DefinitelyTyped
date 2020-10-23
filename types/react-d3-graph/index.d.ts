// Type definitions for react-d3-graph 2.3
// Project: https://github.com/danielcaldas/react-d3-graph#readme
// Definitions by: Harry Goode <https://github.com/hrngoode>
//                 Adina Todoran <https://github.com/adina-todoran>
//                 Robin Leclerc <https://github.com/BreadAndRoses95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, MouseEvent } from 'react';

export type NodeLabelProperty<N extends GraphNode> = ((node: N) => string) | keyof N;
export type LinkLabelProperty<L extends GraphLink> = ((node: L) => string) | keyof L;

export type NodeWithExtraParameters = GraphNode & { [key: string]: string };

export interface NodeLevelNodeConfiguration {
    color: string;
    fontColor: string;
    opacity: number;
    renderLabel: boolean;
    size: number | { width: number; height: number; };
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
    size: number | { width: number; height: number; };
    strokeColor: string;
    strokeWidth: number;
    svg: string;
    symbolType: string;
    fontSize: number;
    fontWeight: string;
    highlightColor: string;
    highlightFontSize: number;
    highlightFontWeight: string;
    highlightStrokeColor: 'SAME' | string;
    highlightStrokeWidth: 'SAME' | number;
    mouseCursor: string;
    viewGenerator: (node: N) => any;
    labelProperty: NodeLabelProperty<N>;
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
    panAndZoom: boolean;
    staticGraph: boolean;
    staticGraphWithDragAndDrop: boolean;
    width: number;
    d3: {
        alphaTarget: number;
        gravity: number;
        linkLength: number;
        linkStrength: number;
        disableLinkForce: boolean;
    };
}

export interface GraphData<N extends GraphNode, L extends GraphLink> {
    nodes: N[];
    links: L[];
    focusedNodeId?: string;
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
}

export interface GraphProps<N extends GraphNode, L extends GraphLink> extends Partial<GraphEventCallbacks> {
    id: string;
    data?: GraphData<N, L>;
    config?: Partial<GraphConfiguration<N, L>>;
}

export class Graph<N extends GraphNode, L extends GraphLink> extends Component<GraphProps<N, L>, any> {
    constructor(props: GraphProps<N, L>, ...args: any[]);

    UNSAFE_componentWillReceiveProps(nextProps: any): any;

    componentDidMount(): void;

    componentDidUpdate(): void;

    componentWillUnmount(): void;

    render(): any;
}

export class Link extends Component<any, any> {
    constructor(...args: any[]);

    render(): any;
}

export class Node extends Component<any, any> {
    constructor(...args: any[]);

    render(): any;
}
