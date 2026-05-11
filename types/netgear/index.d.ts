declare namespace NetgearRouter {
    enum LoginMethod {
        Heritage = 1,
        Modern = 2,
    }

    interface Options {
        /** If not supplied, defaults to `admin` */
        username?: string | undefined;
        /** If not supplied, defaults to `password` */
        password?: string | undefined;
        /** Autodiscovery will be performed when left out */
        host?: string | undefined;
        /** SOAP port. Autodiscovery will be performed when left out */
        port?: number | undefined;
        /** TLS/SSL (HTTPS) is only supported on certain router types */
        tls?: boolean | undefined;

        /** @deprecated */
        method?: LoginMethod | undefined;
    }

    type Band = "2.4G" | "5G" | "5G1";
    type Channel = "Auto" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13";

    interface Log {
        string: string;
        event: string;
        info: string;
        ts: number;
    }

    interface Settings {
        host: string;
        port: number;
        Firmware: string;
        RegionTag: string;
        Region: string;
        Model: string;
        InternetConnectionStatus: string;
        ParentalControlSupported: string;
        SOAPVersion: string;
        ReadyShareSupportedLevel: string;
        XCloudSupported: string;
        LoginMethod: string;
    }

    interface Device {
        IP: string;
        Name: string;
        NameUserSet: string;
        MAC: string;
        ConnectionType: string;
        SSID: string;
        Linkspeed: number;
        SignalStrength: number;
        AllowOrBlock: string;
        Schedule: boolean;
        DeviceType: string;
        DeviceTypeV2: string;
        DeviceTypeUserSet: boolean;
        DeviceTypeName: string;
        DeviceTypeNameV2: string;
        DeviceModel: string;
        DeviceModelUserSet: boolean;
        Upload: string;
        Download: string;
        QosPriority: string;
        Grouping: string;
        SchedulePeriod: number;
        ConnAPMAC: string;
    }

    interface Info {
        SerialNumber: string;
        ModelName: string;
        Description: string;
        Firmwareversion: string;
        SmartAgentversion: string;
        FirewallVersion: string;
        VPNVersion: undefined;
        OthersoftwareVersion: string;
        Hardwareversion: string;
        Otherhardwareversion: string;
        FirstUseDate: string;
        DeviceName: string;
        FirmwareDLmethod: string;
        FirmwareLastUpdate: string;
        FirmwareLastChecked: string;
        DeviceMode: string;
        DeviceModeCapability: string;
        DeviceNameUserSet: string;
    }

    interface TrafficOptions {
        newControlOption: string;
        newNewMonthlyLimit: number;
        restartHour: number;
        restartMinute: number;
        restartDay: number;
    }
    interface TrafficStats {
        newTodayUpload: number;
        newTodayDownload: number;
        newMonthUpload: number;
        newMonthDownload: number;
    }

    interface SystemInfo {
        NewCPUUtilization: number;
        NewPhysicalMemory: number;
        NewMemoryUtilization: number;
        NewPhysicalFlash: number;
        NewAvailableFlash: number;
    }

    interface LANConfig {
        NewLANSubnet: string;
        NewWANLAN_Subnet_Match: string;
        NewLANMACAddress: string;
        NewLANIP: string;
        NewDHCPEnabled: string;
    }

    interface WANConfig {
        NewEnable: string;
        NewConnectionType: string;
        NewExternalIPAddress: string;
        NewSubnetMask: string;
        NewAddressingType: string;
        NewDefaultGateway: string;
        NewMACAddress: string;
        NewMACAddressOverride: string;
        NewMaxMTUSize: string;
        NewDNSEnabled: string;
        NewDNSServers: string;
    }
    interface DeviceConfig {
        BlankState: string;
        NewBlockSiteEnable: string;
        NewBlockSiteName: string;
        NewTimeZone: string;
        NewDaylightSaving: string;
    }
    interface SupportedFeatures {
        DynamicQoS: string;
        OpenDNSParentalControl: string;
        AccessControl: string;
        SpeedTest: string;
        GuestNetworkSchedule: string;
        TCAcceptance: string;
        DeviceTypeIdentification: string;
        AttachedDevice: string;
        NameNTGRDevice: string;
        SmartConnect: string;
        MaxMonthlyTrafficLimitation: string;
    }

    interface SpeedTest {
        uplinkBandwidth: number;
        downlinkBandwidth: number;
        averagePing: number;
    }
}

declare class NetgearRouter {
    /** If you don't provide options, you must pass them to `login()` instead */
    constructor(options?: NetgearRouter.Options);

    /** If you don't provide options, you must pass them to the `constructor()` instead */
    login(options?: NetgearRouter.Options): Promise<void>;

    /**
     * Discovers a netgear router in the network. Also sets the discovered ip address and soap port for this session.
     * @returns The discovered router info, including host ip address and soap port.
     */
    discover(): Promise<NetgearRouter.Settings>;

    getSystemInfo(): Promise<NetgearRouter.SystemInfo>;
    getLANConfig(): Promise<NetgearRouter.LANConfig>;
    getWANConfig(): Promise<NetgearRouter.WANConfig>;
    getSysUpTime(): Promise<string>;
    getDeviceConfig(): Promise<NetgearRouter.DeviceConfig>;
    /** for 2.4G */
    getChannelInfo(): Promise<NetgearRouter.Channel>;
    get5GChannelInfo(): Promise<NetgearRouter.Channel>;
    get5GChannelInfo(): Promise<NetgearRouter.Channel>;
    get5G1ChannelInfo(): Promise<NetgearRouter.Channel>;
    getSmartConnectEnabled(): Promise<boolean>;
    setSmartConnectEnabled(enabled: boolean): Promise<void>;
    getCurrentDeviceBandwidth(): Promise<string>;
    getCurrentBandwidthByMAC(
        mac: string,
    ): Promise<{
        currentDeviceUpBandwidth: string;
        currentDeviceDownBandwidth: string;
    }>;

    getNTPServers(): Promise<{
        NTPServer1: string;
        NTPServer2: string;
        NTPServer3: string;
        NTPServer4: string;
    }>;
    getTimeZoneInfo(): Promise<{
        TimeZone: string;
        DaylightSaving: string;
        IndexValue: string;
    }>;

    /**
     * Get router information without need for credentials.
     */
    getCurrentSetting(host?: string, timeout?: number): Promise<NetgearRouter.Settings>;
    getParentalControlEnableStatus(): Promise<boolean>;
    getQoSEnableStatus(): Promise<boolean>;
    getBlockDeviceEnableStatus(): Promise<boolean>;
    getSupportFeatureListXML(): Promise<NetgearRouter.SupportedFeatures>;
    getTrafficMeterEnabled(): Promise<boolean>;
    getTrafficMeterOptions(): Promise<NetgearRouter.TrafficOptions>;
    getTrafficMeter(): Promise<NetgearRouter.TrafficStats>;
    checkNewFirmware(): Promise<{
        currentVersion: string;
        newVersion: string;
        releaseNote: string;
    }>;
    getGuestWifiEnabled(): Promise<boolean>;
    get5GGuestWifiEnabled(): Promise<boolean>;
    get5GGuestWifi2Enabled(): Promise<boolean>;
    setGuestWifi(enabled: boolean): Promise<void>;
    set5GGuestWifi(enabled: boolean): Promise<void>;
    set5GGuestWifi2(enabled: boolean): Promise<void>;
    enableTrafficMeter(enabled: boolean): Promise<void>;
    enableParentalControl(enabled: boolean): Promise<void>;
    setNetgearDeviceName(deviceName: string): Promise<void>;
    updateNewFirmware(): Promise<void>;
    /** takes 1 minute to resolve! */
    speedTest(): Promise<NetgearRouter.SpeedTest>;
    reboot(): Promise<void>;
    wol(macAddress: string, secureOnPassword: string): Promise<void>;
    setQoSEnableStatus(enabled: boolean): Promise<void>;
    /**
     * sets Qos bandwidth options
     * @param maxUplinkBandwidth - maximum uplink bandwidth (Mb/s).
     * @param maxDownlinkBandwidth - maximum downlink bandwidth (Mb/s).
     */
    setBandwidthControlOptions(maxUplinkBandwidth: number, maxDownlinkBandwidth: number): Promise<void>;
    getBandwidthControlOptions(): Promise<{
        newUplinkBandwidth: number;
        newDownlinkBandwidth: number;
        enabled: number;
    }>;
    logout(): Promise<void>;

    getWifiChannels(band?: NetgearRouter.Band): Promise<NetgearRouter.Channel[]>;
    setWifiChannel(channel: NetgearRouter.Channel, mode: NetgearRouter.Band): Promise<true>;

    setBlockDeviceEnable(enabled: boolean): Promise<true>;
    setBlockDevice(macAddress: string, action: "Block" | "Allow"): Promise<true>;
    getInfo(): Promise<NetgearRouter.Info>;

    getAttachedDevices(): Promise<NetgearRouter.Device[]>;
    getPortMappingInfo(): Promise<{
        NewPortMappingNumberOfEntries: string;
        NewPortMappingInfo: undefined;
    }>;

    getSystemLogs(returnAsJson: true): Promise<NetgearRouter.Log[]>;
    getSystemLogs(returnAsJson?: false): Promise<string[]>;

    readonly timeout: number;
    readonly loggedIn: boolean;
    readonly password: string;
    /** @deprecated */
    readonly lastResponse: undefined | string;
    readonly loginMethod: NetgearRouter.LoginMethod;
    readonly cookie: string | undefined;
}

export = NetgearRouter;
