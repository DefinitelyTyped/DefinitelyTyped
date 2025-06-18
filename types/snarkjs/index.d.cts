export as namespace snarkjs;

// Some types have been borrowed from https://github.com/erhant/circomkit.

export type NumericString = `${number}` | string;

export type ZKArtifact = string | Uint8Array;

// A signal value is a number, or an array of numbers (recursively).
export type SignalValueType = NumericString | number | bigint | SignalValueType[];

// An object with string keys and array of numerical values.
// Each key represents a signal name as it appears in the circuit.
export interface CircuitSignals {
    [signal: string]: SignalValueType;
}

export interface R1CSInfoType {
    n8: number;
    nVars: number;
    nConstraints: number;
    nPrvInputs: number;
    nPubInputs: number;
    useCustomGates: boolean;
    nLabels: number;
    nOutputs: number;
    prime: bigint;
    curve: any;
    F: any;
    constraints: any;
    customGates: any;
    customGatesUses: any;
}

export interface Groth16Proof {
    pi_a: NumericString[];
    pi_b: NumericString[][];
    pi_c: NumericString[];
    protocol: string;
    curve: string;
}

export interface FflonkProof {
    polynomials: {
        C1: NumericString[];
        C2: NumericString[];
        W1: NumericString[];
        W2: NumericString[];
    };
    evaluations: {
        ql: NumericString;
        qr: NumericString;
        qm: NumericString;
        qo: NumericString;
        qc: NumericString;
        s1: NumericString;
        s2: NumericString;
        s3: NumericString;
        a: NumericString;
        b: NumericString;
        c: NumericString;
        z: NumericString;
        zw: NumericString;
        t1w: NumericString;
        t2w: NumericString;
        inv: NumericString;
    };
    protocol: string;
    curve: string;
}

export interface PlonkProof {
    A: NumericString[];
    B: NumericString[];
    C: NumericString[];
    Z: NumericString[];
    T1: NumericString[];
    T2: NumericString[];
    T3: NumericString[];
    Wxi: NumericString[];
    Wxiw: NumericString[];
    eval_a: NumericString;
    eval_b: NumericString;
    eval_c: NumericString;
    eval_s1: NumericString;
    eval_s2: NumericString;
    eval_zw: NumericString;
    protocol: string;
    curve: string;
}

export type PublicSignals = NumericString[];

export namespace groth16 {
    function exportSolidityCallData(_proof: Groth16Proof, _pub: PublicSignals): Promise<string>;
    function fullProve(
        _input: CircuitSignals,
        wasmFile: ZKArtifact,
        zkeyFileName: ZKArtifact,
        logger?: any,
        wtnsCalcOptions?: any,
        proverOptions?: { singleThread?: boolean },
    ): Promise<{
        proof: Groth16Proof;
        publicSignals: PublicSignals;
    }>;
    function prove(
        zkeyFileName: ZKArtifact,
        witnessFileName: ZKArtifact,
        logger?: any,
        options?: { singleThread?: boolean },
    ): Promise<{
        proof: Groth16Proof;
        publicSignals: PublicSignals;
    }>;
    function verify(
        _vk_verifier: any,
        _publicSignals: PublicSignals,
        _proof: Groth16Proof,
        logger?: any,
    ): Promise<boolean>;
}

export namespace fflonk {
    function exportSolidityCallData(_pub: PublicSignals, _proof: FflonkProof): Promise<string>;
    function exportSolidityVerifier(vk: any, templates: any, logger?: any): Promise<any>;
    function fullProve(
        _input: CircuitSignals,
        wasmFilename: ZKArtifact,
        zkeyFilename: ZKArtifact,
        logger?: any,
        wtnsCalcOptions?: any,
        proverOptions?: { singleThread?: boolean },
    ): Promise<{
        proof: FflonkProof;
        publicSignals: PublicSignals;
    }>;
    function prove(
        zkeyFileName: ZKArtifact,
        witnessFileName: ZKArtifact,
        logger?: any,
        options?: { singleThread?: boolean },
    ): Promise<{
        proof: FflonkProof;
        publicSignals: PublicSignals;
    }>;
    function setup(r1csFilename: string, ptauFilename: string, zkeyFilename: ZKArtifact, logger?: any): Promise<0>;
    function verify(
        _vk_verifier: any,
        _publicSignals: PublicSignals,
        _proof: FflonkProof,
        logger?: any,
    ): Promise<boolean>;
}

export namespace plonk {
    function exportSolidityCallData(_proof: PlonkProof, _pub: PublicSignals): Promise<string>;
    function fullProve(
        _input: CircuitSignals,
        wasmFile: ZKArtifact,
        zkeyFileName: ZKArtifact,
        logger?: any,
        wtnsCalcOptions?: any,
        proverOptions?: { singleThread?: boolean },
    ): Promise<{
        proof: PlonkProof;
        publicSignals: PublicSignals;
    }>;
    function prove(
        zkeyFileName: ZKArtifact,
        witnessFileName: ZKArtifact,
        logger?: any,
        options?: { singleThread?: boolean },
    ): Promise<{
        proof: PlonkProof;
        publicSignals: PublicSignals;
    }>;
    function setup(r1csName: string, ptauName: string, zkeyName: ZKArtifact, logger?: any): Promise<void>;
    function verify(
        _vk_verifier: any,
        _publicSignals: PublicSignals,
        _proof: PlonkProof,
        logger?: any,
    ): Promise<boolean>;
}

export namespace powersOfTau {
    function beacon(
        oldPtauFilename: any,
        newPTauFilename: any,
        name: string,
        beaconHashStr: string,
        numIterationsExp: number | string,
        logger?: any,
    ): Promise<any>;
    function challengeContribute(
        curve: any,
        challengeFilename: any,
        responesFileName: any,
        entropy: any,
        logger?: any,
    ): Promise<void>;
    function contribute(
        oldPtauFilename: any,
        newPTauFilename: any,
        name: string,
        entropy: any,
        logger?: any,
    ): Promise<any>;
    function convert(oldPtauFilename: any, newPTauFilename: any, logger?: any): Promise<void>;
    function exportChallenge(pTauFilename: any, challengeFilename: any, logger?: any): Promise<any>;
    function exportJson(pTauFilename: string, verbose?: boolean): Promise<object>;
    function importResponse(
        oldPtauFilename: any,
        contributionFilename: any,
        newPTauFilename: any,
        name?: string,
        importPoints?: any,
        logger?: any,
    ): Promise<any>;
    function newAccumulator(curve: any, power: number, fileName: any, logger?: any): Promise<any>;
    function preparePhase2(oldPtauFilename: any, newPTauFilename: any, logger?: any): Promise<void>;
    function truncate(ptauFilename: any, template: any, logger?: any): Promise<any>;
    function verify(curve: any, cur: any, prev: any, logger?: any): Promise<boolean>;
}

export namespace r1cs {
    function exportJson(r1csFileName: string, logger?: any): Promise<object>;
    function info(r1csName: string, logger?: any): Promise<R1CSInfoType>;
    function print(r1cs: any, syms: any, logger?: any): void;
}

export namespace wtns {
    function calculate(_input: CircuitSignals, wasmFileName: any, wtnsFileName: any): Promise<void>;
    function check(r1csFilename: any, wtnsFilename: any, logger?: any): Promise<any>;
    function debug(
        _input: CircuitSignals,
        wasmFileName: any,
        wtnsFileName: any,
        symName: any,
        options: any,
        logger?: any,
    ): Promise<void>;
    function exportJson(wtnsFileName: string): Promise<object>;
}

export namespace zKey {
    function beacon(
        zkeyNameOld: any,
        zkeyNameNew: any,
        name: string,
        beaconHashStr: string,
        numIterationsExp: number | string,
        logger?: any,
    ): Promise<any>;
    function bellmanContribute(
        curve: any,
        challengeFilename: any,
        responesFileName: any,
        entropy: any,
        logger?: any,
    ): Promise<any>;
    function contribute(zkeyNameOld: any, zkeyNameNew: any, name: string, entropy: any, logger?: any): Promise<any>;
    function exportBellman(zkeyName: any, mpcparamsName: any, logger?: any): Promise<void>;
    function exportJson(zkeyFileName: any): Promise<object>;
    function exportSolidityVerifier(zKeyName: any, templates: any, logger?: any): Promise<any>;
    function exportVerificationKey(zkeyName: any, logger?: any): Promise<any>;
    function importBellman(
        zkeyNameOld: any,
        mpcparamsName: any,
        zkeyNameNew: any,
        name?: string,
        logger?: any,
    ): Promise<any>;
    function newZKey(r1csName: any, ptauName: any, zkeyName: any, logger?: any): Promise<any>;
    function verifyFromInit(initFileName: any, pTauFileName: any, zkeyFileName: any, logger?: any): Promise<boolean>;
    function verifyFromR1cs(r1csFileName: any, pTauFileName: any, zkeyFileName: any, logger?: any): Promise<boolean>;
}
