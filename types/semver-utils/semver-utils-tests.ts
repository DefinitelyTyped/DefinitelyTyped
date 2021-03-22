import { stringify, SemVer, parse } from 'semver-utils';

const version: SemVer = {
    major: '1',
    minor: '0',
    patch: '0',
};

stringify(version); // $ExpectType string
parse('1.0.0'); // $ExpectType SemVer
