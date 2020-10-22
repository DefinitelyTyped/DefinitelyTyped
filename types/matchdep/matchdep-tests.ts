import matchdep = require('matchdep');

const packageJson = {};

const singlePattern = matchdep.filter('mini*');
const devDependencies = matchdep.filterDev('grunt-contrib-*', './package.json');
const peerDependencies = matchdep.filterPeer('foo-{bar,baz}', './some-other.json');
const all = matchdep.filterAll('*', packageJson);
const arrayPaterns = matchdep.filterAll(['*', '!grunt']);
