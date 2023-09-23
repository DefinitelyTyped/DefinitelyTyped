// Type definitions for nanoid-dictionary 4.2
// Project: https://github.com/CyberAP/nanoid-dictionary#readme
// Definitions by: Shengjie Pan <https://github.com/kenelm007>
//                 Kristóf Poduszló <https://github.com/kripod>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import lowercase = require("./lowercase");
import uppercase = require("./uppercase");
import numbers = require("./numbers");
import nolookalikes = require("./nolookalikes");
import nolookalikesSafe = require("./nolookalikes-safe");
import alphanumeric = require("./alphanumeric");

declare const nanoidDictionary: {
    lowercase: typeof lowercase;
    uppercase: typeof uppercase;
    numbers: typeof numbers;
    nolookalikes: typeof nolookalikes;
    nolookalikesSafe: typeof nolookalikesSafe;
    alphanumeric: typeof alphanumeric;
};

export = nanoidDictionary;
