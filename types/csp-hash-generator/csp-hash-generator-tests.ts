import cspHashGenerator = require('csp-hash-generator');

// Handle options param
cspHashGenerator('div{color:red}');
cspHashGenerator('console.log("test")');
cspHashGenerator('div{color:red}', {algorithm: 'sha256'});
cspHashGenerator('div{color:blue}', {algorithm: 'sha512'});
