import npa = require("npm-package-arg");

const result1 = npa("npm-package-arg@5.1");
const result2 = npa("npm-package-arg@5.1", "..");
const result3 = npa.resolve("npm-package-arg", "^5.1.0");
const result4 = npa.resolve("npm-package-arg", "^5.1.0", "..");
