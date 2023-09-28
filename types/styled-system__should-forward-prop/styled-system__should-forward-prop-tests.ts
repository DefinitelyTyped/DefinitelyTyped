import shouldForwardProp, { createShouldForwardProp, props } from "@styled-system/should-forward-prop";

shouldForwardProp("onClick"); // True
shouldForwardProp("variant"); // False

const customShouldForwardProp = createShouldForwardProp([...props, "magic"]);
customShouldForwardProp("onClick"); // True
customShouldForwardProp("variant"); // False
customShouldForwardProp("magic"); // True
customShouldForwardProp("you know"); // False
