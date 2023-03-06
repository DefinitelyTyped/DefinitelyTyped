import { isValid, validate, validForDate } from 'danish-ssn';

isValid('0306744208'); // $ExpectType boolean
validate('0306744208'); // $ExpectType string
validForDate(new Date()); // $ExpectType string[]
