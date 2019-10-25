export default class OsCmd {
    topCpu(): () => Promise<string>;

    topMem: () => Promise<string>;
    vmstats: () => Promise<string>;
    processesUsers: () => Promise<string>;
    diskUsage: () => Promise<string>;
    who: () => Promise<string>;
    whoami: () => Promise<string>;
    openPorts: () => Promise<string>;
    ifconfig: () => Promise<string>;
}
