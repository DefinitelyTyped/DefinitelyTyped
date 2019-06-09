// Definitions by: MJAbadilla <https://github.com/mjmaix> 
type IosDeviceType =
  | 'i386'
  | 'x86_64'
  | 'iPhone1,1'
  | 'iPhone1,2'
  | 'iPhone2,1'
  | 'iPhone3,1'
  | 'iPhone3,2'
  | 'iPhone3,3'
  | 'iPhone4,1'
  | 'iPhone5,1'
  | 'iPhone5,2'
  | 'iPhone5,3'
  | 'iPhone5,4'
  | 'iPhone6,1'
  | 'iPhone6,2'
  | 'iPhone7,1'
  | 'iPhone7,2'
  | 'iPhone8,1'
  | 'iPhone8,2'
  | 'iPhone8,3'
  | 'iPhone8,4'
  | 'iPhone9,1'
  | 'iPhone9,2'
  | 'iPhone9,3'
  | 'iPhone9,4'
  | 'iPhone10,1'
  | 'iPhone10,2'
  | 'iPhone10,4'
  | 'iPhone10,5'
  | 'iPhone10,3'
  | 'iPhone10,6'
  | 'iPhone11,2'
  | 'iPhone11,4'
  | 'iPhone11,6'
  | 'iPhone11,8'
  | 'iPod1,1'
  | 'iPod2,1'
  | 'iPod3,1'
  | 'iPod4,1'
  | 'iPod5,1'
  | 'iPod7,1'
  | 'iPad1,1'
  | 'iPad1,2'
  | 'iPad2,1'
  | 'iPad2,2'
  | 'iPad2,3'
  | 'iPad2,4'
  | 'iPad3,1'
  | 'iPad3,2'
  | 'iPad3,3'
  | 'iPad2,5'
  | 'iPad2,6'
  | 'iPad2,7'
  | 'iPad3,4'
  | 'iPad3,5'
  | 'iPad3,6'
  | 'iPad4,1'
  | 'iPad4,2'
  | 'iPad4,4'
  | 'iPad4,5'
  | 'iPad4,6'
  | 'iPad4,7'
  | 'iPad4,8'
  | 'iPad4,9'
  | 'iPad5,1'
  | 'iPad5,2'
  | 'iPad5,3'
  | 'iPad5,4'
  | 'iPad6,3'
  | 'iPad6,4'
  | 'iPad6,7'
  | 'iPad6,8'
  | 'iPad6,11'
  | 'iPad6,12'
  | 'iPad7,1'
  | 'iPad7,2'
  | 'iPad7,3'
  | 'iPad7,4'
  | 'Watch1,1'
  | 'Watch1,2'
  | 'Watch2,6'
  | 'Watch2,7'
  | 'Watch2,3'
  | 'Watch2,4';
  
export const IOS_DEVICE_TYPES: { [key in IosDeviceType]: string };

export const getIphoneTypeId: () => boolean;

export const getIphoneType: () => boolean;

export const isXSeriesIphone: () => boolean;

export const isPlusSizeIphone: () => boolean;

export const isIphoneX: () => boolean;

export const isIphoneXS: () => boolean;

export const isIphoneXR: () => boolean;

export const isIphoneXSMax: () => boolean;
