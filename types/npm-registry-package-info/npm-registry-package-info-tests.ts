import pkginfo = require('npm-registry-package-info');

const opts: pkginfo.Options = {
    latest: true,
    packages: ['dstructs-array', 'flow-map', 'utils-merge2'],
    port: 80,
    protocol: 'http',
    registry: 'my.favorite.npm/registry',
};

pkginfo(opts, (error, data) => {
  data;  // $ExpectType Data
});

const pkgs = ['dstructs-matrix', 'compute-stdev', 'compute-variance'];

const get = pkginfo.factory({ packages: pkgs }, (error, data) => {
  data;  // $ExpectType Data
});

get();
