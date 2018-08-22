import * as pidusage from 'pidusage';

let cpu: number;
let memory: number;
let ppid: number;
let pid: number;
let ctime: number;
let elapsed: number;
let timestamp: number;

pidusage(1, (err: Error | null, stats: pidusage.Stat) => {
    cpu = stats.cpu;
    memory = stats.memory;
    ppid = stats.ppid;
    pid = stats.pid;
    ctime = stats.ctime;
    elapsed = stats.elapsed;
    timestamp = stats.timestamp;
});

pidusage('two', (err: Error | null, stats: pidusage.Stat) => {
    cpu = stats.cpu;
    memory = stats.memory;
    ppid = stats.ppid;
    pid = stats.pid;
    ctime = stats.ctime;
    elapsed = stats.elapsed;
    timestamp = stats.timestamp;
});

pidusage([1, 'two'], (err: Error | null, stats: { [key: string]: pidusage.Stat }) => {
    const one: pidusage.Stat = stats[1];
    const two: pidusage.Stat = stats.two;
});

const stats_1: Promise<pidusage.Stat> = pidusage(1);
const stats_two: Promise<pidusage.Stat> = pidusage('two');
const stats_obj: Promise<{ [key: string]: pidusage.Stat }> = pidusage([1, 'two']);
