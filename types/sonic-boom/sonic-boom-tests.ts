import SonicBoom = require('sonic-boom');
const sonic = new SonicBoom(1);

sonic.write('hello sonic\n');

sonic.flush();

sonic.flushSync();

sonic.reopen();

sonic.end();

sonic.destroy();

const extraSonic = new SonicBoom(1, 0, true);

extraSonic.write('extra sonic\n');
