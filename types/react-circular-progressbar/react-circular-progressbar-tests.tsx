import CircularProgressbar from 'react-circular-progressbar';

import * as React from 'react';
import { render } from 'react-dom';

declare const container: Element;

render(
    <div>
        <CircularProgressbar
            className="testing"
            percentage={55}
            text={'55%'}
            strokeWidth={16}
        />
        <CircularProgressbar
            className="testing"
            percentage={55}
            text=""
            strokeWidth={16}
        />
    </div>,
    container,
);
