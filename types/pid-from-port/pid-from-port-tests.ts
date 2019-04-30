import pidFromPort = require('pid-from-port');

// $ExpectType Promise<number>
pidFromPort(8080);

// $ExpectType Promise<Map<number, number>>
pidFromPort.all([8080, 22]);

// $ExpectType Promise<Map<number, number>>
pidFromPort.list();
