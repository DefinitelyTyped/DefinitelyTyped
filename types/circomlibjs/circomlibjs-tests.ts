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

(async () => {
    const smt = await buildSMT(db, 0);

    // $ExpectType any
    smt.delete(1);
    // $ExpectType any
    smt.find(1);
    // $ExpectType any
    smt.insert(1, 2);
    // $ExpectType any
    smt.update(1, 3);

    // $ExpectType BabyJub
    const babyJub = await buildBabyjub();

    // $ExpectType Point
    babyJub.addPoint(1, 2);
    // $ExpectType Point
    babyJub.mulPointEscalar(2, 3);
    // $ExpectType boolean
    babyJub.inCurve([0, 1]);
    // $ExpectType boolean
    babyJub.inSubgroup([1, 2]);
    // $ExpectType Uint8Array
    const buff1 = babyJub.packPoint([1, 3]);
    // $ExpectType Point
    babyJub.unpackPoint(buff1);

    // $ExpectType Eddsa
    const eddsa = await buildEddsa();

    // $ExpectType Uint8Array
    eddsa.pruneBuffer(new Uint8Array([0]));
    // $ExpectType Point
    eddsa.prv2pub(3);
    // $ExpectType Signature
    eddsa.signPedersen(3, [1]);
    // $ExpectType Signature
    eddsa.signPoseidon(3, [1]);
    // $ExpectType Signature
    eddsa.signMiMC(3, [1]);
    // $ExpectType Signature
    eddsa.signMiMCSponge(3, [1]);
    // $ExpectType boolean
    eddsa.verifyPedersen([1], { R8: 1, S: 2 }, [1, 2]);
    // $ExpectType boolean
    eddsa.verifyPoseidon([1], { R8: 1, S: 2 }, [1, 2]);
    // $ExpectType boolean
    eddsa.verifyMiMC([1], { R8: 1, S: 2 }, [1, 2]);
    // $ExpectType boolean
    eddsa.verifyMiMCSponge([1], { R8: 1, S: 2 }, [1, 2]);
    // $ExpectType Uint8Array
    const buff2 = eddsa.packSignature({ R8: 9, S: 3 });
    // $ExpectType Signature
    eddsa.unpackSignature(buff2);

    // $ExpectType Mimc7
    const mimc7 = await buildMimc7();

    // $ExpectType any
    mimc7.getIV('mimc');
    mimc7.getIV();
    // $ExpectType any[]
    mimc7.getConstants('mimc', 3);
    mimc7.getConstants('mimc');
    mimc7.getConstants();
    // $ExpectType any
    mimc7.hash(3, 2);
    // $ExpectType any
    mimc7.multiHash([1, 3], 3);
    mimc7.multiHash([1, 3]);

    // $ExpectType MimcSponge
    const mimcSponge = await buildMimcSponge();

    // $ExpectType any
    mimcSponge.getIV('mimcsponge');
    mimcSponge.getIV();
    // $ExpectType any[]
    mimcSponge.getConstants('mimcsponge', 3);
    mimcSponge.getConstants('mimcsponge');
    mimcSponge.getConstants();
    // $ExpectType any
    mimcSponge.hash(3, 3, 2);
    // $ExpectType any
    mimcSponge.multiHash([1, 3], 3, 3);
    mimcSponge.multiHash([1, 3], 3);
    mimcSponge.multiHash([1, 3]);

    // $ExpectType Poseidon
    const poseidon = await buildPoseidon();

    // $ExpectType any
    poseidon([1, 3], 3, 4);
    poseidon([1, 3], 3);
    poseidon([1, 3]);

    // $ExpectType PedersenHash
    const pederson = await buildPedersenHash();

    // $ExpectType any
    pederson.baseHash('blake', 3);
    pederson.baseHash('blake2b', 4);
    // $ExpectType boolean[]
    pederson.buffer2bits(new Uint8Array([1]));
    // $ExpectType Uint8Array
    pederson.hash(new Uint8Array([2]), {});
    pederson.hash(new Uint8Array([2]));
    // $ExpectType Point
    pederson.getBasePoint('blake', 3);
    pederson.getBasePoint('blake2b', 3);
    // $ExpectType string
    pederson.padLeftZeros(3, 4);
})();
