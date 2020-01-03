import shouldForwardProp, {
  createShouldForwardProp
} from "@styled-system/should-forward-prop";

shouldForwardProp("onClick");  // True
shouldForwardProp("variant");  // False

const customShouldForwardProp = createShouldForwardProp(["magic"]);
customShouldForwardProp("magic");  // True
customShouldForwardProp("you know");  // False
