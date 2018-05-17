import Layer from '@atlaskit/layer';

import * as React from 'react';
import { render } from 'react-dom';

declare const container: Element;

render(
    <Layer
        position="bottom left"
        content={<h1>Hello, world!</h1>}
        autoFlip={false}
    />,
    container,
);
