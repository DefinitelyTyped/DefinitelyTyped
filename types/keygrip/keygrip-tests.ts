import * as Keygrip from 'keygrip';

const keys = Keygrip(['123']);
const hash = keys.sign('abc');
