import npmKeyword = require('npm-keyword');

npmKeyword('gulpplugin'); // $ExpectType Promise<PackageDescriptor[]>
npmKeyword('gulpplugin', { size: 10 }); // $ExpectType Promise<PackageDescriptor[]>
npmKeyword.names('gulpplugin'); // $ExpectType Promise<string[]>
npmKeyword.names('gulpplugin', { size: 10 }); // $ExpectType Promise<string[]>
npmKeyword.count('gulpplugin'); // $ExpectType Promise<number>
