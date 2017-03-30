
import keytar = require('keytar');

let success: boolean = false;

success = keytar.addPassword('keytar-tests', 'username', 'password');
success = keytar.deletePassword('keytar-tests', 'username');
success = keytar.replacePassword('keytar-tests', 'username', 'password');

let password: string = '';

password = keytar.findPassword('keytar-tests');
password = keytar.getPassword('keytar-tests', 'username');
