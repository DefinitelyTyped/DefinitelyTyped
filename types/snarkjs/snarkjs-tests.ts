import { groth16 } from 'snarkjs';

// $ExpectType Promise<any>
groth16.prove('file', 'file', {});
groth16.prove('file', 'file');
