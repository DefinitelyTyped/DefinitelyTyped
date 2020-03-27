import chai = require('chai');
import chaiStyle = require('chai-style');

chai.use(chaiStyle);

const { expect } = chai;

declare const element: unknown;

expect(element).to.have.style('color');
expect(element).to.not.have.style('background-color');
expect(element).to.have.style('color', 'red');
expect(element).to.not.have.style('color', 'red');
