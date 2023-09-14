import { groth16, fflonk, plonk, r1cs, wtns, powersOfTau, zKey } from 'snarkjs';

const _any = 'any';

// ### groth16

// $ExpectType Promise<any>
groth16.prove(_any, _any, _any);
groth16.prove(_any, _any);

// $ExpectType Promise<any>
groth16.exportSolidityCallData(_any, _any);

// $ExpectType Promise<any>
groth16.fullProve(_any, _any, _any, _any);
groth16.fullProve(_any, _any, _any);

// $ExpectType Promise<boolean>
groth16.verify(_any, _any, _any, _any);
groth16.verify(_any, _any, _any);

// ### fflonk

// $ExpectType Promise<any>
fflonk.prove(_any, _any, _any);
fflonk.prove(_any, _any);

// $ExpectType Promise<any>
fflonk.exportSolidityVerifier(_any, _any, _any);
fflonk.exportSolidityVerifier(_any, _any);

// $ExpectType Promise<any>
fflonk.exportSolidityCallData(_any, _any);

// $ExpectType Promise<any>
fflonk.fullProve(_any, _any, _any, _any);
fflonk.fullProve(_any, _any, _any);

// $ExpectType Promise<any>
fflonk.setup(_any, _any, _any, _any);
fflonk.setup(_any, _any, _any);

// $ExpectType Promise<boolean>
fflonk.verify(_any, _any, _any, _any);
fflonk.verify(_any, _any, _any);

// ### plonk

// $ExpectType Promise<any>
plonk.prove(_any, _any, _any);
plonk.prove(_any, _any);

// $ExpectType Promise<any>
plonk.exportSolidityCallData(_any, _any);

// $ExpectType Promise<any>
plonk.fullProve(_any, _any, _any, _any);
plonk.fullProve(_any, _any, _any);

// $ExpectType Promise<any>
plonk.setup(_any, _any, _any, _any);
plonk.setup(_any, _any, _any);

// $ExpectType Promise<boolean>
plonk.verify(_any, _any, _any, _any);
plonk.verify(_any, _any, _any);

// ### r1cs

// $ExpectType Promise<any>
r1cs.exportJson(_any, _any);
r1cs.exportJson(_any);

// $ExpectType Promise<any>
r1cs.info(_any, _any);
r1cs.info(_any);

// $ExpectType any
r1cs.print(_any, _any, _any);
r1cs.print(_any, _any);

// ### wtns

// $ExpectType Promise<any>
wtns.exportJson(_any);

// $ExpectType Promise<void>
wtns.calculate(_any, _any, _any);

// $ExpectType Promise<any>
wtns.check(_any, _any, _any);
wtns.check(_any, _any);

// $ExpectType Promise<void>
wtns.debug(_any, _any, _any, _any, _any, _any);
wtns.debug(_any, _any, _any, _any, _any);

// ### powersOfTau

// $ExpectType Promise<any>
powersOfTau.exportJson(_any, _any);
powersOfTau.exportJson(_any);

// $ExpectType Promise<boolean>
powersOfTau.verify(_any, _any, _any, _any);
powersOfTau.verify(_any, _any, _any);

// $ExpectType Promise<any>
powersOfTau.beacon(_any, _any, 'name', 'str', 3, _any);
powersOfTau.beacon(_any, _any, 'name', 'str', '3', _any);
powersOfTau.beacon(_any, _any, 'name', 'str', 3);

// $ExpectType Promise<void>
powersOfTau.challengeContribute(_any, _any, _any, _any, _any);
powersOfTau.challengeContribute(_any, _any, _any, _any);

// $ExpectType Promise<any>
powersOfTau.contribute(_any, _any, 'name', _any, _any);
powersOfTau.contribute(_any, _any, 'name', _any);

// $ExpectType Promise<any>
powersOfTau.exportChallenge(_any, _any, _any);
powersOfTau.exportChallenge(_any, _any);

// $ExpectType Promise<any>
powersOfTau.importResponse(_any, _any, _any, 'name', _any, _any);
powersOfTau.importResponse(_any, _any, _any, 'name', _any);
powersOfTau.importResponse(_any, _any, _any, 'name');
powersOfTau.importResponse(_any, _any, _any);

// $ExpectType Promise<void>
powersOfTau.convert(_any, _any, _any);
powersOfTau.convert(_any, _any);

// $ExpectType Promise<any>
powersOfTau.newAccumulator(_any, 3, _any, _any);
powersOfTau.newAccumulator(_any, 4, _any);

// $ExpectType Promise<void>
powersOfTau.preparePhase2(_any, _any, _any);
powersOfTau.preparePhase2(_any, _any);

// $ExpectType Promise<any>
powersOfTau.truncate(_any, _any, _any);
powersOfTau.truncate(_any, _any);

// ### zKey

// $ExpectType Promise<any>
zKey.exportJson(_any);

// $ExpectType Promise<any>
zKey.beacon(_any, _any, 'name', 'str', 3, _any);
zKey.beacon(_any, _any, 'name', 'str', '3', _any);
zKey.beacon(_any, _any, 'name', 'str', 3);

// $ExpectType Promise<any>
zKey.contribute(_any, _any, 'name', _any, _any);
zKey.contribute(_any, _any, 'name', _any);

// $ExpectType Promise<any>
zKey.bellmanContribute(_any, _any, _any, _any, _any);
zKey.bellmanContribute(_any, _any, _any, _any);

// $ExpectType Promise<void>
zKey.exportBellman(_any, _any, _any);
zKey.exportBellman(_any, _any);

// $ExpectType Promise<any>
zKey.exportSolidityVerifier(_any, _any, _any);
zKey.exportSolidityVerifier(_any, _any);

// $ExpectType Promise<any>
zKey.importBellman(_any, _any, _any, 'name', _any);
zKey.importBellman(_any, _any, _any, 'name');
zKey.importBellman(_any, _any, _any);

// $ExpectType Promise<any>
zKey.exportVerificationKey(_any, _any);
zKey.exportVerificationKey(_any);

// $ExpectType Promise<any>
zKey.newZKey(_any, _any, _any, _any);
zKey.newZKey(_any, _any, _any);

// $ExpectType Promise<boolean>
zKey.verifyFromInit(_any, _any, _any, _any);
zKey.verifyFromInit(_any, _any, _any);

// $ExpectType Promise<boolean>
zKey.verifyFromR1cs(_any, _any, _any, _any);
zKey.verifyFromR1cs(_any, _any, _any);
