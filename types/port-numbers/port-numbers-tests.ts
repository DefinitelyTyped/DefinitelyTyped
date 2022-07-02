import { getPort, getService } from 'port-numbers';

getPort('gopher');
getPort('domain', 'udp');
getPort('unknown-port');
getService(80);
getService(123, 'udp');
getService(100000);
