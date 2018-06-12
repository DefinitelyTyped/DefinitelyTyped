import CircularProgressbar from 'react-circular-progressbar';

import * as React from 'react';
import { render } from 'react-dom';

declare const container: Element;

render(
    <div>
        <CircularProgressbar
            className="testing"
            percentage={55}
            textForPercentage={(val) => (val > 50 ? val.toString() : '')}
            strokeWidth={16}
        />
        <CircularProgressbar
            className="testing"
            percentage={55}
            textForPercentage=""
            strokeWidth={16}
        />
    </div>,
    container,
);
