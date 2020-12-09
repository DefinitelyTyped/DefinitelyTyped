import { check, checkPassword, rateOfUsage } from 'dumb-passwords';

check('some-value'); // $ExpectType boolean
checkPassword('some-value'); // $ExpectType boolean

const { frequency, message, password } = rateOfUsage('someValue');

frequency; // $ExpectType number
message; // $ExpectType string | undefined
password; // $ExpectType string
