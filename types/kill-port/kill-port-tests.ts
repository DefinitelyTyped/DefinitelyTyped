import kill from 'kill-port';

// $ExpectType Promise<void>
kill(10001, 'udp');
// $ExpectType Promise<void>
kill(10002, 'tcp');
// $ExpectError
kill(10003, 'wonderland');
