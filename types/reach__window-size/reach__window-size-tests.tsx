import WindowSize from '@reach/window-size';

import * as React from 'react';
import { render } from 'react-dom';

render(
    <WindowSize>
    {(size) => (
        <div>
            <div>Resize your window.</div>
            <pre>{JSON.stringify(size, null, 2)}</pre>
        </div>
    )}
    </WindowSize>,
    document.getElementById('app')
);

render(<WindowSize />, document.getElementById('app')); // $ExpectError
