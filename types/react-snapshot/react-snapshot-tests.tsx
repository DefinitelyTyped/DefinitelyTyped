import * as React from 'react';
import { render } from 'react-snapshot';

function Test() {
    return (
        <h1>Test!</h1>
    );
}

render(<Test/>, document.getElementById('test'));
