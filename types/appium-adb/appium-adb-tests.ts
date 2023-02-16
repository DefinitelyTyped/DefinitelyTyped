import ADB, { VerboseDevice } from 'appium-adb';
import Logcat, { Log } from 'appium-adb/lib/logcat';

const adb = new ADB({ adbExecTimeout: 60000 });
const logcat = new Logcat({
    adb: adb.executable,
    debug: false,
    debugTrace: false,
});

function identity<T>(arg: T): T {
    return arg;
}

const apiLevelStr: Promise<string> = adb.getDeviceProperty('ro.build.version.sdk');
const apiLevel: Promise<number> = adb.getApiLevel();
const platVersion: Promise<string> = adb.getPlatformVersion();
const sysLang: Promise<string> = adb.getDeviceSysLanguage();
const lang: Promise<string> = adb.getDeviceProductLanguage();
const sysCountry: Promise<string> = adb.getDeviceSysCountry();
const country: Promise<string> = adb.getDeviceProductCountry();
const locale: Promise<string> = adb.getDeviceSysLocale();

const imeAvail: Promise<string[]> = adb.availableIMEs();
const imeEnable: Promise<string[]> = adb.enabledIMEs();
const imeDefault: Promise<string | null> = adb.defaultIME();
adb.disableIME('com.android.inputmethod.latin/.LatinIME');
adb.enableIME('com.android.inputmethod.latin/.LatinIME');

const providers: Promise<string[]> = adb.getLocationProviders();
adb.toggleGPSLocationProvider(true);

adb.setDeviceProperty('persist.sys.locale', 'en-US');

adb.keyevent('29');
adb.keyevent(28);
adb.inputText('some text with spaces');
adb.clearTextField(4);

adb.back();
adb.goToHome();
adb.lock();

const keyboard: Promise<{ isKeyboardShown: boolean; canCloseKeyboard: boolean }> = adb.isSoftKeyboardPresent();
adb.setAnimationState(true);
const anim: Promise<boolean> = adb.isAnimationOn();

const airplane: Promise<boolean> = adb.isAirplaneModeOn();
adb.setAirplaneMode(true);
adb.broadcastAirplaneMode(true);
const wifi: Promise<boolean> = adb.isWifiOn();
adb.setWifiState(true);
adb.setWifiState(false, true);
const data: Promise<boolean> = adb.isDataOn();
adb.setDataState(false);
adb.setDataState(true, true);
adb.setWifiAndData({ wifi: false, data: true }, true);

adb.setDeviceSysLocaleViaSettingApp('en', 'US');
adb.setDeviceSysLocaleViaSettingApp('zh', 'CN', 'Hans');

adb.setGeoLocation({
    longitude: '50.5',
    latitude: '50.1',
});
const exists: Promise<boolean> = adb.processExists('com.example.android.contactmanager');

const sysPort = 12345;
const devicePort = 54321;
adb.forwardPort(sysPort, devicePort);
adb.forwardAbstractPort(sysPort, devicePort);
adb.removePortForward(sysPort);
adb.reversePort(devicePort, sysPort);
adb.removePortReverse(devicePort);

const pinged: Promise<boolean> = adb.ping();
adb.restart();
adb.stopLogcat();
const logs: Log[] = adb.getLogcatLogs();
let name: Promise<string> = adb.getNameByPid('1627');
name = adb.getNameByPid(115);

const pids: Promise<number[]> = adb.getPIDsByName('com.example.android.contactmanager');
adb.killProcessesByName('com.example.android.contactmanager');
adb.killProcessByPID(5078);
adb.broadcastProcessEnd('intent', 'processName');
adb.broadcast('intent');

adb.androidCoverage('instrumentClass', 'waitPkg', 'waitActivity');

let model: Promise<string> = adb.getModel();
model = adb.getManufacturer();
const screen: Promise<string | null> = adb.getScreenSize();
const density: Promise<number | null> = adb.getScreenDensity();

adb.grantPermission('io.appium.android.apis', 'android.permission.READ_EXTERNAL_STORAGE');
adb.revokePermission('io.appium.android.apis', 'android.permission.READ_EXTERNAL_STORAGE');
adb.getReqPermissions('io.appium.android').then(identity);
adb.getGrantedPermissions('io.appium.android').then(identity);
adb.getDeniedPermissions('io.appium.android').then(identity);
const match: RegExpExecArray | null = adb.isValidClass('some.package/some.package.Activity');
const path: string = adb.getAdbPath();

adb.setHttpProxy('http://localhost', 4723);
adb.deleteHttpProxy();
let setting: Promise<string> = adb.setSetting('namespace', 'setting', 'value');
setting = adb.getSetting('namespace', 'setting');
const tz: Promise<string> = adb.getTimeZone();

adb.setHiddenApiPolicy(1);
adb.setDefaultHiddenApiPolicy();

adb.powerAC(adb.POWER_AC_STATES.POWER_AC_ON);

let devices = adb.getConnectedDevices();
const verboseDevices: Promise<VerboseDevice[]> = adb.getConnectedDevices({ verbose: true });
devices = verboseDevices;
adb.waitForEmulatorReady(60000);

const copy: ADB = adb.clone();
