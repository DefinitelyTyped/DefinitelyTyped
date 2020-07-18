import * as os from 'os-utils';

console.log('\n');
console.log('OS Utils');
console.log('\n');

console.log('Platform: ' + os.platform());
console.log('CPUs: ' + os.cpuCount());
console.log('\n');

console.log('System Uptime (s): ' + os.sysUptime());
console.log('Process Uptime (s): ' + os.processUptime());
console.log('\n');

console.log('Free Memory (Kb): ' + os.freemem());
console.log('total Memory (Kb): ' + os.totalmem());
console.log('Free Memory (%): ' + os.freememPercentage());
console.log('\n');

console.log('Load Usage (%): ' + os.loadavg());
console.log('Load Usage 1 (%): ' + os.loadavg(1));
console.log('Load Usage 5 (%): ' + os.loadavg(5));
console.log('Load Usage 15 (%): ' + os.loadavg(15));
console.log('\n');

os.cpuUsage((v) => {
    console.log('CPU Usage (%): ' + v);
});

os.cpuFree((v) => {
    console.log('CPU Free (%): ' + v);
});

console.log('\n');
console.log('OS Utils');
console.log('\n');

console.log('\n');
