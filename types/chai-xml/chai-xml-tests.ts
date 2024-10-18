import chaiXml = require("chai-xml");

import("chai").then(({ use }) => use(chaiXml));
declare const expect: Chai.ExpectStatic;

function test_chaiXml() {
    const testXml = "<a:test attribute1=\"1\" xmlns:a=\"test\"><a:h1><a:h2>test</a:h2></a:h1></a:test>";
    expect("nope").xml.not.to.be.valid();
    expect(testXml).xml.to.be.valid();
    expect(testXml).xml.to.equal(
        "<a:test attribute1=\"1\" xmlns:a=\"test\">\n<a:h1><a:h2>test</a:h2></a:h1></a:test>\n",
    );
    expect(testXml).xml.to.not.equal("<nope/>");
}

test_chaiXml();
