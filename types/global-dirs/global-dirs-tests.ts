import * as globalDirs from 'global-dirs';

// $ExpectType string
globalDirs.npm.prefix;
// $ExpectType string
globalDirs.npm.packages;
// $ExpectType string
globalDirs.npm.binaries;

// $ExpectType string
globalDirs.yarn.prefix;
// $ExpectType string
globalDirs.yarn.packages;
// $ExpectType string
globalDirs.yarn.binaries;
