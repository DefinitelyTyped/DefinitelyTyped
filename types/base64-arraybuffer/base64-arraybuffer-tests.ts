import { encode, decode } from 'base64-arraybuffer';

encode(new Float32Array([1, 2, 3]).buffer); // $ExpectType string
decode('AACAPwAAAEAAAEBA'); // $ExpectType ArrayBuffer
