import * as React from 'react';
import { Graph, Link, Node } from 'react-d3-graph';

const nodes = [
    { id: 'node1', labelProperty: 'id' },
    { id: 'node2', name: 'node2Name' },
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
                    onClickGraph={() => {}}
                    id="test"
                    data={{
                        nodes,
                        links,
                    }}
                    config={{
                        node: {
                            labelProperty: node => node.name || 'No name',
                        },
                        d3: {
                            disableLinkForce: true,
                        },
                    }}
                />
                <Link />
                <Node />
            </div>
        );
    }
}
