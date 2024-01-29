import * as npm from "npm";

interface GlobalNPM {
    GLOBAL_NPM_PATH: string;
    GLOBAL_NPM_BIN: string;
}

declare var globalNPM: GlobalNPM & typeof npm;
export = globalNPM;
