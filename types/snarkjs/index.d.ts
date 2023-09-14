// Type definitions for snarkjs 0.7
// Project: https://github.com/iden3/snarkjs#readme
// Definitions by: cedoor <https://github.com/cedoor>
//                 vplasencia <https://github.com/vplasencia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace snarkjs;

export namespace fflonk {
    function exportSolidityCallData(_pub: any, _proof: any): Promise<any>;
    function exportSolidityVerifier(vk: any, templates: any, logger?: any): Promise<any>;
    function fullProve(_input: any, wasmFilename: any, zkeyFilename: any, logger?: any): Promise<any>;
    function prove(zkeyFileName: any, witnessFileName: any, logger?: any): Promise<any>;
    function setup(r1csFilename: any, ptauFilename: any, zkeyFilename: any, logger?: any): Promise<any>;
    function verify(_vk_verifier: any, _publicSignals: any, _proof: any, logger?: any): Promise<boolean>;
}

export namespace groth16 {
    function exportSolidityCallData(_proof: any, _pub: any): Promise<any>;
    function fullProve(_input: any, wasmFile: any, zkeyFileName: any, logger?: any): Promise<any>;
    function prove(zkeyFileName: any, witnessFileName: any, logger?: any): Promise<any>;
    function verify(_vk_verifier: any, _publicSignals: any, _proof: any, logger?: any): Promise<any>;
}

export namespace plonk {
    function exportSolidityCallData(_proof: any, _pub: any): Promise<any>;
    function fullProve(_input: any, wasmFile: any, zkeyFileName: any, logger?: any): Promise<any>;
    function prove(zkeyFileName: any, witnessFileName: any, logger?: any): Promise<any>;
    function setup(r1csName: any, ptauName: any, zkeyName: any, logger?: any): Promise<any>;
    function verify(_vk_verifier: any, _publicSignals: any, _proof: any, logger?: any): Promise<boolean>;
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
    function exportJson(pTauFilename: any, verbose?: any): Promise<any>;
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
    function exportJson(r1csFileName: any, logger?: any): Promise<any>;
    function info(r1csName: any, logger?: any): Promise<any>;
    function print(r1cs: any, syms: any, logger?: any): any;
}

export namespace wtns {
    function calculate(_input: any, wasmFileName: any, wtnsFileName: any): Promise<void>;
    function check(r1csFilename: any, wtnsFilename: any, logger?: any): Promise<any>;
    function debug(
        _input: any,
        wasmFileName: any,
        wtnsFileName: any,
        symName: any,
        options: any,
        logger?: any,
    ): Promise<void>;
    function exportJson(wtnsFileName: any): Promise<any>;
}

export namespace zKey {
    function beacon(
        zkeyNameOld: any,
        zkeyNameNew: any,
        name: string,
        beaconHashStr: string,
        numIterationsExp: number,
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
    function exportJson(zkeyFileName: any): Promise<any>;
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
