import passwordEntropy = require("fast-password-entropy");

const entropy: number = passwordEntropy("password123");
