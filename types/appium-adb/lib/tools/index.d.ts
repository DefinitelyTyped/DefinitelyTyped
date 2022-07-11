import methods, { LogcatOpts, SetPropOptions, ScreenrecordOptions } from './adb-commands';
import manifestMethods, { APKInfo } from './android-manifest';
import systemCallMethods, {
    ConnectedDevicesOptions,
    Device,
    VerboseDevice,
    AdbExecOptions,
    ExecResult,
    ShellExecOptions,
    AvdLaunchOptions,
    BinaryVersion,
    BridgeVersion,
    Version,
    RootResult,
    BinaryName,
} from './system-calls';
import apkSigningMethods, { CertCheckOptions, KeystoreHash } from './apk-signing';
import apkUtilsMethods, {
    StartAppOptions,
    StartUriOptions,
    PackageActivityInfo,
    UninstallOptions,
    CachingOptions,
    InstallOptions,
    InstallOrUpgradeOptions,
    InstallOrUpgradeResult,
    AppInfo,
} from './apk-utils';
import apksUtilsMethods, { InstallApksOptions } from './apks-utils';
import aabUtilsMethods, { ApkCreationOptions } from './aab-utils';
import emuMethods, { EmuInfo, ExecTelnetOptions, EmuVersionInfo } from './adb-emu-commands';
import settingsClientCommands, {
    SettingsAppStartupOptions,
    Location,
    SmsListOptions,
    StatusBarNotification,
    SmsItem,
} from './settings-client-commands';
import lockManagementCommands from './lockmgmt';
import keyboardCommands, { KeyboardState } from './keyboard-commands';

export type AdbMethods = typeof methods &
    typeof manifestMethods &
    typeof systemCallMethods &
    typeof apkSigningMethods &
    typeof apkUtilsMethods &
    typeof apksUtilsMethods &
    typeof aabUtilsMethods &
    typeof emuMethods &
    typeof settingsClientCommands &
    typeof lockManagementCommands &
    typeof keyboardCommands;

declare const adbMethods: AdbMethods;
export default adbMethods;

export { getAndroidBinaryPath } from './system-calls';

export {
    LogcatOpts,
    SetPropOptions,
    ScreenrecordOptions,
    APKInfo,
    CertCheckOptions,
    KeystoreHash,
    ConnectedDevicesOptions,
    Device,
    VerboseDevice,
    AdbExecOptions,
    ExecResult,
    ShellExecOptions,
    AvdLaunchOptions,
    BinaryVersion,
    BridgeVersion,
    Version,
    RootResult,
    BinaryName,
    StartAppOptions,
    StartUriOptions,
    PackageActivityInfo,
    UninstallOptions,
    CachingOptions,
    InstallOptions,
    InstallOrUpgradeOptions,
    InstallOrUpgradeResult,
    AppInfo,
    InstallApksOptions,
    ApkCreationOptions,
    EmuInfo,
    ExecTelnetOptions,
    EmuVersionInfo,
    SettingsAppStartupOptions,
    Location,
    SmsListOptions,
    StatusBarNotification,
    SmsItem,
    KeyboardState,
};
