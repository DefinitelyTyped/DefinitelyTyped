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
