import stringMath = require("string-math");

stringMath(
    "((1 + 2) * 4) / 2",
    (_errorObj, _result) => {
        if (!_errorObj) console.log(_result); // 6
        else console.log(_errorObj);
    },
);
