/// <reference path="credential.d.ts" />

import * as credential from 'credential';

credential.hash('password', function(err: Error, hash: string) {
	if (err) console.error(err);
	else console.log(hash);
});

const hash = '{}';
const password = 'test';

credential.verify(hash, password, function(err: Error, isValid: boolean) {
	if (err) console.error(err);
	else console.log(isValid ? 'Password match' : 'Incorrect password');
});
