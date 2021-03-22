import { is, max, maxSatisfying } from 'semver-stable';

is('1.0.0'); // $ExpectedType boolean
max(['1.0.0']); // $ExpectedType string
maxSatisfying(['1.0.0'], '1.0.0'); // $ExpectedType string
