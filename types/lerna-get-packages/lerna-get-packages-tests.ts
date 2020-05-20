import lernaGetPackages = require('lerna-get-packages');

const packages = lernaGetPackages('.');
packages.map(p => p.location);
