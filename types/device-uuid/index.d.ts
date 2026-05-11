export as namespace DeviceUUID;

export type Headers = Record<string, string>;

export interface CommonOptions {
    isAuthoritative: boolean;
    silkAccelerated: boolean;
    isKindleFire: boolean;
    isDesktop: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isWindows: boolean;
    isLinux: boolean;
    isLinux64: boolean;
    isChromeOS: boolean;
    isMac: boolean;
    isiPad: boolean;
    isiPhone: boolean;
    isiPod: boolean;
    isAndroid: boolean;
    isSamsung: boolean;
    isSmartTV: boolean;
    isRaspberry: boolean;
    isBlackberry: boolean;
    isTouchScreen: boolean;
    isOpera: boolean;
    isIE: boolean;
    isEdge: boolean;
    isIECompatibilityMode: boolean;
    isSafari: boolean;
    isFirefox: boolean;
    isWebkit: boolean;
    isChrome: boolean;
    isKonqueror: boolean;
    isOmniWeb: boolean;
    isSeaMonkey: boolean;
    isFlock: boolean;
    isAmaya: boolean;
    isPhantomJS: boolean;
    isEpiphany: boolean;
}

export interface Options extends CommonOptions {
    version: boolean;
    language: boolean;
    platform: boolean;
    os: boolean;
    pixelDepth: boolean;
    colorDepth: boolean;
    resolution: boolean;
    source: boolean;
    cpuCores: boolean;
}

export interface Agent extends CommonOptions {
    isBada: boolean;
    isBot: boolean;
    isCurl: boolean;
    isAndroidTablet: boolean;
    isWinJs: boolean;
    isSilk: boolean;
    isCaptive: boolean;
    isUC: boolean;
    colorDepth: number;
    pixelDepth: number;
    resolution: [number, number];
    cpuCores: number;
    language: string;
    browser: string;
    version: string;
    os: string;
    platform: string;
    geoIp: Headers;
    source: string;

    hashInt(s: string): string;
    hashMD5(s: string): string;
}

export class DeviceUUID {
    options: Options;
    version: string;
    DefaultAgent: Agent;
    Agent: Agent;

    getBrowser(s: string): string;
    getBrowserVersion(s: string): string | undefined;
    getOS(s: string): string;
    getPlatform(s: string): string;
    get(customData?: Record<string, string | boolean>): string;

    testCompatibilityMode(): void;
    testSilk(): false | "Silk";
    testKindleFire(): string | false;
    testCaptiveNetwork(): false | "CaptiveNetwork";
    testMobile(): void;
    testTablet(): void;
    testNginxGeoIP(headers: Headers): void;
    testBot(): void;
    testSmartTV(): void;
    testAndroidTablet(): void;
    testTouchSupport(): void;

    /** [sic] */
    getLaguage(): void;
    getColorDepth(): void;
    getScreenResolution(): void;
    getPixelDepth(): void;
    getCPU(): void;

    reset(): DeviceUUID;
    parse(source?: string): Agent;
}
