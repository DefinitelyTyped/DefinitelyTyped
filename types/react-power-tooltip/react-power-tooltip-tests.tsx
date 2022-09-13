import React, { useState } from 'react';
import ToolTip from 'react-power-tooltip';

// Tooltip test
const ToolTipTest = () => {
    const [visible, setVisible] = useState(false);
    return (
            <div>
                <p id="text" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                    This is a cool component
                </p>
                <ToolTip show={visible} position="right center" arrowAlign="center">
                    <div>
                        <p>This is the content of the tooltip</p>
                    </div>
                </ToolTip>
            </div>
        );
};
