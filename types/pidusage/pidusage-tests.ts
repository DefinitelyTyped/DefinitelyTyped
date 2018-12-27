import pidusage, { Stat } from 'pidusage';

let cpu: number;
let memory: number;
let ppid: number;
let pid: number;
let ctime: number;
let elapsed: number;
let timestamp: number;

pidusage(1, (err: Error | null, stats: Stat) => {
    cpu = stats.cpu;
    memory = stats.memory;
    ppid = stats.ppid;
    pid = stats.pid;
    ctime = stats.ctime;
    elapsed = stats.elapsed;
    timestamp = stats.timestamp;
});

pidusage('two', (err: Error | null, stats: Stat) => {
    cpu = stats.cpu;
    memory = stats.memory;
    ppid = stats.ppid;
    pid = stats.pid;
    ctime = stats.ctime;
    elapsed = stats.elapsed;
    timestamp = stats.timestamp;
});

pidusage([1, 'two'], (err: Error | null, stats: { [key: string]: Stat }) => {
    const one: Stat = stats[1];
    const two: Stat = stats.two;
});

const stats_1: Promise<Stat> = pidusage(1);
const stats_two: Promise<Stat> = pidusage('two');
const stats_obj: Promise<{ [key: string]: Stat }> = pidusage([1, 'two']);
