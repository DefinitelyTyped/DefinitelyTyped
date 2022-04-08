import VisuallyHidden from '@reach/visually-hidden';

import * as React from 'react';
import { render } from 'react-dom';

render(<VisuallyHidden />, document.getElementById('app'));

render(
    <VisuallyHidden>
        <div>I should be hidden!</div>
    </VisuallyHidden>,
    document.getElementById('app')
);
