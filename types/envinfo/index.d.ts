export interface Config {
    System?: string[] | undefined;
    Binaries?: string[] | undefined;
    Managers?: string[] | undefined;
    Utilities?: string[] | undefined;
    Servers?: string[] | undefined;
    Virtualization?: string[] | undefined;
    SDKs?: string[] | undefined;
    IDEs?: string[] | undefined;
    Languages?: string[] | undefined;
    Databases?: string[] | undefined;
    Browsers?: string[] | undefined;
    npmPackages?: string | string[] | undefined;
    npmGlobalPackages?: string | string[] | undefined;
}

export interface RunConfig extends Config {
    preset?: string | undefined;
}

export interface Options {
    json?: boolean | undefined;
    markdown?: boolean | undefined;
    console?: boolean | undefined;
    title?: string | undefined;
    fullTree?: boolean | undefined;
    duplicates?: boolean | undefined;
    showNotFound?: boolean | undefined;
}

export interface CliOptions extends Options, Config {
    all?: boolean | undefined;
    raw?: boolean | undefined;
    helper?: string | undefined;
    preset?: string | undefined;
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
