// Type definitions for envinfo 7.8
// Project: https://github.com/tabrindle/envinfo#readme
// Definitions by: nashaofu <https://github.com/nashaofu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Config {
    System?: string[];
    Binaries?: string[];
    Managers?: string[];
    Utilities?: string[];
    Servers?: string[];
    Virtualization?: string[];
    SDKs?: string[];
    IDEs?: string[];
    Languages?: string[];
    Databases?: string[];
    Browsers?: string[];
    npmPackages?: string | string[];
    npmGlobalPackages?: string | string[];
}

export interface RunConfig extends Config {
    preset?: string;
}

export interface Options {
    json?: boolean;
    markdown?: boolean;
    console?: boolean;
    title?: string;
    fullTree?: boolean;
    duplicates?: boolean;
    showNotFound?: boolean;
}

export interface CliOptions extends Options, Config {
    all?: boolean;
    raw?: boolean;
    helper?: string;
    preset?: string;
}

export type HelperNames =
    | "getNodeInfo"
    | "getnpmInfo"
    | "getWatchmanInfo"
    | "getYarnInfo"
    | "getBraveBrowserInfo"
    | "getChromeInfo"
    | "getChromeCanaryInfo"
    | "getEdgeInfo"
    | "getFirefoxInfo"
    | "getFirefoxDeveloperEditionInfo"
    | "getFirefoxNightlyInfo"
    | "getInternetExplorerInfo"
    | "getSafariTechnologyPreviewInfo"
    | "getSafariInfo"
    | "getMongoDBInfo"
    | "getMySQLInfo"
    | "getPostgreSQLInfo"
    | "getSQLiteInfo"
    | "getAndroidStudioInfo"
    | "getAtomInfo"
    | "getEmacsInfo"
    | "getIntelliJInfo"
    | "getNanoInfo"
    | "getNvimInfo"
    | "getPhpStormInfo"
    | "getSublimeTextInfo"
    | "getVimInfo"
    | "getVSCodeInfo"
    | "getVisualStudioInfo"
    | "getWebStormInfo"
    | "getXcodeInfo"
    | "getBashInfo"
    | "getElixirInfo"
    | "getErlangInfo"
    | "getGoInfo"
    | "getJavaInfo"
    | "getPerlInfo"
    | "getPHPInfo"
    | "getProtocInfo"
    | "getPythonInfo"
    | "getPython3Info"
    | "getRInfo"
    | "getRubyInfo"
    | "getRustInfo"
    | "getScalaInfo"
    | "getAptInfo"
    | "getCargoInfo"
    | "getCocoaPodsInfo"
    | "getComposerInfo"
    | "getGradleInfo"
    | "getHomebrewInfo"
    | "getMavenInfo"
    | "getpip2Info"
    | "getpip3Info"
    | "getRubyGemsInfo"
    | "getYumInfo"
    | "getYarnWorkspacesInfo"
    | "getLernaInfo"
    | "getAndroidSDKInfo"
    | "getiOSSDKInfo"
    | "getWindowsSDKInfo"
    | "getApacheInfo"
    | "getNginxInfo"
    | "getContainerInfo"
    | "getCPUInfo"
    | "getMemoryInfo"
    | "getOSInfo"
    | "getShellInfo"
    | "getGLibcInfo"
    | "getBazelInfo"
    | "getCMakeInfo"
    | "getGCCInfo"
    | "getClangInfo"
    | "getGitInfo"
    | "getMakeInfo"
    | "getMercurialInfo"
    | "getSubversionInfo"
    | "getFFmpegInfo"
    | "getDockerInfo"
    | "getParallelsInfo"
    | "getVirtualBoxInfo"
    | "getVMwareFusionInfo";

export type Helpers = Record<HelperNames, () => Promise<string>>;

export function cli(options: CliOptions): Promise<string>;

export const helpers: Helpers;

export function main(config?: Config, options?: Options): Promise<string>;

export function run(config: RunConfig, options?: Options): Promise<string>;
