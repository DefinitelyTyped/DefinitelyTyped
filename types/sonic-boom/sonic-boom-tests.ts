import SonicBoom from 'sonic-boom';
const sonic = new SonicBoom(1);

sonic.write('hello sonic\n');

sonic.flush();

sonic.flushSync();

sonic.end();

sonic.destroy();
