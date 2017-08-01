import procfs = require("procfs-stats");

const ps = procfs(0);

ps.io((error: Error, io: procfs.Io) => { });
ps.stat((error: Error, stat: procfs.Stat) => { });
ps.statm((error: any, statm: procfs.MemoryStat) => { });
ps.status((error: Error, status: procfs.Status) => { });
ps.env((error: Error, env: string[]) => { });
ps.cwd((error: Error, cwd: string) => { });
ps.argv((error: Error, argv: string[]) => { });
ps.fds((error: Error, fds: string[]) => { });
ps.threads((error: Error, threads: string[]) => { });

const stat = ps.thread(0);

ps.cpu((error: Error, cpus: procfs.Cpu) => { });
ps.meminfo((error: Error, meminfo: procfs.MemoryInfo) => { });
ps.fd("path", (error: Error, fd: procfs.FileDescriptor) => { });
ps.tcp((error: Error, tcp: procfs.Tcp[]) => { });
ps.udp((error: Error, udp: procfs.Udp[]) => { });
ps.unix((error: Error, unix: procfs.UnixSocket[]) => { });
ps.net((error: Error, net: procfs.Net[]) => { });
ps.disk((error: Error, disk: procfs.DiskStat[]) => { });
ps.wifi((error: Error, wifi: procfs.Wifi[]) => { });

const works = ps.works;
