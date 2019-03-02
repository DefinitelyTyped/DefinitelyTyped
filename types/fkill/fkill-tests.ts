import fkill = require('fkill');

fkill(1337); // $ExpectType Promise<void>
fkill('Safari'); // $ExpectType Promise<void>
fkill([1337, 'Safari', ':8080']); // $ExpectType Promise<void>
