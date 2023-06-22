import isDomainName = require('is-domain-name');

isDomainName('localhost'); // $ExpectType boolean
isDomainName('localhost.', true); // $ExpectType boolean
