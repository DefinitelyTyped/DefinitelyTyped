
import keytar = require('keytar');

let success: Promise<string>;

success = keytar.setPassword('keytar-tests', 'username', 'password');
success = keytar.deletePassword('keytar-tests', 'username');

let password: Promise<string>;

password = keytar.findPassword('keytar-tests');
password = keytar.getPassword('keytar-tests', 'username');
