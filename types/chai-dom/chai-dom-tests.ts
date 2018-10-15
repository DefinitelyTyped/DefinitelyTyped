import * as chai from 'chai';
import chaiDom = require('chai-dom');

chai.use(chaiDom);
var expect = chai.expect;

function test() {

    var testElement = '<div></div>';
    expect(testElement).to.have.attribute('foo', 'bar');
    expect(testElement).to.have.attr('foo').match(/bar/);
    expect(testElement).to.have.class('foo');
    expect(testElement).to.have.id('id');
    expect(testElement).to.have.html('foo');
    expect(testElement).to.have.text('foo');
    expect(testElement).to.have.text(['foo', 'bar']);
    expect(testElement).to.have.value('foo');
    expect(testElement).to.be.empty;
    expect(testElement).to.have.length(2);
    expect(testElement).to.exist;
    expect(testElement).to.match('foo');
    expect(testElement).to.contain('foo');
    expect(testElement).to.contain(document.body);

}