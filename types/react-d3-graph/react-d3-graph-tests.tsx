import { Graph, Link, Node } from 'react-d3-graph';
import * as React from 'react';

export class Example extends React.Component {
    render(): React.ReactElement {
        return (
            <div>
                <Graph
                    onClickGraph={() => {}}
                    id="test"
                    data={{
                        nodes: [
                            { id: 'node1', labelProperty: 'id' },
                            { id: 'node2', name: 'node2Name' },
                        ],
                        links: [{ source: 'node1', target: 'node2' }],
                    }}
                    config={{
                        node: {
                            labelProperty: node => node.name || 'No name',
                        },
                    }}
                />
                <Link />
                <Node />
            </div>
        );
    }
}
