import * as jsq from 'jsqubits';

const q0 = jsq.jsqubits("|0>").hadamard(0);
const q1 = new jsq.jsqubits.QState(1, [jsq.jsqubits.Complex.ONE, jsq.jsqubits.Complex.ZERO]);
const bell = q1.tensorProduct(q0).cnot(0, 1);

const result = bell.measure(0);
result.newState.measure(1);
