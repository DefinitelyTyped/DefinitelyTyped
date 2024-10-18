import aabUtilsMethods, { ApkCreationOptions } from "./aab-utils";
import methods, { LogcatOpts, ResolveActivityOptions, ScreenrecordOptions, SetPropOptions } from "./adb-commands";
import emuMethods, { EmuInfo, EmuVersionInfo, ExecTelnetOptions } from "./adb-emu-commands";
import manifestMethods, { APKInfo } from "./android-manifest";
import apkSigningMethods, { CertCheckOptions, KeystoreHash } from "./apk-signing";
import apkUtilsMethods, {
    AppInfo,
    CachingOptions,
    InstallOptions,
    InstallOrUpgradeOptions,
    InstallOrUpgradeResult,
    PackageActivityInfo,
    StartAppOptions,
    StartUriOptions,
    UninstallOptions,
} from "./apk-utils";
import apksUtilsMethods, { InstallApksOptions } from "./apks-utils";
import keyboardCommands, { KeyboardState } from "./keyboard-commands";
import lockManagementCommands from "./lockmgmt";
import settingsClientCommands, {
    Location,
    SettingsAppStartupOptions,
    SmsItem,
    SmsListOptions,
    StatusBarNotification,
} from "./settings-client-commands";
import systemCallMethods, {
    AdbExecOptions,
    AvdLaunchOptions,
    BinaryName,
    BinaryVersion,
    BridgeVersion,
    ConnectedDevicesOptions,
    Device,
    ExecResult,
    RootResult,
    ShellExecOptions,
    VerboseDevice,
    Version,
} from "./system-calls";

export type AdbMethods =
    & typeof methods
    & typeof manifestMethods
    & typeof systemCallMethods
    & typeof apkSigningMethods
    & typeof apkUtilsMethods
    & typeof apksUtilsMethods
    & typeof aabUtilsMethods
    & typeof emuMethods
    & typeof settingsClientCommands
    & typeof lockManagementCommands
    & typeof keyboardCommands;

declare const adbMethods: AdbMethods;
export default adbMethods;

export { getAndroidBinaryPath } from "./system-calls";

export {
    AdbExecOptions,
    ApkCreationOptions,
    APKInfo,
    AppInfo,
    AvdLaunchOptions,
    BinaryName,
    BinaryVersion,
    BridgeVersion,
    CachingOptions,
    CertCheckOptions,
    ConnectedDevicesOptions,
    Device,
    EmuInfo,
    EmuVersionInfo,
    ExecResult,
    ExecTelnetOptions,
    InstallApksOptions,
    InstallOptions,
    InstallOrUpgradeOptions,
    InstallOrUpgradeResult,
    KeyboardState,
    KeystoreHash,
    Location,
    LogcatOpts,
    PackageActivityInfo,
    ResolveActivityOptions,
    RootResult,
    ScreenrecordOptions,
    SetPropOptions,
    SettingsAppStartupOptions,
    ShellExecOptions,
    SmsItem,
    SmsListOptions,
    StartAppOptions,
    StartUriOptions,
    StatusBarNotification,
    UninstallOptions,
    VerboseDevice,
    Version,
};
