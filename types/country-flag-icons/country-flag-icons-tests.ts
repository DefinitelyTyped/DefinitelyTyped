import { countries, hasFlag } from 'country-flag-icons';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

hasFlag('US'); // $ExpectType boolean
hasFlag('ZZ'); // $ExpectType boolean
countries; // $ExpectType string[]
countries.includes('US'); // $ExpectType boolean
countries.includes('ZZ'); // $ExpectType boolean
getUnicodeFlagIcon('US'); // $ExpectType string
getUnicodeFlagIcon('ZZ'); // $ExpectType string
