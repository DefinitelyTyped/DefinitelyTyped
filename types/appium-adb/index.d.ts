// Type definitions for appium-adb 8.16
// Project: https://github.com/appium/appium-adb
// Definitions by: Tiger Oakes <https://github.com/NotWoods>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
    ADB,
    DEFAULT_ADB_PORT,
    getAndroidBinaryPath,
    getSdkRootFromEnv
} from './lib/adb';

export default ADB;
export { ADB, DEFAULT_ADB_PORT, getAndroidBinaryPath, getSdkRootFromEnv };
