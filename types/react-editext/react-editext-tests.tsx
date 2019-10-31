import EdiText from 'react-editext';

import * as React from 'react';
import { render } from 'react-dom';

declare const container: Element;

render(
    <EdiText
        type='text'
        value={''}
        onSave={value => console.log(value)}
    />,
    container,
);
