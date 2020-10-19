import SMB2 = require('smb2');

constsmb2Client = new SMB2({
  share:'\\\\000.000.000.000\\c$',
  domain:'DOMAIN',
  username:'username',
  password:'password!'
});
