import Tooltip, { TooltipPopup, useTooltip, TriggerParams, TooltipParams } from '@reach/tooltip';

import * as React from 'react';
import { render } from 'react-dom';

const Example = () => {
    const tooltip = { id: '0', triggerRect: { top: 0, bottom: 0, left: 0, right: 0 }, isVisible: true };
    const label = 'Fall in love all over again';
    const ariaLabel = 'Fall in love all over again';
    const centered = (rect1: DOMRect, rect2: DOMRect) => new DOMRect(5, 5);

    return (
        <>
            <Tooltip label={label}>
                <button>❤️</button>
            </Tooltip>

            <TooltipPopup
                {...tooltip}
                label={label}
                ariaLabel={ariaLabel}
                style={{
                    background: 'black',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    padding: '0.5em 1em',
                }}
                position={centered}
            />
        </>
    );
};

render(<Tooltip />, document.getElementById('app')); // $ExpectError

render(<Tooltip label="Label" />, document.getElementById('app')); // $ExpectError

render(<Example />, document.getElementById('app'));

// $ExpectType [TriggerParams, TooltipParams, boolean]
useTooltip();

// $ExpectType [TriggerParams, TooltipParams, boolean]
useTooltip({ onMouseEnter: e => {} });
