import doiRegex = require('doi-regex');

// $ExpectType RegExp
doiRegex();

// $ExpectType RegExp
doiRegex({exact: true});

// $ExpectType RegExp
doiRegex.declared();

// $ExpectType RegExp
doiRegex.declared({exact: true});

// $ExpectType RegExpExecArray | null
doiRegex.groups('some-doi');

// $ExpectType RegExp
doiRegex.resolvePath();

// $ExpectType RegExp
doiRegex.resolvePath({protocol: true});
