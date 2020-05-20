import encode = require("form-urlencoded");

const opts: encode.FormEncodedOptions = {
    sorted: true,
    skipIndex: false,
    ignorenull: true
};

encode([1, 2, 3]);
encode([1, 2, 3], opts);
