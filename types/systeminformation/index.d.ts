// Type definitions for systeminformation 3.23
// Project: https://github.com/sebhildebrandt/systeminformation
// Definitions by: PixelCrab <https://github.com/PixelcrabAT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function version(): string;

export function time(): Systeminformation.TimeData;

export function system(cb?: (data: Systeminformation.SystemData) => any): Promise<Systeminformation.SystemData>;

export function cpu(cb?: (data: Systeminformation.CpuData) => any): Promise<Systeminformation.CpuData>;

export function cpuFlags(cb?: (data: string) => any): Promise<string>;

export function cpuCache(cb?: (data: Systeminformation.CpuCacheData) => any): Promise<Systeminformation.CpuCacheData>;

export function cpuCurrentspeed(cb?: (data: Systeminformation.CpuCurrentSpeedData) => any): Promise<Systeminformation.CpuCurrentSpeedData>;

export function cpuTemperature(cb?: (data: Systeminformation.CpuTemperatureData) => any): Promise<Systeminformation.CpuTemperatureData>;

export function mem(cb?: (data: Systeminformation.MemData) => any): Promise<Systeminformation.MemData>;

export function memLayout(cb?: (data: Systeminformation.MemLayoutData) => any): Promise<Systeminformation.MemLayoutData>;

export function diskLayout(cb?: (data: Systeminformation.DiskLayoutData) => any): Promise<Systeminformation.DiskLayoutData>;

export function battery(cb?: (data: Systeminformation.BatteryData) => any): Promise<Systeminformation.BatteryData>;

export function graphics(cb?: (data: Systeminformation.GraphicsData) => any): Promise<Systeminformation.GraphicsData>;

export function osInfo(cb?: (data: Systeminformation.OsData) => any): Promise<Systeminformation.OsData>;

export function versions(cb?: (data: Systeminformation.VersionData) => any): Promise<Systeminformation.VersionData>;

export function shell(cb?: (data: string) => any): Promise<string>;

export function users(cb?: (data: Systeminformation.UserData[]) => any): Promise<Systeminformation.UserData[]>;

export function fsSize(cb?: (data: Systeminformation.FsSizeData[]) => any): Promise<Systeminformation.FsSizeData[]>;

export function blockDevices(cb?: (data: Systeminformation.BlockDevicesData[]) => any): Promise<Systeminformation.BlockDevicesData[]>;

export function fsStats(cb?: (data: Systeminformation.FsStatsData) => any): Promise<Systeminformation.FsStatsData>;

export function disksIO(cb?: (data: Systeminformation.DisksIoData) => any): Promise<Systeminformation.DisksIoData>;

export function networkInterfaces(cb ?: (data: Systeminformation.NetInterfacesData[]) => any): Promise<Systeminformation.NetInterfacesData[]>;

export function networkInterfaceDefault(cb ?: (data: string) => any): Promise<string>;

export function networkStats(iface?: string, cb?: (data: Systeminformation.NetStatsData) => any): Promise<Systeminformation.NetStatsData>;

export function networkConnections(cb?: (data: Systeminformation.NetConnectionsData[]) => any): Promise<Systeminformation.NetConnectionsData[]>;

export function inetChecksite(url: string, cb?: (data: Systeminformation.NetChecksiteData) => any): Promise<Systeminformation.NetChecksiteData>;

export function inetLatency(host?: string, cb?: (data: number) => any): Promise<number>;

export function currentLoad(cb?: (data: Systeminformation.CurrentLoadData) => any): Promise<Systeminformation.CurrentLoadData>;

export function fullLoad(cb?: (data: number) => any): Promise<number>;

export function processes(cb?: (data: Systeminformation.ProcessesData) => any): Promise<Systeminformation.ProcessesData>;

export function processLoad(processName: string, cb?: (data: Systeminformation.ProcessesProcessLoadData) => any): Promise<Systeminformation.ProcessesProcessLoadData>;

export function services(serviceName: string, cb?: (data: Systeminformation.ServicesData[]) => any): Promise<Systeminformation.ServicesData[]>;

export function dockerContainers(all?: boolean, cb?: (data: Systeminformation.DockerContainerData[]) => any): Promise<Systeminformation.DockerContainerData[]>;

export function dockerContainerStats(id?: string, cb?: (data: any) => any): Promise<any>;

export function dockerContainerProcesses(id?: string, cb?: (data: any) => any): Promise<any>;

export function dockerAll(cb?: (data: any) => any): Promise<any>;

export function getStaticData(cb?: (data: Systeminformation.StaticData) => any): Promise<Systeminformation.StaticData>;

export function getDynamicData(srv?: string, iface?: string, cb?: (data: any) => any): Promise<any>;

export function getAllData(srv?: string, iface?: string, cb?: (data: any) => any): Promise<any>;

export namespace Systeminformation {
    interface StaticData {
        version: string;
        system: SystemData;
        os: OsData;
        versions: VersionData;
        cpu: CpuData;
        graphics: GraphicsData;
        net: NetInterfacesData[];
        memLayout: MemLayoutData[];
        diskLayout: DiskLayoutData[];
    }

    interface TimeData {
        current: string;
        uptime: string;
        timezone: string;
        timezoneName: string;
    }

    interface SystemData {
        manufacturer: string;
        model: string;
        version: string;
        serial: string;
        uuid: string;
    }

    interface CpuData {
        manufacturer: string;
        brand: string;
        vendor: string;
        family: string;
        model: string;
        stepping: string;
        revision: string;
        speed: string;
        speedmin: string;
        speedmax: string;
        cores: number;
        cache: CpuCacheData;
        flags: string;
    }

    interface CpuCacheData {
        l1d: number;
        l1i: number;
        l2: number;
        l3: number;
    }

    interface CpuCurrentSpeedData {
        avg: string;
        min: string;
        max: string;
    }

    interface CpuTemperatureData {
        main: string;
        cores: string;
        max: string;
    }

    interface MemData {
        total: number;
        free: number;
        used: number;
        active: number;
        available: number;
        buffcache: number;
        swaptotal: number;
        swapused: number;
        swapfree: number;
    }

    interface MemLayoutData {
        size: number;
        bank: string;
        type: string;
        clockSpeed: number;
        formFactor: string;
        partNum: string;
        serialNum: string;
        voltageConfigured: number;
        voltageMin: number;
        voltageMax: number;
    }

    interface DiskLayoutData {
        type: string;
        name: string;
        vendor: string;
        size: number;
        bytesPerSector: number;
        totalCylinders: number;
        totalHeads: number;
        totalSectors: number;
        totalTracks: number;
        tracksPerCylinder: number;
        sectorsPerTrack: number;
        firmwareRevision: string;
        serialNum: string;
        interfaceType: string;
    }

    interface BatteryData {
        hasbatter: boolean;
        cyclecount: number;
        ischarging: boolean;
        maxcapacity: number;
        currentcapacity: number;
        percent: number;
    }

    interface GraphicsData {
        controllers: GraphicsControllerInfo[];
        displays: GraphicsDisplayInfo[];
    }

    interface GraphicsControllerInfo {
        vendor: string;
        model: string;
        bus: string;
        vram: number;
        vramDynamic: boolean;
    }

    interface GraphicsDisplayInfo {
        connection: string;
        main: boolean;
        builtin: boolean;
        model: string;
        resolutionx: number;
        resolutiony: number;
        sizex: number;
        sizey: number;
        pixeldepth: number;
    }

    interface OsData {
        platform: string;
        distro: string;
        release: string;
        codename: string;
        kernel: string;
        arch: string;
        hostname: string;
        logofile: string;
    }

    interface VersionData {
        kernel: string;
        node: string;
        v8: string;
        npm: string;
        pm2: string;
        openssl: string;
    }

    interface UserData {
        user: string;
        tty: string;
        date: string;
        time: string;
        ip: string;
        command: string;
    }

    interface FsSizeData {
        fs: string;
        type: string;
        size: number;
        used: number;
        use: number;
        mount: string;
    }

    interface BlockDevicesData {
        name: string;
        type: string;
        fstype: string;
        mount: string;
        size: number;
        physical: string;
        uuid: string;
        label: string;
        model: string;
        serial: string;
        removable: boolean;
        protocol: string;
    }

    interface FsStatsData {
        rx: number;
        wx: number;
        tx: number;
        rx_sec: number;
        wx_sec: number;
        tx_sec: number;
        ms: number;
    }

    interface DisksIoData {
        rIO: number;
        wIO: number;
        tIO: number;
        rIO_sec: number;
        wIO_sec: number;
        tIO_sec: number;
        ms: number;
    }

    interface NetInterfacesData {
        iface: string;
        ip4: string;
        ip6: string;
        mac: string;
        internal: boolean;
    }

    interface NetStatsData {
        iface: string;
        rx: number;
        tx: number;
        rx_sec: number;
        tx_sec: number;
        ms: number;
    }

    interface NetConnectionsData {
        protocol: string;
        localaddress: string;
        localport: string;
        peeraddress: string;
        peerport: string;
        state: string;
    }

    interface NetChecksiteData {
        url: string;
        ok: boolean;
        status: number;
        ms: number;
    }

    interface CurrentLoadData {
        avgload: number;
        currentload: number;
        currentload_user: number;
        currentload_nice: number;
        currentload_system: number;
        currentload_irq: number;
        cpus: CurrentLoadCpuData[];
    }

    interface CurrentLoadCpuData {
        load: number;
        load_user: number;
        load_nice: number;
        load_system: number;
        load_irq: number;
    }

    interface ProcessesData {
        all: number;
        running: number;
        blocked: number;
        sleeping: number;
        list: ProcessesProcessData[];
    }

    interface ProcessesProcessData {
        pid: number;
        pcpu: number;
        pcpuu: number;
        pcpus: number;
        pmem: number;
        priority: number;
        mem_vsz: number;
        mem_rss: number;
        nice: number;
        started: string;
        state: string;
        tty: string;
        user: string;
        command: string;
    }

    interface ProcessesProcessLoadData {
        proc: string;
        pid: number;
        cpu: number;
        mem: number;
    }

    interface ServicesData {
        name: string;
        running: boolean;
        pcpu: number;
        pmem: number;
    }

    interface DockerContainerData {
        id: string;
        name: string;
        image: string;
        imageID: string;
        command: string;
        created: number;
        state: string;
        ports: number[];
        mounts: DockerContainerMountData[];
    }

    interface DockerContainerMountData {
        Type: string;
        Source: string;
        Destination: string;
        Mode: string;
        RW: boolean;
        Propagation: string;
    }

    interface DockerContainerStatsData {
        id: string;
        mem_usage: number;
        mem_limit: number;
        mem_percent: number;
        cpu_percent: number;
        netIO: {
            rx: number;
            wx: number;
        };
        blockIO: {
            r: number;
            w: number;
        };
        cpu_stats: {
            cpu_usage: {
                total_usage: number;
                usage_in_kernelmode: number;
                usage_in_usermode: number;
            },
            throttling_data: {
                periods: number;
                throttled_periods: number;
                throttled_time: number;
            }
        };
        precpu_stats: {
            cpu_usage: {
                total_usage: number;
                usage_in_kernelmode: number;
                usage_in_usermode: number;
            },
            throttling_data: {
                periods: number;
                throttled_periods: number;
                throttled_time: number;
            }
        };
        memory_stats: {
            usage: number;
            max_usage: number;
            stats: {
                active_anon: number;
                active_file: number;
                cache: number;
                dirty: number;
                hierarchical_memory_limit: number;
                inactive_anon: number;
                inactive_file: number;
                mapped_file: number;
                pgfault: number;
                pgmajfault: number;
                pgpgin: number;
                pgpgout: number;
                rss: number;
                rss_huge: number;
                total_active_anon: number;
                total_active_file: number;
                total_cache: number;
                total_dirty: number;
                total_inactive_anon: number;
                total_inactive_file: number;
                total_mapped_file: number;
                total_pgfault: number;
                total_pgmajfault: number;
                total_pgpgin: number;
                total_pgpgout: number;
                total_rss: number;
                total_rss_huge: number;
                total_unevictable: number;
                total_writeback: number;
                unevictable: number;
                writeback: number;
            },
            limit: number;
        };
        networks: any;
    }

    interface DockerContainerAllData extends DockerContainerData, DockerContainerStatsData {
        pids: number;
        processes: DockerContainerStatsProcessesData[];
    }

    interface DockerContainerStatsProcessesData {
        pid_host: string;
        ppid: string;
        pgid: string;
        user: string;
        ruser: string;
        group: string;
        rgroup: string;
        stat: string;
        time: string;
        elapsed: string;
        nice: string;
        rss: string;
        vsz: string;
        command: string;
    }
}
