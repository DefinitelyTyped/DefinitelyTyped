import * as React from "react";
import { OffCanvas, OffCanvasBody, OffCanvasMenu } from "react-offcanvas";

const offcanvasElement = (
  <OffCanvas
    isMenuOpened
    width={300}
    effect="parallax"
    transitionDuration={250}
    position="right"
  >
    <OffCanvasBody
      className="foo"
      style={{ fontSize: "30px" }}
    >
      <p>body content</p>
    </OffCanvasBody>
    <OffCanvasMenu className="bar">
      <p>menu content</p>
    </OffCanvasMenu>
  </OffCanvas>
);
