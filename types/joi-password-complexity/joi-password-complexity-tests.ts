import PasswordComplexity = require("joi-password-complexity");

const complexityOptions: PasswordComplexity.ComplexityOptions = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3
};

const passwordComplexity = new PasswordComplexity(complexityOptions);
