import * as systeminformation from "systeminformation";

systeminformation.version(); // $ExpectType string
systeminformation.time(); // $ExpectType TimeData
systeminformation.system(); // $ExpectType Promise<SystemData>
systeminformation.cpu(); // $ExpectType Promise<CpuData>
systeminformation.cpuFlags(); // $ExpectType Promise<string>
systeminformation.cpuCache(); // $ExpectType Promise<CpuCacheData>
systeminformation.cpuCurrentspeed(); // $ExpectType Promise<CpuCurrentSpeedData>
systeminformation.cpuTemperature(); // $ExpectType Promise<CpuTemperatureData>
systeminformation.mem(); // $ExpectType Promise<MemData>
systeminformation.memLayout(); // $ExpectType Promise<MemLayoutData>
systeminformation.diskLayout(); // $ExpectType Promise<DiskLayoutData>
systeminformation.battery(); // $ExpectType Promise<BatteryData>
systeminformation.graphics(); // $ExpectType Promise<GraphicsData>
systeminformation.osInfo(); // $ExpectType Promise<OsData>

systeminformation.versions()
    .then((versions) => {
        versions.kernel; // $ExpectType string
        versions.node; // $ExpectType string
        versions.npm; // $ExpectType string
        versions.openssl; // $ExpectType string
        versions.pm2; // $ExpectType string
        versions.v8; // $ExpectType string
    });

systeminformation.shell(); // $ExpectType Promise<string>
systeminformation.users(); // $ExpectType Promise<UserData[]>
systeminformation.fsSize(); // $ExpectType Promise<FsSizeData[]>
systeminformation.blockDevices(); // $ExpectType Promise<BlockDevicesData[]>
systeminformation.fsStats(); // $ExpectType Promise<FsStatsData>
systeminformation.disksIO(); // $ExpectType Promise<DisksIoData>
systeminformation.networkInterfaces(); // $ExpectType Promise<NetInterfacesData[]>
systeminformation.networkInterfaceDefault(); // $ExpectType Promise<string>
systeminformation.networkStats(); // $ExpectType Promise<NetStatsData>
systeminformation.networkConnections(); // $ExpectType Promise<NetConnectionsData[]>
systeminformation.inetChecksite('http://www.google.at'); // $ExpectType Promise<NetChecksiteData>
systeminformation.currentLoad(); // $ExpectType Promise<CurrentLoadData>
systeminformation.fullLoad(); // $ExpectType Promise<number>
systeminformation.processes(); // $ExpectType Promise<ProcessesData>
// systeminformation.processLoad(); // $ExpectType Promise<number>
// systeminformation.services(); // $ExpectType Promise<number>
systeminformation.dockerContainers(); // $ExpectType Promise<DockerContainerData[]>
// systeminformation.dockerContainerStats(); // $ExpectType Promise<number>
// systeminformation.dockerContainerProcesses(); // $ExpectType Promise<number>
systeminformation.dockerAll(); // $ExpectType Promise<any>
systeminformation.getStaticData(); // $ExpectType Promise<StaticData>
systeminformation.getDynamicData(); // $ExpectType Promise<any>
systeminformation.getAllData(); // $ExpectType Promise<any>
