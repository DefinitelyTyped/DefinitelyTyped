import * as React from "react";
import * as DOM from "react-dom-factories";
import createFragment = require("react-addons-create-fragment");

createFragment({
    a: DOM.div(),
    b: ["a", false, React.createElement("span")],
});
