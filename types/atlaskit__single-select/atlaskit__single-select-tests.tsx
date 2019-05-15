import SingleSelect, { StatelessSelect } from '@atlaskit/single-select';

import * as React from 'react';
import { render } from 'react-dom';

declare const container: Element;

render(
    <div>
        <SingleSelect />
        <StatelessSelect />
    </div>,
    container,
);
