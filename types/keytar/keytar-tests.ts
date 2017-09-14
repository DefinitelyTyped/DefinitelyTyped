
import keytar = require('keytar');

let setResult: Promise<void>;
setResult = keytar.setPassword('keytar-tests', 'username', 'password');

let success: Promise<boolean>;
success = keytar.deletePassword('keytar-tests', 'username');

let password: Promise<string | null>;

password = keytar.findPassword('keytar-tests');
password = keytar.getPassword('keytar-tests', 'username');
