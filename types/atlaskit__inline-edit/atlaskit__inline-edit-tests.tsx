import InlineEdit from '@atlaskit/inline-edit';

import * as React from 'react';
import { render } from 'react-dom';

declare const container: Element;

render(
    <InlineEdit
        readView={<div>Hello</div>}
        onConfirm={() => {}}
        onCancel={() => {}}
    />,
    container,
);
