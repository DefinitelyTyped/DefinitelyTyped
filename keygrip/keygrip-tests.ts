import * as Keygrip from 'keygrip';

let keys = Keygrip(['123']);
let hash = keys.sign('abc');
