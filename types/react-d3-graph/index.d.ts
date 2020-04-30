// Type definitions for react-d3-graph 2.3
// Project: https://github.com/danielcaldas/react-d3-graph#readme
// Definitions by: Harry Goode <https://github.com/hrngoode>
//                 Adina Todoran <https://github.com/adina-todoran>
//                 Robin Leclerc <https://github.com/BreadAndRoses95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, MouseEvent } from 'react';

export type NodeLevelNodeConfiguration = {
    color: string;
    fontColor: string;
    opacity: number;
    renderLabel: boolean;
    size: number;
    strokeColor: string;
    strokeWidth: number;
    svg: string;
    symbolType: string;
    viewGenerator: (node: GraphNode) => string | keyof GraphNode;
    labelProperty: (node: GraphNode) => string | keyof GraphNode;
};
export type GraphLevelNodeConfiguration = {
    fontSize: number;
    fontWeight: string;
    highlightColor: string;
    highlightFontSize: number;
    highlightFontWeight: string;
    highlightStrokeColor: string;
    highlightStrokeWidth: number;
} & NodeLevelNodeConfiguration;

export type GraphNode = {
    id: string;
    name: string;
} & Partial<NodeLevelNodeConfiguration>;

export type LinkLevelLinkConfiguration = {
    color: string;
    fontColor: string;
    opacity: number;
    strokeWidth: number;
    markerWidth: number;
};

export type GraphLevelLinkConfiguration = {
    fontSize: number;
    fontWeight: string;
    highlightColor: string;
    highlightFontSize: number;
    highlightFontWeight: string;
    labelProperty: keyof GraphLink;
    mouseCursor: string;
    renderLabel: boolean;
    semanticStrokeWidth: boolean;
    markerHeight: number;
    type: string;
} & LinkLevelLinkConfiguration;

export type GraphLink = {
    id: string;
    source: string;
    target: string;
} & Partial<LinkLevelLinkConfiguration>;

export type GraphConfiguration = {
    node: GraphLevelNodeConfiguration;
    link: GraphLevelLinkConfiguration;
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
        disableLinkForce: number;
    };
};

export type GraphData = {
    nodes: GraphNode[];
    links: GraphLink[];
    focusedNodeId?: string;
};

export type GraphEventCallbacks = {
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
};
export type GraphProps = {
    id: string;
    data?: GraphData;
    config?: GraphConfiguration;
} & Partial<GraphEventCallbacks>;

export class Graph extends Component<GraphProps, any> {
    constructor(props: any, ...args: any[]);

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
