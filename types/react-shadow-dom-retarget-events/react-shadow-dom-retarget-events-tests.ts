import retargetEvents = require("react-shadow-dom-retarget-events");

const element = document.createElement("div");
const shadowRoot = element.attachShadow({ mode: "open" });
retargetEvents(shadowRoot);
