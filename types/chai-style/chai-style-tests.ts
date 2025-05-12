import chaiStyle = require("chai-style");

import("chai").then(({ use }) => use(chaiStyle));

declare const expect: Chai.ExpectStatic;

declare const element: unknown;

expect(element).to.have.style("color");
expect(element).to.not.have.style("background-color");
expect(element).to.have.style("color", "red");
expect(element).to.not.have.style("color", "red");
