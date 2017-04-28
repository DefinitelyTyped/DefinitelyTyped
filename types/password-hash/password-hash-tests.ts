
'use strict';

import {generate, verify, isHashed} from 'password-hash';

let password = 'raw-password';
let hashed: string;

hashed = generate(password);
hashed = generate(password, {algorithm: 'sha256'});
hashed = generate(password, {saltLength: 10});
hashed = generate(password, {iterations: 11});
hashed = generate(password, {algorithm: 'sha512', saltLength: 9, iterations: 11});

let isOk: boolean;

isOk = verify(password, hashed);
isOk = isHashed(password);
