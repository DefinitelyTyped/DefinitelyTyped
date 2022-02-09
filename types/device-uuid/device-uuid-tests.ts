import { DeviceUUID, Agent } from 'device-uuid';

/**
 * Example from the README
 */

const du: Agent = new DeviceUUID().parse();
const dua: Array<string | number | boolean> = [
    du.language,
    du.platform,
    du.os,
    du.cpuCores,
    du.isAuthoritative,
    du.silkAccelerated,
    du.isKindleFire,
    du.isDesktop,
    du.isMobile,
    du.isTablet,
    du.isWindows,
    du.isLinux,
    du.isLinux64,
    du.isMac,
    du.isiPad,
    du.isiPhone,
    du.isiPod,
    du.isSmartTV,
    du.pixelDepth,
    du.isTouchScreen,
];
const uuid: string = du.hashMD5(dua.join(':'));
