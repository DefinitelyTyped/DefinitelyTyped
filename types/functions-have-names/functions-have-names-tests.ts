import functionsHaveNames = require("functions-have-names");

functionsHaveNames(); // $ExpectType boolean
functionsHaveNames.functionsHaveConfigurableNames(); // $ExpectType boolean
functionsHaveNames.boundFunctionsHaveNames(); // $ExpectType boolean
