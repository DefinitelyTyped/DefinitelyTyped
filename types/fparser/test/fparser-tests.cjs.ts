import Formula = require('fparser');

const fObj = new Formula('x*2');
fObj.getVariables();
fObj.evaluate({x: 2});

Formula.calc('x^2', {x: 2});
