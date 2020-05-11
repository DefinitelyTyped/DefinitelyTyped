import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

import * as React from 'react';
import { render } from 'react-dom';

render(<SkipNavLink />, document.getElementById('app'));
render(
    <SkipNavLink style={{ color: 'red' }} onClick={() => {}}>
        Skip it
    </SkipNavLink>,
    document.getElementById('app')
);

render(<SkipNavContent />, document.getElementById('app'));
render(
    <SkipNavContent style={{ color: 'red' }} onClick={() => {}}>
        Skip Nav Content
    </SkipNavContent>,
    document.getElementById('app')
);
