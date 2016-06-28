/// <reference path="keytar.d.ts" />

import keytar = require('keytar');

keytar.addPassword('keytar-tests', 'username', 'password');
keytar.deletePassword('keytar-tests', 'username');
keytar.findPassword('keytar-tests');
keytar.getPassword('keytar-tests', 'username');
keytar.replacePassword('keytar-tests', 'username', 'password');
