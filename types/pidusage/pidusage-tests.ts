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

let stats: Promise<pidusage.Stat>;

stats = pidusage([1, 2]);
stats = pidusage('string');
stats = pidusage(['string', 'string']);
