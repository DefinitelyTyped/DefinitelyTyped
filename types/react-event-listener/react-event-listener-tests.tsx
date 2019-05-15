import React = require("react");
import EventListener, { withOptions } from "react-event-listener";

<EventListener target={document} onBeforeUnload={ev => { }} />;
<EventListener target={window} onResize={withOptions((ev: UIEvent) => { }, { passive: true, capture: true })} />;
<EventListener target="window" onResize={() => { }}/>;
<EventListener target={document} onSelectionChange={ev => { }} />;
