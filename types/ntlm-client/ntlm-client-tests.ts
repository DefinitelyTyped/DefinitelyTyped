import ntlm = require('ntlm-client');

const type2 = {
  flags: 0,
  encoding: '',
  version: 3,
  challenge: new Buffer(''),
  targetName: '',
  targetInfo: {
    parsed: {
      DOMAIN: '',
      SERVER: '',
      DNS: '',
      FQDN: '',
      PARENT_DNS: '',
    },
    buffer: new Buffer(''),
  }
};

// $ExpectType string
ntlm.createType1Message('', '');

// $ExpectType string
ntlm.createType3Message(type2, '', '', '', '');

// $ExpectType NtlmType2
ntlm.decodeType2Message('');
