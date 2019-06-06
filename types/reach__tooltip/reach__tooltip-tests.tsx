import Tooltip, { TooltipPopup, useTooltip } from '@reach/tooltip';

import * as React from "react";
import { render } from "react-dom";

render(
  <Tooltip label="This is a label">
    <div />
  </Tooltip>,
  document.getElementById('app')
);

// should take a ReactNode for a label, and an aria-label
render(
  <Tooltip label={<p>This is another label</p>}>
    <div />
  </Tooltip>,
  document.getElementById('app')
);

render(
  <Tooltip
    label="This is another label"
    ariaLabel="This is an aria-label"
  >
    <div />
  </Tooltip>,
  document.getElementById('app')
);

// Should render normally
render(
  <TooltipPopup
    label="This is the popup"
  />,
  document.getElementById('app')
);

// Should take a callback that accepts two measured DOM elements as arguments
render(
  <TooltipPopup
    label="This is the popup"
    position={(triggerRect?: ClientRect, tooltipRect?: ClientRect) => {
      return 0;
    }}
  />,
  document.getElementById('app')
);
