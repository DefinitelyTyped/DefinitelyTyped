// Type definitions for react-d3-graph 2.3
// Project: https://github.com/danielcaldas/react-d3-graph#readme
// Definitions by: Harry Goode <https://github.com/hrngoode>
//                 Adina Todoran <https://github.com/adina-todoran>
//                 Robin Leclerc <https://github.com/BreadAndRoses95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, MouseEvent } from 'react';

export type LableProperty = ((node: GraphNode) => string) | string;

export interface NodeLevelNodeConfiguration {
    color: string;
    fontColor: string;
    opacity: number;
    renderLabel: boolean;
    size: number;
    strokeColor: string;
    strokeWidth: number;
    svg: string;
    symbolType: string;
    viewGenerator: (node: GraphNode) => string;
    labelProperty: LableProperty;
}

export interface GraphLevelNodeConfiguration extends NodeLevelNodeConfiguration {
    fontSize: number;
    fontWeight: string;
    highlightColor: string;
    highlightFontSize: number;
    highlightFontWeight: string;
    highlightStrokeColor: "SAME" | string;
    highlightStrokeWidth: "SAME" | number;
    mouseCursor: string;
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

export interface GraphLevelLinkConfiguration extends LinkLevelLinkConfiguration {
    fontSize: number;
    fontWeight: string;
    highlightColor: string;
    highlightFontSize: number;
    highlightFontWeight: string;
    labelProperty: LableProperty;
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

export interface GraphConfiguration {
    node: Partial<GraphLevelNodeConfiguration>;
    link: Partial<GraphLevelLinkConfiguration>;
    automaticRearrangeAfterDropNode: boolean;
    collapsible: boolean;
    directed: boolean;
    focusZoom: number;
    focusAnimationDuration: number;
    height: number | string;
    nodeHighlightBehavior: boolean;
    linkHighlightBehavior: boolean;
    highlightDegree: number;
    highlightOpacity: number;
    maxZoom: number;
    minZoom: number;
    panAndZoom: boolean;
    staticGraph: boolean;
    staticGraphWithDragAndDrop: boolean;
    width: number | string;
    d3: {
        alphaTarget: number;
        gravity: number;
        linkLength: number;
        linkStrength: number;
        disableLinkForce: boolean;
    };
}

export interface GraphData {
    nodes: GraphNode[];
    links: GraphLink[];
    focusedNodeId?: string;
}

export interface GraphEventCallbacks {
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
export interface GraphProps extends Partial<GraphEventCallbacks> {
    id: string;
    data?: GraphData;
    config?: Partial<GraphConfiguration>;
}

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
