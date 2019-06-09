import {
    IOS_DEVICE_TYPES,
    getIphoneType,
    getIphoneTypeId,
    isIphoneX,
    isIphoneXR,
    isIphoneXS,
    isIphoneXSMax,
    isPlusSizeIphone,
    isXSeriesIphone
} from 'react-native-iphone-types-helper';

const iPhoneType = getIphoneType()

const iphoneTypeId = getIphoneTypeId();

const iphoneX = isIphoneX()

const iphoneXR = isIphoneXR()

const iphoneXS = isIphoneXS()

const iphoneXSMax = isIphoneXSMax()

const plusSizeIphone = isPlusSizeIphone()

const xSeriesIphone = isXSeriesIphone()

const DeviceSample: Partial<typeof IOS_DEVICE_TYPES> = { 
    "iPhone8,1": "iPhone 6s" 
}
