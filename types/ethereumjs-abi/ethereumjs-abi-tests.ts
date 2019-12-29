import * as abi from 'ethereumjs-abi';

const types = ['uint256', 'string'];
const values = [0, 'Alice'];
const signature = 'foo(uint256,string):(uint256)';
abi.eventID('foo', types);
abi.methodID('foo', types);
abi.soliditySHA3(types, values);
abi.soliditySHA256(types, values);
abi.solidityRIPEMD160(types, values);
const simpleEncoded = abi.simpleEncode(signature, ...values);
abi.simpleDecode(signature, simpleEncoded);
const rawEncoded = abi.rawEncode(types, values);
abi.rawDecode(types, rawEncoded);
abi.solidityPack(types, values);
const serpentSig = abi.toSerpent(['int256', 'bytes']);
abi.fromSerpent(serpentSig);
