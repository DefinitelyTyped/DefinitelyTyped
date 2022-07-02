import insp, { install } from 'inspectlet-es';

install(12345678); // $ExpectType void
insp(['identify', "john@example.com"]); // $ExpectType number
