import { Buffer as SaferBuffer } from 'safer-buffer';

SaferBuffer; // $ExpectType typeof Buffer
SaferBuffer.BYTES_PER_ELEMENT; // $ExpectType number
