import * as Keygrip from 'keygrip';

const keys = Keygrip(['123']);

new Keygrip(['456']);

const readonlyArray: ReadonlyArray<string> = ['789'];
Keygrip(readonlyArray);

const hash = keys.sign('abc');
const index = keys.index('def', 'ghi');
const verify = keys.verify('jkl', 'mno');
