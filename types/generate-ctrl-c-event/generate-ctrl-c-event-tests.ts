import { generateCtrlC, generateCtrlBreak } from "generate-ctrl-c-event";

let eventFunc: () => void = generateCtrlC;
eventFunc = generateCtrlBreak;
