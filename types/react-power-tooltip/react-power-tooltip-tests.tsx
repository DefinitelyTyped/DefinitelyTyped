import React, { useState } from 'react';
import ToolTip from 'react-power-tooltip';

// Tooltip test
const ToolTipTest = () => {
    const [state, setState] = useState(false);
    return (
            <div>
                <p id="text" onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)}>
                    This is a cool component
                </p>
                <ToolTip show={this.state.isTooltipActive} position="right center" arrowAlign="center">
                    <div>
                        <p>This is the content of the tooltip</p>
                    </div>
                </ToolTip>
            </div>
        );

}
