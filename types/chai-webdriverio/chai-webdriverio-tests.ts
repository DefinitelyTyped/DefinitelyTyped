import chai = require('chai');

const selector = 'Hello, World!';

chai.expect(selector).to.be.there();

chai.expect(selector).to.be.visible();

chai.expect(selector).to.have.text(selector);

chai.expect(selector).to.have.text(/regex/);

chai.expect(selector).to.have.count(10);

chai.expect(selector).to.have.value('x');

chai.expect(selector).to.have.value(/regex/);

chai.expect(selector).to.have.focus();
