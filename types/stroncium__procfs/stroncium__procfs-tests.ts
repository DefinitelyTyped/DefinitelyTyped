import { procfs, Procfs, ProcfsError } from '@stroncium/procfs';

new Procfs('');

// @ts-expect-error
new ProcfsError();

// @ts-expect-error
new ProcfsError('');

new ProcfsError('EPARSE');
new ProcfsError('EPARSE', '');
new ProcfsError('EPARSE', '', '');

procfs.processMountinfo();
procfs.processIo();
procfs.processUidMap();
procfs.processGidMap();
procfs.processEnviron();
procfs.processOomScore();
procfs.processTimerslackNs();
procfs.processCmdline();
procfs.processAutogroup();
procfs.processStatm();
procfs.processComm();
procfs.processCgroups();
procfs.processPersonality();
procfs.processCpuset();
procfs.processLimits();
procfs.processStat();
procfs.processStatus();
procfs.processFds();
procfs.processThreads();
procfs.processFdinfo(0);
procfs.processFd(0);
procfs.processExe();
procfs.processCwd();
procfs.processNetDev();
procfs.processNetWireless();
procfs.processNetUnix();
procfs.processNetTcp4();
procfs.processNetUdp4();
procfs.processNetTcp6();
procfs.processNetUdp6();
procfs.netDev();
procfs.netWireless();
procfs.netUnix();
procfs.netTcp4();
procfs.netUdp4();
procfs.netTcp6();
procfs.netUdp6();
procfs.cpuinfo();
procfs.loadavg();
procfs.uptime();
procfs.version();
procfs.cmdline();
procfs.swaps();
procfs.stat();
procfs.devices();
procfs.filesystems();
procfs.diskstats();
procfs.partitions();
procfs.meminfo();
procfs.processes();
procfs.config();
procfs.cgroups();
procfs.devIdGetMinor(0);
procfs.devIdGetMajor(0);
procfs.devIdFromMajorMinor(0, 0);
