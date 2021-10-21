import ErrorTypes from 'error-cause';

declare const Ø: any;

// $ExpectType "Error"
(Ø as ErrorTypes)[0];
