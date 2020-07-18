// Type definitions for rn-app-upgrade 1.0
// Project: https://github.com/songxiaoliang/react-native-app-upgrade#readme
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EmitterSubscription } from 'react-native';

/**
 * IOS检测更新 iOS only
 * @param appId   appstore的应用id
 * @param version  本地版本
 */
export function checkUpdate(appId: string, version: string): Promise<{
    code: number;
    msg: string;
    version?: undefined;
}>;
/**
 * 根据appid打开苹果商店 iOS only
 * @param appid
 */
export function openAPPStore(appid: string): void;
/**
 * 升级 android平台 android only
 * @param apkUrl   android传入apk地址
 */
export function upgrade(apkUrl: string): void;
/**
 * android apk下载回调 android only
 * @param callBack
 */
export function addDownListener(callBack: (progress: number) => void): EmitterSubscription;
