import {Graph, Link, Node} from "./index";
import * as React from 'react';

export module X {
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
}
