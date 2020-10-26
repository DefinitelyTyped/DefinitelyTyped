import CytoscapeComponent from 'react-cytoscapejs';
import * as React from 'react';

const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
    {
        data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' },
    },
];

export class Example extends React.Component {
    render(): React.ReactElement {
        return (
            <div>
                <CytoscapeComponent
                    elements={CytoscapeComponent.normalizeElements(elements)}
                    style={{ width: '600px', height: '600px' }}
                />
            </div>
        );
    }
}
