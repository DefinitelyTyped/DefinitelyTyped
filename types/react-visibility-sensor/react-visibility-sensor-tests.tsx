import * as React from "react";

import * as ReactVisibilitySensor from "react-visibility-sensor";

const num = 1;
const bool = true;
const shape = { top: num, left: num, bottom: num, right: num };

const component = (
  <ReactVisibilitySensor
    onChange={(bool) => {}}
    active={bool}
    partialVisibility={bool}
    offset={shape}
    minTopValue={num}
    intervalCheck={bool}
    intervalDelay={num}
    scrollCheck={bool}
    scrollDelay={num}
    scrollThrottle={num}
    resizeCheck={bool}
    resizeDelay={num}
    resizeThrottle={num}
    delayedCall={bool}
    containment={window.document.body}
  >
    <div />
  </ReactVisibilitySensor>
);

const componentWithFunctionAsChild = (
  <ReactVisibilitySensor>
    {({ isVisible, visibilityRect }) => <div />}
  </ReactVisibilitySensor>
);
