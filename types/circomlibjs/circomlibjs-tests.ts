import {
    SMT,
    SMTMemDb,
    buildSMT,
    buildBabyjub,
    buildEddsa,
    buildMimc7,
    buildPoseidon,
    buildMimcSponge,
    buildPedersenHash,
    evmasm,
} from 'circomlibjs';

const db = new SMTMemDb('F');

new SMT(
    db,
    1,
    (left, right) => right + left,
    (key, value) => key + value,
    'F',
);

new evmasm();

// $ExpectType Promise<SMT>
buildSMT(db, 0);

// $ExpectType Promise<BabyJub>
buildBabyjub();

// $ExpectType Promise<Eddsa>
buildEddsa();

// $ExpectType Promise<Mimc7>
buildMimc7();

// $ExpectType Promise<Poseidon>
buildPoseidon();

// $ExpectType Promise<MimcSponge>
buildMimcSponge();

// $ExpectType Promise<PedersenHash>
buildPedersenHash();
