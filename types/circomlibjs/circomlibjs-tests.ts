import {
    buildBabyjub,
    buildEddsa,
    buildMimc7,
    buildMimcSponge,
    buildPedersenHash,
    buildPoseidon,
    buildSMT,
    evmasm,
    Point,
    SMT,
    SMTMemDb,
} from "circomlibjs";

const bigNumber = new Uint8Array([1]);
const point = [bigNumber, bigNumber] as Point;
const signature = {
    R8: point,
    S: BigInt(3),
};

const db = new SMTMemDb("F");

new SMT(
    db,
    1,
    (left, right) => bigNumber,
    (key, value) => bigNumber,
    "F",
);

new evmasm();

(async () => {
    const smt = await buildSMT(db, 0);

    // $ExpectType any
    smt.F;
    // $ExpectType SMTMemDb
    smt.db;
    // $ExpectType BigNumberish
    smt.root;
    smt.hash0;
    smt.hash1;
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

    // $ExpectType any
    babyJub.F;
    // $ExpectType bigint
    babyJub.p;
    // $ExpectType bigint
    babyJub.pm1d2;
    // $ExpectType Point
    babyJub.Generator;
    // $ExpectType Point
    babyJub.Base8;
    // $ExpectType bigint
    babyJub.order;
    // $ExpectType bigint
    babyJub.subOrder;
    // $ExpectType Uint8Array
    babyJub.A;
    // $ExpectType Uint8Array
    babyJub.D;
    // $ExpectType Point
    babyJub.addPoint(point, point);
    // $ExpectType Point
    babyJub.mulPointEscalar(point, 3);
    // $ExpectType boolean
    babyJub.inCurve(point);
    // $ExpectType boolean
    babyJub.inSubgroup(point);
    // $ExpectType Uint8Array
    babyJub.packPoint(point);
    // $ExpectType Point
    babyJub.unpackPoint(bigNumber);

    // $ExpectType Eddsa
    const eddsa = await buildEddsa();

    // $ExpectType any
    eddsa.F;
    // $ExpectType BabyJub
    eddsa.babyJub;
    // $ExpectType PedersenHash
    eddsa.pedersenHash;
    // $ExpectType Mimc7
    eddsa.mimc7;
    // $ExpectType Poseidon
    eddsa.poseidon;
    // $ExpectType MimcSponge
    eddsa.mimcSponge;
    // $ExpectType Uint8Array
    eddsa.pruneBuffer(new Uint8Array([0]));
    // $ExpectType Point
    eddsa.prv2pub("sk");
    // $ExpectType Signature
    eddsa.signPedersen("sk", bigNumber);
    // $ExpectType Signature
    eddsa.signPoseidon("sk", bigNumber);
    // $ExpectType Signature
    eddsa.signMiMC("sk", bigNumber);
    // $ExpectType Signature
    eddsa.signMiMCSponge("sk", bigNumber);
    // $ExpectType boolean
    eddsa.verifyPedersen(bigNumber, signature, point);
    // $ExpectType boolean
    eddsa.verifyPoseidon(bigNumber, signature, point);
    // $ExpectType boolean
    eddsa.verifyMiMC(bigNumber, signature, point);
    // $ExpectType boolean
    eddsa.verifyMiMCSponge(bigNumber, signature, point);
    // $ExpectType Uint8Array
    const buff2 = eddsa.packSignature(signature);
    // $ExpectType Signature
    eddsa.unpackSignature(buff2);

    // $ExpectType Mimc7
    const mimc7 = await buildMimc7();

    // $ExpectType any
    mimc7.F;
    // $ExpectType Uint8Array[]
    mimc7.cts;
    // $ExpectType bigint
    mimc7.getIV("mimc");
    mimc7.getIV();
    // $ExpectType Uint8Array[]
    mimc7.getConstants("mimc", 3);
    mimc7.getConstants("mimc");
    mimc7.getConstants();
    // $ExpectType Uint8Array
    mimc7.hash(3, 2);
    // $ExpectType Uint8Array
    mimc7.multiHash([1, 3], 3);
    mimc7.multiHash([1, 3]);

    // $ExpectType MimcSponge
    const mimcSponge = await buildMimcSponge();

    // $ExpectType any
    mimcSponge.F;
    // $ExpectType Uint8Array[]
    mimcSponge.cts;
    // $ExpectType bigint
    mimcSponge.getIV("mimcsponge");
    mimcSponge.getIV();
    // $ExpectType Uint8Array[]
    mimcSponge.getConstants("mimcsponge", 3);
    mimcSponge.getConstants("mimcsponge");
    mimcSponge.getConstants();
    // $ExpectType Uint8Array
    mimcSponge.hash(3, 3, 2);
    // $ExpectType Uint8Array
    mimcSponge.multiHash([1, 3], 3, 3);
    mimcSponge.multiHash([1, 3], 3);
    mimcSponge.multiHash([1, 3]);

    // $ExpectType Poseidon
    const poseidon = await buildPoseidon();

    // $ExpectType any
    poseidon.F;
    // $ExpectType Uint8Array
    poseidon([1, 3], 3, 4);
    poseidon([1, 3], 3);
    poseidon([1, 3]);

    // $ExpectType PedersenHash
    const pederson = await buildPedersenHash();

    // $ExpectType BabyJub
    pederson.babyJub;
    // $ExpectType any[]
    pederson.bases;
    // $ExpectType any
    pederson.baseHash("blake", 3);
    pederson.baseHash("blake2b", 4);
    // $ExpectType boolean[]
    pederson.buffer2bits(new Uint8Array([1]));
    // $ExpectType Uint8Array
    pederson.hash(new Uint8Array([2]), {});
    pederson.hash(new Uint8Array([2]));
    // $ExpectType Point
    pederson.getBasePoint("blake", 3);
    pederson.getBasePoint("blake2b", 3);
    // $ExpectType string
    pederson.padLeftZeros(3, 4);
})();
