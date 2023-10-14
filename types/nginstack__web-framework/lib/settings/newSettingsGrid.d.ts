declare function _exports(
    settingsId: string | number | DBKey | string[] | number[] | DBKey[],
    options?: {
        process?: import("../process/Process");
        title?: string;
        name?: string;
        help?: string;
        showResetToDefaultsButton?: boolean;
    },
): import("../grid/Grid");
export = _exports;
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
