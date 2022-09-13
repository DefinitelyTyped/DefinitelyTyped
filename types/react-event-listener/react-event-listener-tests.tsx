import React = require("react");
import EventListener, { withOptions } from "react-event-listener";

<EventListener target={document} onBeforeUnload={ev => { }} />;
<EventListener target={window} onResize={withOptions((ev: UIEvent) => { }, { passive: true, capture: true })} />;
<EventListener target="window" onResize={() => { }}/>;
<EventListener target={document} onSelectionChange={ev => { }} />;
<EventListener target="document" onError={function() { this.documentElement; }} />;
<EventListener target={window} onBlurCapture={function() { this.pageXOffset; }} />;
