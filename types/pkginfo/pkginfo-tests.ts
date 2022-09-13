import pkginfo = require('pkginfo');

pkginfo(module);
pkginfo(module, 'version', 'author');
pkginfo(module, ['version', 'author']);
pkginfo(module, { include: [ 'version', 'author' ] });

const pkg1 = pkginfo.find(module);
const pkg2 = pkginfo.find(module, '.');

const readRes1 = pkginfo.read(module);
const readRes2 = pkginfo.read(module, '.');
