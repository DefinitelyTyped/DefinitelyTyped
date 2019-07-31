import integrate = require('integrate-adaptive-simpson');
import integrateVector = require('integrate-adaptive-simpson/vector');

const functionTotest = (x: number) => x * 4;

integrate(functionTotest, 12, 0);
integrate(functionTotest, 12, 0, 0.01);
integrate(functionTotest, 12, 0, 0.01, 17);

integrateVector(functionTotest, 12, 0);
integrateVector(functionTotest, 12, 0, 0.01);
integrateVector(functionTotest, 12, 0, 0.01, 17);
