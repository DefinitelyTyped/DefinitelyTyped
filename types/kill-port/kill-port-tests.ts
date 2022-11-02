import killPort = require('kill-port');

killPort(42); // $ExpectType Promise<SuccessfulExec>
killPort(42, 'tcp'); // $ExpectType Promise<SuccessfulExec>
killPort(42, 'udp'); // $ExpectType Promise<SuccessfulExec>
