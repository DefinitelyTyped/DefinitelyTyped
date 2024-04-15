import * as ctrlc from "generate-ctrl-c-event";

let eventFunc: () => void = ctrlc.generateCtrlC;
eventFunc = ctrlc.generateCtrlBreak;

ctrlc.generateCtrlCAsync().then(success => {
    return success;
});
