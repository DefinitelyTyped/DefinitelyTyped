import * as DOM from "react-dom-factories";

// tiny sampling of factories
DOM.a({}, "a");
DOM.div({},
    DOM.span({}, DOM.b()),
    DOM.ul({}, DOM.li({}, "test"))
);
