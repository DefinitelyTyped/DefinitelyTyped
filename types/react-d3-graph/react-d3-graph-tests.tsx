import { Graph, Link, Node } from "react-d3-graph";
import * as React from 'react';

export class Example extends React.Component {
    render(): React.ReactElement {
        return (
            <div>
                <Graph id="test"/>
                <Link/>
                <Node/>
            </div>
        );
    }
}
