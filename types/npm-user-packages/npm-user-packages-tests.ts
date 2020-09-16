import npmUserPackages = require('npm-user-packages');

npmUserPackages('kevva'); // $ExpectType Promise<PackageData[]>
