import { Graph, Link, Node } from 'react-d3-graph';
import * as React from 'react';

export class Example extends React.Component {
    render(): React.ReactElement {
        return (
            <div>
                <Graph id="test" data={{ nodes: [{ id: 'node1' }, { id: 'node2' }] , links: [{source: "node1", target: "node2"}] }} />
                <Link />
                <Node />
            </div>
        );
    }
}
