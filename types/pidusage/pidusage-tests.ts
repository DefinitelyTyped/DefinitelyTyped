import pidusage = require('pidusage');

let cpu: number;
let memory: number;
let ppid: number;
let pid: number;
let ctime: number;
let elapsed: number;
let timestamp: number;

pidusage(1, (err: Error | null, stats: pidusage.Status) => {
    cpu = stats.cpu;
    memory = stats.memory;
    ppid = stats.ppid;
    pid = stats.pid;
    ctime = stats.ctime;
    elapsed = stats.elapsed;
    timestamp = stats.timestamp;
});

pidusage('two', {}, (err: Error | null, stats: pidusage.Status) => {
    cpu = stats.cpu;
    memory = stats.memory;
    ppid = stats.ppid;
    pid = stats.pid;
    ctime = stats.ctime;
    elapsed = stats.elapsed;
    timestamp = stats.timestamp;
});

pidusage([1, 'two'], (err: Error | null, stats: { [key: string]: pidusage.Status }) => {
    const one: pidusage.Status = stats[1];
    const two: pidusage.Status = stats.two;
});

pidusage([1, 'two'], {}, (err: Error | null, stats: { [key: string]: pidusage.Status }) => {
    const one: pidusage.Status = stats[1];
    const two: pidusage.Status = stats.two;
});

const stats_1: Promise<pidusage.Status> = pidusage(1);
const stats_two: Promise<pidusage.Status> = pidusage('two', {});

const stats_obj: Promise<{ [key: string]: pidusage.Status }> = pidusage([1, 'two']);
const stats_obj_config: Promise<{ [key: string]: pidusage.Status }> = pidusage([1, 'two'], {});
