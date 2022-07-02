import * as React from 'react';
import { Graph, Link, Node } from 'react-d3-graph';

const nodes = [
    { id: 'node1', labelProperty: 'id' },
    { id: 'node2', name: 'node2Name' },
    {
        id: 'node3',
        size: {
            width: 100,
            height: 200,
        },
    },
];

type INode = typeof nodes[number];

const links = [{ source: 'node1', target: 'node2' }];
type ILink = typeof links[number];

export class Example extends React.Component {
    ref: React.MutableRefObject<Graph<INode, ILink> | null> = React.createRef();

    render(): React.ReactElement {
        return (
            <div>
                <Graph
                    ref={this.ref}
                    id="test"
                    data={{
                        nodes,
                        links,
                        focusedNodeId: 'node1',
                    }}
                    config={{
                        node: {
                            color: 'green',
                            fontColor: 'blue',
                            opacity: 0.5,
                            renderLabel: true,
                            size: 100,
                            strokeColor: 'white',
                            strokeWidth: 100,
                            svg: '<line />',
                            symbolType: 'circle',
                            viewGenerator: node => <div>{node.name}</div>,
                            labelProperty: node => node.name || 'No name',
                            labelPosition: 'bottom',
                        },
                        link: {
                            fontSize: 10,
                            fontWeight: 'bold',
                            highlightColor: '#fff',
                            highlightFontWeight: '100',
                            labelProperty: () => 'Label',
                            renderLabel: true,
                            semanticStrokeWidth: true,
                            markerHeight: 100,
                            type: 'circle',
                            mouseCursor: 'pointer',
                        },
                        automaticRearrangeAfterDropNode: true,
                        collapsible: true,
                        directed: true,
                        focusZoom: 5,
                        focusAnimationDuration: 10,
                        height: 10,
                        nodeHighlightBehavior: true,
                        linkHighlightBehavior: true,
                        highlightDegree: 2,
                        highlightOpacity: 0.5,
                        maxZoom: 3.0,
                        minZoom: 0.5,
                        initialZoom: 2.0,
                        panAndZoom: false,
                        staticGraph: true,
                        staticGraphWithDragAndDrop: true,
                        width: 100,
                        d3: {
                            alphaTarget: 1.0,
                            gravity: 9.8,
                            linkLength: 10,
                            linkStrength: 10,
                            disableLinkForce: true,
                        },
                    }}
                    onClickGraph={(event: MouseEvent) => {}}
                    onClickNode={(nodeId: string) => {}}
                    onDoubleClickNode={(nodeId: string) => {}}
                    onRightClickNode={(event: MouseEvent, nodeId: string) => {}}
                    onMouseOverNode={(nodeId: string) => {}}
                    onMouseOutNode={(nodeId: string) => {}}
                    onClickLink={(source: string, target: string) => {}}
                    onRightClickLink={(event: MouseEvent, source: string, target: string) => {}}
                    onMouseOverLink={(source: string, target: string) => {}}
                    onMouseOutLink={(source: string, target: string) => {}}
                    onNodePositionChange={(nodeId: string, x: number, y: number) => {}}
                    onZoomChange={(previousZoom: number, newZoom: number) => {}}
                />
                <Link />
                <Node />
            </div>
        );
    }
}
