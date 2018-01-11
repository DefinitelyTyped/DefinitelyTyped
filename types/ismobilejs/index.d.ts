// Type definitions for ismobilejs 0.4
// Project: https://github.com/kaimallea/isMobile
// Definitions by: Maksim Karelov <https://github.com/Ty3uK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Apple {
  phone: boolean;
  ipod: boolean;
  tablet: boolean;
  device: boolean;
}

interface Android {
  phone: boolean;
  tablet: boolean;
  device: boolean;
}

interface Amazon {
  phone: boolean;
  tablet: boolean;
  device: boolean;
}

interface Windows {
  phone: boolean;
  tablet: boolean;
  device: boolean;
}

interface Other {
  blackberry_10: boolean;
  blackberry: boolean;
  opera: boolean;
  firefox: boolean;
  chrome: boolean;
  device: boolean;
}

interface IsMobile {
  any: boolean;
  phone: boolean;
  tablet: boolean;
  seven_inch: boolean;

  apple: Apple;
  android: Android;
  amazon: Amazon;
  windows: Windows;
  other: Other;

  (userAgent?: string): IsMobile;
}

declare const isMobile: IsMobile;

export default isMobile;
