import * as chai from 'chai';
import chaiXml = require('chai-xml');

chai.use(chaiXml);
const expect = chai.expect;

function test_chaiXml() {
    const testXml = '<a:test attribute1="1" xmlns:a="test"><a:h1><a:h2>test</a:h2></a:h1></a:test>';
    expect('nope').xml.not.to.be.valid();
    expect(testXml).xml.to.be.valid();
    expect(testXml).xml.to.equal('<a:test attribute1="1" xmlns:a="test">\n<a:h1><a:h2>test</a:h2></a:h1></a:test>\n');
    expect(testXml).xml.to.not.equal('<nope/>' );
}

test_chaiXml();
