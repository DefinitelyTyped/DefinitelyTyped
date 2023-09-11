import { SMT, SMTMemDb } from 'circomlibjs';

const db = new SMTMemDb('F');

new SMT(
    db,
    1,
    (left, right) => right + left,
    (key, value) => key + value,
    'F',
);
