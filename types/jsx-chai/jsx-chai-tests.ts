import jsxChai = require("jsx-chai");

async function testUseJsxChai() {
    const chai = await import("chai");
    chai.use(jsxChai.jsxChai);
}
