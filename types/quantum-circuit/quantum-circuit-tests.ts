import QuantumCircuit from "quantum-circuit";

const circuit = new QuantumCircuit(2);

circuit.addGate("h", -1, 0);

circuit.addGate("cx", -1, [0, 1]);

circuit.measureAll();
